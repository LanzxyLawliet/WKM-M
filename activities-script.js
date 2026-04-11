// activities-main.js
// Uses the exact database from your file, with local image paths.

// ---------- YOUR DATABASE (exactly as provided) ----------
const activityLogs = [
    {
        id: 8,
        date: "2026-04-11",
        title: "Meremake website laporan magang",
        description: "Mengganti website laporan magang dengan tampilan yang lebih menarik, dan sedikit penambahan fitur.",
        imageUrls: ["pictures/1.png", "pictures/2.png", "pictures/3.png"]
    },
    {
        id: 7,
        date: "2026-04-10",
        title: "Membuat website laporan magang",
        description: "Membuat website laporan magang untuk menampilkan aktivitas selama magang, dan menyimpan projek dimasa mendatang.",
        imageUrls: ["pictures/IMG-20260410-WA0106.jpeg", "pictures/IMG-20260410-WA0108.jpeg", "pictures/IMG-20260410-WA0110.jpeg"]
    },
    {
        id: 6,
        date: "2026-04-09",
        title: "Mengulang kembali projek cisco kemarin dan Membuat cisco topologi router bus Static dan Dynamic",
        description: "Membuat projek cisco yang lalu, dan setelah itu membuat topologi router bus static dan dynamic dengan menggunakan cisco packet tracer. Gagal saat melakukan manual routing pada topologi static, dan gagal saat mengconfing OSPF dan RIP",
        imageUrls: ["pictures/IMG-20260409-WA0121.jpg"]
    },
    {
        id: 5,
        date: "2026-04-08",
        title: "Membuat sistem jaringan 4 gedung dengan cisco packet tracer menggunakan 5 switch",
        description: "4 gedung dengan 5 switch yang hanya dapat berkomunikasi ke vlan yang sama. Berhasil dengan lancar dan mempelajari bagaimana pergerakan data pada jaringan cisco.",
        imageUrls: ["pictures/IMG_20260408_165925_533.webp", "pictures/IMG-20260408-WA0099.jpg"]
    },
    {
        id: 4,
        date: "2026-04-07",
        title: "Mengikuti pak Awan mengajar di sandikta",
        description: "Mempraktekan materi penggunaan Mikrotik router dengan topologi BUS",
        imageUrls: ["pictures/IMG_20260407_164007_396.jpg"]
    },
    {
        id: 3,
        date: "2026-04-06",
        title: "Debian DHCP server virtualbox ke client virtualbox",
        description: "Membuat DHCP server di virtualbox dan mengkonfigurasi client virtualbox untuk mendapatkan IP secara otomatis.",
        imageUrls: ["pictures/IMG_20260406_153608_852.webp", "pictures/img.jpg"]
    },
    {
        id: 2,
        date: "2026-04-02",
        title: "Menginstall debian dan membuat DHCP server",
        description: "Gagal saat restart server DHCP server",
        imageUrls: ["pictures/IMG_20260402_170438_922.webp"]
    },
    {
        id: 1,
        date: "2026-04-01",
        title: "Membuat paparan linux dasar serta membuat server linux",
        description: "Paparan tentang linux dasar seperti mengenal perintah navigasi, serta membuat server linux dengan menggunakan virtualbox.",
        imageUrls: ["pictures/IMG_20260401_155537_555.webp"]
    }
];

// ---------- Global state ----------
let currentFilter = "none";
let customFilterDate = null;
let currentSort = "newest";
let displayedCount = 5;      // pagination: show 5 items initially
let filteredActivities = [...activityLogs];

// Helper: format date (local, no timezone bug)
function formatLocalDate(dateStr) {
    const [year, month, day] = dateStr.split('-').map(Number);
    const localDate = new Date(year, month - 1, day);
    return localDate.toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' });
}

// Filter helpers (timezone-safe, using string comparison for day, etc.)
function isToday(dateStr) {
    const today = new Date();
    const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    return dateStr === todayStr;
}
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
function isThisMonth(dateStr) {
    const now = new Date();
    const logDate = new Date(dateStr);
    return logDate.getMonth() === now.getMonth() && logDate.getFullYear() === now.getFullYear();
}

function applyFilter() {
    let filtered = [...activityLogs];
    if (currentFilter === "day") {
        filtered = filtered.filter(log => isToday(log.date));
    } else if (currentFilter === "week") {
        filtered = filtered.filter(log => isThisWeek(log.date));
    } else if (currentFilter === "month") {
        filtered = filtered.filter(log => isThisMonth(log.date));
    } else if (currentFilter === "custom" && customFilterDate) {
        filtered = filtered.filter(log => log.date === customFilterDate);
    }
    return filtered;
}

function applySort(activities) {
    if (currentSort === "newest") {
        return [...activities].sort((a, b) => new Date(b.date) - new Date(a.date));
    } else {
        return [...activities].sort((a, b) => new Date(a.date) - new Date(b.date));
    }
}

// Convert plain text to basic HTML (supports bold, italic, lists via markdown or simple enrichment)
// For better UX, we convert plain description into a markdown-friendly paragraph.
// You can later edit the database to include markdown directly.
function enrichDescription(text) {
    if (!text) return "";
    // Simple conversion: detect lines starting with "- " as list items, wrap in <ul>
    let lines = text.split('\n');
    let inList = false;
    let htmlLines = [];
    for (let line of lines) {
        line = line.trim();
        if (line.startsWith('- ')) {
            if (!inList) {
                htmlLines.push('<ul>');
                inList = true;
            }
            htmlLines.push(`<li>${escapeHtml(line.substring(2))}</li>`);
        } else {
            if (inList) {
                htmlLines.push('</ul>');
                inList = false;
            }
            if (line) {
                htmlLines.push(`<p>${escapeHtml(line)}</p>`);
            } else {
                htmlLines.push('<br>');
            }
        }
    }
    if (inList) htmlLines.push('</ul>');
    let result = htmlLines.join('');
    // also allow **bold** and *italic* using simple regex
    result = result.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    result = result.replace(/\*(.*?)\*/g, '<em>$1</em>');
    return result;
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    }).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, function(c) {
        return c;
    });
}

function renderActivities() {
    const container = document.getElementById("activitiesContainer");
    const loadMoreContainer = document.getElementById("loadMoreContainer");
    if (!container) return;

    filteredActivities = applyFilter();
    filteredActivities = applySort(filteredActivities);
    const total = filteredActivities.length;
    const hasMore = displayedCount < total;
    const itemsToShow = filteredActivities.slice(0, displayedCount);

    if (itemsToShow.length === 0) {
        container.innerHTML = `<div class="empty-state" style="text-align:center; padding:2rem;"><i class="fas fa-calendar-times"></i> Tidak ada aktivitas untuk filter ini.</div>`;
        loadMoreContainer.innerHTML = "";
        return;
    }

    let html = "";
    for (const act of itemsToShow) {
        const thumbUrl = (act.imageUrls && act.imageUrls.length) ? act.imageUrls[0] : "https://picsum.photos/id/20/48/48";
        const shortDesc = act.description.length > 80 ? act.description.substring(0, 80) + "…" : act.description;
        html += `
            <div class="log-card" data-id="${act.id}">
                <div class="card-compact" data-id="${act.id}">
                    <div class="date-badge"><i class="far fa-calendar-alt"></i> ${formatLocalDate(act.date)}</div>
                    <div class="title-preview">${escapeHtml(act.title)}</div>
                    <div class="short-desc">${escapeHtml(shortDesc)}</div>
                    <img class="thumbnail-preview" src="${thumbUrl}" alt="thumbnail" loading="lazy" onerror="this.src='https://picsum.photos/id/20/48/48'">
                    <div class="expand-icon"><i class="fas fa-chevron-down"></i></div>
                </div>
                <div class="detail-panel" id="detail-${act.id}">
                    <div class="full-description" id="md-content-${act.id}"></div>
                    <div class="gallery-title"><i class="fas fa-images"></i> Galeri dokumentasi</div>
                    <div class="gallery-grid" id="gallery-${act.id}"></div>
                </div>
            </div>
        `;
    }
    container.innerHTML = html;

    // Populate detail panels (rich description and gallery)
    itemsToShow.forEach(act => {
        const descDiv = document.getElementById(`md-content-${act.id}`);
        if (descDiv) {
            // Use the enriched HTML (supports bold, italic, lists)
            descDiv.innerHTML = enrichDescription(act.description);
        }
        const galleryDiv = document.getElementById(`gallery-${act.id}`);
        if (galleryDiv && act.imageUrls && act.imageUrls.length) {
            let galleryHtml = "";
            act.imageUrls.forEach(img => {
                galleryHtml += `<div class="gallery-item" data-fullimg="${img}"><img src="${img}" loading="lazy" alt="gallery" onerror="this.src='https://picsum.photos/120/80?grayscale'"></div>`;
            });
            galleryDiv.innerHTML = galleryHtml;
        } else if (galleryDiv) {
            galleryDiv.innerHTML = "<p style='color:var(--text-muted)'>Tidak ada gambar.</p>";
        }
    });

    attachExpandListeners();
    attachGalleryLightbox();

    // Load more button
    if (hasMore) {
        loadMoreContainer.innerHTML = `<button id="loadMoreBtn" class="load-more-btn"><i class="fas fa-plus-circle"></i> Load lebih banyak (${displayedCount}/${total})</button>`;
        document.getElementById("loadMoreBtn")?.addEventListener("click", () => {
            displayedCount += 5;
            renderActivities();
        });
    } else {
        loadMoreContainer.innerHTML = total > 0 ? `<p style="text-align:center; color:var(--text-muted);">✨ Semua aktivitas ditampilkan (${total} item)</p>` : "";
    }
}

// Expand/collapse logic
function attachExpandListeners() {
    document.querySelectorAll('.card-compact').forEach(compact => {
        const card = compact.closest('.log-card');
        const detailPanel = card?.querySelector('.detail-panel');
        const expandIcon = compact.querySelector('.expand-icon i');
        if (!detailPanel) return;
        const handler = () => {
            const isOpen = detailPanel.classList.contains('open');
            if (isOpen) {
                detailPanel.classList.remove('open');
                if (expandIcon) expandIcon.className = 'fas fa-chevron-down';
            } else {
                detailPanel.classList.add('open');
                if (expandIcon) expandIcon.className = 'fas fa-chevron-up';
            }
        };
        compact.removeEventListener('click', compact._expandHandler);
        compact.addEventListener('click', handler);
        compact._expandHandler = handler;
    });
}

// Lightbox for gallery images
function attachGalleryLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.querySelector('.close-lightbox');
    if (!lightbox || !lightboxImg) return;

    const openLightbox = (src) => {
        lightboxImg.src = src;
        lightbox.style.display = 'flex';
    };
    const closeLightbox = () => {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
    };

    document.querySelectorAll('.gallery-item').forEach(item => {
        item.removeEventListener('click', item._lightHandler);
        const handler = (e) => {
            e.stopPropagation();
            const imgElem = item.querySelector('img');
            if (imgElem && imgElem.src) openLightbox(imgElem.src);
            else if (item.dataset.fullimg) openLightbox(item.dataset.fullimg);
        };
        item.addEventListener('click', handler);
        item._lightHandler = handler;
    });

    if (closeBtn) {
        closeBtn.onclick = closeLightbox;
    }
    lightbox.onclick = (e) => { if (e.target === lightbox) closeLightbox(); };
}

// UI controls (filter, sort)
function initControls() {
    document.querySelectorAll('[data-filter]').forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            currentFilter = filter;
            customFilterDate = null;
            document.getElementById('customDatePicker').value = '';
            displayedCount = 5;
            renderActivities();
            updateActiveButtons();
        });
    });

    const applyCustom = document.getElementById('applyCustomDate');
    const datePicker = document.getElementById('customDatePicker');
    if (applyCustom && datePicker) {
        applyCustom.addEventListener('click', () => {
            if (datePicker.value) {
                currentFilter = 'custom';
                customFilterDate = datePicker.value;
                displayedCount = 5;
                renderActivities();
                updateActiveButtons();
            } else {
                alert("Pilih tanggal terlebih dahulu.");
            }
        });
    }

    const resetBtn = document.getElementById('resetFilter');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            currentFilter = 'none';
            customFilterDate = null;
            if (datePicker) datePicker.value = '';
            displayedCount = 5;
            renderActivities();
            updateActiveButtons();
        });
    }

    const sortNewest = document.getElementById('sortNewest');
    const sortOldest = document.getElementById('sortOldest');
    if (sortNewest && sortOldest) {
        sortNewest.addEventListener('click', () => {
            currentSort = 'newest';
            displayedCount = 5;
            renderActivities();
            sortNewest.classList.add('active');
            sortOldest.classList.remove('active');
        });
        sortOldest.addEventListener('click', () => {
            currentSort = 'oldest';
            displayedCount = 5;
            renderActivities();
            sortOldest.classList.add('active');
            sortNewest.classList.remove('active');
        });
    }
}

function updateActiveButtons() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        const val = btn.getAttribute('data-filter');
        if ((val === currentFilter) || (currentFilter === 'custom' && btn.id === 'applyCustomDate')) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    if (currentFilter === 'none') document.getElementById('resetFilter')?.classList.add('active');
    else document.getElementById('resetFilter')?.classList.remove('active');
}

// Start everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initControls();
    renderActivities();
});