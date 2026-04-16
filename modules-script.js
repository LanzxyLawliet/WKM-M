// modules-script.js
const allModules = [
    {
        id: 1,
        title: "Pengujian Penetrasi Jaringan (Methodology)",
        meta: "Minggu 1-2 | 10 jam praktik",
        description: "Mempelajari tahapan ethical hacking: reconnaissance, scanning, exploitation, post-exploitation, dan reporting.",
        tags: ["Networking", "Security", "Penetration Testing", "Metasploit"],
        link: "modules/module-1.html"
    },
    {
        id: 2,
        title: "Metodologi Troubleshooting Jaringan",
        meta: "Minggu 3 | 8 jam praktik",
        description: "Pendekatan sistematis untuk mengidentifikasi dan memperbaiki masalah jaringan.",
        tags: ["Networking", "Troubleshooting", "Cisco", "Mikrotik"],
        link: "modules/module-2.html"
    },
    {
        id: 3,
        title: "Pembuatan Modul Pembelajaran (Template)",
        meta: "Minggu 4 | 5 jam",
        description: "Cara menyusun modul praktikum yang terstruktur dengan studi kasus.",
        tags: ["Teaching", "Documentation", "Template"],
        link: "modules/module-3.html"
    },
    {
        id: 4,
        title: "Analisis Forensik Digital",
        meta: "Minggu 5 | 12 jam",
        description: "Metodologi pengumpulan dan analisis bukti digital dari sistem yang terkompromi.",
        tags: ["Forensic", "Security", "Linux"],
        link: "modules/module-4.html"
    }
];

let currentTagSearch = "";

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

function renderModules() {
    const container = document.getElementById("modulesContainer");
    if (!container) return;

    let filtered = [...allModules];
    if (currentTagSearch.trim() !== "") {
        const searchLower = currentTagSearch.toLowerCase();
        filtered = filtered.filter(mod => 
            mod.tags && mod.tags.some(tag => tag.toLowerCase().includes(searchLower))
        );
    }

    if (filtered.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding:2rem;"><i class="fas fa-tag"></i> Tidak ada modul dengan tag "${escapeHtml(currentTagSearch)}".</div>`;
        return;
    }

    let html = "";
    for (const mod of filtered) {
        html += `
            <div class="module-card">
                <div class="module-header">
                    <div class="module-title">📘 ${escapeHtml(mod.title)}</div>
                    <div class="module-meta"><i class="far fa-clock"></i> ${escapeHtml(mod.meta)}</div>
                </div>
                <div class="module-content">
                    <div class="module-description">${escapeHtml(mod.description)}</div>
                    <div class="tags">
                        ${mod.tags.map(tag => `<span class="tag">#${escapeHtml(tag)}</span>`).join('')}
                    </div>
                    <a href="${mod.link}" class="module-link">Buka Modul Lengkap <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        `;
    }
    container.innerHTML = html;
}

const tagInput = document.getElementById('tagSearchInput');
if (tagInput) {
    tagInput.addEventListener('input', (e) => {
        currentTagSearch = e.target.value;
        renderModules();
    });
}

renderModules();