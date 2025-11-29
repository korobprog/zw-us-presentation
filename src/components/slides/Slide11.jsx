import React from 'react';
import { useTranslation } from 'react-i18next';

function Slide11() {
  const { t } = useTranslation();
  return (
    <div className="slide-content">
      <h2>{t('slide11.h2')}</h2>
      <p className="subtitle">{t('slide11.subtitle')}</p>

      <div className="executives-grid">
        <div className="exec-card">
          <h3>{t('slide11.cards.ceo.h3')}</h3>
          <p>{t('slide11.cards.ceo.p')}</p>
        </div>
        <div className="exec-card">
          <h3>{t('slide11.cards.coo.h3')}</h3>
          <p>{t('slide11.cards.coo.p')}</p>
        </div>
        <div className="exec-card">
          <h3>{t('slide11.cards.cfo.h3')}</h3>
          <p>{t('slide11.cards.cfo.p')}</p>
        </div>
        <div className="exec-card">
          <h3>{t('slide11.cards.cto.h3')}</h3>
          <p>{t('slide11.cards.cto.p')}</p>
        </div>
        <div className="exec-card">
          <h3>{t('slide11.cards.clo.h3')}</h3>
          <p>{t('slide11.cards.clo.p')}</p>
        </div>
      </div>

      <div className="highlight-box">
        <p>{t('slide11.highlight')}</p>
      </div>
    </div>
  );
}

Slide11.title = 'Руководители';

export default Slide11;
