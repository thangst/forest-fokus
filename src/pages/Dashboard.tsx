import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TreePine, Sprout, MapPin, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Tổng diện tích rừng",
    value: "2,450",
    unit: "ha",
    change: "+12%",
    icon: TreePine,
    color: "text-primary",
  },
  {
    title: "Số loài đang trồng",
    value: "45",
    unit: "loài",
    change: "+3",
    icon: Sprout,
    color: "text-accent",
  },
  {
    title: "Số lô/khoảnh",
    value: "128",
    unit: "lô",
    change: "+8",
    icon: MapPin,
    color: "text-chart-3",
  },
  {
    title: "Tỷ lệ sống TB",
    value: "94.5",
    unit: "%",
    change: "+2.3%",
    icon: TrendingUp,
    color: "text-success",
  },
];

const recentActivities = [
  {
    id: 1,
    action: "Hoàn thành trồng mới",
    plot: "Lô A1 - Khoảnh 5",
    species: "Keo lai",
    date: "2024-01-05",
    area: "15 ha",
  },
  {
    id: 2,
    action: "Tỉa thưa",
    plot: "Lô B3 - Khoảnh 2",
    species: "Bạch đàn",
    date: "2024-01-03",
    area: "8 ha",
  },
  {
    id: 3,
    action: "Bón phân",
    plot: "Lô C2 - Khoảnh 1",
    species: "Mỡ",
    date: "2024-01-02",
    area: "12 ha",
  },
];

const upcomingPlans = [
  {
    id: 1,
    activity: "Trồng mới",
    plot: "Lô D1 - Khoảnh 3",
    species: "Keo tai tượng",
    plannedDate: "2024-01-15",
    area: "20 ha",
  },
  {
    id: 2,
    activity: "Chăm sóc định kỳ",
    plot: "Lô A2 - Khoảnh 4",
    species: "Keo lai",
    plannedDate: "2024-01-18",
    area: "18 ha",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Tổng quan hệ thống</h1>
        <p className="text-muted-foreground mt-1">
          Theo dõi và quản lý toàn bộ hoạt động trồng rừng
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <div className="text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.unit}</div>
                </div>
                <p className="text-sm text-success mt-1">
                  {stat.change} so với tháng trước
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Hoạt động gần đây</CardTitle>
            <CardDescription>Các hoạt động đã thực hiện trong tuần qua</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-4 rounded-lg border border-border bg-muted/50 p-4"
                >
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground">{activity.action}</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{activity.area}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{activity.plot}</p>
                    <p className="text-sm text-accent">Giống: {activity.species}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">{activity.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Plans */}
        <Card>
          <CardHeader>
            <CardTitle>Kế hoạch sắp tới</CardTitle>
            <CardDescription>Các hoạt động được lên lịch trong 2 tuần tới</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingPlans.map((plan) => (
                <div
                  key={plan.id}
                  className="flex items-start gap-4 rounded-lg border border-border bg-card p-4"
                >
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground">{plan.activity}</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{plan.area}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.plot}</p>
                    <p className="text-sm text-accent">Giống: {plan.species}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-primary">{plan.plannedDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
