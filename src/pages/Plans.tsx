import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Calendar, Clock, CheckCircle2, AlertCircle } from "lucide-react";

const plantingPlans = [
  {
    id: 1,
    name: "Trồng mới Keo lai - Khu vực D",
    plot: "Lô D1-K3",
    area: 20,
    species: "Keo lai",
    startDate: "2024-01-15",
    endDate: "2024-02-15",
    status: "Đang thực hiện",
    progress: 35,
    activities: [
      { name: "Chuẩn bị đất", status: "Hoàn thành", date: "2024-01-05" },
      { name: "Gieo trồng", status: "Đang thực hiện", date: "2024-01-15" },
      { name: "Tưới nước định kỳ", status: "Kế hoạch", date: "2024-02-01" },
    ],
  },
  {
    id: 2,
    name: "Chăm sóc Bạch đàn - Khu vực B",
    plot: "Lô B3-K2",
    area: 8.2,
    species: "Bạch đàn",
    startDate: "2024-01-10",
    endDate: "2024-03-10",
    status: "Kế hoạch",
    progress: 0,
    activities: [
      { name: "Làm cỏ", status: "Kế hoạch", date: "2024-01-10" },
      { name: "Bón phân NPK", status: "Kế hoạch", date: "2024-02-10" },
      { name: "Phòng trừ sâu bệnh", status: "Kế hoạch", date: "2024-03-10" },
    ],
  },
  {
    id: 3,
    name: "Tỉa thưa rừng Mỡ",
    plot: "Lô C2-K1",
    area: 12,
    species: "Mỡ",
    startDate: "2023-12-01",
    endDate: "2023-12-20",
    status: "Hoàn thành",
    progress: 100,
    activities: [
      { name: "Đánh dấu cây tỉa", status: "Hoàn thành", date: "2023-12-01" },
      { name: "Tỉa thưa", status: "Hoàn thành", date: "2023-12-10" },
      { name: "Thu dọn", status: "Hoàn thành", date: "2023-12-20" },
    ],
  },
];

const careSchedule = [
  {
    id: 1,
    activity: "Bón phán lần 1",
    plot: "Lô A1-K5",
    species: "Keo lai",
    scheduledDate: "2024-01-20",
    type: "Bón phân",
    notes: "NPK 16-16-8, 150kg/ha",
  },
  {
    id: 2,
    activity: "Làm cỏ vòng 1",
    plot: "Lô B3-K2",
    species: "Bạch đàn",
    scheduledDate: "2024-01-25",
    type: "Chăm sóc",
    notes: "Bán kính 1m quanh gốc cây",
  },
  {
    id: 3,
    activity: "Kiểm tra sinh trưởng",
    plot: "Lô A1-K5",
    species: "Keo lai",
    scheduledDate: "2024-02-01",
    type: "Giám sát",
    notes: "Đo chiều cao, đánh giá tỷ lệ sống",
  },
  {
    id: 4,
    activity: "Tưới nước bổ sung",
    plot: "Lô D1-K3",
    species: "Keo tai tượng",
    scheduledDate: "2024-02-05",
    type: "Tưới nước",
    notes: "Nếu thời tiết khô hạn",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Hoàn thành":
      return "bg-success/10 text-success border-success/20";
    case "Đang thực hiện":
      return "bg-info/10 text-info border-info/20";
    case "Kế hoạch":
      return "bg-warning/10 text-warning border-warning/20";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

const getActivityIcon = (status: string) => {
  switch (status) {
    case "Hoàn thành":
      return <CheckCircle2 className="h-4 w-4 text-success" />;
    case "Đang thực hiện":
      return <Clock className="h-4 w-4 text-info" />;
    case "Kế hoạch":
      return <AlertCircle className="h-4 w-4 text-warning" />;
    default:
      return null;
  }
};

export default function Plans() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Kế hoạch trồng rừng</h1>
          <p className="text-muted-foreground mt-1">
            Lập và theo dõi kế hoạch gieo trồng, chăm sóc, tỉa thưa
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Tạo kế hoạch mới
        </Button>
      </div>

      <Tabs defaultValue="plans" className="space-y-6">
        <TabsList>
          <TabsTrigger value="plans">Kế hoạch trồng</TabsTrigger>
          <TabsTrigger value="schedule">Lịch chăm sóc</TabsTrigger>
        </TabsList>

        <TabsContent value="plans" className="space-y-4">
          {/* Summary Stats */}
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Kế hoạch đang thực hiện
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-info">1</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Kế hoạch sắp tới
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-warning">1</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Hoàn thành tháng này
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-success">1</div>
              </CardContent>
            </Card>
          </div>

          {/* Plans List */}
          <div className="space-y-4">
            {plantingPlans.map((plan) => (
              <Card key={plan.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      <CardDescription className="mt-1">
                        {plan.plot} • {plan.area} ha • {plan.species}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className={getStatusColor(plan.status)}>
                      {plan.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Bắt đầu:</span>
                      <span className="text-sm font-medium text-foreground">
                        {plan.startDate}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Kết thúc:</span>
                      <span className="text-sm font-medium text-foreground">
                        {plan.endDate}
                      </span>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tiến độ</span>
                      <span className="font-medium text-foreground">{plan.progress}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-primary transition-all"
                        style={{ width: `${plan.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Activities */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">
                      Các hoạt động
                    </h4>
                    <div className="space-y-2">
                      {plan.activities.map((activity, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between rounded-lg border border-border bg-muted/50 p-3"
                        >
                          <div className="flex items-center gap-3">
                            {getActivityIcon(activity.status)}
                            <span className="text-sm font-medium text-foreground">
                              {activity.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-xs text-muted-foreground">
                              {activity.date}
                            </span>
                            <Badge
                              variant="outline"
                              className={getStatusColor(activity.status)}
                            >
                              {activity.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm">
                      Cập nhật tiến độ
                    </Button>
                    <Button variant="outline" size="sm">
                      Xem chi tiết
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Lịch chăm sóc định kỳ</CardTitle>
              <CardDescription>
                Các hoạt động chăm sóc được lên lịch trong tháng tới
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {careSchedule.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start gap-4 rounded-lg border border-border bg-card p-4 hover:bg-muted/50 transition-colors"
                  >
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {item.activity}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {item.plot} • {item.species}
                          </p>
                        </div>
                        <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                          {item.type}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">
                            Ngày: {item.scheduledDate}
                          </span>
                        </div>
                      </div>
                      {item.notes && (
                        <p className="text-sm text-muted-foreground bg-muted/50 rounded p-2">
                          💡 {item.notes}
                        </p>
                      )}
                    </div>
                    <Button variant="outline" size="sm">
                      Hoàn thành
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
