import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children }: {children: React.ReactNode}) {
  return (
    <div className="flex h-screen">
      <SideNav />
      <main className="flex-grow p-6">{children}</main>
    </div>
  );
}