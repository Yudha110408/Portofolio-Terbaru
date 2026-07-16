import { useEffect, useState } from 'react'
import './App.css'
import profilePhoto from './assets/profile-photo.svg'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const skills = [
    'React.js',
    'JavaScript',
    'HTML & CSS',
    'UI Prototyping',
    'Responsive Design',
    'Git & GitHub',
  ]

  const projects = [
    {
      title: 'Website Portofolio Pribadi',
      desc: 'Website yang menampilkan profil, skill, dan karya saya dengan desain modern dan performa ringan.',
      stack: 'React, Vite, CSS',
    },
    {
      title: 'Dashboard Monitoring Sederhana',
      desc: 'Dashboard untuk memantau data harian dengan visual yang jelas, cepat dibaca, dan mobile-friendly.',
      stack: 'React, Charting, REST API',
    },
    {
      title: 'Landing Page Produk',
      desc: 'Landing page fokus konversi dengan copy yang terstruktur, section informatif, dan CTA yang kuat.',
      stack: 'React, SEO Basics, Motion UI',
    },
  ]

  const websites = [
    {
      name: 'Homepage Brand Kopi Lokal',
      type: 'Landing Page',
      summary:
        'Website promosi produk kopi dengan fokus visual, CTA pembelian, dan mobile-first layout.',
      demo: '#',
      repo: '#',
    },
    {
      name: 'Homepage Jasa Desain Interior',
      type: 'Company Profile',
      summary:
        'Menampilkan layanan, portfolio klien, dan alur konsultasi yang sederhana untuk meningkatkan conversion.',
      demo: '#',
      repo: '#',
    },
    {
      name: 'Homepage Edukasi Online',
      type: 'Product Website',
      summary:
        'Homepage platform belajar dengan section program, testimoni, dan CTA pendaftaran yang jelas.',
      demo: '#',
      repo: '#',
    },
  ]

  const highlights = [
    {
      title: 'Design to Code',
      desc: 'Dari wireframe sampai implementasi React dengan hasil pixel-precise.',
    },
    {
      title: 'Cepat & Responsif',
      desc: 'Optimasi layout dan interaksi agar nyaman di desktop maupun mobile.',
    },
    {
      title: 'Kolaboratif',
      desc: 'Workflow rapi, komunikasi jelas, dan iterasi cepat sesuai feedback.',
    },
  ]

  return (
    <>
      <div className="page">
        <header className="topbar">
          <p className="brand">Yudha Portfolio</p>
          <nav className="topbar-nav" aria-label="Navigasi utama">
            <a href="#beranda">Beranda</a>
            <a href="#tentang">Tentang</a>
            <a href="#proyek">Proyek</a>
          </nav>
          <a href="#kontak" className="topbar-link">
            Hubungi Saya
          </a>
        </header>

        <main>
          <section className="hero" id="beranda">
            <div className="hero-glow" aria-hidden="true"></div>
            <div className="hero-inner">
              <div className="profile-wrap">
                <img
                  src={profilePhoto}
                  alt="Foto profil Yudha"
                  className="profile-photo"
                />
              </div>
              <div>
                <span className="hero-status">Available for freelance</span>
                <p className="eyebrow">Frontend Developer</p>
                <h1>
                  Halo, saya <span>Yudha</span>.
                  <br />
                  Saya membangun pengalaman web yang jelas, cepat, dan
                  berkarakter.
                </h1>
                <p className="lead">
                  Saya fokus pada pengembangan antarmuka modern menggunakan
                  React, dengan perhatian pada detail desain, kenyamanan
                  pengguna, dan performa.
                </p>
                <div className="hero-actions">
                  <a href="#proyek" className="btn btn-primary">
                    Lihat Proyek
                  </a>
                  <a href="#tentang" className="btn btn-outline">
                    Tentang Saya
                  </a>
                </div>
                <div className="mini-stats">
                  <div>
                    <strong>12+</strong>
                    <span>Proyek UI</span>
                  </div>
                  <div>
                    <strong>2+</strong>
                    <span>Tahun Belajar</span>
                  </div>
                  <div>
                    <strong>100%</strong>
                    <span>Fokus Responsif</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="panel quick-value" id="nilai">
            {highlights.map((item) => (
              <article key={item.title} className="value-card">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </section>

          <section className="panel" id="tentang">
            <h2>Tentang Saya</h2>
            <p>
              Saya senang mengubah ide menjadi produk digital yang fungsional
              dan menarik secara visual. Dalam setiap proyek, saya berusaha
              menjaga kode tetap rapi, mudah dikembangkan, dan mudah dipahami
              tim.
            </p>
          </section>

          <section className="panel" id="skill">
            <h2>Skill Utama</h2>
            <div className="skill-grid">
              {skills.map((skill) => (
                <span key={skill} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="panel" id="proyek">
            <h2>Proyek Pilihan</h2>
            <div className="project-grid">
              {projects.map((project, index) => (
                <article key={project.title} className="project-card">
                  <span className="project-index">0{index + 1}</span>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <small>{project.stack}</small>
                </article>
              ))}
            </div>
          </section>

          <section className="panel website-showcase" id="website">
            <div className="showcase-head">
              <h2>Website Yang Sudah Saya Buat</h2>
              <p>
                Ini section khusus untuk pamer hasil homepage yang pernah saya
                kerjakan.
              </p>
            </div>
            <div className="website-grid">
              {websites.map((site, index) => (
                <article key={site.name} className="website-card">
                  <div className="website-thumb" aria-hidden="true">
                    <span>Preview 0{index + 1}</span>
                  </div>
                  <div className="website-body">
                    <small>{site.type}</small>
                    <h3>{site.name}</h3>
                    <p>{site.summary}</p>
                    <div className="website-actions">
                      <a href={site.demo} className="btn btn-primary">
                        Lihat Demo
                      </a>
                      <a href={site.repo} className="btn btn-outline-dark">
                        Source Code
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="panel contact" id="kontak">
            <h2>Mari Kolaborasi</h2>
            <p>
              Terbuka untuk freelance, kerja sama tim, atau proyek kolaboratif
              lainnya.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="mailto:yudha@email.com">
                Kirim Email
              </a>
              <a className="btn btn-outline" href="https://github.com/">
                GitHub
              </a>
            </div>
          </section>
        </main>

        <footer>
          <p>© {new Date().getFullYear()} Yudha. Dibuat dengan React + Vite.</p>
        </footer>
      </div>
      <button
        type="button"
        className="theme-toggle"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label="Toggle dark mode"
      >
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </button>
    </>
  )
}

export default App
