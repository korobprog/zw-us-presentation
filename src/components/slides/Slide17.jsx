import React from 'react';
import { useTranslation } from 'react-i18next';

function Slide17() {
    const { t } = useTranslation();
    return (
        <div className="slide-content">
            <h2>{t('slide17.h2')}</h2>
            <p className="subtitle">{t('slide17.subtitle')}</p>

            <div className="scaling-steps">
                <div className="scale-step">
                    <div className="step-circle">1</div>
                    <p>{t('slide17.steps.step1')}</p>
                </div>
                <div className="arrow">→</div>
                <div className="scale-step">
                    <div className="step-circle">2</div>
                    <p>{t('slide17.steps.step2')}</p>
                </div>
                <div className="arrow">→</div>
                <div className="scale-step">
                    <div className="step-circle">3</div>
                    <p>{t('slide17.steps.step3')}</p>
                </div>
                <div className="arrow">→</div>
                <div className="scale-step">
                    <div className="step-circle">4</div>
                    <p>{t('slide17.steps.step4')}</p>
                </div>
                <div className="arrow">→</div>
                <div className="scale-step">
                    <div className="step-circle">5</div>
                    <p>{t('slide17.steps.step5')}</p>
                </div>
            </div>

            <div className="highlight-box">
                <p>{t('slide17.highlight')}</p>
            </div>
        </div>
    );
}

Slide17.title = 'Масштабирование';

export default Slide17;
