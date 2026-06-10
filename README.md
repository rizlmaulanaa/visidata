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
