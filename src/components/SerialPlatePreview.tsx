import type { RefObject } from "react";
import type { GeneratedPlate } from "../types/rollingStock";

type SerialPlatePreviewProps = {
  plate: GeneratedPlate;
  exportRef?: RefObject<HTMLDivElement | null>;
};

function getYearFromPlateDate(dateText: string): string {
  const parts = dateText.split("-");
  return parts[2] ?? "";
}

function SerialPlatePreview({ plate, exportRef }: SerialPlatePreviewProps) {
  const lastMaintenanceYear = getYearFromPlateDate(
    plate.lastMaintenanceDateText
  );
  const nextMaintenanceYear = getYearFromPlateDate(
    plate.nextMaintenanceDateText
  );

  return (
    <div className="plate-scroll-area">
      <div ref={exportRef} className="serial-plate">
        <div className="plate-main-number">
          <span>{plate.stockType}</span>
          <span>{plate.motiveSource}</span>
          <span>{plate.productionYearShort}</span>
          <span>{plate.unitNumber}</span>
        </div>

        <div className="plate-depot-code">{plate.depotCode}</div>

        <div className="plate-system-info">
          <div>{plate.electricalSystem}</div>
          <div>BK - {plate.emptyWeightText}</div>
        </div>

        <div className="plate-date-labels">
          <span>MD</span>
          <span>PA</span>
          <span>PA YAD</span>
        </div>

        <div className="plate-date-values">
          <span>{plate.serviceStartDateText}</span>
          <span>{plate.lastMaintenanceDateText}</span>
          <span>{plate.nextMaintenanceDateText}</span>
        </div>

        <div className="plate-pem-area">
          <div className="pem-block">
            <div className="pem-title-row">
              <span>PEM</span>
              <strong>{lastMaintenanceYear}</strong>
            </div>

            <div className="pem-grid">
              {Array.from({ length: 12 }).map((_, index) => (
                <i key={index} />
              ))}
            </div>
          </div>

          <div className="pem-block">
            <div className="pem-title-row">
              <span>PEM</span>
              <strong>{nextMaintenanceYear}</strong>
            </div>

            <div className="pem-grid">
              {Array.from({ length: 12 }).map((_, index) => (
                <i key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SerialPlatePreview;