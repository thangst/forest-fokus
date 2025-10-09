import { Plot, Species, Survey, Assignment, ActivityLog } from '@/types/forest';

export const mockSpecies: Species[] = [
  {
    id: 'sp1',
    name: 'Keo lai',
    scientificName: 'Acacia hybrid',
    color: '#10b981',
    standardGrowthRate: { height: 0.35, diameter: 0.5 }
  },
  {
    id: 'sp2',
    name: 'Bạch đàn',
    scientificName: 'Eucalyptus urophylla',
    color: '#3b82f6',
    standardGrowthRate: { height: 0.4, diameter: 0.6 }
  },
  {
    id: 'sp3',
    name: 'Mỡ',
    scientificName: 'Manglietia conifera',
    color: '#8b5cf6',
    standardGrowthRate: { height: 0.15, diameter: 0.3 }
  },
  {
    id: 'sp4',
    name: 'Keo tai tượng',
    scientificName: 'Acacia mangium',
    color: '#f59e0b',
    standardGrowthRate: { height: 0.38, diameter: 0.55 }
  },
  {
    id: 'sp5',
    name: 'Thông ba lá',
    scientificName: 'Pinus kesiya',
    color: '#06b6d4',
    standardGrowthRate: { height: 0.25, diameter: 0.4 }
  }
];

export const mockPlots: Plot[] = [
  {
    id: 'p1',
    code: 'A1-K5',
    name: 'Lô A1 - Khoảnh 5',
    region: 'Khu vực A',
    totalArea: 15.5,
    location: { lat: 10.7769, lng: 106.7009 },
    overallHealth: 'good',
    notes: 'Sinh trưởng tốt, cần theo dõi định kỳ',
    species: [
      {
        speciesId: 'sp1',
        speciesName: 'Keo lai',
        color: '#10b981',
        area: 10.0,
        plantingDate: '2023-03-15',
        age: 10,
        lastSurveyDate: '2024-01-05',
        metrics: {
          survivalRate: 95.2,
          avgDBH: 4.5,
          avgHeight: 3.2,
          canopyCoverage: 65,
          density: 1111,
          estimatedVolume: 8.5,
          growthStage: 'young',
          stemQuality: 'straight',
          foliageCondition: 'healthy-green',
          rootSystem: 'strong',
          hasFlowering: false,
          hasFruiting: false,
          growthSpeed: 'above',
          healthStatus: 'good',
          healthScore: 92,
          diseaseLevel: 'none',
          pestLevel: 'mild',
          environmentalStress: []
        }
      },
      {
        speciesId: 'sp2',
        speciesName: 'Bạch đàn',
        color: '#3b82f6',
        area: 5.5,
        plantingDate: '2023-03-15',
        age: 10,
        lastSurveyDate: '2024-01-05',
        metrics: {
          survivalRate: 93.5,
          avgDBH: 5.2,
          avgHeight: 3.8,
          canopyCoverage: 70,
          density: 1000,
          estimatedVolume: 10.2,
          growthStage: 'young',
          stemQuality: 'straight',
          foliageCondition: 'healthy-green',
          rootSystem: 'strong',
          hasFlowering: false,
          hasFruiting: false,
          growthSpeed: 'normal',
          healthStatus: 'good',
          healthScore: 88,
          diseaseLevel: 'none',
          pestLevel: 'none',
          environmentalStress: []
        }
      }
    ]
  },
  {
    id: 'p2',
    code: 'B3-K2',
    name: 'Lô B3 - Khoảnh 2',
    region: 'Khu vực B',
    totalArea: 8.2,
    location: { lat: 10.7869, lng: 106.7109 },
    overallHealth: 'medium',
    notes: 'Có dấu hiệu sâu bệnh, cần phun thuốc',
    species: [
      {
        speciesId: 'sp2',
        speciesName: 'Bạch đàn',
        color: '#3b82f6',
        area: 8.2,
        plantingDate: '2022-11-20',
        age: 14,
        lastSurveyDate: '2024-01-03',
        metrics: {
          survivalRate: 88.8,
          avgDBH: 6.2,
          avgHeight: 4.5,
          canopyCoverage: 62,
          density: 1250,
          estimatedVolume: 15.2,
          growthStage: 'young',
          stemQuality: 'straight',
          foliageCondition: 'yellowing',
          rootSystem: 'strong',
          hasFlowering: false,
          hasFruiting: false,
          growthSpeed: 'normal',
          healthStatus: 'medium',
          healthScore: 72,
          diseaseLevel: 'mild',
          pestLevel: 'moderate',
          environmentalStress: ['drought']
        }
      }
    ]
  },
  {
    id: 'p3',
    code: 'C2-K1',
    name: 'Lô C2 - Khoảnh 1',
    region: 'Khu vực C',
    totalArea: 12.0,
    location: { lat: 10.7969, lng: 106.7209 },
    overallHealth: 'good',
    notes: 'Rừng trưởng thành, chuẩn bị tỉa thưa',
    species: [
      {
        speciesId: 'sp3',
        speciesName: 'Mỡ',
        color: '#8b5cf6',
        area: 12.0,
        plantingDate: '2021-05-10',
        age: 32,
        lastSurveyDate: '2024-01-02',
        metrics: {
          survivalRate: 88.5,
          avgDBH: 12.5,
          avgHeight: 8.5,
          canopyCoverage: 85,
          density: 833,
          estimatedVolume: 45.8,
          growthStage: 'mature',
          stemQuality: 'straight',
          foliageCondition: 'healthy-green',
          rootSystem: 'strong',
          hasFlowering: true,
          hasFruiting: false,
          growthSpeed: 'normal',
          healthStatus: 'good',
          healthScore: 85,
          diseaseLevel: 'none',
          pestLevel: 'none',
          environmentalStress: []
        }
      }
    ]
  },
  {
    id: 'p4',
    code: 'D5-K8',
    name: 'Lô D5 - Khoảnh 8',
    region: 'Khu vực D',
    totalArea: 18.3,
    location: { lat: 10.8069, lng: 106.7309 },
    overallHealth: 'poor',
    notes: 'Cần chăm sóc đặc biệt, tỷ lệ sống thấp',
    species: [
      {
        speciesId: 'sp4',
        speciesName: 'Keo tai tượng',
        color: '#f59e0b',
        area: 18.3,
        plantingDate: '2023-08-10',
        age: 5,
        lastSurveyDate: '2024-01-08',
        metrics: {
          survivalRate: 72.5,
          avgDBH: 2.8,
          avgHeight: 1.9,
          canopyCoverage: 45,
          density: 950,
          estimatedVolume: 3.2,
          growthStage: 'seedling',
          stemQuality: 'bent',
          foliageCondition: 'sparse',
          rootSystem: 'weak',
          hasFlowering: false,
          hasFruiting: false,
          growthSpeed: 'below',
          healthStatus: 'poor',
          healthScore: 58,
          diseaseLevel: 'moderate',
          pestLevel: 'severe',
          environmentalStress: ['drought', 'soil-poor']
        }
      }
    ]
  },
  {
    id: 'p5',
    code: 'E2-K3',
    name: 'Lô E2 - Khoảnh 3',
    region: 'Khu vực E',
    totalArea: 22.5,
    location: { lat: 10.8169, lng: 106.7409 },
    overallHealth: 'good',
    notes: 'Hỗn giao 3 loài, phát triển ổn định',
    species: [
      {
        speciesId: 'sp1',
        speciesName: 'Keo lai',
        color: '#10b981',
        area: 8.0,
        plantingDate: '2022-06-20',
        age: 18,
        lastSurveyDate: '2024-01-07',
        metrics: {
          survivalRate: 91.2,
          avgDBH: 7.8,
          avgHeight: 5.5,
          canopyCoverage: 75,
          density: 1050,
          estimatedVolume: 22.5,
          growthStage: 'young',
          stemQuality: 'straight',
          foliageCondition: 'healthy-green',
          rootSystem: 'strong',
          hasFlowering: false,
          hasFruiting: false,
          growthSpeed: 'normal',
          healthStatus: 'good',
          healthScore: 87,
          diseaseLevel: 'none',
          pestLevel: 'none',
          environmentalStress: []
        }
      },
      {
        speciesId: 'sp3',
        speciesName: 'Mỡ',
        color: '#8b5cf6',
        area: 7.5,
        plantingDate: '2022-06-20',
        age: 18,
        lastSurveyDate: '2024-01-07',
        metrics: {
          survivalRate: 89.5,
          avgDBH: 6.5,
          avgHeight: 4.2,
          canopyCoverage: 68,
          density: 900,
          estimatedVolume: 18.3,
          growthStage: 'young',
          stemQuality: 'straight',
          foliageCondition: 'healthy-green',
          rootSystem: 'strong',
          hasFlowering: false,
          hasFruiting: false,
          growthSpeed: 'normal',
          healthStatus: 'good',
          healthScore: 84,
          diseaseLevel: 'none',
          pestLevel: 'mild',
          environmentalStress: []
        }
      },
      {
        speciesId: 'sp5',
        speciesName: 'Thông ba lá',
        color: '#06b6d4',
        area: 7.0,
        plantingDate: '2022-06-20',
        age: 18,
        lastSurveyDate: '2024-01-07',
        metrics: {
          survivalRate: 90.8,
          avgDBH: 5.2,
          avgHeight: 3.8,
          canopyCoverage: 55,
          density: 850,
          estimatedVolume: 12.8,
          growthStage: 'young',
          stemQuality: 'straight',
          foliageCondition: 'healthy-green',
          rootSystem: 'strong',
          hasFlowering: false,
          hasFruiting: true,
          growthSpeed: 'normal',
          healthStatus: 'good',
          healthScore: 86,
          diseaseLevel: 'none',
          pestLevel: 'none',
          environmentalStress: []
        }
      }
    ]
  }
];

export const mockSurveys: Survey[] = [
  {
    id: 's1',
    plotId: 'p1',
    plotCode: 'A1-K5',
    speciesId: 'sp1',
    surveyDate: '2024-01-05',
    surveyorId: 'u1',
    surveyorName: 'Nguyễn Văn A',
    status: 'completed',
    metrics: mockPlots[0].species[0].metrics,
    photos: [],
    notes: 'Rừng phát triển tốt',
    assignedDate: '2024-01-01',
    completedDate: '2024-01-05'
  }
];

export const mockAssignments: Assignment[] = [
  {
    id: 'a1',
    plotId: 'p2',
    plotCode: 'B3-K2',
    assignedTo: 'u2',
    assignedToName: 'Trần Thị B',
    assignedBy: 'manager1',
    assignedDate: '2024-01-10',
    dueDate: '2024-01-15',
    status: 'in-progress',
    priority: 'high',
    description: 'Kiểm tra sâu bệnh và phun thuốc bảo vệ thực vật'
  },
  {
    id: 'a2',
    plotId: 'p4',
    plotCode: 'D5-K8',
    assignedTo: 'u3',
    assignedToName: 'Lê Văn C',
    assignedBy: 'manager1',
    assignedDate: '2024-01-09',
    dueDate: '2024-01-12',
    status: 'new',
    priority: 'high',
    description: 'Điều tra tỷ lệ sống và xác định nguyên nhân'
  }
];

export const mockActivityLogs: ActivityLog[] = [
  {
    id: 'al1',
    plotId: 'p1',
    date: '2023-03-15',
    type: 'planting',
    description: 'Trồng mới 10ha Keo lai và 5.5ha Bạch đàn',
    performedBy: 'Đội trồng rừng'
  },
  {
    id: 'al2',
    plotId: 'p1',
    date: '2023-06-20',
    type: 'maintenance',
    description: 'Làm cỏ và bón phân lần 1',
    performedBy: 'Đội chăm sóc'
  },
  {
    id: 'al3',
    plotId: 'p1',
    date: '2023-09-15',
    type: 'survey',
    description: 'Kiểm tra sinh trưởng định kỳ',
    performedBy: 'Nguyễn Văn A'
  },
  {
    id: 'al4',
    plotId: 'p2',
    date: '2024-01-03',
    type: 'pest-control',
    description: 'Phát hiện sâu đục thân, đã phun thuốc',
    performedBy: 'Trần Thị B'
  }
];
