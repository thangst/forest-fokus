import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, ArrowUp, ArrowDown, Minus } from "lucide-react";

const monitoringData = [
  {
    id: 1,
    plot: "Lô A1-K5",
    species: "Keo lai",
    age: 10,
    measurements: {
      survivalRate: 95.2,
      avgHeight: 3.2,
      avgDiameter: 4.5,
      density: 1111,
      volume: 8.5,
    },
    lastMeasured: "2024-01-05",
    trends: {
      survivalRate: 0,
      height: 0.8,
      diameter: 0.6,
    },
  },
  {
    id: 2,
    plot: "Lô B3-K2",
    species: "Bạch đàn",
    age: 14,
    measurements: {
      survivalRate: 92.8,
      avgHeight: 4.5,
      avgDiameter: 6.2,
      density: 1250,
      volume: 15.2,
    },
    lastMeasured: "2024-01-03",
    trends: {
      survivalRate: -0.5,
      height: 1.2,
      diameter: 0.9,
    },
  },
  {
    id: 3,
    plot: "Lô C2-K1",
    species: "Mỡ",
    age: 32,
    measurements: {
      survivalRate: 88.5,
      avgHeight: 8.5,
      avgDiameter: 12.5,
      density: 833,
      volume: 45.8,
    },
    lastMeasured: "2024-01-02",
    trends: {
      survivalRate: -1.2,
      height: 0.5,
      diameter: 0.8,
    },
  },
];

const growthHistory = [
  {
    month: "T9/2023",
    height: 2.1,
    diameter: 3.2,
  },
  {
    month: "T10/2023",
    height: 2.5,
    diameter: 3.6,
  },
  {
    month: "T11/2023",
    height: 2.8,
    diameter: 4.0,
  },
  {
    month: "T12/2023",
    height: 3.0,
    diameter: 4.2,
  },
  {
    month: "T1/2024",
    height: 3.2,
    diameter: 4.5,
  },
];

const getTrendIcon = (trend: number) => {
  if (trend > 0) return <ArrowUp className="h-4 w-4 text-success" />;
  if (trend < 0) return <ArrowDown className="h-4 w-4 text-destructive" />;
  return <Minus className="h-4 w-4 text-muted-foreground" />;
};

const getTrendColor = (trend: number) => {
  if (trend > 0) return "text-success";
  if (trend < 0) return "text-destructive";
  return "text-muted-foreground";
};

export default function Monitoring() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Theo dõi sinh trưởng</h1>
          <p className="text-muted-foreground mt-1">
            Giám sát tỷ lệ sống, sinh trưởng và trữ lượng rừng
          </p>
        </div>
        <Button className="gap-2">
          <TrendingUp className="h-4 w-4" />
          Nhập số liệu mới
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tỷ lệ sống TB
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-success">92.2%</div>
            <div className="flex items-center gap-1 mt-1">
              <ArrowUp className="h-3 w-3 text-success" />
              <span className="text-xs text-success">+0.5% so với tháng trước</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Chiều cao TB
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">5.4 m</div>
            <div className="flex items-center gap-1 mt-1">
              <ArrowUp className="h-3 w-3 text-success" />
              <span className="text-xs text-success">+0.8m/tháng</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Đường kính TB
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">7.7 cm</div>
            <div className="flex items-center gap-1 mt-1">
              <ArrowUp className="h-3 w-3 text-success" />
              <span className="text-xs text-success">+0.8cm/tháng</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Trữ lượng TB
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">23.2 m³/ha</div>
            <div className="flex items-center gap-1 mt-1">
              <ArrowUp className="h-3 w-3 text-success" />
              <span className="text-xs text-success">+2.1 m³/ha/tháng</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="current" className="space-y-6">
        <TabsList>
          <TabsTrigger value="current">Số liệu hiện tại</TabsTrigger>
          <TabsTrigger value="history">Lịch sử sinh trưởng</TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="space-y-4">
          {monitoringData.map((data) => (
            <Card key={data.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{data.plot}</CardTitle>
                    <CardDescription className="mt-1">
                      {data.species} • Tuổi: {data.age} tháng • Cập nhật: {data.lastMeasured}
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    Cập nhật
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-5">
                  <div className="rounded-lg border border-border bg-muted/50 p-4">
                    <p className="text-sm text-muted-foreground mb-2">Tỷ lệ sống</p>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold text-success">
                        {data.measurements.survivalRate}%
                      </p>
                      <div className="flex items-center gap-1">
                        {getTrendIcon(data.trends.survivalRate)}
                        <span
                          className={`text-xs font-medium ${getTrendColor(
                            data.trends.survivalRate
                          )}`}
                        >
                          {Math.abs(data.trends.survivalRate)}%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-border bg-muted/50 p-4">
                    <p className="text-sm text-muted-foreground mb-2">Chiều cao TB</p>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold text-foreground">
                        {data.measurements.avgHeight}m
                      </p>
                      <div className="flex items-center gap-1">
                        {getTrendIcon(data.trends.height)}
                        <span
                          className={`text-xs font-medium ${getTrendColor(data.trends.height)}`}
                        >
                          {Math.abs(data.trends.height)}m
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-border bg-muted/50 p-4">
                    <p className="text-sm text-muted-foreground mb-2">Đường kính TB</p>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold text-foreground">
                        {data.measurements.avgDiameter}cm
                      </p>
                      <div className="flex items-center gap-1">
                        {getTrendIcon(data.trends.diameter)}
                        <span
                          className={`text-xs font-medium ${getTrendColor(
                            data.trends.diameter
                          )}`}
                        >
                          {Math.abs(data.trends.diameter)}cm
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-border bg-muted/50 p-4">
                    <p className="text-sm text-muted-foreground mb-2">Mật độ</p>
                    <p className="text-2xl font-bold text-foreground">
                      {data.measurements.density}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">cây/ha</p>
                  </div>

                  <div className="rounded-lg border border-border bg-accent/10 p-4">
                    <p className="text-sm text-muted-foreground mb-2">Trữ lượng</p>
                    <p className="text-2xl font-bold text-accent">
                      {data.measurements.volume}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">m³/ha</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Biểu đồ sinh trưởng - Lô A1-K5 (Keo lai)</CardTitle>
              <CardDescription>
                Theo dõi chiều cao và đường kính qua 5 tháng
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Simple chart representation */}
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-sm font-medium text-muted-foreground">
                      Chiều cao
                    </div>
                    <div className="flex-1 space-y-2">
                      {growthHistory.map((record) => (
                        <div key={record.month} className="flex items-center gap-2">
                          <span className="w-16 text-xs text-muted-foreground">
                            {record.month}
                          </span>
                          <div className="flex-1 h-8 rounded-lg bg-muted overflow-hidden">
                            <div
                              className="h-full bg-primary transition-all"
                              style={{ width: `${(record.height / 3.2) * 100}%` }}
                            />
                          </div>
                          <span className="w-16 text-sm font-medium text-foreground">
                            {record.height}m
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4">
                    <div className="w-24 text-sm font-medium text-muted-foreground">
                      Đường kính
                    </div>
                    <div className="flex-1 space-y-2">
                      {growthHistory.map((record) => (
                        <div key={record.month} className="flex items-center gap-2">
                          <span className="w-16 text-xs text-muted-foreground">
                            {record.month}
                          </span>
                          <div className="flex-1 h-8 rounded-lg bg-muted overflow-hidden">
                            <div
                              className="h-full bg-accent transition-all"
                              style={{ width: `${(record.diameter / 4.5) * 100}%` }}
                            />
                          </div>
                          <span className="w-16 text-sm font-medium text-foreground">
                            {record.diameter}cm
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Statistics */}
                <div className="grid gap-4 md:grid-cols-3 pt-6 border-t border-border">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Tăng trưởng TB</p>
                    <p className="text-2xl font-bold text-primary">+0.22m/tháng</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Tăng đường kính TB</p>
                    <p className="text-2xl font-bold text-accent">+0.26cm/tháng</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Dự kiến thu hoạch</p>
                    <p className="text-2xl font-bold text-foreground">T6/2028</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
