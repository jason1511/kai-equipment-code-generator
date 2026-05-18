import { useEffect, useMemo, useRef, useState } from "react";
import { toPng } from "html-to-image";
import { depotCodes } from "../data/depotCodes";
import { motiveSources } from "../data/motiveSources";
import { stockTypes } from "../data/stockTypes";
import {
  addYearsToDate,
  buildServiceStartDate,
  type ServiceStartOffset,
} from "../lib/dateHelpers";
import { generatePlate } from "../lib/generatePlate";
import type {
  PropulsionMode,
  RollingStockCategory,
} from "../types/rollingStock";
import SerialPlatePreview from "./SerialPlatePreview";

const categoryLabels: Record<RollingStockCategory, string> = {
  kereta_penumpang: "Kereta Penumpang",
  gerbong_barang: "Gerbong Barang",
  krd: "KRD",
  krl: "KRL",
  sarana_khusus: "Sarana Khusus",
};

const propulsionModeLabels: Record<PropulsionMode, string> = {
  trailer: "Trailer / tidak berpenggerak sendiri",
  krl: "KRL - Kereta Rel Listrik",
  krde: "KRDE - Kereta Rel Diesel Elektrik",
  krdh: "KRDH - Kereta Rel Diesel Hidrolik",
};

const propulsionModeToMotiveSource: Record<PropulsionMode, string> = {
  trailer: "0",
  krl: "1",
  krde: "2",
  krdh: "3",
};

function EquipmentCodeForm() {
  const [stockType, setStockType] = useState("K1");
  const [propulsionMode, setPropulsionMode] =
    useState<PropulsionMode>("trailer");

  const motiveSource = propulsionModeToMotiveSource[propulsionMode];

  const [productionYear, setProductionYear] = useState(2018);
  const [unitNumber, setUnitNumber] = useState(1);
  const [depotCode, setDepotCode] = useState("BD");

  const [electricalSystem, setElectricalSystem] = useState("AC/TS/380/220V");
  const [emptyWeightKg, setEmptyWeightKg] = useState(35200);

  const [serviceStartOffset, setServiceStartOffset] =
    useState<ServiceStartOffset>(0);

  const [serviceStartDate, setServiceStartDate] = useState(
    buildServiceStartDate(2018, 0)
  );

  const [lastMaintenanceDate, setLastMaintenanceDate] = useState("2023-09-30");

  const [nextMaintenanceDate, setNextMaintenanceDate] = useState(
    addYearsToDate("2023-09-30", 2)
  );

  const [isExporting, setIsExporting] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const plateRef = useRef<HTMLDivElement | null>(null);

  const selectedStockType = stockTypes.find((item) => item.code === stockType);

  const filteredDepots = useMemo(() => {
    if (!selectedStockType) return depotCodes;

    return depotCodes.filter((depot) =>
      depot.categories.some(
        (category) =>
          category === selectedStockType.category || category === "campuran"
      )
    );
  }, [selectedStockType]);

  useEffect(() => {
    if (serviceStartOffset === "custom") return;

    setServiceStartDate(
      buildServiceStartDate(productionYear, serviceStartOffset)
    );
  }, [productionYear, serviceStartOffset]);

  useEffect(() => {
    setNextMaintenanceDate(addYearsToDate(lastMaintenanceDate, 2));
  }, [lastMaintenanceDate]);

  useEffect(() => {
    if (filteredDepots.length === 0) return;

    const isCurrentDepotAvailable = filteredDepots.some(
      (depot) => depot.code === depotCode
    );

    if (!isCurrentDepotAvailable) {
      setDepotCode(filteredDepots[0].code);
    }
  }, [filteredDepots, depotCode]);

  const generatedPlate = generatePlate({
    stockType,
    motiveSource,
    productionYear,
    unitNumber,
    depotCode,
    electricalSystem,
    emptyWeightKg,
    serviceStartDate,
    lastMaintenanceDate,
    nextMaintenanceDate,
  });

  async function downloadPlateAsImage() {
    if (!plateRef.current) return;

    try {
      setIsExporting(true);

      const dataUrl = await toPng(plateRef.current, {
        cacheBust: true,
        pixelRatio: 1,
      });

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `${generatedPlate.fullCode.replace(/\s+/g, "-")}.png`;
      link.click();
    } catch (error) {
      console.error("Gagal mengekspor gambar plat:", error);
      alert("Gagal menyimpan gambar plat. Coba lagi.");
    } finally {
      setIsExporting(false);
    }
  }

  return (
    <section className="generator-layout">
      <form className="generator-card">
        <div className="form-grid">
          <label className="field">
            <span>Jenis sarana</span>
            <select
              value={stockType}
              onChange={(event) => setStockType(event.target.value)}
            >
              {stockTypes.map((type) => (
                <option key={type.code} value={type.code}>
                  {type.code} — {type.name}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span>Mode penggerak</span>
            <select
              value={propulsionMode}
              onChange={(event) =>
                setPropulsionMode(event.target.value as PropulsionMode)
              }
            >
              {Object.entries(propulsionModeLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span>Sumber penggerak pada plat</span>
            <input
              type="text"
              value={`${motiveSource} — ${
                motiveSources.find((source) => source.code === motiveSource)
                  ?.name ?? "Tidak diketahui"
              }`}
              disabled
              readOnly
            />
          </label>

          <label className="field">
            <span>Tahun produksi</span>
            <input
              type="number"
              min="1950"
              max="2099"
              value={productionYear}
              onChange={(event) =>
                setProductionYear(Number(event.target.value))
              }
            />
          </label>

          <label className="field">
            <span>Nomor unit</span>
            <input
              type="number"
              min="1"
              max="999"
              value={unitNumber}
              onChange={(event) => setUnitNumber(Number(event.target.value))}
            />
          </label>

          <label className="field">
            <span>Depo / alokasi</span>
            <select
              value={depotCode}
              onChange={(event) => setDepotCode(event.target.value)}
            >
              {filteredDepots.map((depot) => (
                <option key={`${depot.code}-${depot.name}`} value={depot.code}>
                  {depot.code} — {depot.name}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span>Sistem kelistrikan</span>
            <input
              type="text"
              value={electricalSystem}
              onChange={(event) => setElectricalSystem(event.target.value)}
              placeholder="AC/TS/380/220V"
            />
          </label>

          <label className="field">
            <span>Berat kosong / BK</span>
            <input
              type="number"
              min="0"
              value={emptyWeightKg}
              onChange={(event) => setEmptyWeightKg(Number(event.target.value))}
            />
          </label>

          <label className="field">
            <span>Mode mulai dinas / MD</span>
            <select
              value={serviceStartOffset}
              onChange={(event) => {
                const value = event.target.value;

                if (value === "custom") {
                  setServiceStartOffset("custom");
                  return;
                }

                setServiceStartOffset(Number(value) as 0 | 1 | 2);
              }}
            >
              <option value={0}>Sama dengan tahun produksi</option>
              <option value={1}>Tahun produksi +1</option>
              <option value={2}>Tahun produksi +2</option>
              <option value="custom">Custom manual</option>
            </select>
          </label>

          <label className="field">
            <span>Mulai dinas / MD</span>
            <input
              type="date"
              value={serviceStartDate}
              disabled={serviceStartOffset !== "custom"}
              onChange={(event) => setServiceStartDate(event.target.value)}
            />
          </label>

          <label className="field">
            <span>Perawatan akhir / PA</span>
            <input
              type="date"
              value={lastMaintenanceDate}
              onChange={(event) => setLastMaintenanceDate(event.target.value)}
            />
          </label>

          <label className="field">
            <span>PA yang akan datang / PA YAD</span>
            <input type="date" value={nextMaintenanceDate} disabled readOnly />
          </label>
        </div>
      </form>

      <aside className="result-card">
        <div className="result-header">
          <p className="result-label">Pratinjau plat sarana</p>

          <button
            type="button"
            className="download-button"
            onClick={downloadPlateAsImage}
            disabled={isExporting}
          >
            {isExporting ? "Menyimpan..." : "Simpan sebagai PNG"}
          </button>
        </div>

        <div
          className="clickable-preview"
          onClick={() => setIsPreviewOpen(true)}
          title="Klik untuk melihat pratinjau gambar"
        >
          <SerialPlatePreview plate={generatedPlate} exportRef={plateRef} />
        </div>

        {selectedStockType && (
          <div className="code-details">
            <p>
              <strong>Kategori:</strong>{" "}
              {categoryLabels[selectedStockType.category]}
            </p>
            <p>
              <strong>Jenis:</strong> {selectedStockType.name}
            </p>
            <p>{selectedStockType.description}</p>
          </div>
        )}
      </aside>

      {isPreviewOpen && (
        <div
          className="preview-modal-backdrop"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div
            className="preview-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="preview-modal-header">
              <div>
                <p className="result-label">Preview gambar plat</p>
                <p className="preview-modal-code">{generatedPlate.fullCode}</p>
              </div>

              <button
                type="button"
                className="modal-close-button"
                onClick={() => setIsPreviewOpen(false)}
              >
                Tutup
              </button>
            </div>

            <div className="preview-modal-plate">
              <SerialPlatePreview plate={generatedPlate} />
            </div>

            <button
              type="button"
              className="download-button"
              onClick={downloadPlateAsImage}
              disabled={isExporting}
            >
              {isExporting ? "Menyimpan..." : "Simpan sebagai PNG"}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default EquipmentCodeForm;