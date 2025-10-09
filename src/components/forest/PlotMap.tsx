import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';
import { Plot, HealthStatus } from '@/types/forest';

interface PlotMapProps {
  plots: Plot[];
  selectedPlotId?: string;
  onPlotSelect: (plotId: string) => void;
}

const getHealthColor = (health: HealthStatus) => {
  switch (health) {
    case 'good': return 'bg-success';
    case 'medium': return 'bg-warning';
    case 'poor': return 'bg-destructive';
    default: return 'bg-muted';
  }
};

const getHealthLabel = (health: HealthStatus) => {
  switch (health) {
    case 'good': return 'Tốt';
    case 'medium': return 'Trung bình';
    case 'poor': return 'Kém';
  }
};

export default function PlotMap({ plots, selectedPlotId, onPlotSelect }: PlotMapProps) {
  // Mock GIS map - in production, use Mapbox or Leaflet
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Bản đồ lô/khoảnh</h3>
          <div className="flex gap-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-success" />
              <span className="text-sm text-muted-foreground">Tốt</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-warning" />
              <span className="text-sm text-muted-foreground">TB</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <span className="text-sm text-muted-foreground">Kém</span>
            </div>
          </div>
        </div>
        
        {/* Mock map container */}
        <div className="relative w-full h-96 bg-muted/30 rounded-lg border border-border overflow-hidden">
          {/* Grid background */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
          
          {/* Plot markers */}
          {plots.map((plot, index) => {
            const x = 15 + (index % 3) * 30;
            const y = 15 + Math.floor(index / 3) * 30;
            const isSelected = plot.id === selectedPlotId;
            
            return (
              <div
                key={plot.id}
                className={`absolute cursor-pointer transition-all ${
                  isSelected ? 'scale-125 z-10' : 'hover:scale-110'
                }`}
                style={{ left: `${x}%`, top: `${y}%` }}
                onClick={() => onPlotSelect(plot.id)}
              >
                <div className="relative group">
                  <div className={`w-12 h-12 rounded-full ${getHealthColor(plot.overallHealth)} flex items-center justify-center shadow-lg ${
                    isSelected ? 'ring-4 ring-primary' : ''
                  }`}>
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-popover border border-border rounded-lg shadow-lg p-3 whitespace-nowrap">
                      <p className="font-semibold text-foreground text-sm">{plot.code}</p>
                      <p className="text-xs text-muted-foreground">{plot.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs">
                          {plot.totalArea}ha
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {getHealthLabel(plot.overallHealth)}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <p className="text-xs text-muted-foreground text-center">
          Click vào điểm đánh dấu để xem chi tiết lô/khoảnh
        </p>
      </div>
    </Card>
  );
}
