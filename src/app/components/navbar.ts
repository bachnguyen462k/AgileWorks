import { ChangeDetectionStrategy, Component, inject, Input, signal, computed } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

interface SearchResult {
  type: 'job' | 'skill' | 'category' | 'profile';
  title: string;
  subtitle: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="w-full z-50 flex justify-between items-center px-margin-desktop h-20 bg-surface-container-low shadow-sm sticky top-0 border-b border-outline-variant/30">
      <div class="flex items-center gap-12 flex-1">
        <a routerLink="/" class="font-headline-md text-headline-md text-primary transition-opacity hover:opacity-80">Agile Works</a>
        @if (!hideSearch) {
          <div class="relative flex-1 max-w-md hidden md:block">
            <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant z-10">search</span>
            <input 
              (input)="onSearchInput($event)"
              (focus)="onFocus()"
              (blur)="onBlur()"
              [value]="searchQuery()"
              class="w-full bg-surface-container-highest border-none rounded-full py-2.5 pl-12 pr-4 font-body-md text-on-surface focus:ring-2 focus:ring-primary-container transition-all outline-none" 
              placeholder="Tìm kiếm công việc, kỹ năng..." 
              type="text"
            />
            
            <!-- Custom Search Dropdown -->
            @if (showDropdown()) {
              <div class="absolute left-0 right-0 top-full mt-2 bg-surface-container-lowest border border-outline-variant rounded-2xl shadow-xl overflow-hidden z-50 animate-fade-in max-h-[420px] flex flex-col">
                <!-- Search status -->
                <div class="px-4 py-2.5 bg-surface-container-low border-b border-outline-variant/30 text-label-sm text-outline font-bold flex justify-between items-center shrink-0">
                  <span>{{ searchQuery() ? 'KẾT QUẢ TÌM KIẾM' : 'GỢI Ý PHỔ BIẾN' }}</span>
                  @if (filteredResults().length > 0) {
                    <span class="text-xs text-primary font-medium">{{ filteredResults().length }} kết quả</span>
                  }
                </div>
                
                <!-- Results List -->
                <div class="overflow-y-auto py-2">
                  @if (filteredResults().length === 0) {
                    <div class="px-6 py-8 text-center text-on-surface-variant">
                      <span class="material-symbols-outlined text-4xl mb-2 text-outline-variant block">search_off</span>
                      <p class="font-body-md">Không tìm thấy kết quả nào cho "{{ searchQuery() }}"</p>
                    </div>
                  } @else {
                    @for (result of filteredResults(); track result.title + result.route) {
                      <a 
                        [routerLink]="result.route"
                        (mousedown)="navigateAndClose(result)"
                        class="flex items-start gap-3 px-4 py-3 hover:bg-surface-container transition-colors duration-200 cursor-pointer border-b border-outline-variant/10 last:border-0"
                      >
                        <div class="p-2 rounded-lg bg-primary-fixed/20 text-primary flex-shrink-0 mt-0.5">
                          <span class="material-symbols-outlined text-[20px]">{{ result.icon }}</span>
                        </div>
                        <div class="flex-1 min-w-0">
                          <div class="font-label-md text-on-surface truncate font-bold">{{ result.title }}</div>
                          <div class="text-[12px] text-on-surface-variant truncate mt-0.5">{{ result.subtitle }}</div>
                        </div>
                        <div class="text-outline-variant self-center">
                          <span class="material-symbols-outlined text-[18px]">chevron_right</span>
                        </div>
                      </a>
                    }
                  }
                </div>
              </div>
            }
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
  router = inject(Router);
  
  @Input() hideSearch = false;
  @Input() hideBell = false;

  searchQuery = signal('');
  isFocused = signal(false);

  showDropdown = computed(() => this.isFocused());

  mockResults: SearchResult[] = [
    {
      type: 'job',
      title: 'Thiết kế UI/UX cho App Tài chính Fintech',
      subtitle: 'Fintech Solutions Co. - Remote - 2.5Tr đ',
      route: '/jobs/1',
      icon: 'design_services'
    },
    {
      type: 'job',
      title: 'Senior React Developer',
      subtitle: 'Dự án Thương mại điện tử - Hà Nội - 15Tr đ',
      route: '/jobs/2',
      icon: 'terminal'
    },
    {
      type: 'job',
      title: 'Phát triển UI/UX cho ứng dụng Quản lý Dự án',
      subtitle: 'Freelance - Remote - 8.5Tr đ',
      route: '/jobs/3',
      icon: 'architecture'
    },
    {
      type: 'profile',
      title: 'Trần Minh Tâm (Chuyên gia phục hồi kiến trúc)',
      subtitle: 'Hà Nội - Đánh giá 4.9* - Hơn 15 năm kinh nghiệm',
      route: '/profile',
      icon: 'person'
    },
    {
      type: 'job',
      title: 'Phục hồi cửa gỗ đình làng (Trần Minh Tâm)',
      subtitle: 'Công việc đã hoàn thành - Chi phí: 500kđ/giờ',
      route: '/profile',
      icon: 'history'
    },
    {
      type: 'job',
      title: 'Chế tác tủ thờ khảm xà cừ',
      subtitle: 'Nội thất gỗ cao cấp - Chạm khắc tinh xảo',
      route: '/profile',
      icon: 'handyman'
    },
    {
      type: 'category',
      title: 'Công nghệ phần mềm & Web Dev',
      subtitle: '342 công việc đang đăng tuyển',
      route: '/explore',
      icon: 'computer'
    },
    {
      type: 'category',
      title: 'Thiết kế đồ họa & UI/UX Design',
      subtitle: '215 công việc đang đăng tuyển',
      route: '/explore',
      icon: 'palette'
    },
    {
      type: 'category',
      title: 'Vận chuyển & Giao hàng',
      subtitle: '124 công việc đang đăng tuyển',
      route: '/explore',
      icon: 'local_shipping'
    }
  ];

  filteredResults = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    if (!query) {
      return this.mockResults.slice(0, 5);
    }
    return this.mockResults.filter(
      item =>
        item.title.toLowerCase().includes(query) ||
        item.subtitle.toLowerCase().includes(query)
    );
  });

  onSearchInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }

  onFocus() {
    this.isFocused.set(true);
  }

  onBlur() {
    setTimeout(() => {
      this.isFocused.set(false);
    }, 200);
  }

  navigateAndClose(result: SearchResult) {
    this.searchQuery.set('');
    this.isFocused.set(false);
    this.router.navigateByUrl(result.route);
  }
}

