import type { RefObject } from "react";
import type { GeneratedOldLocomotivePlate } from "../types/oldLocomotive";

type OldLocomotivePlatePreviewProps = {
  plate: GeneratedOldLocomotivePlate;
  exportRef?: RefObject<HTMLDivElement | null>;
};

function OldLocomotivePlatePreview({
  plate,
  exportRef,
}: OldLocomotivePlatePreviewProps) {
  return (
    <div className="old-locomotive-plate-scroll-area">
      <div ref={exportRef} className="old-locomotive-plate-shell">
        <div className="old-locomotive-plate-inner">
          <span className="old-locomotive-axle-code">{plate.axleCode}</span>
          <span className="old-locomotive-series-code">{plate.seriesCode}</span>
          <span className="old-locomotive-unit-code">{plate.unitNumberText}</span>
        </div>
      </div>
    </div>
  );
}

export default OldLocomotivePlatePreview;