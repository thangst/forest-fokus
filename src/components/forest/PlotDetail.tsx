import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, Calendar, MapPin, Activity, Camera, 
  AlertTriangle, CheckCircle2, XCircle, Leaf, TreePine
} from 'lucide-react';
import { Plot, HealthStatus, DiseaseLevel } from '@/types/forest';
import { mockActivityLogs } from '@/data/mockForestData';

interface PlotDetailProps {
  plot: Plot;
  onClose: () => void;
}

const getHealthBadgeColor = (health: HealthStatus) => {
  switch (health) {
    case 'good': return 'bg-success/10 text-success border-success/20';
    case 'medium': return 'bg-warning/10 text-warning border-warning/20';
    case 'poor': return 'bg-destructive/10 text-destructive border-destructive/20';
  }
};

const getHealthIcon = (health: HealthStatus) => {
  switch (health) {
    case 'good': return <CheckCircle2 className="h-4 w-4" />;
    case 'medium': return <AlertTriangle className="h-4 w-4" />;
    case 'poor': return <XCircle className="h-4 w-4" />;
  }
};

const getDiseaseLevelLabel = (level: DiseaseLevel) => {
  switch (level) {
    case 'none': return 'Không';
    case 'mild': return 'Nhẹ';
    case 'moderate': return 'Trung bình';
    case 'severe': return 'Nặng';
  }
};

const getGrowthSpeedLabel = (speed: string) => {
  switch (speed) {
    case 'above': return 'Nhanh hơn chuẩn';
    case 'normal': return 'Đạt chuẩn';
    case 'below': return 'Chậm hơn chuẩn';
  }
};

export default function PlotDetail({ plot, onClose }: PlotDetailProps) {
  const activityLogs = mockActivityLogs.filter(log => log.plotId === plot.id);
  
  // Mock growth history
  const mockGrowthHistory = [
    { month: 'T8/2023', height: 2.1, dbh: 3.2 },
    { month: 'T10/2023', height: 2.8, dbh: 3.9 },
    { month: 'T12/2023', height: 3.5, dbh: 4.8 },
    { month: 'T1/2024', height: 4.2, dbh: 5.6 }
  ];
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-bold text-foreground">{plot.name}</h2>
            <Badge variant="outline" className={getHealthBadgeColor(plot.overallHealth)}>
              {getHealthIcon(plot.overallHealth)}
              <span className="ml-1">
                {plot.overallHealth === 'good' ? 'Tốt' : plot.overallHealth === 'medium' ? 'Trung bình' : 'Kém'}
              </span>
            </Badge>
          </div>
          <div className="flex items-center gap-4 mt-2 text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{plot.code}</span>
            </div>
            <div className="flex items-center gap-1">
              <Leaf className="h-4 w-4" />
              <span>{plot.species.length} loài</span>
            </div>
            <div className="flex items-center gap-1">
              <TreePine className="h-4 w-4" />
              <span>{plot.totalArea} ha</span>
            </div>
          </div>
        </div>
        <Button variant="outline" onClick={onClose}>Đóng</Button>
      </div>

      {/* Species Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {plot.species.map(species => (
          <Card key={species.speciesId} className="border-l-4" style={{ borderLeftColor: species.color }}>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: species.color }} />
                {species.speciesName}
              </CardTitle>
              <CardDescription>{species.area} ha • {species.age} tháng tuổi</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Tỷ lệ sống</span>
                  <span className="font-semibold text-success">{species.metrics.survivalRate}%</span>
                </div>
                <Progress value={species.metrics.survivalRate} className="h-2" />
              </div>
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-border">
                <div>
                  <p className="text-xs text-muted-foreground">Chiều cao TB</p>
                  <p className="text-lg font-semibold text-foreground">{species.metrics.avgHeight}m</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Đường kính TB</p>
                  <p className="text-lg font-semibold text-foreground">{species.metrics.avgDBH}cm</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-border">
                <span className="text-xs text-muted-foreground">Sức khỏe</span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full" style={{ 
                    backgroundColor: species.metrics.healthStatus === 'good' ? 'hsl(var(--success))' : 
                                     species.metrics.healthStatus === 'medium' ? 'hsl(var(--warning))' : 'hsl(var(--destructive))' 
                  }} />
                  <span className="text-sm font-medium">{species.metrics.healthScore}/100</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Tabs */}
      <Tabs defaultValue="metrics" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="metrics">Chỉ số chi tiết</TabsTrigger>
          <TabsTrigger value="history">Lịch sử đo đạc</TabsTrigger>
          <TabsTrigger value="activity">Nhật ký hoạt động</TabsTrigger>
          <TabsTrigger value="photos">Ảnh thực tế</TabsTrigger>
        </TabsList>

        <TabsContent value="metrics" className="space-y-4">
          {plot.species.map(species => (
            <Card key={species.speciesId}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: species.color }} />
                  {species.speciesName}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Growth Metrics */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Chỉ số sinh trưởng</h4>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg border border-border bg-muted/30 p-4">
                      <p className="text-sm text-muted-foreground mb-1">Mật độ</p>
                      <p className="text-2xl font-bold text-foreground">{species.metrics.density}</p>
                      <p className="text-xs text-muted-foreground">cây/ha</p>
                    </div>
                    <div className="rounded-lg border border-border bg-muted/30 p-4">
                      <p className="text-sm text-muted-foreground mb-1">Độ tàn che</p>
                      <p className="text-2xl font-bold text-foreground">{species.metrics.canopyCoverage}%</p>
                      <Progress value={species.metrics.canopyCoverage} className="mt-2 h-1" />
                    </div>
                    <div className="rounded-lg border border-border bg-accent/10 p-4">
                      <p className="text-sm text-muted-foreground mb-1">Trữ lượng ước tính</p>
                      <p className="text-2xl font-bold text-accent">{species.metrics.estimatedVolume}</p>
                      <p className="text-xs text-muted-foreground">m³/ha</p>
                    </div>
                  </div>
                </div>

                {/* Quality Indicators */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Chỉ số chất lượng</h4>
                  <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Giai đoạn</p>
                      <Badge variant="secondary">{species.metrics.growthStage}</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Chất lượng thân</p>
                      <Badge variant="secondary">{species.metrics.stemQuality}</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Tình trạng tán</p>
                      <Badge variant="secondary">{species.metrics.foliageCondition}</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Hệ rễ</p>
                      <Badge variant="secondary">{species.metrics.rootSystem}</Badge>
                    </div>
                  </div>
                </div>

                {/* Growth Speed */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Tốc độ sinh trưởng</h4>
                  <div className="flex items-center gap-2">
                    <TrendingUp className={`h-5 w-5 ${
                      species.metrics.growthSpeed === 'above' ? 'text-success' : 
                      species.metrics.growthSpeed === 'normal' ? 'text-info' : 'text-warning'
                    }`} />
                    <span className="font-medium">{getGrowthSpeedLabel(species.metrics.growthSpeed)}</span>
                    {species.metrics.hasFlowering && <Badge variant="outline">Đang ra hoa</Badge>}
                    {species.metrics.hasFruiting && <Badge variant="outline">Đang kết trái</Badge>}
                  </div>
                </div>

                {/* Health Status */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Tình trạng sức khỏe</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-muted/30">
                      <span className="text-sm text-muted-foreground">Điểm sức khỏe tổng thể</span>
                      <div className="flex items-center gap-2">
                        <Progress value={species.metrics.healthScore} className="w-24 h-2" />
                        <span className="font-bold text-foreground">{species.metrics.healthScore}/100</span>
                      </div>
                    </div>
                    <div className="grid gap-3 md:grid-cols-3">
                      <div className="p-3 rounded-lg border border-border bg-muted/30">
                        <p className="text-sm text-muted-foreground mb-1">Mức độ bệnh</p>
                        <Badge variant={species.metrics.diseaseLevel === 'none' ? 'secondary' : 'destructive'}>
                          {getDiseaseLevelLabel(species.metrics.diseaseLevel)}
                        </Badge>
                      </div>
                      <div className="p-3 rounded-lg border border-border bg-muted/30">
                        <p className="text-sm text-muted-foreground mb-1">Mức độ sâu hại</p>
                        <Badge variant={species.metrics.pestLevel === 'none' ? 'secondary' : 'destructive'}>
                          {getDiseaseLevelLabel(species.metrics.pestLevel)}
                        </Badge>
                      </div>
                      <div className="p-3 rounded-lg border border-border bg-muted/30">
                        <p className="text-sm text-muted-foreground mb-1">Stress môi trường</p>
                        {species.metrics.environmentalStress.length === 0 ? (
                          <Badge variant="secondary">Không</Badge>
                        ) : (
                          <div className="flex flex-wrap gap-1">
                            {species.metrics.environmentalStress.map(stress => (
                              <Badge key={stress} variant="destructive" className="text-xs">{stress}</Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Biểu đồ sinh trưởng theo thời gian</CardTitle>
              <CardDescription>Dữ liệu đo đạc định kỳ 4 tháng gần nhất</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">Chiều cao trung bình (m)</h4>
                  <div className="space-y-2">
                    {mockGrowthHistory.map(record => (
                      <div key={record.month} className="flex items-center gap-2">
                        <span className="w-20 text-xs text-muted-foreground">{record.month}</span>
                        <div className="flex-1 h-8 rounded-lg bg-muted overflow-hidden">
                          <div
                            className="h-full bg-primary transition-all flex items-center justify-end pr-2"
                            style={{ width: `${(record.height / 5) * 100}%` }}
                          >
                            <span className="text-xs font-medium text-primary-foreground">{record.height}m</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">Đường kính trung bình (cm)</h4>
                  <div className="space-y-2">
                    {mockGrowthHistory.map(record => (
                      <div key={record.month} className="flex items-center gap-2">
                        <span className="w-20 text-xs text-muted-foreground">{record.month}</span>
                        <div className="flex-1 h-8 rounded-lg bg-muted overflow-hidden">
                          <div
                            className="h-full bg-accent transition-all flex items-center justify-end pr-2"
                            style={{ width: `${(record.dbh / 8) * 100}%` }}
                          >
                            <span className="text-xs font-medium text-accent-foreground">{record.dbh}cm</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Nhật ký hoạt động
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activityLogs.map(log => (
                  <div key={log.id} className="flex gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Activity className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 w-px bg-border mt-2" />
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="secondary" className="text-xs">{log.type}</Badge>
                        <span className="text-sm text-muted-foreground">{log.date}</span>
                      </div>
                      <p className="text-sm text-foreground mb-1">{log.description}</p>
                      <p className="text-xs text-muted-foreground">Thực hiện: {log.performedBy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="photos">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="h-5 w-5" />
                Ảnh thực tế
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground mb-4">Chưa có ảnh nào được tải lên</p>
                <Button variant="outline">Tải ảnh lên</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
