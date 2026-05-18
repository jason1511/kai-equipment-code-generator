import type { RefObject } from "react";
import type { GeneratedTrainmark } from "../types/trainmark";

type TrainmarkPreviewProps = {
  trainmark: GeneratedTrainmark;
  exportRef?: RefObject<HTMLDivElement | null>;
};

function TrainmarkPreview({ trainmark, exportRef }: TrainmarkPreviewProps) {
  return (
    <div ref={exportRef} className="trainmark-preview">
      <div className="trainmark-speed">{trainmark.speedRating}</div>

      <div className="trainmark-bottom-row">
        <span>{trainmark.weightTonnes}</span>
        <span>{trainmark.bogieDisplay}</span>
      </div>
    </div>
  );
}

export default TrainmarkPreview;