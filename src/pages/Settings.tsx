import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Settings as SettingsIcon, User, Building2, Bell, Shield } from "lucide-react";

export default function Settings() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Cài đặt hệ thống</h1>
        <p className="text-muted-foreground mt-1">
          Quản lý thông tin đơn vị và cấu hình hệ thống
        </p>
      </div>

      {/* Organization Info */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" />
            <CardTitle>Thông tin đơn vị</CardTitle>
          </div>
          <CardDescription>Cập nhật thông tin tổ chức quản lý rừng</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="org-name">Tên đơn vị</Label>
              <Input id="org-name" defaultValue="Chi cục Kiểm lâm Đồng Nai" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="org-code">Mã đơn vị</Label>
              <Input id="org-code" defaultValue="CCKL-DN" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="org-address">Địa chỉ</Label>
            <Input
              id="org-address"
              defaultValue="123 Đường Phạm Văn Thuận, TP. Biên Hòa, Đồng Nai"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="org-phone">Số điện thoại</Label>
              <Input id="org-phone" defaultValue="0251.3825.555" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="org-email">Email</Label>
              <Input id="org-email" type="email" defaultValue="kiemlamdongnai@mard.gov.vn" />
            </div>
          </div>

          <Button>Lưu thay đổi</Button>
        </CardContent>
      </Card>

      {/* User Profile */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-primary" />
            <CardTitle>Thông tin người dùng</CardTitle>
          </div>
          <CardDescription>Quản lý thông tin tài khoản cá nhân</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="user-name">Họ và tên</Label>
              <Input id="user-name" defaultValue="Nguyễn Văn A" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="user-position">Chức vụ</Label>
              <Input id="user-position" defaultValue="Chuyên viên" />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="user-email">Email</Label>
              <Input id="user-email" type="email" defaultValue="nguyenvana@mard.gov.vn" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="user-phone">Số điện thoại</Label>
              <Input id="user-phone" defaultValue="0912.345.678" />
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <Label>Đổi mật khẩu</Label>
            <div className="space-y-3">
              <Input type="password" placeholder="Mật khẩu hiện tại" />
              <Input type="password" placeholder="Mật khẩu mới" />
              <Input type="password" placeholder="Xác nhận mật khẩu mới" />
            </div>
          </div>

          <Button>Cập nhật thông tin</Button>
        </CardContent>
      </Card>

      {/* System Settings */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <SettingsIcon className="h-5 w-5 text-primary" />
            <CardTitle>Cài đặt hệ thống</CardTitle>
          </div>
          <CardDescription>Cấu hình chung cho hệ thống</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fiscal-year">Năm tài chính</Label>
            <Input id="fiscal-year" defaultValue="2024" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="report-template">Mẫu báo cáo mặc định</Label>
            <Input id="report-template" defaultValue="Theo TT22/2021" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="measurement-unit">Đơn vị đo lường</Label>
            <Input id="measurement-unit" defaultValue="Hệ mét (m, cm, ha)" />
          </div>

          <Button>Lưu cài đặt</Button>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            <CardTitle>Thông báo</CardTitle>
          </div>
          <CardDescription>Cấu hình nhận thông báo</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Email thông báo</p>
              <p className="text-sm text-muted-foreground">
                Nhận thông báo qua email về các hoạt động quan trọng
              </p>
            </div>
            <Button variant="outline">Bật</Button>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Nhắc nhở kế hoạch</p>
              <p className="text-sm text-muted-foreground">
                Nhận nhắc nhở trước 3 ngày khi có kế hoạch sắp tới
              </p>
            </div>
            <Button variant="outline">Bật</Button>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Cảnh báo chất lượng</p>
              <p className="text-sm text-muted-foreground">
                Cảnh báo khi tỷ lệ sống hoặc sinh trưởng dưới ngưỡng
              </p>
            </div>
            <Button variant="outline">Bật</Button>
          </div>
        </CardContent>
      </Card>

      {/* Security */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <CardTitle>Bảo mật</CardTitle>
          </div>
          <CardDescription>Cài đặt bảo mật tài khoản</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Xác thực hai yếu tố (2FA)</p>
              <p className="text-sm text-muted-foreground">
                Tăng cường bảo mật với xác thực hai yếu tố
              </p>
            </div>
            <Button variant="outline">Kích hoạt</Button>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Lịch sử đăng nhập</p>
              <p className="text-sm text-muted-foreground">
                Xem lịch sử đăng nhập vào hệ thống
              </p>
            </div>
            <Button variant="outline">Xem</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
