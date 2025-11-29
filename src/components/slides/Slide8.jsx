import React from 'react';
import { useTranslation } from 'react-i18next';

function Slide8() {
  const { t } = useTranslation();
  return (
    <div className="slide-content">
      <h2>{t('slide8.h2')}</h2>

      <div className="problem-layout">
        <div className="problem-main">
          <h3>{t('slide8.main.h3')}</h3>
          <p className="large-text">{t('slide8.main.p')}</p>
        </div>

        <div className="problem-details">
          <div className="detail-item warning">
            <h4>{t('slide8.details.eco.h4')}</h4>
            <p>{t('slide8.details.eco.p')}</p>
          </div>
          <div className="detail-item loss">
            <h4>{t('slide8.details.econ.h4')}</h4>
            <p>{t('slide8.details.econ.p')}</p>
          </div>
        </div>

        <div className="solution-statement">
          <p>{t('slide8.solution')}</p>
        </div>
      </div>
    </div>
  );
}

Slide8.title = 'Решаемая проблема';

export default Slide8;
