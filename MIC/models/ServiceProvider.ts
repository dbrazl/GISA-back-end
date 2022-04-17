export type ServiceProvider = {
  name: string;
  address: string;
  academicFormation: string;
  convened: string;
  status: ProviderStatus;
}

export enum ProviderStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export type ServiceProviderIndexResponse = {
  data: ServiceProvider[],
}

export type ServiceProviderResponse = {
  data: ServiceProvider,
}