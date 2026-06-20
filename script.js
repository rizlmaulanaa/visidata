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
    "images/promo/promo1.jpg",
    "images/promo/promo2.png",
    "images/promo/promo3.png",
    "images/promo/promo4.jpg"
];

// 3. Event & Kegiatan (Carousel dengan Photo Gallery)
// Path format: /images/events/namaevent/foto1.jpg
// Bisa tambah event baru atau foto baru dengan mudah
const EVENTS = [
    {
        title: "Lenovo Exclusive Launch 2024",
        date: "25 Juni 2024",
        description: "PT Visidata Inti Teknologi menyelenggarakan peluncuran lini laptop premium Lenovo Yoga dan Legion terbaru di Kalimantan. Acara ini memperkenalkan teknologi cerdas bertenaga AI terbaru langsung kepada para penggemar teknologi, pebisnis, serta instansi regional.",
        photos: [
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200",
            "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200",
            "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200"
        ]
    },
    {
        title: "Corporate IT Solutions Expo",
        date: "10 Agustus 2024",
        description: "Pameran solusi infrastruktur teknologi informasi komprehensif bagi segmen korporasi skala besar dan lembaga pemerintah di Kalimantan Timur. Menyajikan konsep server tangguh, sistem manajemen data modern, serta perlindungan cyber security mutakhir.",
        photos: [
            "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200",
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200"
        ]
    },
    {
        title: "Workshop Maintenance & Support",
        date: "15 September 2024",
        description: "Sesi edukasi praktis intensif bersama tim IT perwakilan dari berbagai instansi penting. Berfokus pada optimalisasi perangkat computer hardware, perakitan modular hardware, penanganan darurat crash data, dan pemeliharaan server secara berkala.",
        photos: [
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200",
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200",
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200"
        ]
    },
    {
        title: "Customer Appreciation Day",
        date: "5 Oktober 2024",
        description: "Apresiasi spesial bagi pelanggan dan instansi mitra strategis PT Visidata Inti Teknologi. Event ini menghadirkan penawaran diskon eksklusif laptop, konsultasi teknologi gratis, serta sharing session interaktif ramah tamah bersama pakar teknologi.",
        photos: [
            "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200",
            "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200"
        ]
    }
];


// 4. Google Reviews / Testimonial
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
const eventPhotoImg = document.getElementById('eventPhotoImg');
const eventTitle = document.getElementById('eventTitle');
const eventDate = document.getElementById('eventDate');
const eventDesc = document.getElementById('eventDesc'); // Penyesuaian seleksi elemen deskripsi
const eventPhotoCounter = document.getElementById('eventPhotoCounter');
const eventCounter = document.getElementById('eventCounter');
const eventPhotoDots = document.getElementById('eventPhotoDots');

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
const prevPromoBtn = document.getElementById('prevPromoBtn');
const nextPromoBtn = document.getElementById('nextPromoBtn');
const bentoBox = document.querySelector('.bento-box');

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
let isPromoPaused = false; // Flag untuk menghentikan auto-swipe sementara

function updatePromoSlider() {
    promoTrack.style.transform = `translateX(-${promoIndex * 100}%)`;
}

function nextPromo() {
    promoIndex = (promoIndex + 1) % PROMO_IMAGES.length;
    progress = 0;
    updatePromoSlider();
}

function prevPromo() {
    promoIndex = (promoIndex - 1 + PROMO_IMAGES.length) % PROMO_IMAGES.length;
    progress = 0;
    updatePromoSlider();
}

function handlePromo() {
    if (isPromoPaused) return; // Stop progress & swipe jika sedang ada interaksi (hover)

    progress += 0.5; // Kecepatan progress bar
    timerBar.style.width = `${progress}%`;

    if (progress >= 100) {
        progress = 0;
        nextPromo();
    }
}

// Event Listener Klik Navigasi Manual
if (nextPromoBtn) {
    nextPromoBtn.addEventListener('click', nextPromo);
}
if (prevPromoBtn) {
    prevPromoBtn.addEventListener('click', prevPromo);
}

// FITUR AUTOMATIC SMART PAUSE (Saat di-hover tombol / area bento box, swipe membeku)
if (bentoBox) {
    bentoBox.addEventListener('mouseenter', () => { isPromoPaused = true; });
    bentoBox.addEventListener('mouseleave', () => { isPromoPaused = false; });
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

// --- LOGIC EVENTS CAROUSEL (3-Item Preview + Photo Gallery) ---
let currentEventIndex = 0;
let currentPhotoIndex = 0;

function updateEventDisplay() {
    const event = EVENTS[currentEventIndex];
    const photo = event.photos[currentPhotoIndex];
    
    eventPhotoImg.src = photo;
    eventTitle.textContent = event.title;
    eventDate.textContent = event.date;
    eventDesc.textContent = event.description; // Penyesuaian memperbarui isi teks deskripsi
    eventPhotoCounter.textContent = `${currentPhotoIndex + 1}/${event.photos.length}`;
    eventCounter.textContent = `${currentEventIndex + 1}/${EVENTS.length}`;
    
    // Update photo dots indicator
    updateEventPhotoDots();
    
    // Update 3-item carousel view (prev, current, next event)
    updateEventCarouselView();
}

function updateEventPhotoDots() {
    const event = EVENTS[currentEventIndex];
    eventPhotoDots.innerHTML = '';
    
    for (let i = 0; i < event.photos.length; i++) {
        const dot = document.createElement('div');
        dot.className = 'event-photo-dot';
        if (i === currentPhotoIndex) {
            dot.classList.add('active');
        }
        eventPhotoDots.appendChild(dot);
    }
}

function updateEventCarouselView() {
    // Update 3-item carousel preview (untuk menunjukkan prev, current, next event)
    const prevIndex = (currentEventIndex - 1 + EVENTS.length) % EVENTS.length;
    const nextIndex = (currentEventIndex + 1) % EVENTS.length;
    
    const prevEventCard = document.getElementById('prevEventCard');
    const nextEventCard = document.getElementById('nextEventCard');
    
    if (prevEventCard) {
        prevEventCard.querySelector('h4').textContent = EVENTS[prevIndex].title;
        prevEventCard.querySelector('p').textContent = EVENTS[prevIndex].date;
        prevEventCard.querySelector('img').src = EVENTS[prevIndex].photos[0];
    }
    
    if (nextEventCard) {
        nextEventCard.querySelector('h4').textContent = EVENTS[nextIndex].title;
        nextEventCard.querySelector('p').textContent = EVENTS[nextIndex].date;
        nextEventCard.querySelector('img').src = EVENTS[nextIndex].photos[0];
    }
}

function nextEventPhoto() {
    const event = EVENTS[currentEventIndex];
    currentPhotoIndex = (currentPhotoIndex + 1) % event.photos.length;
    updateEventDisplay();
}

function prevEventPhoto() {
    const event = EVENTS[currentEventIndex];
    currentPhotoIndex = (currentPhotoIndex - 1 + event.photos.length) % event.photos.length;
    updateEventDisplay();
}

function nextEvent() {
    currentEventIndex = (currentEventIndex + 1) % EVENTS.length;
    currentPhotoIndex = 0; // Reset ke foto pertama event baru
    updateEventDisplay();
}

function prevEvent() {
    currentEventIndex = (currentEventIndex - 1 + EVENTS.length) % EVENTS.length;
    currentPhotoIndex = 0; // Reset ke foto pertama event baru
    updateEventDisplay();
}

// Jalankan semuanya pas web ke-load
initPromo();
initBrandCarousel(); // Init brand carousel dengan duplicate
initTestimonials();
updateEventDisplay(); // Init events carousel
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