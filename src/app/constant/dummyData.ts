import { LuShirt, LuSparkles, LuBike, LuCalendarCheck, LuHeart } from "react-icons/lu";

// Data untuk Hero Section
export const typeEffectData = ['Cepat', 'Bersih', 'Wangi'];

// Data untuk Layanan
export const servicesData = [
  {
    id: 1,
    icon: LuShirt,
    title: 'Cuci Kiloan',
    description: 'Solusi praktis untuk pakaian harian Anda. Dicuci, dikeringkan, dan disetrika dengan rapi. Selesai dalam 2 hari.',
  },
  {
    id: 2,
    icon: LuSparkles,
    title: 'Cuci Satuan & Dry Clean',
    description: 'Perawatan premium untuk item spesial seperti jas, gaun, kebaya, atau sepatu. Membersihkan noda tanpa merusak bahan.',
  },
  {
    id: 3,
    icon: LuHeart,
    title: 'Layanan VIP',
    description: 'Dapatkan layanan ekspres 1 hari jadi dengan antar-jemput gratis untuk kenyamanan maksimal Anda.',
  },
];

// Data untuk bagian "Cara Kerja"
export const howItWorksData = [
    {
        id: 1,
        title: "Pesan & Jadwalkan",
        description: "Hubungi kami via WhatsApp atau telepon untuk menjadwalkan penjemputan pakaian Anda."
    },
    {
        id: 2,
        title: "Kami Jemput",
        icon: LuBike,
        description: "Tim kami akan datang ke lokasi Anda sesuai jadwal untuk mengambil pakaian kotor."
    },
    {
        id: 3,
        title: "Proses Cuci Profesional",
        description: "Pakaian Anda diproses secara higienis menggunakan deterjen berkualitas dan mesin modern."
    },
    {
        id: 4,
        title: "Dianter Kembali Bersih",
        icon: LuCalendarCheck,
        description: "Pakaian bersih, wangi, dan rapi kami antarkan kembali ke depan pintu rumah Anda."
    }
];

// Data untuk Testimoni
export const testimonialsData = [
  {
    id: 1,
    name: 'Budi Santoso',
    position: 'Karyawan Swasta',
    quote: 'Hasilnya selalu bersih dan wangi. Layanan antar-jemputnya sangat membantu di tengah kesibukan saya. Recommended!',
  },
  {
    id: 2,
    name: 'Citra Lestari',
    position: 'Mahasiswi',
    quote: 'Harga paket kiloannya sangat terjangkau untuk kantong mahasiswa. Pakaian jadi rapi dan siap pakai untuk kuliah.',
  },
];