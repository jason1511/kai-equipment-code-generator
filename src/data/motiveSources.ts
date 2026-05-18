import type { MotiveSource } from "../types/rollingStock";

export const motiveSources: MotiveSource[] = [
  {
    code: "0",
    name: "Lokomotif / Trailer",
    description: "Sarana tidak berpenggerak sendiri dan ditarik lokomotif.",
  },
  {
    code: "1",
    name: "Listrik",
    description: "Sarana berpenggerak listrik.",
  },
  {
    code: "2",
    name: "Diesel Elektrik",
    description: "Sarana berpenggerak diesel elektrik.",
  },
  {
    code: "3",
    name: "Diesel Hidrolik",
    description: "Sarana berpenggerak diesel hidrolik.",
  },
];