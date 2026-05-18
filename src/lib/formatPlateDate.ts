export function formatPlateDate(dateValue: string): string {
  if (!dateValue) return "";

  const [year, month, day] = dateValue.split("-");

  if (!year || !month || !day) {
    return dateValue;
  }

  return `${day}-${month}-${year}`;
}