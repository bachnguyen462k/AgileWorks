import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="bg-surface text-on-surface min-h-screen flex items-center justify-center py-16 px-margin-mobile md:px-margin-desktop">
        <div class="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <!-- Left Side -->
          <div class="hidden md:flex md:col-span-6 flex-col gap-8 pr-8">
            <div class="space-y-4">
              <a routerLink="/" class="inline-block font-display-md text-display-md text-primary font-bold tracking-tight hover:opacity-80 transition-opacity">
                Agile Works
              </a>
              <h1 class="font-display-md text-display-md text-primary leading-tight">Nâng tầm quản trị dự án với sự linh hoạt tối đa.</h1>
              <p class="font-body-lg text-body-lg text-on-surface-variant">Tham gia cùng hàng nghìn chuyên gia để tối ưu hóa quy trình làm việc và thúc đẩy hiệu suất nhóm của bạn.</p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-surface-container-high p-6 rounded-xl border border-outline-variant">
                <span class="material-symbols-outlined text-primary text-3xl mb-2">speed</span>
                <h3 class="font-title-lg text-title-lg text-primary">Tốc độ</h3>
                <p class="font-label-sm text-label-sm text-on-surface-variant">Triển khai công việc nhanh hơn 40%.</p>
              </div>
              <div class="bg-primary-container p-6 rounded-xl border border-primary">
                <span class="material-symbols-outlined text-on-primary-container text-3xl mb-2">security</span>
                <h3 class="font-title-lg text-title-lg text-on-primary">Bảo mật</h3>
                <p class="font-label-sm text-label-sm text-on-primary-container">Dữ liệu doanh nghiệp an toàn tuyệt đối.</p>
              </div>
            </div>
          </div>

          <!-- Right Side: Login Form -->
          <div class="md:col-span-6 flex justify-center">
            <div class="w-full max-w-[480px] bg-surface-container-lowest p-10 rounded-xl shadow-[0_8px_30px_rgb(0,58,52,0.08)] border border-outline-variant">
              <div class="flex justify-between items-center mb-8">
                <a routerLink="/" class="md:hidden inline-block font-display-md text-display-md text-primary font-bold tracking-tight hover:opacity-80 transition-opacity">
                  Agile Works
                </a>
                <a routerLink="/" class="inline-flex items-center gap-1 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
                  <span class="material-symbols-outlined text-[18px]">arrow_back</span>
                  Trang chủ
                </a>
              </div>
              <div class="text-center mb-8">
                <h2 class="font-headline-lg text-headline-lg text-primary mb-2">Chào mừng trở lại</h2>
                <p class="font-body-md text-body-md text-on-surface-variant">Vui lòng nhập thông tin để truy cập hệ thống</p>
              </div>
              <form class="space-y-6" (submit)="$event.preventDefault()">
                <!-- Email Field -->
                <div class="space-y-2">
                  <label class="font-label-md text-label-md text-on-surface" for="email">Email công việc</label>
                  <div class="relative">
                    <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">mail</span>
                    <input class="w-full pl-10 pr-4 py-3 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md text-body-md bg-surface" id="email" placeholder="ten@congty.com" type="email"/>
                  </div>
                </div>
                <!-- Password Field -->
                <div class="space-y-2">
                  <div class="flex justify-between items-center">
                    <label class="font-label-md text-label-md text-on-surface" for="password">Mật khẩu</label>
                    <a class="font-label-sm text-label-sm text-secondary hover:underline cursor-pointer">Quên mật khẩu?</a>
                  </div>
                  <div class="relative">
                    <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">lock</span>
                    <input class="w-full pl-10 pr-12 py-3 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md text-body-md bg-surface" id="password" placeholder="••••••••" [type]="showPassword() ? 'text' : 'password'"/>
                    <button class="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors cursor-pointer" type="button" (click)="togglePassword()">
                      <span class="material-symbols-outlined">{{ showPassword() ? 'visibility' : 'visibility_off' }}</span>
                    </button>
                  </div>
                </div>
                <!-- Submit Button -->
                <button class="w-full bg-primary text-on-primary py-4 rounded-lg font-title-lg text-title-lg hover:bg-secondary active:scale-[0.98] transition-all shadow-md cursor-pointer" type="submit">
                  Đăng nhập
                </button>

                <div class="text-center pt-2">
                  <p class="font-body-md text-on-surface-variant">Chưa có tài khoản? <a routerLink="/register" class="font-bold text-on-surface hover:text-primary cursor-pointer transition-colors">Đăng ký ngay</a></p>
                </div>

                <!-- Divider -->
                <div class="relative py-4">
                  <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-outline-variant"></div>
                  </div>
                  <div class="relative flex justify-center text-label-sm text-label-sm uppercase">
                    <span class="bg-surface-container-lowest px-4 text-on-surface-variant">Hoặc đăng nhập bằng</span>
                  </div>
                </div>

                <!-- Social Logins -->
                <div class="grid grid-cols-2 gap-4">
                  <button type="button" class="flex items-center justify-center gap-2 py-3 px-4 rounded-lg border border-outline-variant hover:bg-surface-container transition-all cursor-pointer">
                    <img alt="Google Logo" class="w-5 h-5" referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc6tMUuvosF0uFcTicObQ3ppMdrNNh5WTcRbTyGKhEO0lZV3eEZfeJE7-urnJ1IPkmwks9PUIAzfhIJYc3P0LbeJ8q3Kin18ImNqNS6CU19G6tSy2Nith9TxOht_EjMmoAivUyKhVhtMr9ZmvfwOMG8BZwO2WXZoNaX6T5GVcpxWSMqIbsUUS-NcOKsm8ePL20P0UaosrV6yVaBOA5HoeoK6fqaGHNd3kHHqXpNJ2-5fb2tmHJAzqPYYXkxbdN-dupu8qsZqUXDfg"/>
                    <span class="font-label-md text-label-md text-on-surface">Google</span>
                  </button>
                  <button type="button" class="flex items-center justify-center gap-2 py-3 px-4 rounded-lg border border-outline-variant hover:bg-surface-container transition-all cursor-pointer">
                    <img alt="Facebook Logo" class="w-5 h-5" referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5Y5DbQhwCSLlH_XzUMdpqnKzZY8nBMTKVTW8A_CmSMXF2dnfBMvoItrZrkPKgPlNqrNjR6BpnWyEtOXMlsUWJEKlYlKmmTdsO2Et_sF46xTlq7BtgvCWWsQcBYMK-19LRHJPcXgzieimwABZF3pUFo5lCvfSnnmGQkFRgmj66l56maKEQc9FwnB466zZRkSNGXrGkJJPgt7X16YYFki7wALHHu9MOaVpNm0v9nLExzGU7sDu9RS7pGp4YufrN2GaoOh1M8thsAYI"/>
                    <span class="font-label-md text-label-md text-on-surface">Facebook</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
  `
})
export class LoginComponent {
  showPassword = signal(false);

  togglePassword() {
    this.showPassword.update(v => !v);
  }
}
