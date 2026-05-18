import type { RollingStockType } from "../types/rollingStock";

export const stockTypes: RollingStockType[] = [
  // Kereta penumpang / seat class
  {
    code: "K",
    name: "Kereta Tempat Duduk",
    category: "kereta_penumpang",
    description: "Kereta penumpang umum tanpa penanda kelas angka spesifik.",
  },
  {
    code: "K1",
    name: "Kereta Eksekutif",
    category: "kereta_penumpang",
    description: "Kereta penumpang kelas eksekutif.",
  },
  {
    code: "K2",
    name: "Kereta Bisnis",
    category: "kereta_penumpang",
    description: "Kereta penumpang kelas bisnis.",
  },
  {
    code: "K3",
    name: "Kereta Ekonomi",
    category: "kereta_penumpang",
    description: "Kereta penumpang kelas ekonomi.",
  },
  {
    code: "T",
    name: "Kereta Tidur",
    category: "kereta_penumpang",
    description: "Kereta tidur atau sleeper class.",
  },
  {
    code: "T1",
    name: "Kereta Tidur Kelas 1",
    category: "kereta_penumpang",
    description: "Kereta tidur kelas 1 atau sleeper kelas eksekutif.",
  },
  {
    code: "M",
    name: "Kereta Makan",
    category: "kereta_penumpang",
    description: "Kereta makan dalam rangkaian penumpang.",
  },
  {
    code: "P",
    name: "Kereta Pembangkit",
    category: "kereta_penumpang",
    description: "Kereta pembangkit listrik untuk rangkaian penumpang.",
  },
  {
    code: "B",
    name: "Kereta Bagasi",
    category: "kereta_penumpang",
    description: "Kereta bagasi dalam rangkaian penumpang.",
  },

  // Kereta kombinasi
  {
    code: "KM",
    name: "Kereta Tempat Duduk + Makan",
    category: "kereta_penumpang",
    description: "Kereta kombinasi tempat duduk dan kereta makan.",
  },
  {
    code: "KP",
    name: "Kereta Tempat Duduk + Pembangkit",
    category: "kereta_penumpang",
    description: "Kereta kombinasi tempat duduk dan pembangkit.",
  },
  {
    code: "MP",
    name: "Kereta Makan + Pembangkit",
    category: "kereta_penumpang",
    description: "Kereta kombinasi makan dan pembangkit.",
  },
  {
    code: "BP",
    name: "Kereta Bagasi + Pembangkit",
    category: "kereta_penumpang",
    description: "Kereta kombinasi bagasi dan pembangkit.",
  },
  {
    code: "KMP",
    name: "Kereta Tempat Duduk + Makan + Pembangkit",
    category: "kereta_penumpang",
    description: "Kereta kombinasi tempat duduk, makan, dan pembangkit.",
  },

  // Gerbong barang
  {
    code: "GB",
    name: "Gerbong Hopper / Gondola",
    category: "gerbong_barang",
    description: "Gerbong barang tipe hopper atau gondola.",
  },
  {
    code: "GD",
    name: "Gerbong Datar",
    category: "gerbong_barang",
    description: "Gerbong datar untuk peti kemas atau muatan khusus.",
  },
  {
    code: "GT",
    name: "Gerbong Tertutup / Boxcar",
    category: "gerbong_barang",
    description: "Gerbong barang tertutup atau boxcar.",
  },
  {
    code: "GK",
    name: "Gerbong Ketel",
    category: "gerbong_barang",
    description: "Gerbong ketel untuk muatan cair.",
  },

  // Sarana khusus
  {
    code: "SI",
    name: "Sarana Inspeksi",
    category: "sarana_khusus",
    description: "Sarana inspeksi atau kereta inspeksi.",
  },
  {
    code: "SN",
    name: "Sarana Evakuasi / Rescue",
    category: "sarana_khusus",
    description: "Sarana evakuasi, rescue, atau penolong.",
  },
  {
    code: "SC",
    name: "Sarana Kereta Api Crane",
    category: "sarana_khusus",
    description: "Sarana khusus crane.",
  },
  {
    code: "SU",
    name: "Sarana Ukur / Track Geometry",
    category: "sarana_khusus",
    description: "Sarana pengukuran atau track geometry train.",
  },
  {
    code: "SR",
    name: "Sarana Perawatan / Konstruksi Jalan Rel",
    category: "sarana_khusus",
    description: "Sarana perawatan, konstruksi, atau maintenance train.",
  },
  {
    code: "SK",
    name: "Sarana Khusus",
    category: "sarana_khusus",
    description: "Sarana khusus untuk penggunaan tertentu.",
  },
];