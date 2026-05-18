import type {
  GeneratedLocomotivePlate,
  LocomotivePlateInput,
} from "../types/locomotive";

function formatTwoDigits(value: number): string {
  return String(value).padStart(2, "0");
}

function getYearShort(year: number): string {
  return String(year).slice(-2).padStart(2, "0");
}

export function generateLocomotivePlate(
  input: LocomotivePlateInput
): GeneratedLocomotivePlate {
  const typeSeriesText = formatTwoDigits(input.typeSeries);
  const productionYearShort = getYearShort(input.productionYear);
  const unitNumberText = formatTwoDigits(input.unitNumber);

  const seriesCode = `${input.powerSource}${typeSeriesText}`;
  const fullCode = `${input.axleCode} ${seriesCode} ${productionYearShort} ${unitNumberText}`;

  return {
    axleCode: input.axleCode,
    powerSource: input.powerSource,
    typeSeries: input.typeSeries,
    typeSeriesText,
    seriesCode,
    productionYear: input.productionYear,
    productionYearShort,
    unitNumber: input.unitNumber,
    unitNumberText,
    fullCode,
  };
}