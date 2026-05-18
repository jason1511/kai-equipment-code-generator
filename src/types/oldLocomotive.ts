export type OldLocomotiveAxleCode =
  | "A"
  | "AA"
  | "B"
  | "BB"
  | "C"
  | "CC"
  | "D"
  | "DD";

export type OldLocomotivePowerSource = "1" | "2" | "3" | "4";

export type OldLocomotivePlateInput = {
  axleCode: OldLocomotiveAxleCode;
  powerSource: OldLocomotivePowerSource;
  typeSeries: number;
  unitNumber: number;
};

export type GeneratedOldLocomotivePlate = {
  axleCode: OldLocomotiveAxleCode;
  powerSource: OldLocomotivePowerSource;
  typeSeries: number;
  typeSeriesText: string;
  seriesCode: string;
  unitNumber: number;
  unitNumberText: string;
  fullCode: string;
};