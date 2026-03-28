# 🚀 Portfolyo Web Sitesi

Modern, minimalist ve yüksek performanslı kişisel portfolyo sitesi.

## Teknolojiler

- **React 19** — Bileşen tabanlı UI
- **Vite** — Hızlı geliştirme ortamı
- **Tailwind CSS v4** — Utility-first CSS framework
- **Framer Motion** — Animasyonlar ve geçiş efektleri
- **Lucide React** — İkon kütüphanesi

## Özellikler

- 🎨 Koyu tema (Dark Mode)
- 📱 Tam responsive tasarım (mobil uyumlu)
- ✨ Scroll animasyonları ve hover efektleri
- 📬 Çalışan iletişim formu (FormSubmit.co)
- ⚡ Hızlı yükleme süresi

## Kurulum ve Çalıştırma

### Gereksinimler

- [Node.js](https://nodejs.org/) (v18 veya üzeri)
- npm (Node.js ile birlikte gelir)

### Adımlar

1. **Repoyu klonla:**

```bash
git clone https://github.com/loxiwwxd/Portfolyo.git
cd Portfolyo
```

2. **Bağımlılıkları yükle:**

```bash
npm install
```

3. **Geliştirme sunucusunu başlat:**

```bash
npm run dev
```

4. **Tarayıcıda aç:**

```
http://localhost:5173/
```

### Production Build

```bash
npm run build
```

Build çıktısı `dist/` klasörüne oluşturulur. Bu klasörü Vercel, Netlify veya herhangi bir statik hosting servisine deploy edebilirsin.

## Proje Yapısı

```
src/
├── main.jsx            # Uygulama giriş noktası
├── App.jsx             # Ana bileşen
├── index.css           # Tailwind tema ve global stiller
├── data.js             # Site verileri (projeler, yetenekler, linkler)
└── components/
    ├── Navbar.jsx       # Navigasyon çubuğu
    ├── Hero.jsx         # Giriş bölümü
    ├── About.jsx        # Hakkımda
    ├── Skills.jsx       # Yetenekler
    ├── Projects.jsx     # Projeler
    ├── ProjectCard.jsx  # Proje kartı
    ├── Contact.jsx      # İletişim formu
    ├── Footer.jsx       # Alt bilgi
    └── Icons.jsx        # Özel SVG ikonlar
```

## Lisans

Bu proje kişisel kullanım amaçlıdır.
