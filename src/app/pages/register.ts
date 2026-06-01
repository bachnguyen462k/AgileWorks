import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../components/navbar';
import { FooterComponent } from '../components/footer';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, NavbarComponent, FooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-navbar></app-navbar>
    <main class="bg-surface text-on-surface min-h-[calc(100vh-80px)] flex items-center justify-center py-16 px-margin-mobile md:px-margin-desktop">
        <div class="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <!-- Left Side -->
          <div class="hidden md:flex md:col-span-6 flex-col gap-8 pr-8">
            <div class="space-y-4">
              <h1 class="font-display-md text-display-md text-primary leading-tight">Xây dựng tương lai linh<br/>hoạt cùng Agile Works.</h1>
              <p class="font-body-lg text-body-lg text-on-surface-variant">Kết nối với mạng lưới chuyên gia hàng đầu và tìm kiếm những cơ hội bứt phá trong sự nghiệp của bạn.</p>
            </div>
            <div class="w-full h-[320px] rounded-xl overflow-hidden shadow-lg border border-outline-variant">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Agile Works Platform Concept" class="w-full h-full object-cover" referrerpolicy="no-referrer" />
            </div>
          </div>

          <!-- Right Side: Register Form -->
          <div class="md:col-span-6 flex justify-center">
            <div class="w-full max-w-[540px] bg-surface-container-lowest p-10 rounded-xl shadow-[0_8px_30px_rgb(0,58,52,0.08)] border border-outline-variant">
              <div class="mb-8">
                <h2 class="font-headline-lg text-headline-lg text-primary mb-2">Tạo tài khoản mới</h2>
                <p class="font-body-md text-body-md text-on-surface-variant">Bắt đầu hành trình chuyên nghiệp của bạn ngay hôm nay.</p>
              </div>
              
              <form class="space-y-6" (submit)="$event.preventDefault()">
                <!-- Social Logins -->
                <div class="grid grid-cols-2 gap-4">
                  <button type="button" class="flex items-center justify-center gap-2 py-3 px-4 rounded-lg border border-outline-variant text-on-surface hover:bg-surface-container transition-all cursor-pointer">
                    <img alt="Google Logo" class="w-5 h-5" referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc6tMUuvosF0uFcTicObQ3ppMdrNNh5WTcRbTyGKhEO0lZV3eEZfeJE7-urnJ1IPkmwks9PUIAzfhIJYc3P0LbeJ8q3Kin18ImNqNS6CU19G6tSy2Nith9TxOht_EjMmoAivUyKhVhtMr9ZmvfwOMG8BZwO2WXZoNaX6T5GVcpxWSMqIbsUUS-NcOKsm8ePL20P0UaosrV6yVaBOA5HoeoK6fqaGHNd3kHHqXpNJ2-5fb2tmHJAzqPYYXkxbdN-dupu8qsZqUXDfg"/>
                    <span class="font-label-md text-label-md">Google</span>
                  </button>
                  <button type="button" class="flex items-center justify-center gap-2 py-3 px-4 rounded-lg border border-outline-variant text-on-surface hover:bg-surface-container transition-all cursor-pointer">
                    <span class="material-symbols-outlined text-[20px]">corporate_fare</span>
                    <span class="font-label-md text-label-md">SSO Doanh nghiệp</span>
                  </button>
                </div>

                <!-- Divider -->
                <div class="relative py-2">
                  <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-outline-variant"></div>
                  </div>
                  <div class="relative flex justify-center text-label-sm text-label-sm uppercase">
                    <span class="bg-surface-container-lowest px-4 text-on-surface-variant">Hoặc đăng ký bằng Email</span>
                  </div>
                </div>

                <!-- Name Field -->
                <div class="space-y-2">
                  <label class="font-label-md text-label-md text-on-surface" for="fullname">Họ tên</label>
                  <input class="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md text-body-md bg-surface" id="fullname" placeholder="Nguyễn Văn A" type="text"/>
                </div>

                <div class="grid grid-cols-2 gap-4">
                  <!-- Email Field -->
                  <div class="space-y-2">
                    <label class="font-label-md text-label-md text-on-surface" for="email">Email công việc</label>
                    <input class="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md text-body-md bg-surface" id="email" placeholder="name@company.com" type="email"/>
                  </div>
                  <!-- Phone Field -->
                  <div class="space-y-2">
                    <label class="font-label-md text-label-md text-on-surface" for="phone">Số điện thoại</label>
                    <input class="w-full px-4 py-3 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md text-body-md bg-surface" id="phone" placeholder="090 123 4567" type="tel"/>
                  </div>
                </div>

                <!-- Password Field -->
                <div class="space-y-2">
                  <label class="font-label-md text-label-md text-on-surface" for="password">Mật khẩu</label>
                  <div class="relative">
                    <input class="w-full pl-4 pr-12 py-3 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md text-body-md bg-surface" id="password" placeholder="••••••••" [type]="showPassword() ? 'text' : 'password'"/>
                    <button class="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors cursor-pointer" type="button" (click)="togglePassword()">
                      <span class="material-symbols-outlined">{{ showPassword() ? 'visibility' : 'visibility_off' }}</span>
                    </button>
                  </div>
                  <p class="font-label-sm text-label-sm text-on-surface-variant pt-1">Tối thiểu 8 ký tự, bao gồm chữ và số.</p>
                </div>

                <!-- Checkbox -->
                <div class="flex gap-3 items-start">
                  <input type="checkbox" id="terms" class="mt-1 w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary bg-surface cursor-pointer"/>
                  <label for="terms" class="font-body-sm text-on-surface-variant cursor-pointer">
                    Tôi đồng ý với <strong class="text-on-surface">Điều khoản sử dụng</strong> và <strong class="text-on-surface">Chính sách bảo mật</strong> của Agile Works.
                  </label>
                </div>

                <!-- Submit Button -->
                <button class="w-full bg-primary text-on-primary py-4 rounded-lg font-title-lg text-title-lg hover:bg-secondary active:scale-[0.98] transition-all shadow-md cursor-pointer" type="submit">
                  Đăng ký tài khoản
                </button>

                <div class="text-center pt-2">
                  <p class="font-body-md text-on-surface-variant">Đã có tài khoản? <a routerLink="/login" class="font-bold text-on-surface hover:text-primary cursor-pointer transition-colors">Đăng nhập ngay</a></p>
                </div>

              </form>
            </div>
          </div>
        </div>
      </main>
      <app-footer></app-footer>
  `
})
export class RegisterComponent {
  showPassword = signal(false);

  togglePassword() {
    this.showPassword.update(v => !v);
  }
}
