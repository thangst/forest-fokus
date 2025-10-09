// Type definitions for the Forest Management System

export type GrowthStage = 'seedling' | 'young' | 'mature' | 'old';
export type StemQuality = 'straight' | 'bent' | 'worm-damaged' | 'bark-split';
export type FoliageCondition = 'healthy-green' | 'yellowing' | 'sparse' | 'leaf-drop';
export type RootSystem = 'strong' | 'weak';
export type GrowthSpeed = 'above' | 'normal' | 'below';
export type HealthStatus = 'good' | 'medium' | 'poor';
export type DiseaseLevel = 'none' | 'mild' | 'moderate' | 'severe';
export type SurveyStatus = 'new' | 'in-progress' | 'pending-review' | 'completed';

export interface Species {
  id: string;
  name: string;
  scientificName: string;
  color: string;
  standardGrowthRate: {
    height: number; // m/month
    diameter: number; // cm/month
  };
}

export interface TreeMetrics {
  survivalRate: number;
  avgDBH: number; // cm
  avgHeight: number; // m
  canopyCoverage: number; // %
  density: number; // trees/ha
  estimatedVolume: number; // m³/ha
  growthStage: GrowthStage;
  stemQuality: StemQuality;
  foliageCondition: FoliageCondition;
  rootSystem: RootSystem;
  hasFlowering: boolean;
  hasFruiting: boolean;
  growthSpeed: GrowthSpeed;
  healthStatus: HealthStatus;
  healthScore: number; // 0-100
  diseaseLevel: DiseaseLevel;
  pestLevel: DiseaseLevel;
  environmentalStress: string[];
}

export interface SpeciesInPlot {
  speciesId: string;
  speciesName: string;
  color: string;
  area: number; // ha
  plantingDate: string;
  age: number; // months
  metrics: TreeMetrics;
  lastSurveyDate: string;
}

export interface Plot {
  id: string;
  code: string;
  name: string;
  region: string;
  totalArea: number; // ha
  location: {
    lat: number;
    lng: number;
  };
  species: SpeciesInPlot[];
  overallHealth: HealthStatus;
  notes: string;
}

export interface Survey {
  id: string;
  plotId: string;
  plotCode: string;
  speciesId: string;
  surveyDate: string;
  surveyorId: string;
  surveyorName: string;
  status: SurveyStatus;
  metrics: TreeMetrics;
  photos: string[];
  notes: string;
  assignedDate?: string;
  completedDate?: string;
}

export interface Assignment {
  id: string;
  plotId: string;
  plotCode: string;
  assignedTo: string;
  assignedToName: string;
  assignedBy: string;
  assignedDate: string;
  dueDate: string;
  status: SurveyStatus;
  priority: 'low' | 'medium' | 'high';
  description: string;
}

export interface ActivityLog {
  id: string;
  plotId: string;
  date: string;
  type: 'planting' | 'survey' | 'maintenance' | 'thinning' | 'fertilizing' | 'pest-control' | 'other';
  description: string;
  performedBy: string;
}
