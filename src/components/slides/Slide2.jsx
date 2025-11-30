import React from 'react';
import { useTranslation } from 'react-i18next';

function Slide2() {
  const { t } = useTranslation();
  return (
    <div className="slide-content slide2-content">
      <h2>{t('slide2.h2')}</h2>
      <div className="content-block">
        <img 
          src="/images/team_1764206984411.png" 
          alt="Team" 
          className="team-image"
        />
        <p className="intro-text">
          {t('slide2.intro')}
        </p>

        <div className="process-chain">
          <h3>{t('slide2.process.h3')}</h3>
          <div className="chain-visual">
            <div className="chain-item">{t('slide2.process.item1')}</div>
            <div className="arrow">→</div>
            <div className="chain-item">{t('slide2.process.item2')}</div>
          </div>
        </div>

        <p className="conclusion">
          {t('slide2.conclusion')}
        </p>
      </div>
    </div>
  );
}

Slide2.title = 'Кто мы';

export default Slide2;
