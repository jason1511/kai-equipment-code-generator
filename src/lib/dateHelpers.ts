export type ServiceStartOffset = 0 | 1 | 2 | "custom";

export function buildServiceStartDate(
  productionYear: number,
  offset: Exclude<ServiceStartOffset, "custom">
): string {
  const year = productionYear + offset;

  return `${year}-01-01`;
}

export function addYearsToDate(dateValue: string, yearsToAdd: number): string {
  if (!dateValue) return "";

  const [year, month, day] = dateValue.split("-").map(Number);

  if (!year || !month || !day) {
    return dateValue;
  }

  const newYear = year + yearsToAdd;

  return `${newYear}-${String(month).padStart(2, "0")}-${String(day).padStart(
    2,
    "0"
  )}`;
}