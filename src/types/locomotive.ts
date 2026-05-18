export type AxleCode = "A" | "AA" | "B" | "BB" | "C" | "CC" | "D" | "DD";

export type LocomotivePowerSource = "1" | "2" | "3" | "4";

export type LocomotivePlateInput = {
  axleCode: AxleCode;
  powerSource: LocomotivePowerSource;
  typeSeries: number;
  productionYear: number;
  unitNumber: number;
};

export type GeneratedLocomotivePlate = {
  axleCode: AxleCode;
  powerSource: LocomotivePowerSource;
  typeSeries: number;
  typeSeriesText: string;
  seriesCode: string;
  productionYear: number;
  productionYearShort: string;
  unitNumber: number;
  unitNumberText: string;
  fullCode: string;
};