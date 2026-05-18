import { useState } from "react";
import EquipmentCodeForm from "./components/EquipmentCodeForm";
import TrainmarkTool from "./components/TrainmarkTool";
import LocomotivePlateTool from "./components/LocomotivePlateTool";
import OldLocomotivePlateTool from "./components/OldLocomotivePlateTool";

type ActiveTool = "serial-plate" | "trainmark" | "locomotive-plate" | "old-locomotive-plate";

function App() {
  const [activeTool, setActiveTool] = useState<ActiveTool>("serial-plate");

  return (
    <main className="app-shell">
      <section className="home-section">
        <p className="eyebrow">Railway Hobbyist Tool</p>
        <h1>Generator Tanda Sarana Kereta Api Indonesia</h1>
        <p className="intro">
          Buat pratinjau tanda sarana kereta api seperti plat nomor seri hitam
          dan trainmark kecepatan/bogie untuk kebutuhan hobi, modding, model
          train, atau dokumentasi visual.
        </p>
      </section>

      <section className="tool-overview-section">
        <div className="section-heading">
          <p className="eyebrow">Pilih Tool</p>
          <h2>Generator yang tersedia</h2>
          <p>
            Mulai dari plat identitas nomor seri sarana. Tool trainmark akan
            digunakan untuk membuat tanda kotak kecepatan, berat, dan tipe bogie.
          </p>
        </div>

        <div className="tool-switcher">
          <button
            type="button"
            className={
              activeTool === "serial-plate"
                ? "tool-tab active-tool-tab"
                : "tool-tab"
            }
            onClick={() => setActiveTool("serial-plate")}
          >
            <span>Tool 1</span>
            Plat Nomor Seri
          </button>

          <button
            type="button"
            className={
              activeTool === "trainmark"
                ? "tool-tab active-tool-tab"
                : "tool-tab"
            }
            onClick={() => setActiveTool("trainmark")}
          >
            <span>Tool 2</span>
            Trainmark
          </button>
          <button
  type="button"
  className={
    activeTool === "locomotive-plate"
      ? "tool-tab active-tool-tab"
      : "tool-tab"
  }
  onClick={() => setActiveTool("locomotive-plate")}
>
  <span>Tool 3</span>
  Plat Lokomotif
</button>
          <button
    type="button"
    className={
      activeTool === "old-locomotive-plate"
        ? "tool-tab active-tool-tab"
        : "tool-tab"
    }
    onClick={() => setActiveTool("old-locomotive-plate")}
  >
    <span>Tool 4</span>
    Plat Lokomotif Lama
  </button>
        </div>
      </section>

      {activeTool === "serial-plate" && (
        <section className="tool-section">
          <div className="section-heading">
            <p className="eyebrow">Tool 1</p>
            <h2>Generator Plat Identitas Nomor Seri</h2>
            <p>
              Masukkan jenis sarana, tahun produksi, alokasi depo, data
              kelistrikan, berat kosong, dan tanggal perawatan untuk menghasilkan
              plat hitam bergaya referensi.
            </p>
          </div>

          <EquipmentCodeForm />
        </section>
      )}

      {activeTool === "trainmark" && (
        <section className="tool-section">
          <div className="section-heading">
            <p className="eyebrow">Tool 2</p>
            <h2>Generator Trainmark</h2>
            <p>
              Tool ini akan menghasilkan tanda kotak kecepatan, berat, dan tipe
              bogie seperti contoh F / 45 / 10 pada referensi.
            </p>
          </div>

          <TrainmarkTool />
        </section>
        
      )}
      {activeTool === "locomotive-plate" && (
  <section className="tool-section">
    <div className="section-heading">
      <p className="eyebrow">Tool 3</p>
      <h2>Generator Plat Identitas Lokomotif</h2>
      <p>
        Buat plat identitas lokomotif standar saat ini, seperti CC 206 13 01,
        dengan pilihan kode gandar, sumber tenaga, seri tipe, tahun produksi,
        dan nomor unit.
      </p>
    </div>

    <LocomotivePlateTool />
  </section>
)}
{activeTool === "old-locomotive-plate" && (
  <section className="tool-section">
    <div className="section-heading">
      <p className="eyebrow">Tool 4</p>
      <h2>Generator Plat Identitas Lokomotif Lama</h2>
      <p>
        Buat plat lokomotif gaya lama seperti CC 203 01 dengan pilihan kode
        gandar, sumber tenaga, seri tipe, dan nomor unit.
      </p>
    </div>

    <OldLocomotivePlateTool />
  </section>
)}
    </main>
  );
}

export default App;