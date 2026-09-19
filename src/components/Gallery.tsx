'use client';

import { useTranslations, useMessages, useLocale } from 'next-intl';
import { useState, useCallback } from 'react';

const photosZh = [
  { src: '/gallery/presernov-trg-ljubljana-panorama-view-1.jpg', alt: '普列舍伦广场 Prešernov trg - 斯洛文尼亚卢布尔雅那主景全景' },
  { src: '/gallery/presernov-trg-ljubljana-triple-bridge-2.jpg', alt: '三重桥 Triple Bridge (Tromostovje) - 紧邻 Prešernov trg' },
  { src: '/gallery/presernov-trg-ljubljana-preseren-monument-3.jpg', alt: '普列舍伦青铜雕像 - 位于 Prešernov trg 中央' },
  { src: '/gallery/presernov-trg-ljubljana-franciscan-church-4.jpg', alt: '方济各会天使报喜教堂 - Prešernov trg 南侧地标' },
  { src: '/gallery/presernov-trg-ljubljana-mayer-department-store-5.jpg', alt: 'Mayer 百货大楼 - 维也纳分离派建筑 near Prešernov trg' },
  { src: '/gallery/presernov-trg-ljubljana-night-view-6.jpg', alt: '普列舍伦广场 Prešernov trg 夜景 - 斯洛文尼亚卢布尔雅那' },
  { src: '/gallery/presernov-trg-ljubljana-central-pharmacy-7.jpg', alt: '中央药房建筑 - Prešernov trg 东侧历史建筑' },
  { src: '/gallery/presernov-trg-ljubljana-cafe-terrace-8.jpg', alt: '普列舍伦广场 Prešernov trg 咖啡馆文化场景' },
  { src: '/gallery/presernov-trg-ljubljana-riverside-ljubljanica-9.jpg', alt: '卢布尔雅那河畔 Ljubljanica River - near Prešernov trg' },
  { src: '/gallery/presernov-trg-ljubljana-old-town-street-10.jpg', alt: '卢布尔雅那中世纪老城街道 - Prešernov trg 周边街巷' },
  { src: '/gallery/presernov-trg-ljubljana-city-skyline-11.jpg', alt: '卢布尔雅那 Ljubljana 城市风光 - 远眺 Prešernov trg' },
  { src: '/gallery/presernov-trg-ljubljana-evening-scene-12.jpg', alt: '普列舍伦广场 Prešernov trg 浪漫欧洲夜生活场景' },
  { src: '/gallery/presernov-trg-ljubljana-architecture-detail-13.jpg', alt: '普列舍伦广场周边历史建筑细部 - Prešernov trg 建筑' },
  { src: '/gallery/presernov-trg-ljubljana-square-scene-14.jpg', alt: '普列舍伦广场 Prešernov trg 实景俯瞰' },
];

const photosEn = [
  { src: '/gallery/presernov-trg-ljubljana-panorama-view-1.jpg', alt: 'Prešernov trg - Main panoramic view in Ljubljana, Slovenia' },
  { src: '/gallery/presernov-trg-ljubljana-triple-bridge-2.jpg', alt: 'Triple Bridge (Tromostovje) near Prešernov trg' },
  { src: '/gallery/presernov-trg-ljubljana-preseren-monument-3.jpg', alt: 'Prešeren bronze monument at the center of Prešernov trg' },
  { src: '/gallery/presernov-trg-ljubljana-franciscan-church-4.jpg', alt: 'Franciscan Church of the Annunciation - south facade at Prešernov trg' },
  { src: '/gallery/presernov-trg-ljubljana-mayer-department-store-5.jpg', alt: 'Mayer department store (Vienna Secession) near Prešernov trg' },
  { src: '/gallery/presernov-trg-ljubljana-night-view-6.jpg', alt: 'Prešernov trg night view - Ljubljana, Slovenia' },
  { src: '/gallery/presernov-trg-ljubljana-central-pharmacy-7.jpg', alt: 'Central Pharmacy historic building - east side of Prešernov trg' },
  { src: '/gallery/presernov-trg-ljubljana-cafe-terrace-8.jpg', alt: 'Outdoor café scene at Prešernov trg, Ljubljana' },
  { src: '/gallery/presernov-trg-ljubljana-riverside-ljubljanica-9.jpg', alt: 'Ljubljanica River waterfront near Prešernov trg' },
  { src: '/gallery/presernov-trg-ljubljana-old-town-street-10.jpg', alt: 'Medieval old town streets surrounding Prešernov trg' },
  { src: '/gallery/presernov-trg-ljubljana-city-skyline-11.jpg', alt: 'Ljubljana city skyline with Prešernov trg vicinity' },
  { src: '/gallery/presernov-trg-ljubljana-evening-scene-12.jpg', alt: 'Romantic European nightlife at Prešernov trg, Ljubljana' },
  { src: '/gallery/presernov-trg-ljubljana-architecture-detail-13.jpg', alt: 'Historic architecture detail around Prešernov trg' },
  { src: '/gallery/presernov-trg-ljubljana-square-scene-14.jpg', alt: 'Square scene of Prešernov trg, Ljubljana' },
];

const photosSl = [
  { src: '/gallery/presernov-trg-ljubljana-panorama-view-1.jpg', alt: 'Prešernov trg - glavni panoramski pogled v Ljubljani, Sloveniji' },
  { src: '/gallery/presernov-trg-ljubljana-triple-bridge-2.jpg', alt: 'Tromostovje ob Prešernovem trgu' },
  { src: '/gallery/presernov-trg-ljubljana-preseren-monument-3.jpg', alt: 'Prešernov spomenik v središču Prešernovega trga' },
  { src: '/gallery/presernov-trg-ljubljana-franciscan-church-4.jpg', alt: 'Frančiškanska cerkev Marijinega oznanjenja na Prešernovem trgu' },
  { src: '/gallery/presernov-trg-ljubljana-mayer-department-store-5.jpg', alt: 'Mayerjeva veleblagovnica v slogu secesije ob Prešernovem trgu' },
  { src: '/gallery/presernov-trg-ljubljana-night-view-6.jpg', alt: 'Nočni pogled na Prešernov trg v Ljubljani' },
  { src: '/gallery/presernov-trg-ljubljana-central-pharmacy-7.jpg', alt: 'Zgodovinska stavba Centralne lekarne na vzhodni strani Prešernovega trga' },
  { src: '/gallery/presernov-trg-ljubljana-cafe-terrace-8.jpg', alt: 'Kavarniški prizor na Prešernovem trgu v Ljubljani' },
  { src: '/gallery/presernov-trg-ljubljana-riverside-ljubljanica-9.jpg', alt: 'Nabrežje Ljubljanice v bližini Prešernovega trga' },
  { src: '/gallery/presernov-trg-ljubljana-old-town-street-10.jpg', alt: 'Srednjeveške ulice starega mestnega jedra okoli Prešernovega trga' },
  { src: '/gallery/presernov-trg-ljubljana-city-skyline-11.jpg', alt: 'Pogled na Ljubljano v okolici Prešernovega trga' },
  { src: '/gallery/presernov-trg-ljubljana-evening-scene-12.jpg', alt: 'Romantično evropsko nočno življenje na Prešernovem trgu v Ljubljani' },
  { src: '/gallery/presernov-trg-ljubljana-architecture-detail-13.jpg', alt: 'Podrobnosti zgodovinske arhitekture ob Prešernovem trgu' },
  { src: '/gallery/presernov-trg-ljubljana-square-scene-14.jpg', alt: 'Prizor s trga Prešernov trg v Ljubljani' },
];

export default function Gallery() {
  const t = useTranslations('gallery');
  const messages = useMessages() as any;
  const locale = useLocale();
  const captions = (messages?.gallery?.captions || []) as string[];
  const photos = locale === 'zh' ? photosZh : locale === 'sl' ? photosSl : photosEn;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  }, []);

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  return (
    <>
      <section id="gallery" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-display text-3xl sm:text-4xl font-semibold mb-2"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('title')}
          </h2>
          <p className="mb-8" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
          <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {photos.map((photo, i) => (
                <div
                  key={i}
                  className={`gallery-item relative group cursor-pointer ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
                  onClick={() => {
                    setCurrentIndex(i);
                    openLightbox();
                  }}
                >
                  <img
                    src={photo.src}
                    alt={captions[i] || photo.alt}
                    className="w-full h-full object-cover rounded-lg"
                    style={{ minHeight: i === 0 ? '400px' : '180px' }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors rounded-lg flex items-end">
                    <p className="text-white text-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      {captions[i] || photo.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-colors"
              aria-label="Previous photo"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-colors"
              aria-label="Next photo"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <div className="flex justify-center mt-6 gap-4 items-center">
              <a
                href="https://maps.app.goo.gl/p9nzsuxxzisR1vNF9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
                style={{ color: 'var(--accent)' }}
              >
                {t('viewAll')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            aria-label="Close lightbox"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            aria-label="Previous photo"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <img
            src={photos[currentIndex].src}
            alt={captions[currentIndex] || photos[currentIndex].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            aria-label="Next photo"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {currentIndex + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  );
}
