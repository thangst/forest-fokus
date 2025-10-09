import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, User, Calendar, AlertTriangle, CheckCircle2, Clock } from "lucide-react";
import { mockAssignments } from '@/data/mockForestData';
import { SurveyStatus } from '@/types/forest';

const getStatusColor = (status: SurveyStatus) => {
  switch (status) {
    case 'completed': return 'bg-success/10 text-success border-success/20';
    case 'in-progress': return 'bg-info/10 text-info border-info/20';
    case 'pending-review': return 'bg-warning/10 text-warning border-warning/20';
    case 'new': return 'bg-muted text-muted-foreground border-border';
  }
};

const getStatusLabel = (status: SurveyStatus) => {
  switch (status) {
    case 'completed': return 'Hoàn thành';
    case 'in-progress': return 'Đang thực hiện';
    case 'pending-review': return 'Chờ duyệt';
    case 'new': return 'Mới';
  }
};

const getStatusIcon = (status: SurveyStatus) => {
  switch (status) {
    case 'completed': return <CheckCircle2 className="h-4 w-4" />;
    case 'in-progress': return <Clock className="h-4 w-4" />;
    case 'pending-review': return <AlertTriangle className="h-4 w-4" />;
    case 'new': return <Calendar className="h-4 w-4" />;
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high': return 'bg-destructive/10 text-destructive border-destructive/20';
    case 'medium': return 'bg-warning/10 text-warning border-warning/20';
    case 'low': return 'bg-muted text-muted-foreground border-border';
    default: return 'bg-muted text-muted-foreground border-border';
  }
};

export default function Assignments() {
  const [activeTab, setActiveTab] = useState<SurveyStatus | 'all'>('all');
  
  const assignments = mockAssignments;
  const filteredAssignments = activeTab === 'all' 
    ? assignments 
    : assignments.filter(a => a.status === activeTab);

  const stats = {
    total: assignments.length,
    new: assignments.filter(a => a.status === 'new').length,
    inProgress: assignments.filter(a => a.status === 'in-progress').length,
    pendingReview: assignments.filter(a => a.status === 'pending-review').length,
    completed: assignments.filter(a => a.status === 'completed').length,
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Phân công điều tra</h1>
          <p className="text-muted-foreground mt-1">
            Quản lý nhiệm vụ điều tra và theo dõi tiến độ
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Tạo phân công mới
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-6 md:grid-cols-5">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tất cả
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{stats.total}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Mới
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-muted-foreground">{stats.new}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Đang thực hiện
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-info">{stats.inProgress}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Chờ duyệt
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-warning">{stats.pendingReview}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Hoàn thành
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-success">{stats.completed}</div>
          </CardContent>
        </Card>
      </div>

      {/* Assignments List */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Tất cả ({stats.total})</TabsTrigger>
          <TabsTrigger value="new">Mới ({stats.new})</TabsTrigger>
          <TabsTrigger value="in-progress">Đang thực hiện ({stats.inProgress})</TabsTrigger>
          <TabsTrigger value="pending-review">Chờ duyệt ({stats.pendingReview})</TabsTrigger>
          <TabsTrigger value="completed">Hoàn thành ({stats.completed})</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-4">
          {filteredAssignments.map(assignment => (
            <Card key={assignment.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className={getStatusColor(assignment.status)}>
                        {getStatusIcon(assignment.status)}
                        <span className="ml-1">{getStatusLabel(assignment.status)}</span>
                      </Badge>
                      <Badge variant="outline" className={getPriorityColor(assignment.priority)}>
                        Ưu tiên: {assignment.priority === 'high' ? 'Cao' : assignment.priority === 'medium' ? 'TB' : 'Thấp'}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{assignment.plotCode}</CardTitle>
                    <CardDescription className="mt-1">
                      {assignment.description}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Chi tiết</Button>
                    {assignment.status === 'pending-review' && (
                      <Button size="sm">Duyệt</Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Người thực hiện</p>
                      <p className="font-medium text-foreground">{assignment.assignedToName}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Ngày giao</p>
                      <p className="font-medium text-foreground">{assignment.assignedDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Hạn hoàn thành</p>
                      <p className="font-medium text-foreground">{assignment.dueDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Người giao</p>
                      <p className="font-medium text-foreground">{assignment.assignedBy}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {filteredAssignments.length === 0 && (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">Không có nhiệm vụ nào</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
