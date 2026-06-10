/**
 * ======================================================
 * KONFIGURASI GAMBAR & KONTEN (Gampang Diubah!)
 * ======================================================
 */

// 1. Teks Hero yang Berganti (Background Tetap)
const HERO_DATA = [
    {
        t: "Lenovo Platinum Partner & Authorized Store",
        d: "Satu-satunyaLevel kemitraan tertinggi resmi untuk wilayah Kalimantan."
    },
    {
        t: "Official Master Dealer Brand Global",
        d: "Lenovo,ASUS,MSI,Advan,Axioo,Vention,Robot,TP-Link,Starlink, dan masih banyak lagi."
    },
    {
        t: "Solusi IT Terpercaya Sejak 2000",
        d: "Pengalaman lebih dari 24 tahun melayani kebutuhan teknologi Anda."
    }
];

// 2. Gambar Promo Bulanan (Auto Scale)
// Cukup ganti nama file di folder images/promo/ dengan nama: promo1.jpg, promo2.jpg, promo3.jpg
const PROMO_IMAGES = [
    "images/promo/promo (1).jpg",
    "images/promo/promo (1).png",
    "images/promo/promo (2).png"
];

// 3. Google Reviews / Testimonial
// Isi dengan review dari Google Maps Anda
const TESTIMONIALS = [
    {
        name: "Budi Santoso",
        rating: 5,
        text: "Pelayanan sangat memuaskan! Produk original dan harga bersaing. Rekomendasi banget buat yang cari laptop Lenovo di Balikpapan.",
        date: "2 minggu yang lalu"
    },
    {
        name: "Siti Nurhaliza",
        rating: 5,
        text: "Staff ramah dan profesional. Membantu saya memilih laptop yang sesuai kebutuhan kantor. Terima kasih Visidata!",
        date: "1 bulan yang lalu"
    },
    {
        name: "Ahmad Rizki",
        rating: 5,
        text: "Toko IT terpercaya di Balikpapan. Garansi resmi dan after sales yang responsif. Sangat puas!",
        date: "3 minggu yang lalu"
    },
    {
        name: "Dewi Lestari",
        rating: 5,
        text: "Tempatnya nyaman, produknya lengkap. Untuk perusahaan juga bisa nego harga korporat. Recommended!",
        date: "1 bulan yang lalu"
    },
    {
        name: "Eko Prasetyo",
        rating: 5,
        text: "Beli laptop untuk kantor disini, pelayanan cepat dan profesional. Harga kompetitif untuk pembelian dalam jumlah banyak.",
        date: "2 bulan yang lalu"
    },
    {
        name: "Linda Wijaya",
        rating: 5,
        text: "Sudah langganan di Visidata bertahun-tahun. Kualitas produk terjamin dan service center yang memadai.",
        date: "1 bulan yang lalu"
    }
];

// --- SELEKSI ELEMEN ---
const mainHeader = document.getElementById('mainHeader');
const promoTrack = document.getElementById('promoTrack');
const timerBar = document.getElementById('timerBar');
const testimonialGrid = document.getElementById('testimonialGrid');
const brandCarousel = document.getElementById('brandCarousel');

// --- LOGIC HEADER: Efek Transparan ke Solid ---
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        mainHeader.classList.add('scrolled');
    } else {
        mainHeader.classList.remove('scrolled');
    }
});

// --- LOGIC HERO: Hanya Text yang Berganti ---
let heroIndex = 0;
function changeHeroText() {
    heroIndex = (heroIndex + 1) % HERO_DATA.length;
    document.getElementById('heroTitle').innerText = HERO_DATA[heroIndex].t;
    document.getElementById('heroDesc').innerText = HERO_DATA[heroIndex].d;
}
setInterval(changeHeroText, 5000);

// --- LOGIC PROMO SLIDER (SECTION 3) ---
function initPromo() {
    PROMO_IMAGES.forEach(src => {
        const slide = document.createElement('div');
        slide.className = 'p-slide';
        slide.innerHTML = `<img src="${src}" alt="Promo Bulanan">`;
        promoTrack.appendChild(slide);
    });
}

let promoIndex = 0;
let progress = 0;

function handlePromo() {
    progress += 0.5; // Kecepatan progress bar
    timerBar.style.width = `${progress}%`;

    if (progress >= 100) {
        progress = 0;
        promoIndex = (promoIndex + 1) % PROMO_IMAGES.length;
        promoTrack.style.transform = `translateX(-${promoIndex * 100}%)`;
    }
}

// --- LOGIC BRAND INFINITE CAROUSEL ---
function initBrandCarousel() {
    // Duplicate logo untuk infinite loop effect
    const logos = brandCarousel.innerHTML;
    brandCarousel.innerHTML += logos; // Duplicate pertama
    brandCarousel.innerHTML += logos; // Duplicate kedua (untuk seamless loop)
}

// --- LOGIC TESTIMONIALS (Google Review) ---
function initTestimonials() {
    TESTIMONIALS.forEach(review => {
        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
        
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <div class="testimonial-header">
                <div class="testimonial-avatar">
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="testimonial-info">
                    <h4>${review.name}</h4>
                    <div class="testimonial-rating">${stars}</div>
                </div>
            </div>
            <p class="testimonial-text">${review.text}</p>
            <span class="testimonial-date">${review.date}</span>
        `;
        testimonialGrid.appendChild(card);
    });
}

// Jalankan semuanya pas web ke-load
initPromo();
initBrandCarousel(); // Init brand carousel dengan duplicate
initTestimonials();
setInterval(handlePromo, 30); // Biar smooth gerakannya

// --- LOGIC SMOOTH SCROLL ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});