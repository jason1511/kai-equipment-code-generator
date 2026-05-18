import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { generateTrainmark } from "../lib/generateTrainmark";
import type { BogieType, SpeedRating } from "../types/trainmark";
import TrainmarkPreview from "./TrainmarkPreview";

const speedRatings: SpeedRating[] = ["D", "E", "F"];
const bogieTypes: BogieType[] = ["K5", "K8", "K10"];

function TrainmarkTool() {
  const [speedRating, setSpeedRating] = useState<SpeedRating>("F");
  const [bogieType, setBogieType] = useState<BogieType>("K10");
  const [weightKg, setWeightKg] = useState(45000);
  const [isExporting, setIsExporting] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const trainmarkRef = useRef<HTMLDivElement | null>(null);

  const generatedTrainmark = generateTrainmark({
    speedRating,
    bogieType,
    weightKg,
  });

  async function downloadTrainmarkAsImage() {
    if (!trainmarkRef.current) return;

    try {
      setIsExporting(true);

      const dataUrl = await toPng(trainmarkRef.current, {
        cacheBust: true,
        pixelRatio: 3,
        backgroundColor: "transparent",
      });

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `trainmark-${generatedTrainmark.speedRating}-${generatedTrainmark.weightTonnes}-${generatedTrainmark.bogieDisplay}.png`;
      link.click();
    } catch (error) {
      console.error("Gagal mengekspor gambar trainmark:", error);
      alert("Gagal menyimpan gambar trainmark. Coba lagi.");
    } finally {
      setIsExporting(false);
    }
  }

  return (
    <section className="generator-layout">
      <form className="generator-card">
        <div className="form-grid">
          <label className="field">
            <span>Rating kecepatan</span>
            <select
              value={speedRating}
              onChange={(event) =>
                setSpeedRating(event.target.value as SpeedRating)
              }
            >
              {speedRatings.map((rating) => (
                <option key={rating} value={rating}>
                  {rating}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span>Tipe bogie</span>
            <select
              value={bogieType}
              onChange={(event) =>
                setBogieType(event.target.value as BogieType)
              }
            >
              {bogieTypes.map((bogie) => (
                <option key={bogie} value={bogie}>
                  {bogie}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span>Berat dalam kilogram</span>
            <input
              type="number"
              min="0"
              step="100"
              value={weightKg}
              onChange={(event) => setWeightKg(Number(event.target.value))}
            />
          </label>
        </div>
      </form>

      <aside className="result-card trainmark-result-card">
        <div className="result-header">
          <p className="result-label">Pratinjau trainmark</p>

          <button
            type="button"
            className="download-button"
            onClick={downloadTrainmarkAsImage}
            disabled={isExporting}
          >
            {isExporting ? "Menyimpan..." : "Simpan sebagai PNG"}
          </button>
        </div>

        <div
          className="trainmark-preview-wrap clickable-preview"
          onClick={() => setIsPreviewOpen(true)}
          title="Klik untuk melihat pratinjau gambar"
        >
          <TrainmarkPreview
            trainmark={generatedTrainmark}
            exportRef={trainmarkRef}
          />
        </div>

        <div className="code-details">
          <p>
            <strong>Rating kecepatan:</strong> {generatedTrainmark.speedRating}
          </p>
          <p>
            <strong>Bogie:</strong> {generatedTrainmark.bogieType} ditampilkan
            sebagai {generatedTrainmark.bogieDisplay}
          </p>
          <p>
            <strong>Berat:</strong> {generatedTrainmark.weightKg.toLocaleString("id-ID")} kg
            ditampilkan sebagai {generatedTrainmark.weightTonnes}
          </p>
        </div>
      </aside>

      {isPreviewOpen && (
        <div
          className="preview-modal-backdrop"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div
            className="preview-modal trainmark-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="preview-modal-header">
              <div>
                <p className="result-label">Preview gambar trainmark</p>
                <p className="preview-modal-code">
                  {generatedTrainmark.speedRating} /{" "}
                  {generatedTrainmark.weightTonnes} /{" "}
                  {generatedTrainmark.bogieDisplay}
                </p>
              </div>

              <button
                type="button"
                className="modal-close-button"
                onClick={() => setIsPreviewOpen(false)}
              >
                Tutup
              </button>
            </div>

            <div className="trainmark-preview-wrap">
              <TrainmarkPreview trainmark={generatedTrainmark} />
            </div>

            <button
              type="button"
              className="download-button"
              onClick={downloadTrainmarkAsImage}
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

export default TrainmarkTool;