import React from 'react';
import { useTranslation } from 'react-i18next';

function Slide6() {
  const { t } = useTranslation();
  return (
    <div className="slide-content">
      <h2>{t('slide6.h2')}</h2>
      <p className="subtitle">{t('slide6.subtitle')}</p>

      <div className="local-system-grid">
        <div className="system-item">
          <h3>{t('slide6.items.mrf.title')}</h3>
          <p>{t('slide6.items.mrf.desc')}</p>
        </div>
        <div className="system-item">
          <h3>{t('slide6.items.rpc.title')}</h3>
          <p>{t('slide6.items.rpc.desc')}</p>
        </div>
        <div className="system-item">
          <h3>{t('slide6.items.energy.title')}</h3>
          <p>{t('slide6.items.energy.desc')}</p>
        </div>
        <div className="system-item">
          <h3>{t('slide6.items.school.title')}</h3>
          <p>{t('slide6.items.school.desc')}</p>
        </div>
        <div className="system-item">
          <h3>{t('slide6.items.eco.title')}</h3>
          <p>{t('slide6.items.eco.desc')}</p>
        </div>
        <div className="system-item">
          <h3>{t('slide6.items.restore.title')}</h3>
          <p>{t('slide6.items.restore.desc')}</p>
        </div>
        <div className="system-item">
          <h3>{t('slide6.items.culture.title')}</h3>
        </div>
        <div className="system-item">
          <h3>{t('slide6.items.health.title')}</h3>
        </div>
        <div className="system-item">
          <h3>{t('slide6.items.emergency.title')}</h3>
          <p>{t('slide6.items.emergency.desc')}</p>
        </div>
      </div>

      <div className="highlight-box">
        <p>{t('slide6.highlight')}</p>
      </div>
    </div>
  );
}

Slide6.title = 'ZW&US Local';

export default Slide6;
