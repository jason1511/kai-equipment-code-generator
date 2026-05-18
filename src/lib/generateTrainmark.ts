import type { GeneratedTrainmark, TrainmarkInput } from "../types/trainmark";

function getBogieDisplay(bogieType: string): string {
  return bogieType.replace("K", "");
}

function getWeightTonnes(weightKg: number): number {
  return Math.round(weightKg / 1000);
}

export function generateTrainmark(
  input: TrainmarkInput
): GeneratedTrainmark {
  return {
    speedRating: input.speedRating,
    bogieType: input.bogieType,
    bogieDisplay: getBogieDisplay(input.bogieType),
    weightKg: input.weightKg,
    weightTonnes: getWeightTonnes(input.weightKg),
  };
}