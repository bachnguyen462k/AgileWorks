import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../components/navbar';
import { FooterComponent } from '../components/footer';

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
              <img class="w-full h-full object-cover" referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnIsfrZtzDrCYztZKQsv_iBw0n5PjBjxvywUwUPX5e6kNo2l1rsIDRmpxqI02tglw7eNUz-YLcZYCbdZMqWH_GLOzrHzPhwzA47svbhbfrrM6mKi6BLNETa9oOO38AJWCFfA8BX8F_5uSmCaJteIEIHND3XFT2vkbefo5zGVznIhaQXf1bM4PWcWYSuB3lUC25d9Q_uqpRXSYnlPeV1MtadHV9PWE8pMdKlm9DmYWEPyzrd7oKBONXewq_hinuEx4IUkdWC-DsKsk"/>
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
                  <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQzSMpoKF2QFOTrehGGshIi4XCmwGpHIrQ4tv91PlT0I7qOaHD-ZMbbFgFMcSI3-p7CE38r8WIhlV3W-MlDZKUUR28SJEeZ_0Qd3QQA_wxALeTb2JVsPtB5xb59gkGKLkgBZ1sn3feVRYC1KDv84Oin2MSnec26WgNUmZXCyxJ7uRtHJQFHmMNcPntfHaMCYnNSLkLurSAIXtRHnam6deVticUA7JdrdQ91MaVXhlnevvj_jRbvEPq5LpiBD0r0jWGxgT3Ucgced0"/>
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
                  <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1W81OICVOUUCyT_uKqntLO-jSxYKsCPDO-i1ppZlQ7yuog61Q52mc-ZC2D6P9pZfUbsiAgoV2MBAxGl20TA3IxhPS_qaHcofRujhKiyjZT5Z4JGqpNEk6g6TNv_1b2yc3kAFBrzM74sw8z5N3I1fADDxt-pthlwZnN2U7ohqYfvKi00JTD4ElyZYx1cbkaKYQ5QaBoalpadJOfJzvXJhJOFhbpyw-FLxNKUpN84oDiiv2nMzkbZavoj1OlVb5jCve4KEWu9sFcbQ"/>
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
export class ProfileComponent {}
