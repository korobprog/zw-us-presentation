import React from 'react';
import { useTranslation } from 'react-i18next';

function Slide4() {
  const { t } = useTranslation();
  return (
    <div className="slide-content">
      <h2>{t('slide4.h2')}</h2>
      <p className="subtitle">{t('slide4.subtitle')}</p>

      <div className="clusters-grid">
        <div className="cluster-card">
          <div className="cluster-header">{t('slide4.clusters.a.header')}</div>
          <h3>{t('slide4.clusters.a.title')}</h3>
          <p>{t('slide4.clusters.a.desc')}</p>
        </div>
        <div className="cluster-card">
          <div className="cluster-header">{t('slide4.clusters.b.header')}</div>
          <h3>{t('slide4.clusters.b.title')}</h3>
          <p>{t('slide4.clusters.b.desc')}</p>
        </div>
        <div className="cluster-card">
          <div className="cluster-header">{t('slide4.clusters.c.header')}</div>
          <h3>{t('slide4.clusters.c.title')}</h3>
          <p>{t('slide4.clusters.c.desc')}</p>
        </div>
        <div className="cluster-card">
          <div className="cluster-header">{t('slide4.clusters.d.header')}</div>
          <h3>{t('slide4.clusters.d.title')}</h3>
          <p>{t('slide4.clusters.d.desc')}</p>
        </div>
        <div className="cluster-card">
          <div className="cluster-header">{t('slide4.clusters.e.header')}</div>
          <h3>{t('slide4.clusters.e.title')}</h3>
          <p>{t('slide4.clusters.e.desc')}</p>
        </div>
        <div className="cluster-card">
          <div className="cluster-header">{t('slide4.clusters.f.header')}</div>
          <h3>{t('slide4.clusters.f.title')}</h3>
          <p>{t('slide4.clusters.f.desc')}</p>
        </div>
      </div>

      <p className="footer-note">{t('slide4.footer')}</p>
    </div>
  );
}

Slide4.title = 'Кластеры A-F';

export default Slide4;
