import React from 'react';
import { useTranslation } from 'react-i18next';

function Slide10() {
  const { t } = useTranslation();
  return (
    <div className="slide-content">
      <h2>{t('slide10.h2')}</h2>

      <div className="timeline-grid">
        <div className="timeline-step">
          <div className="step-number">1</div>
          <h3>{t('slide10.steps.step1.h3')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('slide10.steps.step1.time') }}></p>
          <p dangerouslySetInnerHTML={{ __html: t('slide10.steps.step1.cost') }}></p>
          <p className="desc">{t('slide10.steps.step1.desc')}</p>
        </div>
        <div className="timeline-step">
          <div className="step-number">2</div>
          <h3>{t('slide10.steps.step2.h3')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('slide10.steps.step2.time') }}></p>
          <p dangerouslySetInnerHTML={{ __html: t('slide10.steps.step2.cost') }}></p>
          <p className="desc">{t('slide10.steps.step2.desc')}</p>
        </div>
        <div className="timeline-step">
          <div className="step-number">3</div>
          <h3>{t('slide10.steps.step3.h3')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('slide10.steps.step3.time') }}></p>
          <p dangerouslySetInnerHTML={{ __html: t('slide10.steps.step3.cost') }}></p>
          <p className="desc">{t('slide10.steps.step3.desc')}</p>
        </div>
        <div className="timeline-step">
          <div className="step-number">4</div>
          <h3>{t('slide10.steps.step4.h3')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('slide10.steps.step4.time') }}></p>
          <p dangerouslySetInnerHTML={{ __html: t('slide10.steps.step4.cost') }}></p>
          <p className="desc">{t('slide10.steps.step4.desc')}</p>
        </div>
        <div className="timeline-step">
          <div className="step-number">5</div>
          <h3>{t('slide10.steps.step5.h3')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('slide10.steps.step5.time') }}></p>
          <p dangerouslySetInnerHTML={{ __html: t('slide10.steps.step5.cost') }}></p>
          <p className="desc">{t('slide10.steps.step5.desc')}</p>
        </div>
        <div className="timeline-step">
          <div className="step-number">6</div>
          <h3>{t('slide10.steps.step6.h3')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('slide10.steps.step6.time') }}></p>
          <p dangerouslySetInnerHTML={{ __html: t('slide10.steps.step6.cost') }}></p>
          <p className="desc">{t('slide10.steps.step6.desc')}</p>
        </div>
      </div>
    </div>
  );
}

Slide10.title = 'Этапы пилота';

export default Slide10;
