# PANDUAN PENGELOLAAN GAMBAR WEBSITE VISIDATA

## Struktur Folder yang Harus Dibuat:

```
website-visidata/
│
├── index.html
├── style.css
├── script.js
│
└── images/
    ├── hero/
    │   └── hero-bg.jpg          (Background hero utama - landscape)
    │
    ├── promo/
    │   ├── promo1.jpg           (Banner promo 1 - landscape wide)
    │   ├── promo2.jpg           (Banner promo 2 - landscape wide)
    │   └── promo3.jpg           (Banner promo 3 - landscape wide)
    │
    ├── marketplace/
    │   ├── tokopedia-icon.png   (Logo Tokopedia - square/transparent)
    │   └── shopee-icon.png      (Logo Shopee - square/transparent)
    │
    └── legal/
        └── certificate.jpg      (Foto sertifikat - portrait)
```

## Cara Mengubah Gambar:

### 1. HERO BACKGROUND
- Lokasi: `images/hero/hero-bg.jpg`
- Ukuran Rekomendasi: 1920x1080px (landscape)
- Format: JPG atau PNG
- Cara ganti: Cukup replace file dengan nama yang sama

### 2. BANNER PROMO
- Lokasi: `images/promo/promo1.jpg`, `promo2.jpg`, `promo3.jpg`
- Ukuran Rekomendasi: 1920x600px (landscape wide)
- Format: JPG atau PNG
- Fitur: AUTO SCALE (otomatis menyesuaikan ukuran)
- Cara ganti: Replace file atau tambah `promo4.jpg` di script.js
- Untuk menambah banner: Edit array `PROMO_IMAGES` di script.js

### 3. LOGO MARKETPLACE
- Lokasi: `images/marketplace/tokopedia-icon.png` & `shopee-icon.png`
- Ukuran Rekomendasi: 100x100px (square)
- Format: PNG (dengan background transparan)
- Cara ganti: Replace file dengan nama yang sama

### 4. SERTIFIKAT LEGALITAS
- Lokasi: `images/legal/certificate.jpg`
- Ukuran Rekomendasi: 600x800px (portrait/potrait)
- Format: JPG atau PNG
- Cara ganti: Replace file dengan nama yang sama

## Cara Menambah/Mengurangi Banner Promo:

Buka file `script.js`, cari bagian ini:

```javascript
const PROMO_IMAGES = [
    "images/promo/promo1.jpg",
    "images/promo/promo2.jpg",
    "images/promo/promo3.jpg"
];
```

Tambahkan atau kurangi sesuai kebutuhan:

```javascript
const PROMO_IMAGES = [
    "images/promo/promo1.jpg",
    "images/promo/promo2.jpg",
    "images/promo/promo3.jpg",
    "images/promo/promo4.jpg"  // Banner baru
];
```

## Cara Mengubah Teks Hero yang Berganti:

Buka file `script.js`, cari bagian ini:

```javascript
const HERO_DATA = [
    {
        t: "Lenovo Platinum Partner",
        d: "Level kemitraan tertinggi resmi untuk wilayah Kalimantan."
    },
    {
        t: "Official Authorized Store",
        d: "Satu-satunya di Balikpapan dengan koleksi laptop terlengkap."
    }
];
```

Edit atau tambahkan teks sesuai kebutuhan.


# Cara Update Event (Tambah Event Baru): 
Sistem event menggunakan data dinamis yang otomatis merender judul, tanggal, deskripsi, slider foto utama, dot indikator, serta preview kartu previous/next di sekitarnya.

Untuk menambahkan event baru, buka file script.js dan cari array **EVENTS**. Tambahkan objek event baru di bagian paling bawah dengan mengikuti format struktur berikut:

```JavaScript
// Struktur Format Data Event:
{
    title: ***NAMA** **EVENT** / **JUDUL***,
    date: ***TANGGAL** **ACARA***,
    description: ***DESKRIPSI** **LENGKAP** **MENGENAI** **JALANNYA** **ACARA***,
    photos: [
    *images/events/foto1.jpg*,
    *images/events/foto2.jpg* // Bisa memasukkan banyak foto sekaligus untuk galeri internal event ini
    ]
}
```

Contoh Penerapan Tambah Event Baru:

```JavaScript
const **EVENTS** = [
    {
    title: *Lenovo Exclusive Launch **2024***,
    date: *25 Juni **2024***,
    description: "PT Visidata Inti Teknologi menyelenggarakan peluncuran lini laptop premium Lenovo Yoga...*,
    photos: [
    *[https://images.unsplash.com/photo-**1540575467063**-178a50c2df87?q=80&w=**1200**](https://images.unsplash.com/photo-**1540575467063**-178a50c2df87?q=80&w=**1200**)*,
    *[https://images.unsplash.com/photo-**1505373877841**-8d25f7d46678?q=80&w=**1200**](https://images.unsplash.com/photo-**1505373877841**-8d25f7d46678?q=80&w=**1200**)"
    ]
    },
    // ... data event lama lainnya ...
    {
    title: *Grand Opening Showroom Baru*, // Judul event baru kamu
    date: *12 Januari **2026***,
    description: "Merayakan pembukaan cabang showroom terbaru Visidata dengan menghadirkan jajaran produk hardware high-performance terlengkap dan promo flash sale aksesoris IT.*,
    photos: [
    *images/events/go-showroom1.jpg", // Menggunakan file lokal dari folder images/events/
    *images/events/go-showroom2.jpg*
    ]
    }
];
```
Catatan: Sistem secara otomatis mendeteksi total jumlah event dan menghitung jumlah navigasi angka halaman (1/4, 2/4, dst.) tanpa perlu mengubah file **HTML**.

## Tips:
- Gunakan gambar berkualitas tinggi untuk hasil terbaik
- Kompres gambar sebelum upload untuk loading lebih cepat
- Pertahankan aspect ratio yang sesuai agar tidak pecah
- Untuk banner promo, gunakan ukuran yang sama semua agar smooth

## Link Marketplace:
Edit link marketplace di file `index.html`, cari bagian:
```html
<a href="#" class="m-btn tokopedia-lenovo">
```
Ganti `#` dengan URL toko Anda.

Testimoni google reviews pakai sociablekit 
```html
<div class="sk-ww-google-reviews" data-embed-id="25691456"></div><script src="https://widgets.sociablekit.com/google-reviews/widget.js" defer></script>
```