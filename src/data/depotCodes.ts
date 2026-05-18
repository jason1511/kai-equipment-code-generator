import type { DepotCode } from "../types/rollingStock";

export const depotCodes: DepotCode[] = [
  // Depo kereta penumpang
  {
    code: "CPN",
    name: "Depo Kereta Cipinang",
    categories: ["kereta_penumpang"],
  },
  {
    code: "JAKK",
    name: "Depo Kereta Jakarta Kota",
    categories: ["kereta_penumpang"],
  },
  {
    code: "BD",
    name: "Depo Kereta Bandung",
    categories: ["kereta_penumpang"],
  },
  {
    code: "SMC",
    name: "Depo Kereta Semarang Poncol",
    categories: ["kereta_penumpang"],
  },
  {
    code: "PWT",
    name: "Depo Kereta Purwokerto",
    categories: ["kereta_penumpang"],
  },
  {
    code: "SLO",
    name: "Depo Kereta Solo Balapan",
    categories: ["kereta_penumpang"],
  },
  {
    code: "YK",
    name: "Depo Kereta Yogyakarta",
    categories: ["kereta_penumpang"],
  },
  {
    code: "SDT",
    name: "Depo Kereta Sidotopo",
    categories: ["kereta_penumpang"],
  },
  {
    code: "ML",
    name: "Depo Kereta Malang",
    categories: ["kereta_penumpang"],
  },
  {
    code: "SBI",
    name: "Depo Kereta Surabaya Pasarturi",
    categories: ["kereta_penumpang"],
  },
  {
    code: "CN",
    name: "Depo Kereta Cirebon",
    categories: ["kereta_penumpang"],
  },
  {
    code: "BL",
    name: "Depo Kereta Blitar",
    categories: ["kereta_penumpang"],
  },
  {
    code: "KTG",
    name: "Depo Kereta Ketapang",
    categories: ["kereta_penumpang"],
  },
  {
    code: "RK",
    name: "Depo Kereta Rangkasbitung",
    categories: ["kereta_penumpang"],
  },
  {
    code: "KTA",
    name: "Depo Kereta Kutoarjo",
    categories: ["kereta_penumpang"],
  },
  {
    code: "MDN",
    name: "Depo Kereta Medan",
    categories: ["kereta_penumpang"],
  },
  {
    code: "PD",
    name: "Depo Kereta Padang",
    categories: ["kereta_penumpang"],
  },
  {
    code: "KPT",
    name: "Depo Kereta Kertapati",
    categories: ["kereta_penumpang"],
  },
  {
    code: "TNK",
    name: "Depo Kereta Tanjung Karang",
    categories: ["kereta_penumpang"],
  },

  // Depo gerbong barang
  {
    code: "JAKG",
    name: "Depo Gerbong Jakarta Gudang",
    categories: ["gerbong_barang"],
  },
  {
    code: "SDT",
    name: "Depo Gerbong Sidotopo",
    categories: ["gerbong_barang"],
  },
  {
    code: "AWN",
    name: "Depo Gerbong Arjawinangun",
    categories: ["gerbong_barang"],
  },
  {
    code: "MA",
    name: "Depo Gerbong Maos",
    categories: ["gerbong_barang"],
  },
  {
    code: "GDB",
    name: "Depo Gerbong Gedebage",
    categories: ["gerbong_barang"],
  },
  {
    code: "RWL",
    name: "Depo Gerbong Rewulu",
    categories: ["gerbong_barang"],
  },
  {
    code: "MRL",
    name: "Depo Gerbong Muaragula",
    categories: ["gerbong_barang"],
  },
  {
    code: "SIG",
    name: "Depo Gerbong Simpang",
    categories: ["gerbong_barang"],
  },
  {
    code: "THN",
    name: "Depo Gerbong Tarahan",
    categories: ["gerbong_barang"],
  },
  {
    code: "RJS",
    name: "Depo Gerbong Rejosari",
    categories: ["gerbong_barang"],
  },
  {
    code: "BKP",
    name: "Depo Gerbong Bukit Putus",
    categories: ["gerbong_barang"],
  },
  {
    code: "TMB",
    name: "Depo Gerbong Tanjungenim Baru",
    categories: ["gerbong_barang"],
  },

  // Depo KRL / EMU
  {
    code: "BUD",
    name: "Depo KRL Bukit Duri",
    categories: ["krl"],
  },
  {
    code: "MRI",
    name: "Depo KRL Manggarai",
    categories: ["krl"],
  },
  {
    code: "BOO",
    name: "Depo KRL Bogor",
    categories: ["krl"],
  },
  {
    code: "DP",
    name: "Depo KRL Depok",
    categories: ["krl"],
  },
  {
    code: "SK",
    name: "Depo KRL Solo Jebres",
    categories: ["krl"],
  },

  // LRT / MRT / Kereta Cepat
  // Kept under "krl" because the current app category is electric/self-propelled rail stock.
  {
    code: "JKB",
    name: "Depo LRT Jakabaring",
    categories: ["krl"],
  },
  {
    code: "JTM",
    name: "Depo LRT Jatimulya",
    categories: ["krl"],
  },
  {
    code: "PGD",
    name: "Depo LRT Pegangsaan Dua",
    categories: ["krl"],
  },
  {
    code: "LBB",
    name: "Depo MRT Lebak Bulus",
    categories: ["krl"],
  },
  {
    code: "TGL",
    name: "Depo KCIC Tegalluar",
    categories: ["krl"],
  },

  // Depo mekanik / sarana khusus
  {
    code: "JNG",
    name: "Depo Mekanik Jatinegara",
    categories: ["sarana_khusus"],
  },
  {
    code: "KWG",
    name: "Depo Mekanik Karawang",
    categories: ["sarana_khusus"],
  },
  {
    code: "BD",
    name: "Depo Mekanik Bandung",
    categories: ["sarana_khusus"],
  },
  {
    code: "CN",
    name: "Depo Mekanik Cirebon",
    categories: ["sarana_khusus"],
  },
  {
    code: "SMC",
    name: "Depo Mekanik Semarang Poncol",
    categories: ["sarana_khusus"],
  },
  {
    code: "KYA",
    name: "Depo Mekanik Kroya",
    categories: ["sarana_khusus"],
  },
  {
    code: "PWS",
    name: "Depo Mekanik Purwosari",
    categories: ["sarana_khusus"],
  },
  {
    code: "MN",
    name: "Depo Mekanik Madiun",
    categories: ["sarana_khusus"],
  },
  {
    code: "SDT",
    name: "Depo Mekanik Sidotopo",
    categories: ["sarana_khusus"],
  },
  {
    code: "JR",
    name: "Depo Mekanik Jember",
    categories: ["sarana_khusus"],
  },
];