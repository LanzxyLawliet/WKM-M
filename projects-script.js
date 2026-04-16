// projects-script.js
const allProjects = [
    {
        id: 1,
        title: "Landing Page Portofolio",
        description: "Website portofolio personal (yang sedang kamu lihat!) – responsif, modern, dengan aksen biru & kuning.",
        techStack: ["HTML5", "CSS3", "Flex/Grid"],
        link: "https://github.com/LanzxyLawliet/Website-Kegiatan-Magang",
        icon: "fas fa-globe",
        tags: ["HTML", "CSS", "Portofolio", "Responsive"]
    },
    {
        id: 2,
        title: "Kalkulator",
        description: "Kalkulator sederhana dengan fitur dasar untuk perhitungan sederhana.",
        techStack: ["HTML/CSS", "JavaScript"],
        link: "project/Calculator/index.html",
        icon: "fas fa-calculator",
        tags: ["JavaScript", "Calculator", "DOM"]
    },
    {
        id: 3,
        title: "Aktivitas Log System",
        description: "Sistem pencatatan harian dengan filter tanggal, tag search, dan lightbox gallery.",
        techStack: ["HTML", "CSS", "JavaScript", "Marked.js"],
        link: "#",
        icon: "fas fa-clipboard-list",
        tags: ["JavaScript", "Markdown", "Filter", "Gallery"]
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

function renderProjects() {
    const container = document.getElementById("projectsContainer");
    if (!container) return;

    let filtered = [...allProjects];
    if (currentTagSearch.trim() !== "") {
        const searchLower = currentTagSearch.toLowerCase();
        filtered = filtered.filter(proj => 
            proj.tags && proj.tags.some(tag => tag.toLowerCase().includes(searchLower))
        );
    }

    if (filtered.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding:2rem;"><i class="fas fa-tag"></i> Tidak ada proyek dengan tag "${escapeHtml(currentTagSearch)}".</div>`;
        return;
    }

    let html = "";
    for (const proj of filtered) {
        html += `
            <div class="project-card">
                <div class="project-icon"><i class="${proj.icon}"></i></div>
                <div class="project-title">${escapeHtml(proj.title)}</div>
                <p>${escapeHtml(proj.description)}</p>
                <div class="tech-stack">
                    ${proj.techStack.map(tech => `<span class="tech">${escapeHtml(tech)}</span>`).join('')}
                </div>
                <div class="tags">
                    ${proj.tags.map(tag => `<span class="tag">#${escapeHtml(tag)}</span>`).join('')}
                </div>
                <a href="${proj.link}" class="project-link">Lihat repo <i class="fab fa-github"></i></a>
            </div>
        `;
    }
    container.innerHTML = html;
}

// Tag search input
const tagInput = document.getElementById('tagSearchInput');
if (tagInput) {
    tagInput.addEventListener('input', (e) => {
        currentTagSearch = e.target.value;
        renderProjects();
    });
}

renderProjects();