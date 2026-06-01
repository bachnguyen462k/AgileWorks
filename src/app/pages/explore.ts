import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar';
import { FooterComponent } from '../components/footer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-navbar></app-navbar>
    <main class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full flex-grow flex flex-col lg:flex-row gap-8 py-8 w-full">
      <!-- Sidebar Filters -->
      <aside class="w-full lg:w-72 flex flex-col gap-8 flex-shrink-0">
        <div class="bg-surface-container rounded-xl p-6 border border-outline-variant/30">
          <h2 class="font-title-lg text-title-lg mb-6 text-primary flex items-center gap-2">
            <span class="material-symbols-outlined">filter_list</span> Bộ lọc
          </h2>
          <!-- Category Filter -->
          <div class="mb-8">
            <h3 class="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant mb-4">Lĩnh vực</h3>
            <div class="flex flex-col gap-3">
              <label class="flex items-center gap-3 cursor-pointer group">
                <input checked class="rounded border-outline-variant text-secondary focus:ring-secondary w-5 h-5 accent-secondary" type="checkbox"/>
                <span class="font-body-md text-on-surface group-hover:text-primary transition-colors">Công nghệ phần mềm</span>
              </label>
              <label class="flex items-center gap-3 cursor-pointer group">
                <input class="rounded border-outline-variant text-secondary focus:ring-secondary w-5 h-5 accent-secondary" type="checkbox"/>
                <span class="font-body-md text-on-surface group-hover:text-primary transition-colors">Thiết kế đồ họa</span>
              </label>
              <label class="flex items-center gap-3 cursor-pointer group">
                <input class="rounded border-outline-variant text-secondary focus:ring-secondary w-5 h-5 accent-secondary" type="checkbox"/>
                <span class="font-body-md text-on-surface group-hover:text-primary transition-colors">Viết lách & Dịch thuật</span>
              </label>
              <label class="flex items-center gap-3 cursor-pointer group">
                <input class="rounded border-outline-variant text-secondary focus:ring-secondary w-5 h-5 accent-secondary" type="checkbox"/>
                <span class="font-body-md text-on-surface group-hover:text-primary transition-colors">Marketing & Sales</span>
              </label>
            </div>
          </div>
          <!-- Location Filter -->
          <div>
            <h3 class="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant mb-4">Địa điểm</h3>
            <select class="w-full bg-surface-container-highest border border-outline-variant rounded-lg py-3 px-3 font-body-md text-on-surface focus:ring-primary outline-none">
              <option>Tất cả địa điểm</option>
              <option>Hà Nội</option>
              <option>TP. Hồ Chí Minh</option>
              <option>Đà Nẵng</option>
              <option>Làm việc từ xa</option>
            </select>
          </div>
          <button class="w-full mt-8 py-3 bg-primary text-on-primary font-label-md rounded-lg hover:bg-secondary transition-colors shadow-sm active:scale-95">
            Áp dụng bộ lọc
          </button>
        </div>
      </aside>

      <!-- Main Listing Grid -->
      <section class="flex-1">
        <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8">
          <div>
            <h1 class="font-headline-lg text-headline-lg text-primary">Công việc dành cho bạn</h1>
            <p class="font-body-md text-on-surface-variant mt-1">Tìm thấy 128 công việc phù hợp với kỹ năng của bạn</p>
          </div>
          <div class="flex gap-4">
            <button class="flex items-center gap-2 px-4 py-2 bg-surface-container border border-outline-variant rounded-lg font-label-md text-on-surface hover:bg-surface-variant/50 transition-all">
              Mới nhất <span class="material-symbols-outlined text-sm">keyboard_arrow_down</span>
            </button>
          </div>
        </div>

        <!-- Grid Layout -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
          <!-- Job Card 1 -->
          <div routerLink="/jobs/1" class="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col hover:-translate-y-1">
            <div class="flex justify-between items-start mb-4">
              <span class="px-3 py-1 bg-secondary-container text-on-secondary-container text-label-sm rounded-full">Remote</span>
              <button class="text-outline-variant hover:text-error transition-colors">
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">favorite</span>
              </button>
            </div>
            <h3 class="font-title-lg text-title-lg text-on-surface mb-2 group-hover:text-secondary transition-colors line-clamp-2">Thiết kế UI/UX cho App Tài chính Fintech</h3>
            <div class="flex items-center gap-2 text-on-surface-variant font-body-md mb-4">
              <span class="material-symbols-outlined text-[18px]">location_on</span>
              <span>Quận 1, TP. HCM</span>
            </div>
            <div class="mt-auto pt-4 border-t border-outline-variant/30">
              <div class="flex justify-between items-center mb-4">
                <span class="font-headline-md text-headline-md text-primary">2.500.000 <span class="text-label-sm font-normal">đ/người</span></span>
              </div>
              <div class="grid grid-cols-2 gap-4 text-label-sm text-on-surface-variant">
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-[16px]">schedule</span>
                  <span>Còn 3 ngày</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-[16px]">group</span>
                  <span>Tuyển 2 người</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Job Card 2 -->
          <div routerLink="/jobs/2" class="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col hover:-translate-y-1">
            <div class="flex justify-between items-start mb-4">
              <span class="px-3 py-1 bg-primary-fixed text-on-primary-fixed text-label-sm rounded-full">Toàn thời gian</span>
              <button class="text-error hover:scale-110 transition-transform">
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">favorite</span>
              </button>
            </div>
            <h3 class="font-title-lg text-title-lg text-on-surface mb-2 group-hover:text-secondary transition-colors line-clamp-2">Senior React Developer - Dự án Thương mại điện tử</h3>
            <div class="flex items-center gap-2 text-on-surface-variant font-body-md mb-4">
              <span class="material-symbols-outlined text-[18px]">location_on</span>
              <span>Cầu Giấy, Hà Nội</span>
            </div>
            <div class="mt-auto pt-4 border-t border-outline-variant/30">
              <div class="flex justify-between items-center mb-4">
                <span class="font-headline-md text-headline-md text-primary">15.000.000 <span class="text-label-sm font-normal">đ/người</span></span>
              </div>
              <div class="grid grid-cols-2 gap-4 text-label-sm text-on-surface-variant">
                <div class="flex items-center gap-2 text-error font-bold">
                  <span class="material-symbols-outlined text-[16px]">error</span>
                  <span>Còn 12 giờ</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-[16px]">group</span>
                  <span>Tuyển 1 người</span>
                </div>
              </div>
            </div>
          </div>
          
           <!-- Job Card 3 -->
          <div routerLink="/jobs/3" class="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col hover:-translate-y-1">
            <div class="flex justify-between items-start mb-4">
              <span class="px-3 py-1 bg-surface-variant text-on-surface-variant text-label-sm rounded-full">Freelance</span>
              <button class="text-outline-variant hover:text-error transition-colors">
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">favorite</span>
              </button>
            </div>
            <h3 class="font-title-lg text-title-lg text-on-surface mb-2 group-hover:text-secondary transition-colors line-clamp-2">Phát triển UI/UX cho ứng dụng Quản lý Dự án</h3>
            <div class="flex items-center gap-2 text-on-surface-variant font-body-md mb-4">
              <span class="material-symbols-outlined text-[18px]">location_on</span>
              <span>Làm việc từ xa</span>
            </div>
            <div class="mt-auto pt-4 border-t border-outline-variant/30">
              <div class="flex justify-between items-center mb-4">
                <span class="font-headline-md text-headline-md text-primary">8.500.000 <span class="text-label-sm font-normal">đ/người</span></span>
              </div>
              <div class="grid grid-cols-2 gap-4 text-label-sm text-on-surface-variant">
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-[16px]">schedule</span>
                  <span>Còn 5 ngày</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-[16px]">group</span>
                  <span>Tuyển 1 người</span>
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
export class ExploreComponent {}
