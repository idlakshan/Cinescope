import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/dashboard/admin-sidebar";
import AdminHeader from "@/components/dashboard/admin-header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <div className="flex flex-col w-full">
        <AdminHeader />
        <SidebarInset>
          <div className="flex-1 p-4 md:p-8">{children}</div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}