import React from 'react';
import { useTranslation } from 'react-i18next';

function Slide1() {
  const { t } = useTranslation();
  return (
    <div className="slide-content title-slide">
      <div className="overlay"></div>
      <h1>{t('slide1.h1')}</h1>
      <h2>{t('slide1.h2')}</h2>
      <img 
        src="/images/circular_system_diagram.png" 
        alt="Circular Economy System Diagram" 
        className="diagram-image"
      />
      <div className="content-block">
        <p>
          {t('slide1.p')}
        </p>
        <div className="management-model">
          <h3>{t('slide1.management.h3')}</h3>
          <ul>
            <li dangerouslySetInnerHTML={{ __html: t('slide1.management.li1') }}></li>
            <li dangerouslySetInnerHTML={{ __html: t('slide1.management.li2') }}></li>
          </ul>
        </div>
        <div className="mission-block">
          <p dangerouslySetInnerHTML={{ __html: t('slide1.mission.p') }}></p>
          <p className="highlight">{t('slide1.mission.highlight')}</p>
        </div>
      </div>
    </div>
  );
}

Slide1.title = 'Титульный слайд';

export default Slide1;
