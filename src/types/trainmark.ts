export type SpeedRating = "D" | "E" | "F";

export type BogieType = "K5" | "K8" | "K10";

export type TrainmarkInput = {
  speedRating: SpeedRating;
  bogieType: BogieType;
  weightKg: number;
};

export type GeneratedTrainmark = {
  speedRating: SpeedRating;
  bogieType: BogieType;
  bogieDisplay: string;
  weightKg: number;
  weightTonnes: number;
};