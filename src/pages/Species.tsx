import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, TreePine } from "lucide-react";

const speciesData = [
  {
    id: 1,
    scientificName: "Acacia mangium",
    vietnameseName: "Keo tai tượng",
    category: "Loài chính",
    origin: "Australia",
    growthRate: "Nhanh",
    purpose: "Gỗ, phủ xanh",
    status: "Đang trồng",
  },
  {
    id: 2,
    scientificName: "Acacia hybrid",
    vietnameseName: "Keo lai",
    category: "Loài chính",
    origin: "Việt Nam (lai tạo)",
    growthRate: "Rất nhanh",
    purpose: "Gỗ",
    status: "Đang trồng",
  },
  {
    id: 3,
    scientificName: "Eucalyptus urophylla",
    vietnameseName: "Bạch đàn",
    category: "Loài chính",
    origin: "Indonesia",
    growthRate: "Nhanh",
    purpose: "Gỗ, giấy",
    status: "Đang trồng",
  },
  {
    id: 4,
    scientificName: "Manglietia conifera",
    vietnameseName: "Mỡ",
    category: "Loài quý hiếm",
    origin: "Việt Nam",
    growthRate: "Trung bình",
    purpose: "Gỗ quý",
    status: "Đang trồng",
  },
  {
    id: 5,
    scientificName: "Cunninghamia lanceolata",
    vietnameseName: "Sa mộc",
    category: "Loài chính",
    origin: "Trung Quốc",
    growthRate: "Trung bình",
    purpose: "Gỗ xây dựng",
    status: "Ngưng trồng",
  },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Loài chính":
      return "bg-primary text-primary-foreground";
    case "Loài quý hiếm":
      return "bg-accent text-accent-foreground";
    default:
      return "bg-secondary text-secondary-foreground";
  }
};

const getStatusColor = (status: string) => {
  return status === "Đang trồng" 
    ? "bg-success/10 text-success border-success/20" 
    : "bg-muted text-muted-foreground border-border";
};

export default function Species() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSpecies = speciesData.filter(
    (species) =>
      species.scientificName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      species.vietnameseName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Danh mục giống cây</h1>
          <p className="text-muted-foreground mt-1">
            Quản lý danh mục loài cây trồng lâm nghiệp chính
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Thêm giống mới
        </Button>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Tìm kiếm theo tên khoa học hoặc tên Việt Nam..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Species Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredSpecies.map((species) => (
          <Card key={species.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <TreePine className="h-8 w-8 text-primary" />
                <div className="flex flex-col gap-2 items-end">
                  <Badge className={getCategoryColor(species.category)}>
                    {species.category}
                  </Badge>
                  <Badge variant="outline" className={getStatusColor(species.status)}>
                    {species.status}
                  </Badge>
                </div>
              </div>
              <CardTitle className="text-xl">{species.vietnameseName}</CardTitle>
              <CardDescription className="italic">{species.scientificName}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Nguồn gốc:</span>
                  <span className="font-medium text-foreground">{species.origin}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tốc độ sinh trưởng:</span>
                  <span className="font-medium text-foreground">{species.growthRate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Mục đích:</span>
                  <span className="font-medium text-foreground">{species.purpose}</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Xem chi tiết
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
