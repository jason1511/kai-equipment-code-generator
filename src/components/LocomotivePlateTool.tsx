import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { generateLocomotivePlate } from "../lib/generateLocomotivePlate";
import type {
  AxleCode,
  LocomotivePowerSource,
} from "../types/locomotive";
import LocomotivePlatePreview from "./LocomotivePlatePreview";

const axleCodes: AxleCode[] = ["A", "AA", "B", "BB", "C", "CC", "D", "DD"];

const powerSources: {
  code: LocomotivePowerSource;
  label: string;
}[] = [
  { code: "1", label: "1 — Elektrik" },
  { code: "2", label: "2 — Diesel-Elektrik" },
  { code: "3", label: "3 — Diesel-Hidrolik" },
  { code: "4", label: "4 — Multi-power / Hybrid" },
];

function LocomotivePlateTool() {
  const [axleCode, setAxleCode] = useState<AxleCode>("CC");
  const [powerSource, setPowerSource] =
    useState<LocomotivePowerSource>("2");
  const [typeSeries, setTypeSeries] = useState(6);
  const [productionYear, setProductionYear] = useState(2013);
  const [unitNumber, setUnitNumber] = useState(1);

  const [isExporting, setIsExporting] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const locomotivePlateRef = useRef<HTMLDivElement | null>(null);

  const generatedPlate = generateLocomotivePlate({
    axleCode,
    powerSource,
    typeSeries,
    productionYear,
    unitNumber,
  });

  async function downloadLocomotivePlateAsImage() {
    if (!locomotivePlateRef.current) return;

    try {
      setIsExporting(true);

      const dataUrl = await toPng(locomotivePlateRef.current, {
        cacheBust: true,
        pixelRatio: 2,
      });

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `${generatedPlate.fullCode.replace(/\s+/g, "-")}.png`;
      link.click();
    } catch (error) {
      console.error("Gagal mengekspor plat lokomotif:", error);
      alert("Gagal menyimpan gambar plat lokomotif. Coba lagi.");
    } finally {
      setIsExporting(false);
    }
  }

  return (
    <section className="generator-layout">
      <form className="generator-card">
        <div className="form-grid">
          <label className="field">
            <span>Kode gandar penggerak</span>
            <select
              value={axleCode}
              onChange={(event) => setAxleCode(event.target.value as AxleCode)}
            >
              {axleCodes.map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span>Sumber tenaga</span>
            <select
              value={powerSource}
              onChange={(event) =>
                setPowerSource(event.target.value as LocomotivePowerSource)
              }
            >
              {powerSources.map((source) => (
                <option key={source.code} value={source.code}>
                  {source.label}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span>Seri tipe</span>
            <input
              type="number"
              min="0"
              max="99"
              value={typeSeries}
              onChange={(event) => setTypeSeries(Number(event.target.value))}
            />
          </label>

          <label className="field">
            <span>Tahun produksi</span>
            <input
              type="number"
              min="1900"
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
        </div>
      </form>

      <aside className="result-card">
        <div className="result-header">
          <p className="result-label">Pratinjau plat lokomotif</p>

          <button
            type="button"
            className="download-button"
            onClick={downloadLocomotivePlateAsImage}
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
          <LocomotivePlatePreview
            plate={generatedPlate}
            exportRef={locomotivePlateRef}
          />
        </div>

        <div className="code-details">
          <p>
            <strong>Hasil:</strong> {generatedPlate.fullCode}
          </p>
          <p>
            <strong>Seri:</strong> {generatedPlate.seriesCode} = sumber tenaga{" "}
            {generatedPlate.powerSource} + seri tipe{" "}
            {generatedPlate.typeSeriesText}
          </p>
          <p>
            <strong>Tahun:</strong> {generatedPlate.productionYear} ditampilkan
            sebagai {generatedPlate.productionYearShort}
          </p>
        </div>
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
                <p className="result-label">Preview gambar plat lokomotif</p>
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
              <LocomotivePlatePreview plate={generatedPlate} />
            </div>

            <button
              type="button"
              className="download-button"
              onClick={downloadLocomotivePlateAsImage}
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

export default LocomotivePlateTool;