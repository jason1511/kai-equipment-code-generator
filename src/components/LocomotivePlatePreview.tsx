import type { RefObject } from "react";
import type { GeneratedLocomotivePlate } from "../types/locomotive";

type LocomotivePlatePreviewProps = {
  plate: GeneratedLocomotivePlate;
  exportRef?: RefObject<HTMLDivElement | null>;
};

function LocomotivePlatePreview({
  plate,
  exportRef,
}: LocomotivePlatePreviewProps) {
  return (
    <div className="locomotive-plate-scroll-area">
      <div ref={exportRef} className="locomotive-plate">
        <span className="locomotive-axle-code">{plate.axleCode}</span>
        <span className="locomotive-series-code">{plate.seriesCode}</span>
        <span className="locomotive-year-code">{plate.productionYearShort}</span>
        <span className="locomotive-unit-code">{plate.unitNumberText}</span>
      </div>
    </div>
  );
}

export default LocomotivePlatePreview;