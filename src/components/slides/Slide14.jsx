import React from 'react';
import { useTranslation } from 'react-i18next';

function Slide14() {
    const { t } = useTranslation();
    return (
        <div className="slide-content">
            <h2>{t('slide14.h2')}</h2>

            <div className="economics-grid">
                <div className="econ-card">
                    <h3>{t('slide14.cards.card1.h3')}</h3>
                    <div className="big-val">{t('slide14.cards.card1.big')}</div>
                    <div className="sub-val">{t('slide14.cards.card1.sub')}</div>
                </div>

                <div className="econ-card">
                    <h3>{t('slide14.cards.card2.h3')}</h3>
                    <div className="big-val">{t('slide14.cards.card2.big')}</div>
                    <div className="sub-val">{t('slide14.cards.card2.sub')}</div>
                </div>

                <div className="econ-card">
                    <h3>{t('slide14.cards.card3.h3')}</h3>
                    <div className="big-val">{t('slide14.cards.card3.big')}</div>
                    <div className="sub-val">{t('slide14.cards.card3.sub')}</div>
                </div>

                <div className="econ-card">
                    <h3>{t('slide14.cards.card4.h3')}</h3>
                    <div className="big-val">{t('slide14.cards.card4.big')}</div>
                    <div className="sub-val">{t('slide14.cards.card4.sub')}</div>
                </div>

                <div className="econ-card">
                    <h3>{t('slide14.cards.card5.h3')}</h3>
                    <div className="big-val">{t('slide14.cards.card5.big')}</div>
                    <div className="sub-val">{t('slide14.cards.card5.sub')}</div>
                </div>
            </div>

            <div className="highlight-box">
                <p>{t('slide14.highlight')}</p>
            </div>
        </div>
    );
}

Slide14.title = 'Экономика';

export default Slide14;
