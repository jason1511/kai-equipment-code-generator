import type {
  GeneratedOldLocomotivePlate,
  OldLocomotivePlateInput,
} from "../types/oldLocomotive";

function formatTwoDigits(value: number): string {
  return String(value).padStart(2, "0");
}

export function generateOldLocomotivePlate(
  input: OldLocomotivePlateInput
): GeneratedOldLocomotivePlate {
  const typeSeriesText = formatTwoDigits(input.typeSeries);
  const unitNumberText = formatTwoDigits(input.unitNumber);
  const seriesCode = `${input.powerSource}${typeSeriesText}`;
  const fullCode = `${input.axleCode} ${seriesCode} ${unitNumberText}`;

  return {
    axleCode: input.axleCode,
    powerSource: input.powerSource,
    typeSeries: input.typeSeries,
    typeSeriesText,
    seriesCode,
    unitNumber: input.unitNumber,
    unitNumberText,
    fullCode,
  };
}