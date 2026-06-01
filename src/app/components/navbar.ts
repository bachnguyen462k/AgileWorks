import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="w-full z-50 flex justify-between items-center px-margin-desktop h-20 max-w-container-max mx-auto bg-surface-container-low shadow-sm sticky top-0 border-b border-outline-variant/30">
      <div class="flex items-center gap-12 flex-1">
        <a routerLink="/" class="font-headline-md text-headline-md text-primary transition-opacity hover:opacity-80">Agile Works</a>
        @if (!hideSearch) {
          <div class="relative flex-1 max-w-md hidden md:block">
            <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input class="w-full bg-surface-container-highest border-none rounded-full py-2.5 pl-12 pr-4 font-body-md text-on-surface focus:ring-2 focus:ring-primary-container transition-all outline-none" placeholder="Tìm kiếm công việc, kỹ năng..." type="text"/>
          </div>
        }
      </div>
      <nav class="flex items-center gap-8 ml-12">
        <div class="hidden md:flex gap-8">
          <a routerLink="/explore" routerLinkActive="text-primary border-b-2 border-primary pb-1" [routerLinkActiveOptions]="{exact: false}" class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200">Khám phá</a>
          <a routerLink="/post" routerLinkActive="text-primary border-b-2 border-primary pb-1" [routerLinkActiveOptions]="{exact: true}" class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200">Đăng tin</a>
          <a routerLink="/dashboard" routerLinkActive="text-primary border-b-2 border-primary pb-1" [routerLinkActiveOptions]="{exact: false}" class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200">Việc của tôi</a>
          <a routerLink="/profile" routerLinkActive="text-primary border-b-2 border-primary pb-1" [routerLinkActiveOptions]="{exact: false}" class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200">Hồ sơ</a>
        </div>
        <div class="flex items-center gap-6 ml-4 md:border-l border-outline-variant md:pl-8">
          @if (!authService.isLoggedIn()) {
            <a routerLink="/login" class="px-4 py-2 bg-primary text-on-primary rounded-lg font-label-md hover:bg-secondary transition-colors cursor-pointer whitespace-nowrap hidden lg:block">Đăng nhập</a>
            <a routerLink="/register" class="px-4 py-2 text-primary font-label-md hover:opacity-80 transition-opacity cursor-pointer whitespace-nowrap hidden max-[1150px]:mr-4 lg:block">Đăng ký</a>
          } @else {
            @if (!hideBell) {
              <button class="relative group cursor-pointer p-2 rounded-full hover:bg-surface-variant/20 transition-colors duration-200 active:opacity-80 active:scale-95">
                <span class="material-symbols-outlined text-primary">notifications</span>
                <span class="absolute top-2 right-2 w-2 h-2 bg-error rounded-full outline outline-2 outline-surface-container-low"></span>
              </button>
            }
            <div routerLink="/profile" class="w-10 h-10 rounded-full overflow-hidden border border-outline-variant hover:scale-105 transition-transform cursor-pointer">
              <img alt="User profile photo" class="w-full h-full object-cover" referrerpolicy="no-referrer" src="https://lh3.googleusercontent.com/aida-public/AONx2zo5bV7M66s4Lg7fWpT58O-FwSmsaH_2zK9J-sP9o0S1vM3XN7y1C9R8hU6mC5y9Y6t2Z-g7O0hQhXQ"/>
            </div>
          }
        </div>
      </nav>
    </header>
  `
})
export class NavbarComponent {
  authService = inject(AuthService);
  
  @Input() hideSearch = false;
  @Input() hideBell = false;
}
