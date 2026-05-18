import type {
  EquipmentCodeInput,
  GeneratedEquipmentCode,
} from "../types/rollingStock";

function getYearShort(productionYear: number): string {
  return String(productionYear).slice(-2).padStart(2, "0");
}

function getUnitNumber(unitNumber: number): string {
  return String(unitNumber).padStart(2, "0");
}

export function generateEquipmentCode(
  input: EquipmentCodeInput
): GeneratedEquipmentCode {
  const productionYearShort = getYearShort(input.productionYear);
  const unitNumber = getUnitNumber(input.unitNumber);

  const fullCode = [
    input.stockType,
    input.motiveSource,
    productionYearShort,
    unitNumber,
    input.depotCode,
  ].join(" ");

  return {
    fullCode,
    stockType: input.stockType,
    motiveSource: input.motiveSource,
    productionYear: input.productionYear,
    productionYearShort,
    unitNumber,
    depotCode: input.depotCode,
  };
}
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
  lastMaintenanceDate: string;
  nextMaintenanceDate: string;
};