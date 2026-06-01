import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="w-full py-12 px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-gutter max-w-container-max mx-auto bg-primary mt-16 text-on-primary">
      <div>
        <span class="font-headline-md text-headline-md text-on-primary mb-6 block">Agile Works</span>
        <p class="font-body-md text-primary-fixed-dim leading-relaxed mb-6">Nền tảng kết nối các chuyên gia hàng đầu và những dự án đầy tiềm năng. Xây dựng tương lai công việc linh hoạt và chuyên nghiệp.</p>
        <div class="flex gap-4">
          <a class="w-10 h-10 rounded-full bg-on-primary/10 flex items-center justify-center hover:bg-on-primary/20 transition-colors cursor-pointer">
            <span class="material-symbols-outlined text-on-primary">language</span>
          </a>
          <a class="w-10 h-10 rounded-full bg-on-primary/10 flex items-center justify-center hover:bg-on-primary/20 transition-colors cursor-pointer">
            <span class="material-symbols-outlined text-on-primary">share</span>
          </a>
          <a class="w-10 h-10 rounded-full bg-on-primary/10 flex items-center justify-center hover:bg-on-primary/20 transition-colors cursor-pointer">
            <span class="material-symbols-outlined text-on-primary">mail</span>
          </a>
        </div>
      </div>
      <div>
        <h4 class="font-title-lg text-title-lg mb-6">Liên kết nhanh</h4>
        <ul class="space-y-4">
          <li><a class="font-body-md text-primary-fixed-dim hover:text-on-primary transition-colors cursor-pointer">Khám phá công việc</a></li>
          <li><a class="font-body-md text-primary-fixed-dim hover:text-on-primary transition-colors cursor-pointer">Đăng tin tuyển dụng</a></li>
          <li><a class="font-body-md text-primary-fixed-dim hover:text-on-primary transition-colors cursor-pointer">Gói dịch vụ doanh nghiệp</a></li>
          <li><a class="font-body-md text-primary-fixed-dim hover:text-on-primary transition-colors cursor-pointer">Cộng đồng chuyên gia</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-title-lg text-title-lg mb-6">Hỗ trợ</h4>
        <ul class="space-y-4">
          <li><a class="font-body-md text-primary-fixed-dim hover:text-on-primary transition-colors cursor-pointer">Trung tâm trợ giúp</a></li>
          <li><a class="font-body-md text-primary-fixed-dim hover:text-on-primary transition-colors cursor-pointer">Chính sách bảo mật</a></li>
          <li><a class="font-body-md text-primary-fixed-dim hover:text-on-primary transition-colors cursor-pointer">Điều khoản sử dụng</a></li>
          <li><a class="font-body-md text-primary-fixed-dim hover:text-on-primary transition-colors cursor-pointer">Liên hệ</a></li>
        </ul>
        <p class="font-body-sm text-primary-fixed-dim mt-8">© 2026 Agile Works. All rights reserved.</p>
      </div>
    </footer>
  `
})
export class FooterComponent {}
