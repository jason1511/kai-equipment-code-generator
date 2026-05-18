export type RollingStockCategory =
  | "kereta_penumpang"
  | "gerbong_barang"
  | "krd"
  | "krl"
  | "sarana_khusus";

export type RollingStockType = {
  code: string;
  name: string;
  category: RollingStockCategory;
  description: string;
};

export type MotiveSource = {
  code: string;
  name: string;
  description: string;
};

export type DepotCategory =
  | "kereta_penumpang"
  | "gerbong_barang"
  | "krd"
  | "krl"
  | "sarana_khusus"
  | "campuran"
  | "lainnya";

export type DepotCode = {
  code: string;
  name: string;
  city?: string;
  categories: DepotCategory[];
  notes?: string;
};

export type EquipmentCodeInput = {
  stockType: string;
  motiveSource: string;
  productionYear: number;
  unitNumber: number;
  depotCode: string;
};

export type GeneratedEquipmentCode = {
  fullCode: string;
  stockType: string;
  motiveSource: string;
  productionYear: number;
  productionYearShort: string;
  unitNumber: string;
  depotCode: string;
};
export type PlateInput = EquipmentCodeInput & {
  electricalSystem: string;
  emptyWeightKg: number;
  serviceStartDate: string;
  lastMaintenanceDate: string;
  nextMaintenanceDate: string;
};
export type GeneratedPlate = GeneratedEquipmentCode & {
  electricalSystem: string;
  emptyWeightKg: number;
  emptyWeightText: string;

  serviceStartDate: string;
  serviceStartDateText: string;

  lastMaintenanceDate: string;
  lastMaintenanceDateText: string;

  nextMaintenanceDate: string;
  nextMaintenanceDateText: string;
};
export type PropulsionMode = "trailer" | "krl" | "krde" | "krdh";