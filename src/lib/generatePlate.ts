import { generateEquipmentCode } from "./generateEquipmentCode";
import { formatPlateDate } from "./formatPlateDate";
import type { GeneratedPlate, PlateInput } from "../types/rollingStock";

function formatWeightKg(weight: number): string {
  return new Intl.NumberFormat("id-ID").format(weight);
}

export function generatePlate(input: PlateInput): GeneratedPlate {
  const equipmentCode = generateEquipmentCode(input);

  return {
    ...equipmentCode,
    electricalSystem: input.electricalSystem,
    emptyWeightKg: input.emptyWeightKg,
    emptyWeightText: `${formatWeightKg(input.emptyWeightKg)} KG`,

    serviceStartDate: input.serviceStartDate,
    serviceStartDateText: formatPlateDate(input.serviceStartDate),

    lastMaintenanceDate: input.lastMaintenanceDate,
    lastMaintenanceDateText: formatPlateDate(input.lastMaintenanceDate),

    nextMaintenanceDate: input.nextMaintenanceDate,
    nextMaintenanceDateText: formatPlateDate(input.nextMaintenanceDate),
  };
}