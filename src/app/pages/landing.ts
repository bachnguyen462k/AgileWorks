import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavbarComponent } from '../components/navbar';
import { FooterComponent } from '../components/footer';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-navbar></app-navbar>
    <main class="flex-1 flex flex-col w-full">
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-surface to-surface-container-high relative overflow-hidden py-24 px-margin-desktop">
        <div class="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="z-10">
            <h1 class="font-display-lg text-display-lg text-primary mb-6">
              Kết nối Chuyên gia & <br> Dự án hàng đầu
            </h1>
            <p class="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
              Nền tảng linh hoạt giúp doanh nghiệp tìm kiếm tài năng và chuyên gia tìm thấy dự án mơ ước một cách nhanh chóng, an toàn và hiệu quả.
            </p>
            <!-- Big Search Bar -->
            <div class="bg-surface-container-lowest p-2 rounded-xl shadow-xl flex flex-col md:flex-row gap-2 border border-outline-variant">
              <div class="flex-1 flex items-center px-4 gap-3 border-r border-outline-variant/30">
                <span class="material-symbols-outlined text-outline">search</span>
                <input class="w-full border-none focus:ring-0 bg-transparent py-4 font-body-md outline-none" placeholder="Tên công việc, kỹ năng..." type="text">
              </div>
              <div class="flex-1 flex items-center px-4 gap-3">
                <span class="material-symbols-outlined text-outline">location_on</span>
                <input class="w-full border-none focus:ring-0 bg-transparent py-4 font-body-md outline-none" placeholder="Địa điểm (Toàn quốc)" type="text">
              </div>
              <button class="bg-primary text-on-primary px-10 py-4 rounded-lg font-headline-md text-headline-md hover:bg-secondary transition-all cursor-pointer">
                Tìm kiếm
              </button>
            </div>
            <div class="mt-8 flex gap-4 items-center">
              <span class="text-label-sm text-outline uppercase tracking-wider">Phổ biến:</span>
              <span class="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-md cursor-pointer hover:opacity-80">UI/UX Design</span>
              <span class="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-md cursor-pointer hover:opacity-80">Web Dev</span>
              <span class="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-md cursor-pointer hover:opacity-80">Marketing</span>
            </div>
          </div>
          <div class="relative hidden lg:block">
            <div class="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img alt="Professional Team" class="w-full h-full object-cover" referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrGbWv41_wYTJZY7kHNqogahXYW2ZW10H1Ssm7VEXxdTrGfIiV76uPIHnn_3b4DUVE9uFnt_TV9AjjjU0d-T6OJ3FJL9pQ1NKU-LX02PRkW-VjzJ9UZov4NlwBaUisWUsmvzVWNAA_hGLH5Nopf5HUDLXvhf4llaaqj4TMbpf6o30nGZJgh49ADnnSoJHb9NCnochGFcp0PhYpsxzfH4NGUMJUHQO-OmX0JWYcWwCbuxUoUZ9LMla33WOO_ERPwLu6g4jVjJJ8eQY">
            </div>
            <!-- Floating Card Decoration -->
            <div class="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-2xl shadow-xl border border-outline-variant animate-[bounce_3s_infinite]">
              <div class="flex items-center gap-4">
                <div class="bg-primary-fixed p-3 rounded-full">
                  <span class="material-symbols-outlined text-primary">verified</span>
                </div>
                <div>
                  <p class="font-label-sm text-outline">Chuyên gia</p>
                  <p class="font-headline-md text-headline-md text-primary">5,000+ Đã xác thực</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Job Categories -->
      <section class="py-24 px-margin-desktop bg-surface-container-low">
        <div class="max-w-container-max mx-auto">
          <div class="flex justify-between items-end mb-12">
            <div>
              <h2 class="font-headline-lg text-headline-lg text-primary">Khám phá theo danh mục</h2>
              <p class="font-body-md text-body-md text-on-surface-variant">Hàng ngàn cơ hội đang chờ đợi bạn trong các lĩnh vực chuyên môn.</p>
            </div>
            <button class="text-primary font-label-md flex items-center gap-2 hover:underline cursor-pointer">
              Xem tất cả <span class="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div class="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant text-center hover:border-primary transition-all cursor-pointer group">
              <div class="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-fixed transition-colors">
                <span class="material-symbols-outlined text-primary text-3xl">local_shipping</span>
              </div>
              <p class="font-title-lg text-title-lg text-primary">Vận chuyển</p>
              <p class="font-label-sm text-outline mt-1">124 công việc</p>
            </div>
            <div class="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant text-center hover:border-primary transition-all cursor-pointer group">
              <div class="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-fixed transition-colors">
                <span class="material-symbols-outlined text-primary text-3xl">cleaning_services</span>
              </div>
              <p class="font-title-lg text-title-lg text-primary">Dọn dẹp</p>
              <p class="font-label-sm text-outline mt-1">85 công việc</p>
            </div>
            <div class="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant text-center hover:border-primary transition-all cursor-pointer group">
              <div class="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-fixed transition-colors">
                <span class="material-symbols-outlined text-primary text-3xl">terminal</span>
              </div>
              <p class="font-title-lg text-title-lg text-primary">Công nghệ</p>
              <p class="font-label-sm text-outline mt-1">342 công việc</p>
            </div>
            <div class="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant text-center hover:border-primary transition-all cursor-pointer group">
              <div class="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-fixed transition-colors">
                <span class="material-symbols-outlined text-primary text-3xl">build</span>
              </div>
              <p class="font-title-lg text-title-lg text-primary">Sửa chữa</p>
              <p class="font-label-sm text-outline mt-1">96 công việc</p>
            </div>
            <div class="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant text-center hover:border-primary transition-all cursor-pointer group">
              <div class="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-fixed transition-colors">
                <span class="material-symbols-outlined text-primary text-3xl">design_services</span>
              </div>
              <p class="font-title-lg text-title-lg text-primary">Thiết kế</p>
              <p class="font-label-sm text-outline mt-1">215 công việc</p>
            </div>
            <div class="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant text-center hover:border-primary transition-all cursor-pointer group">
              <div class="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-fixed transition-colors">
                <span class="material-symbols-outlined text-primary text-3xl">payments</span>
              </div>
              <p class="font-title-lg text-title-lg text-primary">Tài chính</p>
              <p class="font-label-sm text-outline mt-1">58 công việc</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Jobs Section -->
      <section class="py-24 px-margin-desktop bg-surface">
        <div class="max-w-container-max mx-auto">
          <div class="flex justify-between items-end mb-12">
            <div>
              <h2 class="font-headline-lg text-headline-lg text-primary">Công việc nổi bật</h2>
              <p class="font-body-md text-body-md text-on-surface-variant">Tuyển tập những dự án chất lượng cao vừa được đăng tải.</p>
            </div>
            <a class="text-primary font-label-md flex items-center gap-2 hover:underline cursor-pointer" routerLink="/explore">
              Xem tất cả <span class="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div class="flex justify-between items-start mb-4">
                <div class="flex gap-2">
                  <span class="bg-error-container text-on-error-container px-2 py-1 rounded text-label-sm uppercase">Gấp</span>
                  <span class="bg-surface-container text-on-surface-variant px-2 py-1 rounded text-label-sm shrink-0">Remote</span>
                </div>
                <span class="material-symbols-outlined text-outline cursor-pointer hover:text-primary">bookmark</span>
              </div>
              <h3 class="font-title-lg text-title-lg text-primary mb-2 line-clamp-1">Thiết kế UI/UX cho App Tài chính</h3>
              <p class="font-label-md text-on-surface-variant mb-4">Fintech Solutions Co.</p>
              <div class="space-y-2 mb-6">
                <div class="flex items-center gap-2 text-on-surface-variant">
                  <span class="material-symbols-outlined text-sm">payments</span>
                  <span class="font-label-md">15.000.000 VNĐ - 25.000.000 VNĐ</span>
                </div>
                <div class="flex items-center gap-2 text-on-surface-variant">
                  <span class="material-symbols-outlined text-sm">location_on</span>
                  <span class="font-label-md">Quận 1, TP. HCM</span>
                </div>
              </div>
              <div class="flex items-center gap-3">
                @if (authService.isLoggedIn()) {
                  <button class="flex-1 bg-primary text-on-primary py-2.5 rounded-lg font-label-md hover:bg-secondary transition-colors cursor-pointer">Ứng tuyển</button>
                } @else {
                  <a routerLink="/login" class="flex-1 bg-secondary/10 text-secondary border border-secondary/20 py-2.5 rounded-lg font-label-md hover:bg-secondary/20 transition-colors cursor-pointer text-center flex items-center justify-center gap-1">
                    <span class="material-symbols-outlined text-[18px]">lock</span>
                    Yêu cầu đăng nhập
                  </a>
                }
                <button routerLink="/jobs/1" class="px-3 py-2.5 border border-outline-variant rounded-lg text-primary hover:bg-surface-container transition-colors cursor-pointer flex items-center justify-center">
                  <span class="material-symbols-outlined text-xl leading-none">visibility</span>
                </button>
              </div>
            </div>
            
            <div class="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div class="flex justify-between items-start mb-4">
                <div class="flex gap-2">
                  <span class="bg-primary-fixed text-primary px-2 py-1 rounded text-label-sm">Toàn thời gian</span>
                </div>
                <span class="material-symbols-outlined text-outline cursor-pointer hover:text-primary">bookmark</span>
              </div>
              <h3 class="font-title-lg text-title-lg text-primary mb-2 line-clamp-1">Senior React Developer</h3>
              <p class="font-label-md text-on-surface-variant mb-4">TechHub Vietnam</p>
              <div class="space-y-2 mb-6">
                <div class="flex items-center gap-2 text-on-surface-variant">
                  <span class="material-symbols-outlined text-sm">payments</span>
                  <span class="font-label-md">30.000.000 VNĐ - 45.000.000 VNĐ</span>
                </div>
                <div class="flex items-center gap-2 text-on-surface-variant">
                  <span class="material-symbols-outlined text-sm">location_on</span>
                  <span class="font-label-md">Cầu Giấy, Hà Nội</span>
                </div>
              </div>
              <div class="flex items-center gap-3">
                @if (authService.isLoggedIn()) {
                  <button class="flex-1 bg-primary text-on-primary py-2.5 rounded-lg font-label-md hover:bg-secondary transition-colors cursor-pointer">Ứng tuyển</button>
                } @else {
                  <a routerLink="/login" class="flex-1 bg-secondary/10 text-secondary border border-secondary/20 py-2.5 rounded-lg font-label-md hover:bg-secondary/20 transition-colors cursor-pointer text-center flex items-center justify-center gap-1">
                    <span class="material-symbols-outlined text-[18px]">lock</span>
                    Yêu cầu đăng nhập
                  </a>
                }
                <button routerLink="/jobs/2" class="px-3 py-2.5 border border-outline-variant rounded-lg text-primary hover:bg-surface-container transition-colors cursor-pointer flex items-center justify-center">
                  <span class="material-symbols-outlined text-xl leading-none">visibility</span>
                </button>
              </div>
            </div>

            <div class="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div class="flex justify-between items-start mb-4">
                <div class="flex gap-2">
                  <span class="bg-secondary-container text-on-secondary-container px-2 py-1 rounded text-label-sm">Bán thời gian</span>
                </div>
                <span class="material-symbols-outlined text-outline cursor-pointer hover:text-primary">bookmark</span>
              </div>
              <h3 class="font-title-lg text-title-lg text-primary mb-2 line-clamp-1">Content Marketing Specialist</h3>
              <p class="font-label-md text-on-surface-variant mb-4">Creative Agency</p>
              <div class="space-y-2 mb-6">
                <div class="flex items-center gap-2 text-on-surface-variant">
                  <span class="material-symbols-outlined text-sm">payments</span>
                  <span class="font-label-md">10.000.000 VNĐ - 18.000.000 VNĐ</span>
                </div>
                <div class="flex items-center gap-2 text-on-surface-variant">
                  <span class="material-symbols-outlined text-sm">location_on</span>
                  <span class="font-label-md">Quận 3, TP. HCM</span>
                </div>
              </div>
              <div class="flex items-center gap-3">
                @if (authService.isLoggedIn()) {
                  <button class="flex-1 bg-primary text-on-primary py-2.5 rounded-lg font-label-md hover:bg-secondary transition-colors cursor-pointer">Ứng tuyển</button>
                } @else {
                  <a routerLink="/login" class="flex-1 bg-secondary/10 text-secondary border border-secondary/20 py-2.5 rounded-lg font-label-md hover:bg-secondary/20 transition-colors cursor-pointer text-center flex items-center justify-center gap-1">
                    <span class="material-symbols-outlined text-[18px]">lock</span>
                    Yêu cầu đăng nhập
                  </a>
                }
                <button routerLink="/jobs/3" class="px-3 py-2.5 border border-outline-variant rounded-lg text-primary hover:bg-surface-container transition-colors cursor-pointer flex items-center justify-center">
                  <span class="material-symbols-outlined text-xl leading-none">visibility</span>
                </button>
              </div>
            </div>

            <div class="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div class="flex justify-between items-start mb-4">
                <div class="flex gap-2">
                  <span class="bg-surface-container text-on-surface-variant px-2 py-1 rounded text-label-sm">Remote</span>
                </div>
                <span class="material-symbols-outlined text-outline cursor-pointer hover:text-primary">bookmark</span>
              </div>
              <h3 class="font-title-lg text-title-lg text-primary mb-2 line-clamp-1">Chuyên gia phân tích dữ liệu</h3>
              <p class="font-label-md text-on-surface-variant mb-4">Global Data Corp</p>
              <div class="space-y-2 mb-6">
                <div class="flex items-center gap-2 text-on-surface-variant">
                  <span class="material-symbols-outlined text-sm">payments</span>
                  <span class="font-label-md">2.500.000 VNĐ / Dự án</span>
                </div>
                <div class="flex items-center gap-2 text-on-surface-variant">
                  <span class="material-symbols-outlined text-sm">location_on</span>
                  <span class="font-label-md">Toàn quốc</span>
                </div>
              </div>
              <div class="flex items-center gap-3">
                @if (authService.isLoggedIn()) {
                  <button class="flex-1 bg-primary text-on-primary py-2.5 rounded-lg font-label-md hover:bg-secondary transition-colors cursor-pointer">Ứng tuyển</button>
                } @else {
                  <a routerLink="/login" class="flex-1 bg-secondary/10 text-secondary border border-secondary/20 py-2.5 rounded-lg font-label-md hover:bg-secondary/20 transition-colors cursor-pointer text-center flex items-center justify-center gap-1">
                    <span class="material-symbols-outlined text-[18px]">lock</span>
                    Yêu cầu đăng nhập
                  </a>
                }
                <button routerLink="/jobs/4" class="px-3 py-2.5 border border-outline-variant rounded-lg text-primary hover:bg-surface-container transition-colors cursor-pointer flex items-center justify-center">
                  <span class="material-symbols-outlined text-xl leading-none">visibility</span>
                </button>
              </div>
            </div>

            <div class="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div class="flex justify-between items-start mb-4">
                <div class="flex gap-2">
                  <span class="bg-error-container text-on-error-container px-2 py-1 rounded text-label-sm uppercase">Gấp</span>
                </div>
                <span class="material-symbols-outlined text-outline cursor-pointer hover:text-primary">bookmark</span>
              </div>
              <h3 class="font-title-lg text-title-lg text-primary mb-2 line-clamp-1">Phát triển Mobile App (Flutter)</h3>
              <p class="font-label-md text-on-surface-variant mb-4">StartUp Next</p>
              <div class="space-y-2 mb-6">
                <div class="flex items-center gap-2 text-on-surface-variant">
                  <span class="material-symbols-outlined text-sm">payments</span>
                  <span class="font-label-md">20.000.000 VNĐ - 35.000.000 VNĐ</span>
                </div>
                <div class="flex items-center gap-2 text-on-surface-variant">
                  <span class="material-symbols-outlined text-sm">location_on</span>
                  <span class="font-label-md">Hải Châu, Đà Nẵng</span>
                </div>
              </div>
              <div class="flex items-center gap-3">
                @if (authService.isLoggedIn()) {
                  <button class="flex-1 bg-primary text-on-primary py-2.5 rounded-lg font-label-md hover:bg-secondary transition-colors cursor-pointer">Ứng tuyển</button>
                } @else {
                  <a routerLink="/login" class="flex-1 bg-secondary/10 text-secondary border border-secondary/20 py-2.5 rounded-lg font-label-md hover:bg-secondary/20 transition-colors cursor-pointer text-center flex items-center justify-center gap-1">
                    <span class="material-symbols-outlined text-[18px]">lock</span>
                    Yêu cầu đăng nhập
                  </a>
                }
                <button routerLink="/jobs/5" class="px-3 py-2.5 border border-outline-variant rounded-lg text-primary hover:bg-surface-container transition-colors cursor-pointer flex items-center justify-center">
                  <span class="material-symbols-outlined text-xl leading-none">visibility</span>
                </button>
              </div>
            </div>

            <div class="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div class="flex justify-between items-start mb-4">
                <div class="flex gap-2">
                  <span class="bg-primary-fixed text-primary px-2 py-1 rounded text-label-sm">Dự án ngắn hạn</span>
                </div>
                <span class="material-symbols-outlined text-outline cursor-pointer hover:text-primary">bookmark</span>
              </div>
              <h3 class="font-title-lg text-title-lg text-primary mb-2 line-clamp-1">Quay phim & Dựng video Event</h3>
              <p class="font-label-md text-on-surface-variant mb-4">Media Pro</p>
              <div class="space-y-2 mb-6">
                <div class="flex items-center gap-2 text-on-surface-variant">
                  <span class="material-symbols-outlined text-sm">payments</span>
                  <span class="font-label-md">5.000.000 VNĐ / Ngày</span>
                </div>
                <div class="flex items-center gap-2 text-on-surface-variant">
                  <span class="material-symbols-outlined text-sm">location_on</span>
                  <span class="font-label-md">Quận 7, TP. HCM</span>
                </div>
              </div>
              <div class="flex items-center gap-3">
                @if (authService.isLoggedIn()) {
                  <button class="flex-1 bg-primary text-on-primary py-2.5 rounded-lg font-label-md hover:bg-secondary transition-colors cursor-pointer">Ứng tuyển</button>
                } @else {
                  <a routerLink="/login" class="flex-1 bg-secondary/10 text-secondary border border-secondary/20 py-2.5 rounded-lg font-label-md hover:bg-secondary/20 transition-colors cursor-pointer text-center flex items-center justify-center gap-1">
                    <span class="material-symbols-outlined text-[18px]">lock</span>
                    Yêu cầu đăng nhập
                  </a>
                }
                <button routerLink="/jobs/6" class="px-3 py-2.5 border border-outline-variant rounded-lg text-primary hover:bg-surface-container transition-colors cursor-pointer flex items-center justify-center">
                  <span class="material-symbols-outlined text-xl leading-none">visibility</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Us -->
      <section class="py-32 px-margin-desktop overflow-hidden bg-surface">
        <div class="max-w-container-max mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div class="grid grid-cols-2 gap-6">
              <div class="bg-primary-container p-8 rounded-3xl text-white mt-12 hover:-translate-y-2 transition-transform duration-300">
                <span class="material-symbols-outlined text-4xl mb-4 text-primary-fixed">bolt</span>
                <h3 class="font-headline-md text-headline-md mb-2">Tuyển dụng nhanh</h3>
                <p class="font-body-md text-body-md opacity-80">Rút ngắn thời gian tìm kiếm từ vài tuần xuống còn vài giờ.</p>
              </div>
              <div class="bg-surface-container-high p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300">
                <span class="material-symbols-outlined text-4xl mb-4 text-primary">shield</span>
                <h3 class="font-headline-md text-headline-md mb-2 text-primary">Chuyên gia xác thực</h3>
                <p class="font-body-md text-body-md text-on-surface-variant">Hồ sơ năng lực được kiểm duyệt chặt chẽ bởi hệ thống.</p>
              </div>
              <div class="bg-surface-container p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300">
                <span class="material-symbols-outlined text-4xl mb-4 text-primary">payments</span>
                <h3 class="font-headline-md text-headline-md mb-2 text-primary">Thanh toán an toàn</h3>
                <p class="font-body-md text-body-md text-on-surface-variant">Hệ thống Escrow đảm bảo quyền lợi cho cả hai bên.</p>
              </div>
              <div class="bg-secondary text-white p-8 rounded-3xl -mt-12 hover:-translate-y-2 transition-transform duration-300">
                <span class="material-symbols-outlined text-4xl mb-4 text-secondary-container">support_agent</span>
                <h3 class="font-headline-md text-headline-md mb-2">Hỗ trợ 24/7</h3>
                <p class="font-body-md text-body-md opacity-80">Luôn đồng hành cùng bạn trong mọi quy trình làm việc.</p>
              </div>
            </div>
            <div>
              <span class="text-primary font-label-sm uppercase tracking-[0.2em] mb-4 block">Tại sao chọn chúng tôi</span>
              <h2 class="font-display-md text-display-md text-primary mb-8">Nâng tầm hiệu suất công việc với Agile Works</h2>
              <p class="font-body-lg text-body-lg text-on-surface-variant mb-8">
                Chúng tôi không chỉ cung cấp một nền tảng tuyển dụng, mà còn kiến tạo một hệ sinh thái làm việc chuyên nghiệp, minh bạch và tràn đầy cảm hứng cho tương lai của kinh tế số.
              </p>
              <ul class="space-y-6">
                <li class="flex items-start gap-4">
                  <span class="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <div>
                    <p class="font-title-lg text-title-lg text-primary">Tiết kiệm 40% chi phí vận hành</p>
                    <p class="font-body-md text-body-md text-on-surface-variant">Tối ưu hóa quy trình quản lý dự án và nhân sự thuê ngoài.</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <span class="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <div>
                    <p class="font-title-lg text-title-lg text-primary">Mạng lưới 50,000+ nhân tài</p>
                    <p class="font-body-md text-body-md text-on-surface-variant">Truy cập vào kho tàng kỹ năng đa dạng từ khắp nơi trên thế giới.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Process Section -->
      <section class="py-24 px-margin-desktop bg-primary text-white">
        <div class="max-w-container-max mx-auto">
          <div class="text-center mb-20">
            <h2 class="font-display-md text-display-md mb-4">Quy trình đơn giản, kết quả tối ưu</h2>
            <p class="font-body-lg text-body-lg opacity-70">Bắt đầu hành trình của bạn chỉ trong vài bước</p>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <!-- For Employers -->
            <div class="bg-primary-container p-12 rounded-[2rem] border border-on-primary-container/20">
              <h3 class="font-headline-lg text-headline-lg mb-8 flex items-center gap-4">
                <span class="bg-primary-fixed text-primary w-12 h-12 rounded-full flex items-center justify-center font-bold">1</span>
                Dành cho Nhà tuyển dụng
              </h3>
              <div class="space-y-10">
                <div class="flex gap-6">
                  <div class="text-primary-fixed"><span class="material-symbols-outlined text-4xl">edit_note</span></div>
                  <div>
                    <p class="font-title-lg text-title-lg mb-2">Đăng tin dự án</p>
                    <p class="font-body-md text-body-md opacity-70">Mô tả công việc, yêu cầu và ngân sách của bạn một cách chi tiết.</p>
                  </div>
                </div>
                <div class="flex gap-6">
                  <div class="text-primary-fixed"><span class="material-symbols-outlined text-4xl">group_add</span></div>
                  <div>
                    <p class="font-title-lg text-title-lg mb-2">Chọn ứng viên</p>
                    <p class="font-body-md text-body-md opacity-70">Xem xét hồ sơ, đánh giá và phỏng vấn những người phù hợp nhất.</p>
                  </div>
                </div>
                <div class="flex gap-6">
                  <div class="text-primary-fixed"><span class="material-symbols-outlined text-4xl">task_alt</span></div>
                  <div>
                    <p class="font-title-lg text-title-lg mb-2">Hoàn thành &amp; Đánh giá</p>
                    <p class="font-body-md text-body-md opacity-70">Dự án hoàn thành, giải ngân và để lại nhận xét cho chuyên gia.</p>
                  </div>
                </div>
              </div>
              <button routerLink="/post" class="mt-12 w-full py-4 bg-primary-fixed text-primary font-bold rounded-xl hover:bg-white transition-colors cursor-pointer">Đăng tuyển ngay</button>
            </div>
            
            <!-- For Job Seekers -->
            <div class="bg-white/5 p-12 rounded-[2rem] border border-white/10 backdrop-blur-sm">
              <h3 class="font-headline-lg text-headline-lg mb-8 flex items-center gap-4">
                <span class="bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">2</span>
                Dành cho Người tìm việc
              </h3>
              <div class="space-y-10">
                <div class="flex gap-6">
                  <div class="text-secondary-fixed"><span class="material-symbols-outlined text-4xl">person_search</span></div>
                  <div>
                    <p class="font-title-lg text-title-lg mb-2">Tạo hồ sơ chuyên nghiệp</p>
                    <p class="font-body-md text-body-md opacity-70">Cập nhật kỹ năng, kinh nghiệm và danh mục sản phẩm của bạn.</p>
                  </div>
                </div>
                <div class="flex gap-6">
                  <div class="text-secondary-fixed"><span class="material-symbols-outlined text-4xl">send</span></div>
                  <div>
                    <p class="font-title-lg text-title-lg mb-2">Gửi đề xuất</p>
                    <p class="font-body-md text-body-md opacity-70">Tìm kiếm dự án phù hợp và gửi lời mời hợp tác đến nhà tuyển dụng.</p>
                  </div>
                </div>
                <div class="flex gap-6">
                  <div class="text-secondary-fixed"><span class="material-symbols-outlined text-4xl">celebration</span></div>
                  <div>
                    <p class="font-title-lg text-title-lg mb-2">Bắt đầu làm việc</p>
                    <p class="font-body-md text-body-md opacity-70">Thực hiện dự án, nâng cao uy tín và nhận thù lao xứng đáng.</p>
                  </div>
                </div>
              </div>
              <button routerLink="/explore" class="mt-12 w-full py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary/80 transition-colors cursor-pointer">Tìm việc ngay</button>
            </div>
          </div>
        </div>
      </section>

      <!-- App Download Banner -->
      <section class="py-24 px-margin-desktop bg-surface-container-low overflow-hidden">
        <div class="max-w-container-max mx-auto">
          <div class="bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 border border-outline-variant shadow-sm">
            
            <!-- Left: Image -->
            <div class="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div class="relative w-full max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border-4 border-surface-container">
                <img src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=800" alt="Agile Works Mobile App" class="w-full h-full object-cover" referrerpolicy="no-referrer">
              </div>
            </div>

            <!-- Right: Content -->
            <div class="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
              <div class="space-y-4">
                <h2 class="font-display-md text-display-md text-primary leading-tight">Kiến tạo sự nghiệp của riêng bạn với ứng dụng Agile Works</h2>
                <p class="font-body-lg text-body-lg text-on-surface-variant max-w-lg mx-auto lg:mx-0">Trải nghiệm tạo hồ sơ, tìm việc, ứng tuyển và hơn thế nữa - chỉ với một ứng dụng duy nhất. Bắt đầu ngay hôm nay!</p>
              </div>

              <div class="space-y-6 pt-4">
                <p class="font-label-md text-label-md uppercase tracking-[0.15em] text-outline font-bold">Tải ứng dụng ngay</p>
                <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                  
                  <!-- QR Code Space -->
                  <div class="w-28 h-28 bg-surface p-2 rounded-xl border border-outline-variant flex items-center justify-center flex-shrink-0">
                    <span class="material-symbols-outlined text-[80px] text-primary">qr_code_2</span>
                  </div>
                  
                  <!-- Store Badges -->
                  <div class="flex flex-col gap-3">
                    <a href="#" class="bg-primary text-on-primary px-6 py-2.5 rounded-xl flex items-center justify-center sm:justify-start gap-3 hover:bg-secondary transition-colors w-[180px] cursor-pointer">
                      <span class="material-symbols-outlined text-[28px]">apple</span>
                      <div class="flex flex-col items-start leading-none gap-0.5">
                        <span class="text-[10px] uppercase font-medium tracking-wide opacity-80">Download on the</span>
                        <span class="text-label-md font-bold">App Store</span>
                      </div>
                    </a>
                    <a href="#" class="bg-primary text-on-primary px-6 py-2.5 rounded-xl flex items-center justify-center sm:justify-start gap-3 hover:bg-secondary transition-colors w-[180px] cursor-pointer">
                      <span class="material-symbols-outlined text-[28px]">shop</span>
                      <div class="flex flex-col items-start leading-none gap-0.5">
                        <span class="text-[10px] uppercase font-medium tracking-wide opacity-80">GET IT ON</span>
                        <span class="text-label-md font-bold">Google Play</span>
                      </div>
                    </a>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
    <app-footer></app-footer>
  `
})
export class LandingComponent {
  authService = inject(AuthService);
}
