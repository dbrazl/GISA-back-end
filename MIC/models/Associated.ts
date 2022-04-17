export type Associated = {
  id?: number;
  name: string;
  address: string;
  academicFormation: string;
  healthCare: HealthCare;
  status: AssociatedStatus;
  ageGroup: AgeGroup;
  healthCareType: HealthCareType;
  dentalMedicalPlan: boolean;
  healthInfo: HealthInfo;
};

export enum HealthCare {
  INDIVIDUAL = "INDIVIDUAL",
  BUSINESS = "BUSINESS",
}

export enum AssociatedStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  SUSPENDED = "SUSPENDED",
}

export enum AgeGroup {
  AGE_0_TO_10_YEARS = "AGE_0_TO_10_YEARS",
  AGE_10_TO_20_YEARS = "AGE_10_TO_20_YEARS",
  AGE_20_TO_30_YEARS = "AGE_20_TO_30_YEARS",
  AGE_30_TO_40_YEARS = "AGE_30_TO_40_YEARS",
  AGE_40_TO_50_YEARS = "AGE_40_TO_50_YEARS",
  AGE_50_TO_60_YEARS = "AGE_50_T0_60_YEARS",
  AGE_60_PLUS_YEARS = "AGE_60_PLUS_YEARS",
}

export enum HealthCareType {
  INFIRMARY = "INFIRMARY",
  APARTMENT = "APARTMENT",
  VIP = "VIP"
}

export type HealthInfo = {
  medicalAppointments: number;
  medicalExams: number;
  coverage: string[];
}

export type AssociatedIndexResponse = {
  data: AssociatedSGPS[];
}

export type AssociatedResponse = {
  data: AssociatedSGPS;
}

export type AssociatedSGPS = {
  id?: number;
  name: string;
  address: string;
  academicFormation: string;
  healthCare: HealthCare;
  status: AssociatedStatus;
  ageGroup: AgeGroup;
  healthCareType: HealthCareType;
  dentalMedicalPlan: boolean;
  medicalAppointments: number;
  medicalExams: number;
  coverage: string[];
};