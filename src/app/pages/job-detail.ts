import { ChangeDetectionStrategy, Component, signal, inject } from '@angular/core';
import { NavbarComponent } from '../components/navbar';
import { FooterComponent } from '../components/footer';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-navbar></app-navbar>
    <main class="pt-12 pb-24 px-margin-desktop max-w-container-max mx-auto flex-1 w-full">
      <!-- Breadcrumbs -->
      <nav class="flex items-center gap-2 mb-8 text-on-surface-variant font-label-md">
        <a routerLink="/explore" class="hover:text-primary transition-colors">Tìm việc</a>
        <span class="material-symbols-outlined text-[16px]">chevron_right</span>
        <span class="text-on-surface font-semibold">Chi tiết công việc</span>
      </nav>
      
      <div class="grid grid-cols-12 gap-gutter items-start">
        <!-- Left Column -->
        <div class="col-span-12 lg:col-span-8 space-y-gutter">
          <section class="bg-surface-container-lowest p-8 border border-outline-variant/50 shadow-sm rounded-xl">
            <div class="flex flex-col sm:flex-row justify-between sm:items-start gap-4 mb-6">
              <h2 class="font-headline-lg text-headline-lg text-primary max-w-2xl">Phát triển UI/UX cho ứng dụng Quản lý Dự án Doanh nghiệp</h2>
              <span class="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full font-label-sm uppercase tracking-wide flex-shrink-0">Toàn thời gian</span>
            </div>
            
            <div class="flex flex-wrap gap-6 mb-8 text-on-surface-variant font-label-md border-b border-outline-variant/50 pb-6">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary" data-icon="location_on">location_on</span>
                <span>Hà Nội, Việt Nam</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary" data-icon="schedule">schedule</span>
                <span>Đăng 2 ngày trước</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary" data-icon="visibility">visibility</span>
                <span>420 lượt xem</span>
              </div>
            </div>

            <!-- Description -->
            <div class="space-y-4 mb-10">
              <h3 class="font-title-lg text-title-lg text-primary">Mô tả công việc</h3>
              <div class="font-body-md text-on-surface-variant leading-relaxed" 
                   [class.line-clamp-4]="!isExpanded()">
                  Chúng tôi đang tìm kiếm một UI/UX Designer tài năng để cùng phát triển giao diện cho hệ thống quản trị mới của doanh nghiệp. Bạn sẽ chịu trách nhiệm chính trong việc thiết kế các luồng trải nghiệm người dùng phức tạp, từ wireframe đến prototype hoàn chỉnh. 
                  <br><br>
                  Công việc yêu cầu sự tỉ mỉ trong từng pixel và khả năng hiểu rõ nhu cầu của người dùng cuối trong môi trường doanh nghiệp. Bạn sẽ làm việc trực tiếp với đội ngũ Product Manager và Backend Engineer để đảm bảo tính khả thi về mặt kỹ thuật.
                  <br><br>
                  Yêu cầu sử dụng thành thạo Figma, Adobe Creative Suite và có kiến thức cơ bản về HTML/CSS là một lợi thế lớn. Chúng tôi đề cao tinh thần sáng tạo và khả năng giải quyết vấn đề thông qua tư duy thiết kế hiện đại.
              </div>
              <button class="text-primary font-label-md flex items-center gap-1 hover:underline outline-none cursor-pointer" (click)="toggleDesc()">
                  @if (isExpanded()) {
                    Thu gọn <span class="material-symbols-outlined">expand_less</span>
                  } @else {
                    Xem thêm <span class="material-symbols-outlined">expand_more</span>
                  }
              </button>
            </div>

            <!-- Requirements -->
            <div class="space-y-4">
              <h3 class="font-title-lg text-title-lg text-primary">Yêu cầu công việc</h3>
              <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li class="flex items-start gap-4 p-5 bg-surface-container-low rounded-xl border border-transparent hover:border-outline-variant transition-all">
                  <span class="material-symbols-outlined text-primary shrink-0" data-icon="check_circle">check_circle</span>
                  <span class="text-on-surface font-body-md">Hơn 3 năm kinh nghiệm thiết kế UI/UX cho Web/App</span>
                </li>
                <li class="flex items-start gap-4 p-5 bg-surface-container-low rounded-xl border border-transparent hover:border-outline-variant transition-all">
                  <span class="material-symbols-outlined text-primary shrink-0" data-icon="check_circle">check_circle</span>
                  <span class="text-on-surface font-body-md">Thành thạo công cụ Figma, Prototyping nâng cao</span>
                </li>
                <li class="flex items-start gap-4 p-5 bg-surface-container-low rounded-xl border border-transparent hover:border-outline-variant transition-all">
                  <span class="material-symbols-outlined text-primary shrink-0" data-icon="check_circle">check_circle</span>
                  <span class="text-on-surface font-body-md">Kinh nghiệm thiết kế Design System cho doanh nghiệp</span>
                </li>
                <li class="flex items-start gap-4 p-5 bg-surface-container-low rounded-xl border border-transparent hover:border-outline-variant transition-all">
                  <span class="material-symbols-outlined text-primary shrink-0" data-icon="check_circle">check_circle</span>
                  <span class="text-on-surface font-body-md">Có khả năng giao tiếp tiếng Anh tốt là điểm cộng</span>
                </li>
              </ul>
            </div>
          </section>

          <!-- Progress -->
          <section class="bg-surface-container-lowest p-8 border border-outline-variant/50 shadow-sm rounded-xl">
            <div class="flex justify-between items-center mb-6">
              <h3 class="font-title-lg text-title-lg text-primary">Tiến độ ứng tuyển</h3>
              <span class="font-label-md text-primary bg-primary-fixed/30 px-3 py-1 rounded">12 / 15 hồ sơ</span>
            </div>
            <div class="w-full h-3 bg-surface-container-highest rounded-full overflow-hidden">
              <div class="h-full bg-primary w-[80%] rounded-full shadow-[0_0_8px_rgba(0,35,31,0.3)]"></div>
            </div>
            <div class="mt-4 flex justify-between font-label-sm text-on-surface-variant">
              <span>Bắt đầu: 15/10/2026</span>
              <span class="text-error font-bold tracking-wide">CÒN LẠI 3 VỊ TRÍ</span>
            </div>
          </section>
        </div>

        <!-- Right Column -->
        <aside class="col-span-12 lg:col-span-4 space-y-gutter lg:sticky lg:top-28">
          <!-- Action Panel -->
          <div class="bg-surface-container-lowest border border-outline-variant/50 shadow-sm rounded-xl overflow-hidden">
            <div class="p-8 space-y-6">
              <div>
                <p class="font-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Mức lương đề xuất</p>
                <div class="flex items-baseline gap-2">
                  <span class="font-display-md text-display-md text-primary">10.000.000</span>
                  <span class="font-title-lg text-title-lg text-on-surface-variant">VNĐ</span>
                </div>
              </div>
              <div class="space-y-3 pt-4">
                @if (authService.isLoggedIn()) {
                  <button class="w-full bg-primary text-on-primary font-label-md py-4 rounded-lg hover:bg-secondary transition-all flex justify-center items-center gap-2 active:scale-95 cursor-pointer">
                    <span class="material-symbols-outlined">send</span>
                    Ứng tuyển ngay
                  </button>
                  <button class="w-full bg-surface text-primary border-2 border-primary font-label-md py-4 rounded-lg hover:bg-primary-fixed/10 transition-all flex justify-center items-center gap-2 active:scale-95 cursor-pointer">
                    <span class="material-symbols-outlined">payments</span>
                    Thỏa thuận giá
                  </button>
                } @else {
                  <a routerLink="/login" class="w-full bg-primary text-on-primary font-label-md py-4 rounded-lg hover:bg-secondary transition-all flex justify-center items-center gap-2 active:scale-95 cursor-pointer">
                    <span class="material-symbols-outlined">login</span>
                    Đăng nhập để ứng tuyển
                  </a>
                }
              </div>
            </div>
            <div class="bg-surface-container border-t border-outline-variant/30 p-8">
              <h4 class="font-label-sm text-on-surface-variant uppercase tracking-wider mb-4">Người tuyển dụng</h4>
              <div class="flex items-center gap-4 mb-4">
                <img alt="Recruiter photo" class="w-14 h-14 rounded-full object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjXRuXdKuFsASQ2nqGMSKYmIgc1sc_vUGzCKy7xpYRnQODhsLif3HyFUpuyPg6qKgJlyI-ugkga8Pt3UAaGPTp5vZMrBdQMEC5ANAvYcNmYO6P_9bIfpGbYNxWTHguvJu75eg0D7uatBC5GWuUHyr9sf0s0G-gqHWLOUy8Xs-LegRWm6xhRoUHwuhMQEaJZ9erxBBk8ilk__Kj2g8uAAtLIi8FcdGMY4MPul6rHVaGWtgz9QMxE5osMVWn3y2HUxGWAJKRYEDG3Kw"/>
                <div>
                  <p class="font-title-lg text-title-lg text-on-surface">Minh Anh Nguyễn</p>
                  <p class="font-label-sm text-on-surface-variant">HR Manager tại Agile Works</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Summary -->
          <div class="bg-surface-container-lowest p-8 border border-outline-variant/50 shadow-sm rounded-xl">
            <h4 class="font-label-sm text-on-surface-variant uppercase tracking-wider mb-6">Thông tin nhanh</h4>
            <ul class="space-y-5">
              <li class="flex justify-between items-center pb-4 border-b border-outline-variant/30">
                <span class="text-on-surface-variant font-body-md">Hình thức</span>
                <span class="font-label-md">On-site / Hybrid</span>
              </li>
              <li class="flex justify-between items-center pb-4 border-b border-outline-variant/30">
                <span class="text-on-surface-variant font-body-md">Kinh nghiệm</span>
                <span class="font-label-md">3 - 5 năm</span>
              </li>
              <li class="flex flex-col gap-3">
                <span class="text-on-surface-variant font-body-md">Kỹ năng chuyên môn</span>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-surface-variant px-3 py-1.5 rounded-md font-label-sm">Figma</span>
                  <span class="bg-surface-variant px-3 py-1.5 rounded-md font-label-sm">UX Design</span>
                  <span class="bg-surface-variant px-3 py-1.5 rounded-md font-label-sm">Prototyping</span>
                </div>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
    <app-footer></app-footer>
  `
})
export class JobDetailComponent {
  authService = inject(AuthService);
  isExpanded = signal(false);

  toggleDesc() {
    this.isExpanded.update(v => !v);
  }
}

