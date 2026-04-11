// activities-script.js

// ---------- DATA: daily activity logs ----------
const activityLogs = [
        {
        id: 8,
        date: "2026-04-11",
        title: "Meremake website laporan magang",
        description: "Mengganti website laporan magang dengan tampilan yang lebih menarik, dan sedikit penambahan fitur.",
        imageUrls: [
            "pictures/1.png",
            "pictures/2.png",
            "pictures/3.png"
        ]
    },
    {
        id: 7,
        date: "2026-04-10",
        title: "Membuat website laporan magang",
        description: "Membuat website laporan magang untuk menampilkan aktivitas selama magang, dan menyimpan projek dimasa mendatang.",
        imageUrls: [
            "pictures/IMG-20260410-WA0106.jpeg",
            "pictures/IMG-20260410-WA0108.jpeg",
            "pictures/IMG-20260410-WA0110.jpeg"
        ]
    },
    {
        id: 6,
        date: "2026-04-09",
        title: "Mengulang kembali projek cisco kemarin dan Membuat cisco topologi router bus Static dan Dynamic",
        description: "Membuat projek cisco yang lalu, dan setelah itu membuat topologi router bus static dan dynamic dengan menggunakan cisco packet tracer. Gagal saat melakukan manual routing pada topologi static, dan gagal saat mengconfing OSPF dan RIP",
        imageUrls: [
            "pictures/IMG-20260409-WA0121.jpg",
        ]
    },
    {
        id: 5,
        date: "2026-04-08",
        title: "Membuat sistem jaringan 4 gedung dengan cisco packet tracer menggunakan 5 switch",
        description: "4 gedung dengan 5 switch yang hanya dapat berkomunikasi ke vlan yang sama. Berhasil dengan lancar dan mempelajari bagaimana pergerakan data pada jaringan cisco.",
        imageUrls: [
            "pictures/IMG_20260408_165925_533.webp",
            "pictures/IMG-20260408-WA0099.jpg"
        ]
    },
    {
        id: 4,
        date: "2026-04-07",
        title: "Mengikuti pak Awan mengajar di sandikta",
        description: "Mempraktekan materi penggunaan Mikrotik router dengan topologi BUS",
        imageUrls: [
            "pictures/IMG_20260407_164007_396.jpg",
        ]
    },
    {
        id: 3,
        date: "2026-04-06",
        title: "Debian DHCP server virtualbox ke client virtualbox",
        description: "Membuat DHCP server di virtualbox dan mengkonfigurasi client virtualbox untuk mendapatkan IP secara otomatis.",
        imageUrls: [
            "pictures/IMG_20260406_153608_852.webp",
            "pictures/img.jpg"
        ]
    },
    {
        id: 2,
        date: "2026-04-02",
        title: "Menginstall debian dan membuat DHCP server",
        description: "Gagal saat restart server DHCP server",
        imageUrls: [
            "pictures/IMG_20260402_170438_922.webp",
        ]
    },
    {
        id: 1,
        date: "2026-04-01",
        title: "Membuat paparan linux dasar serta membuat server linux",
        description: "Paparan tentang linux dasar seperti mengenal perintah navigasi, serta membuat server linux dengan menggunakan virtualbox.",
        imageUrls: [
            "pictures/IMG_20260401_155537_555.webp"
        ]
    }
];

// Global state
let currentFilter = "none"; // 'day', 'week', 'month', 'custom'
let customFilterDate = null;   // Date object for custom day
let currentSort = "newest";    // 'newest' or 'oldest'

// Helper: format date to readable (DD MMM YYYY)
function formatDate(dateString) {
    // Parse YYYY-MM-DD as local date
    const [year, month, day] = dateString.split('-').map(Number);
    const localDate = new Date(year, month - 1, day);
    return localDate.toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}
// Helper: check if a log date is within today
function isToday(dateStr) {
    const today = new Date();
    const todayStr = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
    return dateStr === todayStr;
}

// Helper: check if within current week (Monday to Sunday)
function isThisWeek(dateStr) {
    const now = new Date();
    const startOfWeek = new Date(now);
    const day = now.getDay(); // 0 = Sunday
    const diffToMonday = (day === 0 ? 6 : day - 1);
    startOfWeek.setDate(now.getDate() - diffToMonday);
    startOfWeek.setHours(0, 0, 0, 0);
    
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);
    
    const logDate = new Date(dateStr);
    return logDate >= startOfWeek && logDate <= endOfWeek;
}

// Helper: check if within current month
function isThisMonth(dateStr) {
    const now = new Date();
    const logDate = new Date(dateStr);
    return logDate.getMonth() === now.getMonth() && logDate.getFullYear() === now.getFullYear();
}

// Helper: filter logs based on currentFilter & customFilterDate
function filterLogs(logs) {
    if (currentFilter === "day") {
        return logs.filter(log => isToday(log.date));
    } else if (currentFilter === "week") {
        return logs.filter(log => isThisWeek(log.date));
    } else if (currentFilter === "month") {
        return logs.filter(log => isThisMonth(log.date));
    } else if (currentFilter === "custom" && customFilterDate) {
        const targetDate = new Date(customFilterDate);
        targetDate.setHours(0, 0, 0, 0);
        return logs.filter(log => {
            const logDate = new Date(log.date);
            logDate.setHours(0, 0, 0, 0);
            return logDate.getTime() === targetDate.getTime();
        });
    }
    return logs; // no filter
}

// Render activities with current filter & sort
function renderActivities() {
    const container = document.getElementById("activitiesContainer");
    if (!container) return;

    // Apply filter first
    let filtered = filterLogs(activityLogs);
    
    // Apply sorting
    if (currentSort === "newest") {
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else {
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    if (filtered.length === 0) {
        container.innerHTML = `<div class="empty-state"><i class="fas fa-clipboard-list"></i> Tidak ada aktivitas untuk filter ini.</div>`;
        return;
    }

    let html = "";
    for (const log of filtered) {
        let galleryHtml = "";
        if (log.imageUrls && log.imageUrls.length > 0) {
            galleryHtml = `<div class="gallery-section">
                            <div class="gallery-title"><i class="fas fa-images"></i> Galeri dokumentasi</div>
                            <div class="gallery-grid">`;
            log.imageUrls.forEach((imgUrl, idx) => {
                galleryHtml += `<div class="gallery-item" data-fullimg="${imgUrl}">
                                    <img src="${imgUrl}" alt="aktivitas ${log.title}" loading="lazy">
                                </div>`;
            });
            galleryHtml += `</div></div>`;
        } else {
            galleryHtml = `<div class="gallery-section"><div class="gallery-title"><i class="fas fa-camera"></i> Tidak ada gambar</div></div>`;
        }

        html += `
            <div class="log-card" data-id="${log.id}">
                <div class="log-header">
                    <div class="log-date"><i class="far fa-calendar-alt"></i> ${formatDate(log.date)}</div>
                    <div class="log-title">📌 ${escapeHtml(log.title)}</div>
                </div>
                <div class="log-description">
                    ${escapeHtml(log.description)}
                </div>
                ${galleryHtml}
            </div>
        `;
    }
    container.innerHTML = html;
    attachGalleryLightbox();
}

// Lightbox logic
function attachGalleryLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.getElementById('closeLightbox');
    if (!lightbox || !lightboxImg) return;

    const galleryItems = document.querySelectorAll('.gallery-item');
    
    const openLightbox = (src) => {
        lightboxImg.src = src;
        lightbox.style.display = 'flex';
    };
    const closeLightbox = () => {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
    };

    galleryItems.forEach(item => {
        item.removeEventListener('click', item._clickHandler);
        const handler = () => {
            const imgElement = item.querySelector('img');
            if (imgElement && imgElement.src) openLightbox(imgElement.src);
        };
        item.addEventListener('click', handler);
        item._clickHandler = handler;
    });

    if (closeBtn) {
        closeBtn.removeEventListener('click', closeBtn._closeHandler);
        const closeHandler = () => closeLightbox();
        closeBtn.addEventListener('click', closeHandler);
        closeBtn._closeHandler = closeHandler;
    }
    // close when clicking background
    lightbox.removeEventListener('click', lightbox._bgHandler);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
}

// Helper: escape HTML
function escapeHtml(str) {
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// UI update: set active filter button style
function setActiveFilterButton(activeFilter) {
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(btn => {
        const filterValue = btn.getAttribute('data-filter');
        if ((filterValue === activeFilter) || (activeFilter === 'custom' && btn.id === 'applyCustomDate') || (activeFilter === 'none' && btn.id === 'resetFilter')) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    // special for reset: also remove custom highlight
    if (activeFilter === 'none') {
        document.getElementById('resetFilter')?.classList.add('active');
    } else {
        document.getElementById('resetFilter')?.classList.remove('active');
    }
}

// Event listeners
function initControls() {
    // Filter buttons
    document.querySelectorAll('[data-filter]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filter = btn.getAttribute('data-filter');
            if (filter === 'day') {
                currentFilter = 'day';
                customFilterDate = null;
            } else if (filter === 'week') {
                currentFilter = 'week';
                customFilterDate = null;
            } else if (filter === 'month') {
                currentFilter = 'month';
                customFilterDate = null;
            }
            setActiveFilterButton(currentFilter);
            renderActivities();
        });
    });

    // Custom date picker
    const customDateInput = document.getElementById('customDatePicker');
    const applyCustomBtn = document.getElementById('applyCustomDate');
    if (applyCustomBtn && customDateInput) {
        applyCustomBtn.addEventListener('click', () => {
            const selectedDate = customDateInput.value;
            if (selectedDate) {
                currentFilter = 'custom';
                customFilterDate = selectedDate;
                setActiveFilterButton('custom');
                renderActivities();
            } else {
                alert("Pilih tanggal terlebih dahulu.");
            }
        });
    }

    // Reset filter
    const resetBtn = document.getElementById('resetFilter');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            currentFilter = 'none';
            customFilterDate = null;
            if (customDateInput) customDateInput.value = '';
            setActiveFilterButton('none');
            renderActivities();
        });
    }

    // Sort buttons
    const sortNewest = document.getElementById('sortNewest');
    const sortOldest = document.getElementById('sortOldest');
    if (sortNewest && sortOldest) {
        sortNewest.addEventListener('click', () => {
            currentSort = 'newest';
            sortNewest.classList.add('active');
            sortOldest.classList.remove('active');
            renderActivities();
        });
        sortOldest.addEventListener('click', () => {
            currentSort = 'oldest';
            sortOldest.classList.add('active');
            sortNewest.classList.remove('active');
            renderActivities();
        });
    }
}

// Initial render when DOM ready
document.addEventListener('DOMContentLoaded', () => {
    initControls();
    renderActivities();
});