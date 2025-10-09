import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Plus, Filter, Map, List } from "lucide-react";
import { mockPlots } from '@/data/mockForestData';
import { HealthStatus } from '@/types/forest';
import PlotMap from '@/components/forest/PlotMap';
import PlotDetail from '@/components/forest/PlotDetail';

const getHealthColor = (health: HealthStatus) => {
  switch (health) {
    case 'good': return 'bg-success/10 text-success border-success/20';
    case 'medium': return 'bg-warning/10 text-warning border-warning/20';
    case 'poor': return 'bg-destructive/10 text-destructive border-destructive/20';
  }
};

const getHealthLabel = (health: HealthStatus) => {
  switch (health) {
    case 'good': return 'Tốt';
    case 'medium': return 'Trung bình';
    case 'poor': return 'Kém';
  }
};

export default function Plots() {
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [selectedPlotId, setSelectedPlotId] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  const plots = mockPlots;
  const filteredPlots = selectedRegion === 'all' 
    ? plots 
    : plots.filter(p => p.region === selectedRegion);

  const selectedPlot = selectedPlotId ? plots.find(p => p.id === selectedPlotId) : null;

  // Calculate statistics
  const totalArea = plots.reduce((sum, p) => sum + p.totalArea, 0);
  const avgSurvival = plots.reduce((sum, p) => {
    const speciesAvg = p.species.reduce((s, sp) => s + sp.metrics.survivalRate, 0) / p.species.length;
    return sum + speciesAvg;
  }, 0) / plots.length;
  const totalSpeciesCount = new Set(plots.flatMap(p => p.species.map(s => s.speciesId))).size;

  if (selectedPlot) {
    return (
      <div className="space-y-6">
        <PlotDetail plot={selectedPlot} onClose={() => setSelectedPlotId(null)} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Quản lý lô/khoảnh đa loài</h1>
          <p className="text-muted-foreground mt-1">
            Theo dõi chi tiết từng loài cây trong mỗi lô/khoảnh
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Lọc
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Thêm lô mới
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tổng diện tích
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{totalArea.toFixed(1)} ha</div>
            <p className="text-sm text-muted-foreground mt-1">
              {plots.length} lô/khoảnh
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tỷ lệ sống TB
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-success">{avgSurvival.toFixed(1)}%</div>
            <Progress value={avgSurvival} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Số loài quản lý
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{totalSpeciesCount}</div>
            <p className="text-sm text-muted-foreground mt-1">
              loài cây trồng
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tình trạng
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Badge variant="secondary" className="bg-success/10 text-success">
                {plots.filter(p => p.overallHealth === 'good').length} Tốt
              </Badge>
              <Badge variant="secondary" className="bg-warning/10 text-warning">
                {plots.filter(p => p.overallHealth === 'medium').length} TB
              </Badge>
              <Badge variant="secondary" className="bg-destructive/10 text-destructive">
                {plots.filter(p => p.overallHealth === 'poor').length} Kém
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* View Mode Toggle */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('list')}
            className="gap-2"
          >
            <List className="h-4 w-4" />
            Danh sách
          </Button>
          <Button
            variant={viewMode === 'map' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('map')}
            className="gap-2"
          >
            <Map className="h-4 w-4" />
            Bản đồ
          </Button>
        </div>
      </div>

      {/* Map View */}
      {viewMode === 'map' && (
        <PlotMap 
          plots={filteredPlots} 
          selectedPlotId={selectedPlotId || undefined}
          onPlotSelect={setSelectedPlotId}
        />
      )}

      {/* Plots List */}
      {viewMode === 'list' && (
        <div className="space-y-4">
          {filteredPlots.map((plot) => (
            <Card key={plot.id} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => setSelectedPlotId(plot.id)}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-xl">{plot.name}</CardTitle>
                      <Badge variant="outline" className={getHealthColor(plot.overallHealth)}>
                        {getHealthLabel(plot.overallHealth)}
                      </Badge>
                    </div>
                    <CardDescription className="mt-1">
                      Mã: {plot.code} • Khu vực: {plot.region} • Tổng DT: {plot.totalArea} ha
                    </CardDescription>
                  </div>
                  <Button variant="ghost" size="sm">Chi tiết →</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Species breakdown */}
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      {plot.species.length} loài trong lô:
                    </p>
                    <div className="space-y-2">
                      {plot.species.map(species => (
                        <div key={species.speciesId} className="flex items-center gap-3 p-3 rounded-lg border border-border bg-muted/30">
                          <div className="w-1 h-12 rounded-full" style={{ backgroundColor: species.color }} />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <p className="font-semibold text-foreground">{species.speciesName}</p>
                              <Badge variant="secondary" className="text-xs">{species.area} ha</Badge>
                            </div>
                            <div className="grid grid-cols-4 gap-3 text-sm">
                              <div>
                                <p className="text-xs text-muted-foreground">Tỷ lệ sống</p>
                                <p className="font-medium text-success">{species.metrics.survivalRate}%</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground">Chiều cao</p>
                                <p className="font-medium text-foreground">{species.metrics.avgHeight}m</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground">Đường kính</p>
                                <p className="font-medium text-foreground">{species.metrics.avgDBH}cm</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground">Sức khỏe</p>
                                <p className="font-medium">{species.metrics.healthScore}/100</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
