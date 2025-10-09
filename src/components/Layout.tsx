import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  TreePine, 
  Sprout, 
  Calendar, 
  MapPin, 
  TrendingUp,
  FileText,
  LayoutDashboard,
  Settings,
  ClipboardList
} from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const navigation = [
  { name: "Tổng quan", href: "/", icon: LayoutDashboard },
  { name: "Danh mục giống", href: "/species", icon: TreePine },
  { name: "Nguồn giống", href: "/seedlings", icon: Sprout },
  { name: "Kế hoạch trồng", href: "/plans", icon: Calendar },
  { name: "Quản lý lô/khoảnh", href: "/plots", icon: MapPin },
  { name: "Theo dõi sinh trưởng", href: "/monitoring", icon: TrendingUp },
  { name: "Phân công điều tra", href: "/assignments", icon: ClipboardList },
  { name: "Báo cáo", href: "/reports", icon: FileText },
];

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-50 w-64 border-r border-border bg-card">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center gap-2 border-b border-border px-6">
            <TreePine className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-lg font-bold text-foreground">ForestPro</h1>
              <p className="text-xs text-muted-foreground">Quản lý rừng trồng</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-4">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Settings */}
          <div className="border-t border-border p-4">
            <Link
              to="/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Settings className="h-5 w-5" />
              Cài đặt
            </Link>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="pl-64">
        <main className="min-h-screen p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
