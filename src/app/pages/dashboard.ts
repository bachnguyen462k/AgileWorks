import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar';
import { FooterComponent } from '../components/footer';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-navbar></app-navbar>
    <div class="min-h-[calc(100vh-80px)] flex w-full bg-surface overflow-hidden">
      <!-- Sidebars -->
      <aside class="hidden lg:flex flex-col h-[calc(100vh-80px)] w-72 left-0 sticky top-20 bg-surface-container border-r border-outline-variant/50 py-8 gap-4 shadow-sm z-40">
        <div class="px-8 mb-8 mt-2">
            <h1 class="font-headline-sm text-headline-sm text-on-surface tracking-tight">Management</h1>
            <p class="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-widest mt-1">Enterprise Portal</p>
        </div>
        <nav class="flex-1 flex flex-col px-4 gap-2">
            <a class="flex items-center gap-4 text-on-surface-variant px-4 py-3.5 rounded-lg hover:bg-surface-variant/50 hover:text-primary transition-all duration-200 cursor-pointer">
                <span class="material-symbols-outlined text-[22px]">dashboard</span>
                <span class="font-label-md text-label-md">Dashboard</span>
            </a>
            <a class="flex items-center gap-4 text-primary bg-primary-fixed/20 shadow-sm px-4 py-3.5 rounded-lg transition-all duration-200 cursor-pointer">
                <span class="material-symbols-outlined text-[22px]" style="font-variation-settings: 'FILL' 1;">work_history</span>
                <span class="font-label-md text-label-md font-semibold">Active Contracts</span>
            </a>
            <a class="flex items-center gap-4 text-on-surface-variant px-4 py-3.5 rounded-lg hover:bg-surface-variant/50 hover:text-primary transition-all duration-200 cursor-pointer">
                <span class="material-symbols-outlined text-[22px]">receipt_long</span>
                <span class="font-label-md text-label-md">Invoices</span>
            </a>
            <a class="flex items-center gap-4 text-on-surface-variant px-4 py-3.5 rounded-lg hover:bg-surface-variant/50 hover:text-primary transition-all duration-200 cursor-pointer">
                <span class="material-symbols-outlined text-[22px]">settings</span>
                <span class="font-label-md text-label-md">Settings</span>
            </a>
        </nav>
        <div class="px-8 mt-auto mb-4">
            <button class="w-full bg-primary text-on-primary py-3.5 rounded-lg shadow-md hover:bg-secondary transition-all font-label-md flex items-center justify-center gap-2 active:scale-95">
                <span class="material-symbols-outlined text-[20px]">add</span>
                New Project
            </button>
        </div>
      </aside>

      <main class="flex-1 flex flex-col min-w-0 h-full">
        <!-- Content -->
        <div class="p-8 md:p-12 w-full mx-auto pb-24 flex-1">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                    <h2 class="font-headline-lg text-headline-lg text-primary tracking-tight">Việc của tôi</h2>
                    <p class="font-body-md text-on-surface-variant mt-2">Quản lý các dự án và tiến độ hiện tại.</p>
                </div>
                <div class="flex bg-surface-container-high p-1.5 rounded-lg shadow-inner">
                    <button class="px-6 py-2.5 rounded-md font-label-md bg-surface-container-lowest text-primary shadow-sm transition-all font-semibold">Đang làm</button>
                    <button class="px-6 py-2.5 rounded-md font-label-md text-on-surface-variant hover:text-primary transition-all">Chờ duyệt</button>
                    <button class="px-6 py-2.5 rounded-md font-label-md text-on-surface-variant hover:text-primary transition-all">Đã xong</button>
                </div>
            </div>

            <!-- Bento Stats -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div class="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/50 shadow-sm">
                    <div class="flex items-center justify-between mb-4">
                        <span class="material-symbols-outlined text-primary p-2.5 bg-primary-fixed/30 rounded-xl" style="font-variation-settings: 'FILL' 1;">payments</span>
                        <span class="font-label-sm text-secondary bg-secondary-container px-2.5 py-1 rounded-md">+12% vs tháng trước</span>
                    </div>
                    <div class="text-display-md font-display-md text-on-surface mb-1">14.2M</div>
                    <div class="font-label-md text-on-surface-variant">Tổng thu nhập dự kiến (VNĐ)</div>
                </div>
                <!-- Add similar cards if needed to fill out grid -->
                <div class="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/50 shadow-sm">
                    <div class="flex items-center justify-between mb-4">
                        <span class="material-symbols-outlined text-primary p-2.5 bg-primary-fixed/30 rounded-xl" style="font-variation-settings: 'FILL' 1;">task</span>
                    </div>
                    <div class="text-display-md font-display-md text-on-surface mb-1">3</div>
                    <div class="font-label-md text-on-surface-variant">Công việc đang thực hiện</div>
                </div>
                <div class="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/50 shadow-sm">
                    <div class="flex items-center justify-between mb-4">
                        <span class="material-symbols-outlined text-primary p-2.5 bg-primary-fixed/30 rounded-xl" style="font-variation-settings: 'FILL' 1;">star</span>
                        <span class="font-label-sm text-on-primary bg-primary px-2.5 py-1 rounded-md">Top Rated</span>
                    </div>
                    <div class="text-display-md font-display-md text-on-surface mb-1">4.9<span class="text-title-lg text-on-surface-variant">/5</span></div>
                    <div class="font-label-md text-on-surface-variant">Đánh giá trung bình</div>
                </div>
            </div>

            <!-- Table -->
            <div class="bg-surface-container-lowest rounded-2xl border border-outline-variant/50 shadow-sm overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr class="bg-surface-container border-b border-outline-variant/50">
                                <th class="px-8 py-5 font-label-md uppercase tracking-wider text-on-surface-variant">Chi tiết công việc</th>
                                <th class="px-8 py-5 font-label-md uppercase tracking-wider text-on-surface-variant">Giá trị</th>
                                <th class="px-8 py-5 font-label-md uppercase tracking-wider text-on-surface-variant">Trạng thái</th>
                                <th class="px-8 py-5 font-label-md uppercase tracking-wider text-on-surface-variant text-right">Hành động</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-outline-variant/30">
                            <!-- Row 1 -->
                            <tr class="hover:bg-surface-container-low transition-colors group">
                                <td class="px-8 py-6">
                                    <div class="flex items-center gap-5">
                                        <div class="w-12 h-12 bg-secondary-container rounded-xl flex items-center justify-center text-on-secondary-container shrink-0">
                                            <span class="material-symbols-outlined">construction</span>
                                        </div>
                                        <div>
                                            <div class="font-title-lg text-title-lg text-on-surface mb-1 leading-snug">Giám sát công trình - Tòa nhà Landmark</div>
                                            <div class="text-label-sm text-on-surface-variant">ID: #AW-8821 • Phường 22, TP.HCM</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-8 py-6">
                                    <div class="font-label-md text-label-md text-primary">500.000 VNĐ / Ngày</div>
                                </td>
                                <td class="px-8 py-6">
                                    <span class="px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[11px] uppercase tracking-widest">Đang làm</span>
                                </td>
                                <td class="px-8 py-6 right-aligned flex justify-end gap-3 items-center h-[88px]">
                                    <button class="bg-primary text-on-primary px-5 py-2.5 rounded-lg font-label-md hover:bg-secondary flex items-center gap-2 shadow-sm transition-all active:scale-95">
                                        <span class="material-symbols-outlined text-[18px]">fingerprint</span> Chấm công
                                    </button>
                                </td>
                            </tr>
                            
                             <!-- Row 2 -->
                            <tr class="hover:bg-surface-container-low transition-colors group">
                                <td class="px-8 py-6">
                                    <div class="flex items-center gap-5">
                                        <div class="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center text-on-primary-fixed shrink-0">
                                            <span class="material-symbols-outlined">design_services</span>
                                        </div>
                                        <div>
                                            <div class="font-title-lg text-title-lg text-on-surface mb-1 leading-snug">Thiết kế UI/UX Dashboard Quản lý</div>
                                            <div class="text-label-sm text-on-surface-variant">Hợp đồng khoán • Làm việc từ xa</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-8 py-6">
                                    <div class="font-label-md text-label-md text-primary">12.500.000 VNĐ</div>
                                </td>
                                <td class="px-8 py-6">
                                    <span class="px-4 py-1.5 rounded-full bg-surface-variant text-on-surface-variant font-label-sm text-[11px] uppercase tracking-widest">Đợi duyệt</span>
                                </td>
                                <td class="px-8 py-6 right-aligned flex justify-end gap-3 items-center h-[88px]">
                                    <button class="bg-primary text-on-primary px-5 py-2.5 rounded-lg font-label-md hover:bg-secondary flex items-center gap-2 shadow-sm transition-all active:scale-95">
                                        <span class="material-symbols-outlined text-[18px]">check_circle</span> Hoàn thành
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </main>
    </div>
    <app-footer></app-footer>
  `
})
export class DashboardComponent {}
