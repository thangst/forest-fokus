import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Sprout, Award, FileCheck } from "lucide-react";

const seedSources = [
  {
    id: 1,
    name: "Vườn giống Keo lai Đồng Nai",
    type: "Vườn giống",
    location: "Đồng Nai",
    species: "Keo lai",
    area: 5.5,
    establishedYear: 2018,
    certification: "Giống gốc",
    quality: "A",
    status: "Đang hoạt động",
  },
  {
    id: 2,
    name: "Rừng giống Bạch đàn Bình Phước",
    type: "Rừng giống",
    location: "Bình Phước",
    species: "Bạch đàn",
    area: 12.0,
    establishedYear: 2015,
    certification: "Giống gốc",
    quality: "A+",
    status: "Đang hoạt động",
  },
  {
    id: 3,
    name: "Vườn cây đầu dòng Mỡ Lâm Đồng",
    type: "Cây đầu dòng",
    location: "Lâm Đồng",
    species: "Mỡ",
    area: 2.0,
    establishedYear: 2010,
    certification: "Cây trội",
    quality: "A+",
    status: "Đang hoạt động",
  },
];

const seedBatches = [
  {
    id: 1,
    batchCode: "KL-2024-001",
    species: "Keo lai",
    source: "Vườn giống Đồng Nai",
    quantity: 50000,
    unit: "hạt",
    harvestDate: "2024-01-10",
    germinationRate: 92,
    purity: 98,
    status: "Sẵn sàng",
  },
  {
    id: 2,
    batchCode: "BD-2024-002",
    species: "Bạch đàn",
    source: "Rừng giống Bình Phước",
    quantity: 30000,
    unit: "hạt",
    harvestDate: "2024-01-05",
    germinationRate: 88,
    purity: 96,
    status: "Sẵn sàng",
  },
  {
    id: 3,
    batchCode: "MO-2023-015",
    species: "Mỡ",
    source: "Vườn cây đầu dòng Lâm Đồng",
    quantity: 15000,
    unit: "hạt",
    harvestDate: "2023-12-20",
    germinationRate: 85,
    purity: 94,
    status: "Đang sử dụng",
  },
  {
    id: 4,
    batchCode: "KTT-2024-003",
    species: "Keo tai tượng",
    source: "Vườn giống Gia Lai",
    quantity: 20000,
    unit: "cây",
    harvestDate: "2024-01-15",
    germinationRate: 95,
    purity: 99,
    status: "Trong kho",
  },
];

const getQualityColor = (quality: string) => {
  switch (quality) {
    case "A+":
      return "bg-success/10 text-success border-success/20";
    case "A":
      return "bg-primary/10 text-primary border-primary/20";
    case "B":
      return "bg-warning/10 text-warning border-warning/20";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "Đang hoạt động":
    case "Sẵn sàng":
      return "bg-success/10 text-success border-success/20";
    case "Đang sử dụng":
      return "bg-info/10 text-info border-info/20";
    case "Trong kho":
      return "bg-warning/10 text-warning border-warning/20";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

export default function Seedlings() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Quản lý nguồn giống</h1>
          <p className="text-muted-foreground mt-1">
            Quản lý vườn giống, rừng giống và chất lượng giống cây trồng
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Thêm nguồn giống
        </Button>
      </div>

      <Tabs defaultValue="sources" className="space-y-6">
        <TabsList>
          <TabsTrigger value="sources">Nguồn giống</TabsTrigger>
          <TabsTrigger value="batches">Lô giống</TabsTrigger>
        </TabsList>

        <TabsContent value="sources" className="space-y-4">
          {/* Summary */}
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Tổng nguồn giống
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">3</div>
                <p className="text-sm text-muted-foreground mt-1">Đang hoạt động</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Diện tích vườn giống
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">19.5 ha</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Giống chất lượng A+
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-success">2</div>
              </CardContent>
            </Card>
          </div>

          {/* Sources List */}
          <div className="grid gap-6 md:grid-cols-2">
            {seedSources.map((source) => (
              <Card key={source.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <Sprout className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{source.name}</CardTitle>
                        <CardDescription className="mt-1">
                          {source.species} • {source.location}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className={getStatusColor(source.status)}>
                      {source.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Loại hình</p>
                      <p className="font-semibold text-foreground">{source.type}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Diện tích</p>
                      <p className="font-semibold text-foreground">{source.area} ha</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Năm thành lập</p>
                      <p className="font-semibold text-foreground">{source.establishedYear}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Chất lượng</p>
                      <Badge variant="outline" className={getQualityColor(source.quality)}>
                        {source.quality}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 rounded-lg bg-accent/10 p-3">
                    <Award className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Chứng nhận: {source.certification}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Xem chi tiết
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Cập nhật
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="batches" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Danh sách lô giống</CardTitle>
              <CardDescription>
                Theo dõi chất lượng và trạng thái các lô giống cây trồng
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {seedBatches.map((batch) => (
                  <div
                    key={batch.id}
                    className="flex items-start gap-4 rounded-lg border border-border bg-card p-4"
                  >
                    <div className="rounded-lg bg-accent/10 p-3">
                      <FileCheck className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-foreground text-lg">
                            {batch.batchCode}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {batch.species} • {batch.source}
                          </p>
                        </div>
                        <Badge variant="outline" className={getStatusColor(batch.status)}>
                          {batch.status}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Số lượng</p>
                          <p className="font-semibold text-foreground">
                            {batch.quantity.toLocaleString()} {batch.unit}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Ngày thu hoạch</p>
                          <p className="font-medium text-foreground">{batch.harvestDate}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Tỷ lệ nảy mầm</p>
                          <p className="font-semibold text-success">
                            {batch.germinationRate}%
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Độ tinh khiết</p>
                          <p className="font-semibold text-success">{batch.purity}%</p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Xuất kho
                        </Button>
                        <Button variant="outline" size="sm">
                          In nhãn
                        </Button>
                        <Button variant="outline" size="sm">
                          Xem chi tiết
                        </Button>
                      </div>
                    </div>
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
