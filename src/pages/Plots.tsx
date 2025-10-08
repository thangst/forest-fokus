import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Plus, MapPin, Calendar } from "lucide-react";

const plotsData = [
  {
    id: 1,
    code: "A1-K5",
    name: "Lô A1 - Khoảnh 5",
    area: 15.5,
    species: "Keo lai",
    plantingDate: "2023-03-15",
    age: 10,
    density: 1111,
    survivalRate: 95.2,
    status: "Sinh trưởng tốt",
  },
  {
    id: 2,
    code: "B3-K2",
    name: "Lô B3 - Khoảnh 2",
    area: 8.2,
    species: "Bạch đàn",
    plantingDate: "2022-11-20",
    age: 14,
    density: 1250,
    survivalRate: 92.8,
    status: "Sinh trưởng tốt",
  },
  {
    id: 3,
    code: "C2-K1",
    name: "Lô C2 - Khoảnh 1",
    area: 12.0,
    species: "Mỡ",
    plantingDate: "2021-05-10",
    age: 32,
    density: 833,
    survivalRate: 88.5,
    status: "Cần tỉa thưa",
  },
  {
    id: 4,
    code: "D1-K3",
    name: "Lô D1 - Khoảnh 3",
    area: 20.0,
    species: "Keo tai tượng",
    plantingDate: "2024-01-15",
    age: 0,
    density: 0,
    survivalRate: 0,
    status: "Kế hoạch trồng",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Sinh trưởng tốt":
      return "bg-success/10 text-success border-success/20";
    case "Cần tỉa thưa":
      return "bg-warning/10 text-warning border-warning/20";
    case "Kế hoạch trồng":
      return "bg-info/10 text-info border-info/20";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

export default function Plots() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Quản lý lô/khoảnh</h1>
          <p className="text-muted-foreground mt-1">
            Theo dõi lịch sử và hiện trạng các lô/khoảnh rừng trồng
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Thêm lô/khoảnh mới
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tổng diện tích
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">55.7 ha</div>
            <p className="text-sm text-muted-foreground mt-1">
              Từ 4 lô/khoảnh
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tỷ lệ sống trung bình
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-success">92.2%</div>
            <Progress value={92.2} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Mật độ trung bình
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">1,065</div>
            <p className="text-sm text-muted-foreground mt-1">
              cây/ha
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Plots List */}
      <div className="space-y-4">
        {plotsData.map((plot) => (
          <Card key={plot.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{plot.name}</CardTitle>
                    <CardDescription className="mt-1">
                      Mã: {plot.code} • Diện tích: {plot.area} ha
                    </CardDescription>
                  </div>
                </div>
                <Badge variant="outline" className={getStatusColor(plot.status)}>
                  {plot.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Giống cây</p>
                  <p className="font-semibold text-foreground">{plot.species}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Ngày trồng</p>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <p className="font-medium text-foreground">{plot.plantingDate}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Tuổi rừng</p>
                  <p className="font-semibold text-foreground">
                    {plot.age > 0 ? `${plot.age} tháng` : "Chưa trồng"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Mật độ</p>
                  <p className="font-semibold text-foreground">
                    {plot.density > 0 ? `${plot.density} cây/ha` : "-"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Tỷ lệ sống</p>
                  <div className="space-y-1">
                    <p className="font-semibold text-success">
                      {plot.survivalRate > 0 ? `${plot.survivalRate}%` : "-"}
                    </p>
                    {plot.survivalRate > 0 && (
                      <Progress value={plot.survivalRate} className="h-1" />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm">Xem lịch sử</Button>
                <Button variant="outline" size="sm">Cập nhật</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
