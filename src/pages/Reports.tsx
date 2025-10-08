import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Calendar, TrendingUp } from "lucide-react";

const reports = [
  {
    id: 1,
    title: "Báo cáo tình hình trồng rừng tháng 01/2024",
    type: "Báo cáo định kỳ",
    period: "Tháng 01/2024",
    generatedDate: "2024-01-31",
    status: "Đã duyệt",
    description: "Tổng hợp diện tích trồng mới, chăm sóc, tỷ lệ sống",
  },
  {
    id: 2,
    title: "Báo cáo quản lý giống cây trồng Q4/2023",
    type: "Báo cáo tuân thủ",
    period: "Quý 4/2023",
    generatedDate: "2023-12-31",
    status: "Đã duyệt",
    description: "Báo cáo theo TT22/2021 về danh mục loài cây trồng lâm nghiệp",
  },
  {
    id: 3,
    title: "Báo cáo đánh giá sinh trưởng năm 2023",
    type: "Báo cáo chuyên đề",
    period: "Năm 2023",
    generatedDate: "2024-01-15",
    status: "Đang xử lý",
    description: "Đánh giá sinh trưởng, trữ lượng rừng theo các lô/khoảnh",
  },
  {
    id: 4,
    title: "Báo cáo xuất nhập kho giống cây",
    type: "Báo cáo kho",
    period: "Tháng 12/2023",
    generatedDate: "2023-12-31",
    status: "Đã duyệt",
    description: "Theo dõi xuất nhập kho hạt giống, cây giống",
  },
];

const templates = [
  {
    id: 1,
    name: "Mẫu báo cáo trồng rừng định kỳ",
    code: "BC-01",
    description: "Báo cáo tháng/quý/năm về tình hình trồng rừng",
    frequency: "Định kỳ",
  },
  {
    id: 2,
    name: "Mẫu báo cáo quản lý giống theo TT22/2021",
    code: "BC-02",
    description: "Tuân thủ quy định về danh mục loài cây trồng",
    frequency: "Quý/Năm",
  },
  {
    id: 3,
    name: "Mẫu báo cáo đánh giá sinh trưởng",
    code: "BC-03",
    description: "Đánh giá tỷ lệ sống, sinh trưởng, trữ lượng",
    frequency: "Quý/Năm",
  },
  {
    id: 4,
    name: "Mẫu báo cáo xuất nhập kho",
    code: "BC-04",
    description: "Theo dõi xuất nhập giống cây trồng",
    frequency: "Tháng",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Đã duyệt":
      return "bg-success/10 text-success border-success/20";
    case "Đang xử lý":
      return "bg-warning/10 text-warning border-warning/20";
    case "Chờ duyệt":
      return "bg-info/10 text-info border-info/20";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

export default function Reports() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Báo cáo</h1>
          <p className="text-muted-foreground mt-1">
            Tạo và quản lý các báo cáo tuân thủ quy định
          </p>
        </div>
        <Button className="gap-2">
          <FileText className="h-4 w-4" />
          Tạo báo cáo mới
        </Button>
      </div>

      {/* Summary */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tổng báo cáo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">24</div>
            <p className="text-sm text-muted-foreground mt-1">Tất cả thời kỳ</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tháng này
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-info">1</div>
            <p className="text-sm text-muted-foreground mt-1">Báo cáo mới</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Đã duyệt
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-success">21</div>
            <p className="text-sm text-muted-foreground mt-1">Báo cáo</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Đang xử lý
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-warning">3</div>
            <p className="text-sm text-muted-foreground mt-1">Báo cáo</p>
          </CardContent>
        </Card>
      </div>

      {/* Reports List */}
      <Card>
        <CardHeader>
          <CardTitle>Danh sách báo cáo</CardTitle>
          <CardDescription>Các báo cáo gần đây nhất</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reports.map((report) => (
              <div
                key={report.id}
                className="flex items-start gap-4 rounded-lg border border-border bg-muted/50 p-4 hover:bg-muted transition-colors"
              >
                <div className="rounded-lg bg-primary/10 p-3">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">
                        {report.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {report.description}
                      </p>
                    </div>
                    <Badge variant="outline" className={getStatusColor(report.status)}>
                      {report.status}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Kỳ: {report.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        Tạo: {report.generatedDate}
                      </span>
                    </div>
                    <Badge variant="outline">{report.type}</Badge>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" />
                    Tải xuống
                  </Button>
                  <Button variant="outline" size="sm">
                    Xem
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Report Templates */}
      <Card>
        <CardHeader>
          <CardTitle>Mẫu báo cáo</CardTitle>
          <CardDescription>Các mẫu báo cáo chuẩn theo quy định</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {templates.map((template) => (
              <div
                key={template.id}
                className="rounded-lg border border-border bg-card p-4 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-foreground">{template.name}</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {template.description}
                    </p>
                  </div>
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                    {template.code}
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Tần suất: {template.frequency}
                  </span>
                  <Button variant="outline" size="sm">
                    Sử dụng mẫu
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
