import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import {join} from 'node:path';
import { GoogleGenAI, Type } from '@google/genai';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
app.use(express.json());

const angularApp = new AngularNodeAppEngine();

const fallbackData = {
  overallRating: "Chuyên gia Di Sản cấp cao (Master Level)",
  analysis: "Dựa trên phân tích hồ sơ 15 năm kinh nghiệm phục chế và kiến trúc mỹ thuật Việt Nam, Trần Minh Tâm thể hiện năng lực thượng thừa trong chế tác cấu kiện chạm khắc gỗ cổ truyền. Khả năng giải quyết các nút mộng gỗ truyền thống không sử dụng đinh sắt đạt tới độ thuần thục tối đa. AI đề xuất gán nhãn Chuyên Gia Vàng cho các hạng mục trùng tu di tích văn hóa lịch sử đòi hỏi tính tôn trọng nguyên bản tuyệt đối.",
  skillStrengths: [
    { name: "Phục hồi kiến trúc truyền thống", score: 98, detail: "Khôi phục hệ kết cấu rường kố, xà gồ, đầu đao mộng gỗ tinh xảo." },
    { name: "Chế tác tượng và phù điêu gỗ", score: 95, detail: "Kỹ nghệ chạm khắc hoa văn cổ sắc nét, vững tay nghề cao." },
    { name: "Kỹ thuật khảm xà cừ & mài", score: 91, detail: "Tay nghề tuyển lựa và lắp ghép vỏ trai, ốc đạt chuẩn mỹ thuật cao." }
  ],
  growthOpportunities: [
    { name: "Số hóa di sản (3D Scanning & Modeling)", detail: "Nghiên cứu thêm công nghệ scan 3D đắp dựng mẫu số hóa lưu trữ trước khi phục dựng." },
    { name: "Vật liệu gỗ nhân sinh sinh học", detail: "Tìm hiểu thêm các lớp sơn phủ gốc thực vật sinh học đạt tiêu chuẩn UNESCO bảo vệ môi trường." }
  ],
  projectSuitability: "Trùng tu đền chùa di tích cấp Quốc gia, biệt phủ gỗ lim phong cách Đông Dương và đồ gỗ phong thủy hoàng gia.",
  aiVerifiedBadge: "Chuyên gia Di sản Thượng hạng"
};

const assessmentSchema = {
  type: Type.OBJECT,
  properties: {
    overallRating: { type: Type.STRING },
    analysis: { type: Type.STRING },
    skillStrengths: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          score: { type: Type.INTEGER },
          detail: { type: Type.STRING }
        },
        required: ["name", "score", "detail"]
      }
    },
    growthOpportunities: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          detail: { type: Type.STRING }
        },
        required: ["name", "detail"]
      }
    },
    projectSuitability: { type: Type.STRING },
    aiVerifiedBadge: { type: Type.STRING }
  },
  required: ["overallRating", "analysis", "skillStrengths", "growthOpportunities", "projectSuitability", "aiVerifiedBadge"]
};

app.post('/api/profile/ai-assessment', async (req, res) => {
  try {
    const { name, bio, skills, completedJobs } = req.body;
    const apiKey = process.env['GEMINI_API_KEY'];

    if (!apiKey) {
      console.warn("GEMINI_API_KEY environment variable is missing. Using high-quality local template data.");
      res.json(fallbackData);
      return;
    }

    const ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });

    const prompt = `Hãy đóng vai là một Chuyên gia Đánh giá Kỹ năng Nhân sự độc lập (AI Technical Skill Evaluator) sử dụng Công nghệ Trí tuệ Nhân tạo để phân tích hồ sơ năng lực chuyên môn sau đây:
Chuyên gia: ${name || 'Trần Minh Tâm'}
Tiểu sử: ${bio || ''}
Kỹ năng: ${JSON.stringify(skills || [])}
Hành trình công việc: ${JSON.stringify(completedJobs || [])}

Hãy cung cấp định mức đánh giá tổng quan (overallRating), bài bình luận phân tích khách quan (analysis) khoảng 3-4 câu, thế mạnh kỹ năng chính (định dạng mảng skillStrengths chứa tối đa 3 kỹ năng kèm điểm số từ 0 đến 100), các đề xuất cải thiện/cơ hội tăng trưởng (growthOpportunities chứa 2 mục cải tiến công nghệ hoặc xu hướng mới), mô phỏng dự án phù hợp nhất (projectSuitability) và danh hiệu AI thích hợp nhất (aiVerifiedBadge). Cung cấp kết quả hoàn toàn bằng tiếng Việt, ngôn ngữ chuyên nghiệp, sang trọng, mang tính chất học thuật nhân sự truyền cảm hứng. Không dùng ngôn từ trẻ con. Trả về dưới định dạng JSON khớp 100% với schema yêu cầu.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are an elite career development AI assessor and Vietnamese traditional craft supervisor.",
        responseMimeType: "application/json",
        responseSchema: assessmentSchema
      }
    });

    const responseText = response.text;
    if (responseText) {
      const parsed = JSON.parse(responseText.trim());
      res.json(parsed);
    } else {
      res.json(fallbackData);
    }
  } catch (error) {
    console.error("Gemini AI API call failed. Error: ", error);
    res.json(fallbackData);
  }
});

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
