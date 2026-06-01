import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NavbarComponent } from '../components/navbar';
import { FooterComponent } from '../components/footer';

@Component({
  selector: 'app-post-job',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-navbar></app-navbar>
    <main class="pt-16 pb-24 px-margin-mobile md:px-margin-desktop flex-1 w-full flex items-center justify-center bg-surface">
      <div class="max-w-[800px] w-full mx-auto">
        <div class="mb-10 text-center">
            <h1 class="font-headline-lg text-headline-lg text-primary mb-3">Đăng tin tuyển dụng mới</h1>
            <p class="font-body-md text-body-md text-on-surface-variant max-w-lg mx-auto">Vui lòng điền các thông tin chi tiết để tìm kiếm ứng viên phù hợp nhất cho dự án của bạn.</p>
        </div>
        
        <form class="bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-sm border border-outline-variant/50 space-y-8" (submit)="$event.preventDefault()">
            <!-- Tiêu đề -->
            <div class="space-y-3">
                <label class="font-label-md text-label-md text-on-surface" for="title">Tiêu đề tuyển dụng <span class="text-error">*</span></label>
                <input class="w-full px-4 py-3.5 rounded-lg border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none bg-surface transition-all font-body-md" id="title" placeholder="Ví dụ: Cần tuyển lập trình viên ReactJS Full-time" required type="text"/>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                <div class="space-y-3">
                    <label class="font-label-md text-label-md text-on-surface" for="category">Danh mục</label>
                    <select class="w-full px-4 py-3.5 rounded-lg border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none bg-surface transition-all font-body-md">
                        <option value="">Chọn danh mục</option>
                        <option value="it">Công nghệ thông tin</option>
                        <option value="design">Thiết kế sáng tạo</option>
                    </select>
                </div>
                <div class="space-y-3">
                    <label class="font-label-md text-label-md text-on-surface" for="quantity">Số lượng tuyển <span class="text-error">*</span></label>
                    <input class="w-full px-4 py-3.5 rounded-lg border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none bg-surface transition-all font-body-md" id="quantity" min="1" placeholder="Số lượng" required type="number"/>
                </div>
            </div>

            <div class="space-y-3">
                <label class="font-label-md text-label-md text-on-surface" for="description">Mô tả công việc</label>
                <textarea class="w-full px-4 py-3.5 rounded-lg border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none bg-surface transition-all font-body-md resize-none" id="description" placeholder="Mô tả chi tiết về yêu cầu, quyền lợi và công việc..." rows="5"></textarea>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                <div class="space-y-3">
                    <label class="font-label-md text-label-md text-on-surface" for="duration">Thời gian thuê</label>
                    <div class="flex gap-3">
                        <input id="duration" class="w-2/3 px-4 py-3.5 rounded-lg border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none bg-surface transition-all font-body-md" placeholder="Số lượng" type="number"/>
                        <select class="w-1/3 px-2 py-3.5 rounded-lg border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none bg-surface transition-all font-body-md">
                            <option>Giờ</option>
                            <option>Ngày</option>
                            <option>Tháng</option>
                        </select>
                    </div>
                </div>
                <div class="space-y-3">
                    <label class="font-label-md text-label-md text-on-surface" for="salary">Mức lương / Giá <span class="text-error">*</span></label>
                    <div class="relative">
                        <input id="salary" class="w-full pr-16 pl-4 py-3.5 rounded-lg border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none bg-surface transition-all font-body-md" placeholder="Ví dụ: 20.000.000" required type="text"/>
                        <span class="absolute right-4 top-3.5 font-label-md text-on-surface-variant">VNĐ</span>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center pt-4">
                <div class="space-y-5">
                    <div class="flex justify-between items-center">
                        <label class="font-label-md text-label-md text-on-surface" for="age-range">Độ tuổi yêu cầu</label>
                        <span class="font-label-md text-primary">18 - {{ age() }}</span>
                    </div>
                    <input id="age-range" class="w-full accent-primary h-2 bg-surface-variant rounded-lg appearance-none cursor-pointer" type="range" min="18" max="60" [value]="age()" (input)="updateAge($event)"/>
                </div>
            </div>

            <div class="pt-8">
                <button class="w-full bg-primary text-on-primary font-title-lg text-title-lg py-5 rounded-lg hover:bg-secondary transition-all active:scale-95 shadow-md flex justify-center items-center gap-3">
                    <span class="material-symbols-outlined">rocket_launch</span>
                    Đăng tin ngay
                </button>
            </div>
        </form>
      </div>
    </main>
    <app-footer></app-footer>
  `
})
export class PostJobComponent {
  age = signal(45);

  updateAge(event: Event) {
    const input = event.target as HTMLInputElement;
    this.age.set(Number(input.value));
  }
}
