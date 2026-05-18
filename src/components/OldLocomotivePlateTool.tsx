import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { generateOldLocomotivePlate } from "../lib/generateOldLocomotivePlate";
import type {
  OldLocomotiveAxleCode,
  OldLocomotivePowerSource,
} from "../types/oldLocomotive";
import OldLocomotivePlatePreview from "./OldLocomotivePlatePreview";

const axleCodes: OldLocomotiveAxleCode[] = [
  "A",
  "AA",
  "B",
  "BB",
  "C",
  "CC",
  "D",
  "DD",
];

const powerSources: {
  code: OldLocomotivePowerSource;
  label: string;
}[] = [
  { code: "1", label: "1 — Elektrik" },
  { code: "2", label: "2 — Diesel-Elektrik" },
  { code: "3", label: "3 — Diesel-Hidrolik" },
  { code: "4", label: "4 — Multi-power / Hybrid" },
];

function OldLocomotivePlateTool() {
  const [axleCode, setAxleCode] = useState<OldLocomotiveAxleCode>("CC");
  const [powerSource, setPowerSource] =
    useState<OldLocomotivePowerSource>("2");
  const [typeSeries, setTypeSeries] = useState(3);
  const [unitNumber, setUnitNumber] = useState(1);

  const [isExporting, setIsExporting] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const plateRef = useRef<HTMLDivElement | null>(null);

  const generatedPlate = generateOldLocomotivePlate({
    axleCode,
    powerSource,
    typeSeries,
    unitNumber,
  });

  async function downloadOldLocomotivePlateAsImage() {
    if (!plateRef.current) return;

    try {
      setIsExporting(true);

      const dataUrl = await toPng(plateRef.current, {
        cacheBust: true,
        pixelRatio: 2,
      });

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `${generatedPlate.fullCode.replace(/\s+/g, "-")}.png`;
      link.click();
    } catch (error) {
      console.error("Gagal mengekspor plat lokomotif lama:", error);
      alert("Gagal menyimpan gambar plat lokomotif lama. Coba lagi.");
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
              onChange={(event) =>
                setAxleCode(event.target.value as OldLocomotiveAxleCode)
              }
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
                setPowerSource(event.target.value as OldLocomotivePowerSource)
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
            <span>Nomor unit</span>
            <input
              type="number"
              min="1"
              max="99"
              value={unitNumber}
              onChange={(event) => setUnitNumber(Number(event.target.value))}
            />
          </label>
        </div>
      </form>

      <aside className="result-card">
        <div className="result-header">
          <p className="result-label">Pratinjau plat lokomotif lama</p>

          <button
            type="button"
            className="download-button"
            onClick={downloadOldLocomotivePlateAsImage}
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
          <OldLocomotivePlatePreview
            plate={generatedPlate}
            exportRef={plateRef}
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
            <strong>Nomor unit:</strong> {generatedPlate.unitNumberText}
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
                <p className="result-label">Preview gambar plat lokomotif lama</p>
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
              <OldLocomotivePlatePreview plate={generatedPlate} />
            </div>

            <button
              type="button"
              className="download-button"
              onClick={downloadOldLocomotivePlateAsImage}
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

export default OldLocomotivePlateTool;