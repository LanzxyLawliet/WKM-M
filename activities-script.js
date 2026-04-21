// activities-main.js
// Activity log data with shortDesc and descriptionMd (Markdown)
/**
 * ==================== GUIDE: descriptionMd (Markdown) ====================
 * 
 * Use `descriptionMd` instead of plain `description` to add rich formatting.
 * It supports all common Markdown syntax, rendered by the 'marked' library.
 * 
 * -------------------------------------------------------------------------
 * BASIC FORMATTING:
 *   **bold**       → <strong>bold</strong>
 *   *italic*       → <em>italic</em>
 *   `inline code`  → <code>inline code</code>
 * 
 * HEADINGS:
 *   # Heading 1    (rare, avoid)
 *   ## Heading 2   (section title)
 *   ### Heading 3  (subsection)
 * 
 * LISTS:
 *   - Item 1       → unordered list
 *   - Item 2
 *   1. First       → ordered list
 *   2. Second
 * 
 * BLOCKQUOTES:
 *   > This is a quote
 *   >> Nested quote
 * 
 * CODE BLOCKS (triple backticks):
 *   ```js
 *   const greeting = "Hello";
 *   ```
 * 
 * LINKS & IMAGES (optional):
 *   [Link text](https://example.com)
 *   ![alt](image-url)
 * 
 * -------------------------------------------------------------------------
 * EXAMPLE (copy-paste into your activity object):
 * 
 *   descriptionMd: "## 📘 Materi yang disampaikan\n\n" +
 *                  "- **Perintah navigasi dasar**: `ls`, `cd`, `pwd`, `mkdir`\n" +
 *                  "- **Manajemen file**: `cp`, `mv`, `rm`, `touch`\n" +
 *                  "- Instalasi **VirtualBox** dan setup **Ubuntu Server**\n" +
 *                  "  - Konfigurasi network adapter\n" +
 *                  "  - Akses SSH\n\n" +
 *                  "> *“Linux bukan hanya sistem operasi, tapi filosofi kolaborasi.”*"
 * 
 * TIPS:
 *   - Use \n for line breaks.
 *   - Keep headings concise (## or ###).
 *   - For longer descriptions, use backticks for commands or code.
 *   - The rendered HTML will inherit the page's dark theme styling.
 * 
 * =========================================================================
 */
//

const allActivities = [
    {
        id: 22,
        date: "2026-04-21",
        title: "Mengerjakan LKS 2026 cisco",
        shortDesc: "Mengerjakan LKS 2026 cisco.",
        descriptionMd: `
## Mengerjakan LKS 2026 cisco dengan menyambungkan 2 Lan dan vlan dalam Lan.
Progress hanya baru sampai menyambungkan mls dan router jaksel, sekaligus beberapa vlan namun masih gagal dalam pinging end device yang berada pada jaringan yang sama.
        `,
        imageUrls: ["pictures/2026-04-21-1.jpeg", "pictures/2026-04-21-2.jpeg"],
        tags: ["Demonstration", "Penetration Testing", "Aircrack-ng", "Wifi"]
    },
    {
        id: 21,
        date: "2026-04-20",
        title: "Menginstal ulang OWASP Juice Shop",
        shortDesc: "Menginstal ulang OWASP Juice Shop dan mempelajari dasar burpsuite.",
        descriptionMd: `
## Menginstal ulang OWASP Juice Shop untuk dijadikan target dalam penetration testing
- Melakukan applicaton mapping dengan menggunakan burpsuite untuk memahami fitur dan penggunaannya dalam penetration testing OWASP Juice Shop.
- Melakukan parameter tampering dengan menggunakan burpsuite paada tab halaman feedback dan beberapa bagian yang dapat dieksploitasi untuk memahami fitur dan penggunaannya dalam penetration testing OWASP Juice Shop.
        `,
        imageUrls: ["pictures/2026-04-20-1.jpeg"],
        tags: ["Demonstration", "Penetration Testing", "Aircrack-ng", "Wifi"]
    },
    {
        id: 20,
        date: "2026-04-18",
        title: "Menginstal DVWA dan OWASP Juice Shop",
        shortDesc: "Menginstal DVWA dan OWASP Juice Shop untuk keperluan penetration testing.",
        descriptionMd: `
## Menginstal DVWA dan OWASP Juice Shop untuk dijadikan target dalam penetration testing
- DVWA (Damn Vulnerable Web Application) adalah aplikasi web yang sengaja dibuat rentan untuk tujuan pembelajaran keamanan aplikasi web.
- OWASP Juice Shop adalah aplikasi web yang juga sengaja dibuat rentan, namun dengan fokus pada berbagai jenis kerentanan yang lebih luas, termasuk yang ditemukan dalam aplikasi modern.

Dengan menginstal kedua aplikasi ini, kita dapat melakukan berbagai jenis serangan dan eksploitasi untuk memahami bagaimana kerentanan bekerja dan bagaimana cara melindungi aplikasi web dari serangan tersebut.
        `,
        imageUrls: ["pictures/2026-04-18-1.jpeg"],
        tags: ["Demonstration", "Penetration Testing", "Aircrack-ng", "Wifi"]
    },
    {
        id: 19,
        date: "2026-04-17",
        title: "Melakukan Demo pada penggunaan Aircrack-ng",
        shortDesc: "Melakukan Demonstrasi penggunaan Aircrack-ng.",
        descriptionMd: `
## Melakukan Demo pada penggunaan Aircrack-ng
Melakukan demonstrasi penggunaan Aircrack-ng untuk memahami fitur dan penggunaannya dalam penetration testing kepada pak awan.
        `,
        imageUrls: ["pictures/2026-04-17-2.jpeg"],
        tags: ["Demonstration", "Penetration Testing", "Aircrack-ng", "Wifi"]
    },
    {
        id: 18,
        date: "2026-04-17",
        title: "Melakukan research tentang Burpsuite dan sqlmap",
        shortDesc: "Melakukan research tentang Burpsuite dan sqlmap untuk memahami fitur dan penggunaannya dalam penetration testing.",
        descriptionMd: `
## Melakukan research tentang Burpsuite dan sqlmap untuk memahami fitur dan penggunaannya dalam penetration testing
Menggunakan youtube sebagai sumber untuk melakukan research tentang Burpsuite dan sqlmap, sehingga dapat memahami fitur dan penggunaannya dalam penetration testing.
        `,
        imageUrls: ["pictures/2026-04-17-3.jpeg"],
        tags: ["security", "Penetration Testing", "Documentation", "sqlmap", "burpsuite"]
    },
    {
        id: 17,
        date: "2026-04-17",
        title: "Membuat wordlist sendiri",
        shortDesc: "Membuat wordlist 8 digit numerik untuk keperluan penetration testing.",
        descriptionMd: `
## Membuat wordlist 8 digit numerik untuk keperluan penetration testing
Wordlist ini dibuaat dengan menggunakan crunch dengan format -f /usr/share/crunch/charset.lst numeric 8 8 -o 8num.txt, sehingga menghasilkan wordlist dengan kombinasi angka dari 00000000 hingga 99999999.

Wordlist ini dapat membobol password yang berdasarkan tanggal lahir yang terdiri dari 8 digit numerik, namun tidak efektif untuk password yang lebih kompleks. Oleh karena itu, wordlist ini dapat digunakan sebagai tambahan dalam serangan brute force untuk target yang memiliki password dengan pola tersebut.
Sebelumnya membuat yang sama dengan mixalpa namun dibatalkan karena file terlalu besar.
`,
        imageUrls: ["pictures/2026-04-17-2.jpeg"],
        tags: ["Penetration Testing", "Security"]
    },
    {
        id: 16,
        date: "2026-04-16",
        title: "Membuat dan menambahkan module pada website",
        shortDesc: "Membuat module baru pada website untuk menampilkan aktivitas, serta menambahkan fitur filter berdasarkan tag.",
        descriptionMd: `
## Membuat module baru pada website untuk menampilkan aktivitas, serta menambahkan fitur filter berdasarkan tag.
menambahkan fitur filter berdasarkan tag pada website, sehingga dapat memfilter aktivitas berdasarkan tag yang diinginkan.
        `,
        imageUrls: ["pictures/2026-04-16-3.jpeg"],
        tags: ["documentation", "Web Development", "Frontend"]
    },
    {
        id: 15,
        date: "2026-04-16",
        title: "Membuat SSH pada debian server",
        shortDesc: "Membuat SSH pada debian server untuk dapat diakses secara remote.",
        descriptionMd: `
## Membuat SSH 
Mendownload openSSH-server untuk membuat SSH pada debian server, sehingga dapat diakses secara remote. 
        `,
        imageUrls: ["pictures/2026-04-16-2.jpeg"],
        tags: ["SSH", "Debian", "Server"]
    },
    {
        id: 14,
        date: "2026-04-16",
        title: "Mengulang kembali intersep jaringan Wifi",
        shortDesc: "Menggunakan aircrack-ng pada mesin linux untuk melakukan intersep.",
        descriptionMd: `
## Melakukan intersep pada jaringan wifi menggunakan aircrack-ng pada mesin linux
### Target
-   42net
-   fortunet
## Hasil
-   gagalmendaptkan pw
        `,
        imageUrls: ["pictures/2026-04-16-1.jpeg"],
        tags: ["Aircrack-ng", "Wifi", "Linux"]
    },
    {
        id: 13,
        date: "2026-04-15",
        title: "Mengintersep jaringan Wifi",
        shortDesc: "Menggunakan aircrack-ng pada mesin linux untuk melakukan intersep.",
        descriptionMd: `
## Melakukan intersep pada jaringan wifi menggunakan aircrack-ng pada mesin linux
### Hal yang dilakukan
-   **Menggunakan wlan device sebagai monitor** : Dengan demikian wireless interface dapat menangkap bssid dan dapat digunakan untuk attack lebih lanjut.
-   **Mendeautentikasi jaringan yang terhubung** : Membuat perangkat yang terhubung dengan wifi terputus secara paksa, dan dengan demikian ketika perangkat ingin terhubung kembali, interface yang memonitor akan mendapat handshake authentication
-   **Menggunakan wordlist rockyou.txt untuk mebobol wifi** : Melakukan brutefoce dengan rangkaian kata yang terdapat pada wordlist rockyou.txt pada jaringan target wifi.

### Status
**Berhasil** membobol wifi dengan menggunakan wordlist rockyou.txt setelah mendapatkan handshake authentication, **Namun** gagal pada saat wifi menggunakan secure profile yang memiliki password yang kemungkinan besar tidak terdapat pada wordlist rockyou.txt, sehingga perlu menggunakan wordlist yang lebih lengkap atau melakukan serangan lain seperti WPS attack.
        `,
        imageUrls: ["pictures/lowresweb[12345678].png", "pictures/lowresweb[abcdefgh].png", "pictures/lowresweb[qwertyuiopasdfghjklzxcvbnm].png"],
        tags: ["Aircrack-ng", "Wifi", "Linux"]
    },
    {
        id: 12,
        date: "2026-04-15",
        title: "Menyelesaikan PPT paparan tentang AI",
        shortDesc: "Membuat paparan tentang AI.",
        descriptionMd: `
## Membuat paparan tentang AI dan sekaligus belajar memahami materi dari paparan.

Untuk melihat hasil paparan dapat diakses melalui [Disini](https://canva.link/4phkr5a6ihow617)
        `,
        imageUrls: ["https://plus.unsplash.com/premium_photo-1680608979589-e9349ed066d5?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        tags: ["Teamwork"]
    },
    {
        id: 11,
        date: "2026-04-14",
        title: "Membuat jaringan wlan pada Mikrotik",
        shortDesc: "Mengkonfigurasi dan membuat jaringan wlan pada Mikrotik.",
        descriptionMd: `
## Membuat Jaringan WLAN pada Mikrotik
Mengkonfigurasi dan membuat jaringan wlan pada Mikrotik.

-   Mengkonifigurasi dasar wlan untuk membuat jaringan wifi  
-   Membuat wlan dengan nama SSID "LANZY"
-   Mengatur keamanan dengan WPA2-PSK dan password yang simpel
        `,
        imageUrls: ["https://images.unsplash.com/photo-1606904825846-647eb07f5be2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        tags: ["Mikrotik", "WLAN", "Networking"]
    },
    {
        id: 10,
        date: "2026-04-13",
        title: "Membantu Mang dede membersihkan Ruko baru",
        shortDesc: "Membantu Mang dede membersihkan Ruko baru.",
        descriptionMd: `
## 🧹 Membersihkan Ruko Baru
Membantu Mang Dede membersihkan ruko baru bersama Irwan dan Bang angga.
- Menyapu lantai
- Mengepel seluruh area
- Merapikan barang-barang yang berserakan
- Hasil: Insyaallh bersih
        `,
        imageUrls: ["pictures/2026-04-13-2.jpeg", "pictures/2026-04-13-3.jpeg"],
        tags: ["Teamwork"]
    },
    {
        id: 9,
        date: "2026-04-13",
        title: "Membuat topologi router bus dynamic dengan packettracer",
        shortDesc: "Membuat topologi router bus dynamic dengan cisco packet tracer.",
        descriptionMd: `
## 📡 Cisco Packet Tracer - Router BUS Dynamic

- **Topologi:** 4 router terhubung dalam konfigurasi BUS
- **Routing Dynamic:** menggunakan RIP untuk melakukan routing otomatis dengan menggunakan 4 router pt dan 4 pc.
- **Hasil:** semua router berhasil saling berkomunikasi dengan routing yang stabil

        `,
        imageUrls: ["pictures/2026-04-13-1.jpeg"],
        tags: ["Web Design", "Frontend", "Redesign"]
    },
    {
        id: 8,
        date: "2026-04-11",
        title: "Meremake website laporan magang",
        shortDesc: "Mengganti website laporan magang dengan tampilan yang lebih menarik, dan sedikit penambahan fitur.",
        descriptionMd: "## 🎨 Perubahan yang dilakukan\n\n- **Redesain antarmuka** menggunakan komponen yang lebih modern\n- Menambahkan **fitur filter dan sort** pada halaman aktivitas\n- Implementasi **lightbox gallery** untuk dokumentasi\n- Optimasi kecepatan dengan pagination (load lebih banyak)\n\n> *“Tampilan yang baik meningkatkan semangat bekerja.”*",
        imageUrls: ["pictures/1.png", "pictures/2.png", "pictures/3.png"],
        tags: ["Web Design", "Frontend", "Redesign"]
    },
    {
        id: 7,
        date: "2026-04-10",
        title: "Membuat website laporan magang",
        shortDesc: "Membuat website laporan magang untuk menampilkan aktivitas selama magang, dan menyimpan projek dimasa mendatang.",
        descriptionMd: "## 🚀 Website laporan magang\n\n- **Struktur halaman**: Home, About, Activities, Projects\n- Menggunakan **HTML5, CSS3, JavaScript** murni\n- **Responsif** untuk desktop dan mobile\n- Menyediakan **gallery** untuk setiap aktivitas\n\n**Tujuan:** mendokumentasikan hasil belajar secara profesional.",
        imageUrls: ["pictures/IMG-20260410-WA0106.jpeg", "pictures/IMG-20260410-WA0108.jpeg", "pictures/IMG-20260410-WA0110.jpeg"],
        tags: ["HTML", "CSS", "JS", "Portofolio"]
    },
    {
        id: 6,
        date: "2026-04-09",
        title: "Mengulang kembali projek cisco kemarin dan Membuat cisco topologi router bus Static dan Dynamic",
        shortDesc: "Membuat topologi router bus static dan dynamic dengan cisco packet tracer. Gagal saat manual routing dan konfigurasi OSPF/RIP.",
        descriptionMd: "## 📡 Cisco Packet Tracer\n\n- **Topologi BUS** dengan routing static dan dynamic\n- Kendala:\n  - Gagal saat **manual routing** pada topologi static\n  - Konfigurasi **OSPF** dan **RIP** tidak berhasil\n- **Pelajaran:** perlu pemahaman lebih dalam tentang tabel routing dan metric\n\n> *Kegagalan adalah langkah menuju sukses.*",
        imageUrls: ["pictures/IMG-20260409-WA0121.jpg"],
        tags: ["Cisco", "Routing", "Static", "Dynamic"]
    },
    {
        id: 5,
        date: "2026-04-08",
        title: "Membuat sistem jaringan 4 gedung dengan cisco packet tracer menggunakan 5 switch",
        shortDesc: "4 gedung dengan 5 switch yang hanya dapat berkomunikasi ke vlan yang sama. Berhasil dengan lancar.",
        descriptionMd: "## 🏢 Jaringan 4 Gedung\n\n- **Topologi:** 4 gedung, 5 switch, VLAN terisolasi\n- **Hasil:** perangkat hanya bisa komunikasi dalam satu VLAN\n- **Pembelajaran:**\n  - Pergerakan data pada switch\n  - Konsep **broadcast domain** dan **collision domain**\n- **Status:** ✅ Berhasil",
        imageUrls: ["pictures/IMG_20260408_165925_533.webp", "pictures/IMG-20260408-WA0099.jpg"],
        tags: ["Cisco", "VLAN", "Switching"]
    },
    {
        id: 4,
        date: "2026-04-07",
        title: "Mengikuti pak Awan mengajar di sandikta",
        shortDesc: "Mempraktekan materi penggunaan Mikrotik router dengan topologi BUS",
        descriptionMd: "## 🧑‍🏫 Workshop Mikrotik\n\n- **Topik:** Router Mikrotik dengan topologi BUS\n- **Praktik:**\n  - Konfigurasi dasar **IP address**\n  - **Routing** sederhana\n  - **Firewall** filter\n- **Manfaat:** memahami perangkat keras jaringan secara langsung",
        imageUrls: ["pictures/IMG_20260407_164007_396.jpg"],
        tags: ["Mikrotik", "Routing", "Workshop"]
    },
    {
        id: 3,
        date: "2026-04-06",
        title: "Debian DHCP server virtualbox ke client virtualbox",
        shortDesc: "Membuat DHCP server di virtualbox dan mengkonfigurasi client untuk mendapatkan IP secara otomatis.",
        descriptionMd: "## 🖥️ Debian DHCP Server\n\n- **Langkah:**\n  1. Install `isc-dhcp-server` di Debian\n  2. Konfigurasi file `/etc/dhcp/dhcpd.conf`\n  3. Set **interface** dan **subnet**\n  4. Restart service\n- **Hasil:** Client virtualbox berhasil mendapat IP otomatis\n\n> *DHCP menghemat waktu konfigurasi manual.*",
        imageUrls: ["pictures/IMG_20260406_153608_852.webp", "pictures/img.jpg"],
        tags: ["Debian", "DHCP", "VirtualBox"]
    },
    {
        id: 2,
        date: "2026-04-02",
        title: "Menginstall debian dan membuat DHCP server",
        shortDesc: "Gagal saat restart server DHCP server",
        descriptionMd: "## ❌ Percobaan DHCP Server (Gagal)\n\n- **Kegiatan:** Install Debian dan setup DHCP server\n- **Kendala:** Setelah konfigurasi, service gagal restart karena **error pada file konfigurasi**\n- **Analisis sementara:** kemungkinan kesalahan pada deklarasi subnet atau interface\n- **Solusi:** akan diulang dengan panduan lebih teliti",
        imageUrls: ["pictures/IMG_20260402_170438_922.webp"],
        tags: ["Debian", "DHCP", "Troubleshoot"]
    },
    {
        id: 1,
        date: "2026-04-01",
        title: "Membuat paparan linux dasar serta membuat server linux",
        shortDesc: "Paparan tentang linux dasar seperti mengenal perintah navigasi, serta membuat server linux dengan virtualbox.",
        descriptionMd: "## 🐧 Linux Dasar & Server\n\n- **Perintah navigasi:** `ls`, `cd`, `pwd`, `mkdir`\n- **Manajemen file:** `cp`, `mv`, `rm`, `touch`\n- **Instalasi VirtualBox** dan setup **Ubuntu Server**\n- Konfigurasi **network adapter** dan akses SSH\n\n> *“Linux bukan hanya sistem operasi, tapi filosofi kolaborasi.”*",
        imageUrls: ["pictures/IMG_20260401_155537_555.webp"],
        tags: ["Linux", "VirtualBox", "Server"]
    }
];


// ---------- State ----------
let currentFilter = "none";
let customFilterDate = null;
let currentSort = "newest";
let currentTagSearch = "";
let displayedCount = 5;
let filteredActivities = [...allActivities];

// Helper: format date (local, no timezone bug)
function formatLocalDate(dateStr) {
    const [year, month, day] = dateStr.split('-').map(Number);
    const d = new Date(year, month - 1, day);
    return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
}

function isToday(dateStr) {
    const today = new Date();
    const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    return dateStr === todayStr;
}

function isThisWeek(dateStr) {
    const now = new Date();
    const startOfWeek = new Date(now);
    const day = now.getDay();
    const diff = (day === 0 ? 6 : day - 1);
    startOfWeek.setDate(now.getDate() - diff);
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
    let filtered = [...allActivities];
    // Date filter
    if (currentFilter === "day") filtered = filtered.filter(a => isToday(a.date));
    else if (currentFilter === "week") filtered = filtered.filter(a => isThisWeek(a.date));
    else if (currentFilter === "month") filtered = filtered.filter(a => isThisMonth(a.date));
    else if (currentFilter === "custom" && customFilterDate) filtered = filtered.filter(a => a.date === customFilterDate);
    
    // Tag search filter (case-insensitive, partial match)
    if (currentTagSearch.trim() !== "") {
        const searchLower = currentTagSearch.toLowerCase();
        filtered = filtered.filter(act => 
            act.tags && act.tags.some(tag => tag.toLowerCase().includes(searchLower))
        );
    }
    return filtered;
}

function applySort(activities) {
    if (currentSort === "newest") return [...activities].sort((a, b) => new Date(b.date) - new Date(a.date));
    else return [...activities].sort((a, b) => new Date(a.date) - new Date(b.date));
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
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
        html += `
            <div class="log-card" data-id="${act.id}">
                <div class="card-compact" data-id="${act.id}">
                    <div class="date-badge"><i class="far fa-calendar-alt"></i> ${formatLocalDate(act.date)}</div>
                    <div class="title-preview">${escapeHtml(act.title)}</div>
                    <div class="short-desc">${escapeHtml(act.shortDesc)}</div>
                    <img class="thumbnail-preview" src="${thumbUrl}" alt="thumbnail" loading="lazy">
                    <div class="expand-icon"><i class="fas fa-chevron-down"></i></div>
                </div>
                <div class="detail-panel" id="detail-${act.id}">
                    <div class="full-description" id="md-content-${act.id}"></div>
                    ${act.tags ? `<div class="tags">${act.tags.map(t => `<span class="tag">#${escapeHtml(t)}</span>`).join('')}</div>` : ''}
                    <div class="gallery-title"><i class="fas fa-images"></i> Galeri dokumentasi</div>
                    <div class="gallery-grid" id="gallery-${act.id}"></div>
                </div>
            </div>
        `;
    }
    container.innerHTML = html;

    // Fill markdown and gallery for each activity
    for (const act of itemsToShow) {
        const mdDiv = document.getElementById(`md-content-${act.id}`);
        if (mdDiv && act.descriptionMd) {
            mdDiv.innerHTML = marked.parse(act.descriptionMd);
        } else if (mdDiv) {
            mdDiv.innerHTML = "<p><em>Tidak ada deskripsi detail.</em></p>";
        }
        const galleryDiv = document.getElementById(`gallery-${act.id}`);
        if (galleryDiv && act.imageUrls && act.imageUrls.length) {
            let galleryHtml = "";
            for (const img of act.imageUrls) {
                galleryHtml += `<div class="gallery-item" data-fullimg="${img}"><img src="${img}" loading="lazy" alt="gallery" onerror="this.src='https://picsum.photos/120/80?grayscale'"></div>`;
            }
            galleryDiv.innerHTML = galleryHtml;
        } else if (galleryDiv) {
            galleryDiv.innerHTML = "<p style='color:var(--text-muted)'>Tidak ada gambar.</p>";
        }
    }

    attachExpandListeners();
    attachGalleryLightbox();

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

    if (closeBtn) closeBtn.onclick = closeLightbox;
    lightbox.onclick = (e) => { if (e.target === lightbox) closeLightbox(); };
}

function initControls() {
    // Date filter buttons
    document.querySelectorAll('[data-filter]').forEach(btn => {
        btn.addEventListener('click', () => {
            currentFilter = btn.getAttribute('data-filter');
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
            } else alert("Pilih tanggal terlebih dahulu.");
        });
    }
    const resetBtn = document.getElementById('resetFilter');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            currentFilter = 'none';
            customFilterDate = null;
            datePicker.value = '';
            displayedCount = 5;
            renderActivities();
            updateActiveButtons();
        });
    }
    // Sort buttons
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
    // Tag search input
    const tagSearchInput = document.getElementById('tagSearchInput');
    if (tagSearchInput) {
        tagSearchInput.addEventListener('input', (e) => {
            currentTagSearch = e.target.value;
            displayedCount = 5;
            renderActivities();
        });
    }
}

function updateActiveButtons() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        const val = btn.getAttribute('data-filter');
        if ((val === currentFilter) || (currentFilter === 'custom' && btn.id === 'applyCustomDate')) btn.classList.add('active');
        else btn.classList.remove('active');
    });
    if (currentFilter === 'none') document.getElementById('resetFilter')?.classList.add('active');
    else document.getElementById('resetFilter')?.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
    initControls();
    renderActivities();
});