import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../components/navbar';
import { FooterComponent } from '../components/footer';

export interface SkillStrength {
  name: string;
  score: number;
  detail: string;
}

export interface GrowthOpportunity {
  name: string;
  detail: string;
}

export interface AIAssessment {
  overallRating: string;
  analysis: string;
  skillStrengths: SkillStrength[];
  growthOpportunities: GrowthOpportunity[];
  projectSuitability: string;
  aiVerifiedBadge: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink, NavbarComponent, FooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-navbar></app-navbar>
    <main class="flex-grow pt-12 pb-16 bg-background">
      <!-- Hero Section -->
      <section class="max-w-container-max mx-auto px-margin-desktop mb-8">
        <div class="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-surface-container-highest flex flex-col md:flex-row gap-8 items-start relative overflow-hidden">
          <!-- Visual Accent -->
          <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div class="relative">
            <div class="w-40 h-40 rounded-xl overflow-hidden shadow-lg border-4 border-white">
              <img class="w-full h-full object-cover" alt="Trần Minh Tâm" referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnIsfrZtzDrCYztZKQsv_iBw0n5PjBjxvywUwUPX5e6kNo2l1rsIDRmpxqI02tglw7eNUz-YLcZYCbdZMqWH_GLOzrHzPhwzA47svbhbfrrM6mKi6BLNETa9oOO38AJWCFfA8BX8F_5uSmCaJteIEIHND3XFT2vkbefo5zGVznIhaQXf1bM4PWcWYSuB3lUC25d9Q_uqpRXSYnlPeV1MtadHV9PWE8pMdKlm9DmYWEPyzrd7oKBONXewq_hinuEx4IUkdWC-DsKsk"/>
            </div>
            <div class="absolute -bottom-2 -right-2 bg-secondary text-white p-1 rounded-full flex items-center justify-center border-2 border-white">
              <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">verified</span>
            </div>
          </div>
          <div class="flex-grow space-y-4">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 class="font-display-md text-display-md text-primary pt-2">Trần Minh Tâm</h1>
                <p class="font-body-md text-body-md text-on-surface-variant mt-1">Tham gia từ: Tháng 01, 2023</p>
              </div>
              <div class="flex bg-surface-container-low p-1 rounded-lg self-start">
                <button class="px-6 py-2 rounded-md font-label-md text-label-md bg-surface-container-lowest text-primary shadow-sm border border-outline-variant/10 transition-all cursor-pointer">Ứng tuyển</button>
                <button class="px-6 py-2 rounded-md font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer">Tuyển dụng</button>
              </div>
            </div>
            <!-- Stats Bar -->
            <div class="flex flex-wrap gap-8 pt-4 border-t border-surface-container-highest">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">star</span>
                <div>
                  <p class="font-headline-md text-headline-md text-primary leading-tight">4.9/5</p>
                  <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Đánh giá</p>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">task_alt</span>
                <div>
                  <p class="font-headline-md text-headline-md text-primary leading-tight">24</p>
                  <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Dự án</p>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">query_stats</span>
                <div>
                  <p class="font-headline-md text-headline-md text-primary leading-tight">100%</p>
                  <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Hoàn thành</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Content Grid -->
      <div class="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <!-- Left Column: Bio & Skills -->
        <div class="col-span-1 md:col-span-12 lg:col-span-8 space-y-gutter">
          <!-- About Section -->
          <div class="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-surface-container-highest">
            <h2 class="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
              <span class="material-symbols-outlined">person_outline</span>
              Giới thiệu
            </h2>
            <div class="font-body-md text-body-md text-on-surface-variant space-y-4">
              <p>Với hơn 15 năm kinh nghiệm trong lĩnh vực bảo tồn di sản và chế tác gỗ mỹ nghệ, tôi luôn tâm niệm mỗi sản phẩm là một câu chuyện lịch sử. Tôi chuyên sâu về phục hồi kiến trúc cổ truyền Việt Nam, từ đình làng đến nhà rường cổ, kết hợp giữa kỹ thuật truyền thống và tư duy thiết kế hiện đại.</p>
              <p>Tôi luôn đặt tính chính xác và sự tôn trọng nguyên bản lên hàng đầu trong các dự án bảo tồn. Đồng thời, tôi cũng cung cấp dịch vụ tư vấn thiết kế nội thất gỗ cao cấp cho các không gian hiện đại muốn tìm về nét xưa...</p>
              <button class="text-secondary font-label-md text-label-md hover:underline inline-flex items-center gap-1 mt-2 transition-all cursor-pointer">
                Xem thêm
                <span class="material-symbols-outlined text-[18px]">keyboard_arrow_down</span>
              </button>
            </div>
          </div>

          <!-- Skills Section -->
          <div class="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-surface-container-highest">
            <h2 class="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
              <span class="material-symbols-outlined">architecture</span>
              Kỹ năng chuyên môn
            </h2>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-secondary/10 text-secondary rounded-full font-label-md text-label-md border border-secondary/20">Phục hồi kiến trúc</span>
              <span class="px-4 py-2 bg-secondary/10 text-secondary rounded-full font-label-md text-label-md border border-secondary/20">Chế tác gỗ</span>
              <span class="px-4 py-2 bg-secondary/10 text-secondary rounded-full font-label-md text-label-md border border-secondary/20">Tư vấn thiết kế</span>
              <span class="px-4 py-2 bg-secondary/10 text-secondary rounded-full font-label-md text-label-md border border-secondary/20">Bảo tồn di sản</span>
              <span class="px-4 py-2 bg-secondary/10 text-secondary rounded-full font-label-md text-label-md border border-secondary/20">Sơn mài truyền thống</span>
              <span class="px-4 py-2 bg-secondary/10 text-secondary rounded-full font-label-md text-label-md border border-secondary/20">Khảm xà cừ</span>
            </div>
          </div>

          <!-- AI Skill Assessment Section -->
          <div class="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-secondary/20 relative overflow-hidden">
            <!-- Decorative soft background glow -->
            <div class="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl"></div>
            
            <div class="flex flex-wrap items-center justify-between gap-4 mb-6 relative z-10">
              <h2 class="font-headline-md text-headline-md text-primary flex items-center gap-2.5">
                <span class="material-symbols-outlined text-secondary font-bold">psychology</span>
                Đánh giá chuyên môn từ AI
              </h2>
              @if (assessmentData()) {
                <span class="px-3 py-1 bg-secondary/10 text-secondary rounded-full font-label-sm text-label-sm flex items-center gap-1.5 border border-secondary/20">
                  <span class="material-symbols-outlined text-[16px]">verified</span>
                  Đã xác thực bởi AI
                </span>
              }
            </div>

            @if (loadingAssessment()) {
              <!-- Loading State -->
              <div class="py-8 flex flex-col items-center justify-center text-center space-y-4">
                <div class="relative w-16 h-16">
                  <span class="absolute inset-0 rounded-full border-4 border-secondary/20"></span>
                  <span class="absolute inset-0 rounded-full border-4 border-secondary border-t-transparent animate-spin"></span>
                </div>
                <div class="space-y-1">
                  <p class="font-title-md text-primary font-bold">Đang phân tích hồ sơ chuyên sâu...</p>
                  <p class="font-body-sm text-on-surface-variant max-w-md">Mô hình AI đang đối chiếu 15 năm kinh nghiệm mộc mỹ nghệ với hệ thống di sản kiến trúc Việt Nam.</p>
                </div>
              </div>
            } @else if (assessmentData()) {
              <!-- Report State -->
              <div class="space-y-6 relative z-10 animate-fade-in">
                <!-- Top Overview Banner -->
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 bg-surface-container-low rounded-xl border border-surface-container-highest">
                  <div class="md:col-span-4 flex flex-col justify-center items-center text-center md:border-r border-surface-container-highest md:pr-6">
                    <span class="material-symbols-outlined text-4xl text-secondary mb-2" style="font-variation-settings: 'FILL' 1;">military_tech</span>
                    <span class="font-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Đánh giá chung</span>
                    <h3 class="font-headline-md text-headline-md text-primary mt-1 font-extrabold text-center">{{ assessmentData()?.overallRating }}</h3>
                    <div class="mt-2.5 px-3 py-1 bg-secondary text-white rounded-full font-label-xs text-label-xs font-bold">{{ assessmentData()?.aiVerifiedBadge }}</div>
                  </div>
                  <div class="md:col-span-8 flex flex-col justify-center">
                    <h4 class="font-label-md text-primary font-bold mb-1.5 flex items-center gap-1.5">
                      <span class="material-symbols-outlined text-[18px]">analytics</span>
                      Nhận định năng lực:
                    </h4>
                    <p class="font-body-md text-on-surface-variant leading-relaxed">{{ assessmentData()?.analysis }}</p>
                  </div>
                </div>

                <!-- Strengths / Scores Breakdown -->
                <div class="space-y-4">
                  <h4 class="font-label-md text-primary font-bold flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-[18px]">verified_user</span>
                    Chi tiết điểm số & thế mạnh kỹ nghệ:
                  </h4>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    @for (strength of assessmentData()?.skillStrengths; track strength.name) {
                      <div class="p-4 bg-surface-container-lowest rounded-xl border border-surface-container-highest space-y-3 shadow-xs">
                        <div class="flex justify-between items-center">
                          <span class="font-label-md text-primary font-bold truncate pr-3">{{ strength.name }}</span>
                          <span class="font-label-md text-secondary font-bold">{{ strength.score }}%</span>
                        </div>
                        <!-- Progress bar -->
                        <div class="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                          <div class="h-full bg-secondary rounded-full transition-all duration-500" [style.width.%]="strength.score"></div>
                        </div>
                        <p class="font-body-sm text-on-surface-variant leading-normal">{{ strength.detail }}</p>
                      </div>
                    }
                  </div>
                </div>

                <!-- Opportunities & Suitability Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <!-- Match Recommendations -->
                  <div class="p-5 bg-surface-container-lowest border border-surface-container-highest rounded-xl space-y-3">
                    <h4 class="font-label-md text-primary font-bold flex items-center gap-1.5">
                      <span class="material-symbols-outlined text-secondary text-[20px]">assignment_turned_in</span>
                      Dự án phù hợp tối ưu:
                    </h4>
                    <p class="font-body-md text-on-surface-variant leading-relaxed">{{ assessmentData()?.projectSuitability }}</p>
                  </div>

                  <!-- Growth & Learning Plan -->
                  <div class="p-5 bg-surface-container-lowest border border-surface-container-highest rounded-xl space-y-3">
                    <h4 class="font-label-md text-primary font-bold flex items-center gap-1.5">
                      <span class="material-symbols-outlined text-primary text-[20px]">trending_up</span>
                      Đề xuất phát triển chuyên sâu:
                    </h4>
                    <ul class="space-y-2.5">
                      @for (item of assessmentData()?.growthOpportunities; track item.name) {
                        <li class="flex items-start gap-2 text-on-surface-variant font-body-sm">
                          <span class="material-symbols-outlined text-secondary text-[16px] mt-0.5" style="font-variation-settings: 'FILL' 1;">add_circle</span>
                          <div>
                            <span class="font-bold text-primary">{{ item.name }}:</span> {{ item.detail }}
                          </div>
                        </li>
                      }
                    </ul>
                  </div>
                </div>

                <!-- Re-analyze button -->
                <div class="pt-4 flex justify-end border-t border-surface-container-highest">
                  <button 
                    (click)="generateAIEvaluation()"
                    class="px-5 py-2.5 bg-surface-container-high hover:bg-surface-container text-primary rounded-lg font-label-md text-label-md transition-colors cursor-pointer flex items-center gap-1.5 border border-outline-variant/30"
                  >
                    <span class="material-symbols-outlined text-[18px]">sync</span>
                    Cập nhật phân tích AI
                  </button>
                </div>
              </div>
            } @else {
              <!-- Empty State / CTAs -->
              <div class="py-10 px-6 flex flex-col items-center text-center space-y-5 relative z-10">
                <div class="p-4 bg-secondary/10 text-secondary rounded-full">
                  <span class="material-symbols-outlined text-4xl" style="font-variation-settings: 'FILL' 1;">psychology</span>
                </div>
                <div class="space-y-1.5 max-w-xl">
                  <h3 class="font-title-lg text-title-lg text-primary font-bold">Kiểm định hồ sơ bằng AI</h3>
                  <p class="font-body-md text-on-surface-variant font-medium">Tận dụng mô hình AI của Agile Works để chấm điểm năng lực kỹ nghệ, tìm kiếm thế mạnh độc bản và định hướng dự án kiến trúc phù hợp với Trần Minh Tâm.</p>
                </div>
                <button 
                  (click)="generateAIEvaluation()"
                  class="px-8 py-3 bg-secondary hover:bg-secondary-fixed-variant text-white font-label-md text-label-md rounded-xl transition-all shadow-md hover:shadow-secondary/20 flex items-center gap-2 cursor-pointer active:scale-98"
                >
                  <span class="material-symbols-outlined text-[20px]">assistant</span>
                  Bắt đầu phân tích ngay bằng AI
                </button>
              </div>
            }
          </div>

          <!-- Project History -->
          <div class="pt-4">
            <h2 class="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
              <span class="material-symbols-outlined">history</span>
              Công việc đã hoàn thành
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Project Card 1 -->
              <div class="bg-surface-container-lowest rounded-xl border border-surface-container-highest overflow-hidden hover:shadow-md transition-all group cursor-pointer" routerLink="/jobs/1">
                <div class="h-40 bg-surface-container-high relative overflow-hidden">
                  <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Cửa gỗ đình làng" referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQzSMpoKF2QFOTrehGGshIi4XCmwGpHIrQ4tv91PlT0I7qOaHD-ZMbbFgFMcSI3-p7CE38r8WIhlV3W-MlDZKUUR28SJEeZ_0Qd3QQA_wxALeTb2JVsPtB5xb59gkGKLkgBZ1sn3feVRYC1KDv84Oin2MSnec26WgNUmZXCyxJ7uRtHJQFHmMNcPntfHaMCYnNSLkLurSAIXtRHnam6deVticUA7JdrdQ91MaVXhlnevvj_jRbvEPq5LpiBD0r0jWGxgT3Ucgced0"/>
                  <div class="absolute top-4 right-4 bg-surface-container-lowest/90 px-3 py-1 rounded-full font-label-sm text-label-sm text-secondary shadow-sm">Tháng 08, 2023</div>
                </div>
                <div class="p-6 space-y-3">
                  <h3 class="font-title-lg text-title-lg text-primary">Phục hồi cửa gỗ đình làng</h3>
                  <div class="flex items-center gap-1 text-secondary">
                    <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                    <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                    <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                    <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                    <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                    <span class="ml-2 font-label-md text-label-md text-on-surface-variant">5.0</span>
                  </div>
                  <p class="font-body-md text-body-md text-on-surface-variant italic line-clamp-2">"Anh Tâm làm việc cực kỳ chuyên nghiệp và am hiểu sâu sắc về văn hóa tâm linh Việt Nam qua từng nét chạm trổ..."</p>
                </div>
              </div>

              <!-- Project Card 2 -->
              <div class="bg-surface-container-lowest rounded-xl border border-surface-container-highest overflow-hidden hover:shadow-md transition-all group cursor-pointer">
                <div class="h-40 bg-surface-container-high relative overflow-hidden">
                  <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Tủ thờ khảm xà cừ" referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1W81OICVOUUCyT_uKqntLO-jSxYKsCPDO-i1ppZlQ7yuog61Q52mc-ZC2D6P9pZfUbsiAgoV2MBAxGl20TA3IxhPS_qaHcofRujhKiyjZT5Z4JGqpNEk6g6TNv_1b2yc3kAFBrzM74sw8z5N3I1fADDxt-pthlwZnN2U7ohqYfvKi00JTD4ElyZYx1cbkaKYQ5QaBoalpadJOfJzvXJhJOFhbpyw-FLxNKUpN84oDiiv2nMzkbZavoj1OlVb5jCve4KEWu9sFcbQ"/>
                  <div class="absolute top-4 right-4 bg-surface-container-lowest/90 px-3 py-1 rounded-full font-label-sm text-label-sm text-secondary shadow-sm">Tháng 05, 2023</div>
                </div>
                <div class="p-6 space-y-3">
                  <h3 class="font-title-lg text-title-lg text-primary">Chế tác tủ thờ khảm xà cừ</h3>
                  <div class="flex items-center gap-1 text-secondary">
                    <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                    <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                    <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                    <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                    <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star_half</span>
                    <span class="ml-2 font-label-md text-label-md text-on-surface-variant">4.8</span>
                  </div>
                  <p class="font-body-md text-body-md text-on-surface-variant italic line-clamp-2">"Sản phẩm hoàn thiện vượt mong đợi, tinh xảo đến từng chi tiết nhỏ nhất. Giá cả hoàn toàn xứng đáng với chất lượng."</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Sidebar -->
        <div class="col-span-1 md:col-span-12 lg:col-span-4 space-y-6">
          <!-- Hire Card -->
          <div class="bg-primary p-8 rounded-xl shadow-xl lg:sticky lg:top-24">
            <div class="flex justify-between items-start mb-6">
              <div>
                <p class="font-label-sm text-label-sm text-primary-fixed uppercase tracking-widest mb-1">Chi phí dự kiến</p>
                <h3 class="font-headline-lg text-headline-lg text-on-primary">500.000đ+ <span class="text-primary-fixed font-body-md flex-shrink-0 align-bottom">/ giờ</span></h3>
              </div>
              <div class="bg-secondary p-2 rounded-lg">
                <span class="material-symbols-outlined text-white">bolt</span>
              </div>
            </div>
            <div class="space-y-4 mb-8">
              <div class="flex items-center gap-3 text-white/90">
                <span class="material-symbols-outlined text-primary-fixed">verified_user</span>
                <span class="font-body-md text-body-md">Thanh toán bảo mật qua Agile</span>
              </div>
              <div class="flex items-center gap-3 text-white/90">
                <span class="material-symbols-outlined text-primary-fixed">support_agent</span>
                <span class="font-body-md text-body-md">Hỗ trợ 24/7 từ hệ thống</span>
              </div>
            </div>
            <button class="w-full bg-secondary hover:bg-secondary-fixed-variant text-white font-headline-md text-headline-md py-4 rounded-lg transition-all shadow-lg hover:shadow-secondary/20 active:scale-95 cursor-pointer">
              Thuê chuyên gia
            </button>
            <button class="w-full mt-4 bg-white/10 hover:bg-white/20 text-white font-label-md text-label-md py-3 rounded-lg transition-colors border border-white/20 cursor-pointer">
              Gửi lời mời trực tiếp
            </button>
          </div>

          <!-- Quick Stats Secondary -->
          <div class="bg-surface-container-lowest rounded-xl p-6 border border-surface-container-highest shadow-sm">
            <h4 class="font-label-md text-label-md text-primary font-bold mb-4">Thông tin liên hệ</h4>
            <div class="space-y-4">
              <div class="flex items-center gap-4 text-on-surface-variant">
                <span class="material-symbols-outlined">location_on</span>
                <span class="font-body-md text-body-md">Hà Nội, Việt Nam</span>
              </div>
              <div class="flex items-center gap-4 text-on-surface-variant">
                <span class="material-symbols-outlined">language</span>
                <span class="font-body-md text-body-md">Tiếng Việt, English</span>
              </div>
              <div class="flex items-center gap-4 text-on-surface-variant">
                <span class="material-symbols-outlined">schedule</span>
                <span class="font-body-md text-body-md">Phản hồi trong vòng 2h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <app-footer></app-footer>
  `
})
export class ProfileComponent {
  assessmentData = signal<AIAssessment | null>(null);
  loadingAssessment = signal<boolean>(false);

  async generateAIEvaluation() {
    this.loadingAssessment.set(true);
    try {
      const profileData = {
        name: "Trần Minh Tâm",
        bio: "Với hơn 15 năm kinh nghiệm trong lĩnh vực bảo tồn di sản và chế tác gỗ mỹ nghệ, tôi luôn tâm niệm mỗi sản phẩm là một câu chuyện lịch sử. Tôi chuyên sâu về phục hồi kiến trúc cổ truyền Việt Nam, từ đình làng đến nhà rường cổ, kết hợp giữa kỹ thuật truyền thống và tư duy thiết kế hiện đại.",
        skills: ["Phục hồi kiến trúc", "Chế tác gỗ", "Tư vấn thiết kế", "Bảo tồn di sản", "Sơn mài truyền thống", "Khảm xà cừ"],
        completedJobs: [
          { title: "Phục hồi cửa gỗ đình làng", score: 5.0, feedback: "Anh Tâm làm việc cực kỳ chuyên nghiệp và am hiểu sâu sắc về văn hóa tâm linh Việt Nam qua từng nét chạm trổ..." },
          { title: "Chế tác tủ thờ khảm xà cừ", score: 4.8, feedback: "Sản phẩm hoàn thiện vượt mong đợi, tinh xảo đến từng chi tiết nhỏ nhất. Giá cả hoàn toàn xứng đáng với chất lượng." }
        ]
      };
      const res = await fetch('/api/profile/ai-assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profileData)
      });
      if (!res.ok) {
        throw new Error('Đường truyền mạng hoặc máy chủ gặp sự cố');
      }
      const data = await res.json();
      this.assessmentData.set(data);
    } catch (err) {
      console.error("Lỗi tạo đánh giá từ AI: ", err);
    } finally {
      this.loadingAssessment.set(false);
    }
  }
}
