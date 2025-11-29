import React from 'react';
import { useTranslation } from 'react-i18next';

function Slide19() {
    const { t } = useTranslation();
    return (
        <div className="slide-content final-slide">
            <h2>{t('slide19.h2')}</h2>

            <div className="cta-block">
                <p className="cta-text">{t('slide19.list.p1')}</p>
                <p className="cta-text">{t('slide19.list.p2')}</p>
                <p className="cta-text">{t('slide19.list.p3')}</p>
                <p className="cta-text">{t('slide19.list.p4')}</p>

                <div className="final-proposal">
                    <p>{t('slide19.proposal.p')}</p>
                    <h3>{t('slide19.proposal.h3')}</h3>
                </div>
            </div>
        </div>
    );
}

Slide19.title = 'Призыв к действию';

export default Slide19;
