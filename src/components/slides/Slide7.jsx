import React from 'react';
import { useTranslation } from 'react-i18next';
import circularSystemDiagram from '../../../images/circular_system_diagram.png';

function Slide7() {
  const { t } = useTranslation();
  return (
    <div
      className="slide-content slide-7-background"
      style={{
        backgroundImage: `linear-gradient(rgba(13, 27, 42, 0.85), rgba(13, 27, 42, 0.95)), url(${circularSystemDiagram})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <h2>{t('slide7.h2')}</h2>

      <div className="advantages-grid">
        <div className="advantage-card">
          <h3>{t('slide7.cards.card1.h3')}</h3>
          <p>{t('slide7.cards.card1.p')}</p>
          <p className="small-text">{t('slide7.cards.card1.small')}</p>
        </div>

        <div className="advantage-card">
          <h3>{t('slide7.cards.card2.h3')}</h3>
          <ul className="dense-list">
            <li>{t('slide7.cards.card2.list.li1')}</li>
            <li>{t('slide7.cards.card2.list.li2')}</li>
            <li>{t('slide7.cards.card2.list.li3')}</li>
            <li>{t('slide7.cards.card2.list.li4')}</li>
            <li>{t('slide7.cards.card2.list.li5')}</li>
            <li>{t('slide7.cards.card2.list.li6')}</li>
            <li>{t('slide7.cards.card2.list.li7')}</li>
            <li>{t('slide7.cards.card2.list.li8')}</li>
          </ul>
          <p className="highlight-text">{t('slide7.cards.card2.highlight')}</p>
        </div>

        <div className="advantage-card">
          <h3>{t('slide7.cards.card3.h3')}</h3>
          <p>{t('slide7.cards.card3.p')}</p>
          <div className="cycle-steps">
            {t('slide7.cards.card3.steps')}
          </div>
          <p className="highlight-text">{t('slide7.cards.card3.highlight')}</p>
        </div>

        <div className="advantage-card">
          <h3>{t('slide7.cards.card4.h3')}</h3>
          <ul className="check-list">
            <li>{t('slide7.cards.card4.list.li1')}</li>
            <li>{t('slide7.cards.card4.list.li2')}</li>
            <li>{t('slide7.cards.card4.list.li3')}</li>
            <li>{t('slide7.cards.card4.list.li4')}</li>
            <li>{t('slide7.cards.card4.list.li5')}</li>
          </ul>
        </div>

        <div className="advantage-card">
          <h3>{t('slide7.cards.card5.h3')}</h3>
          <p>{t('slide7.cards.card5.p')}</p>
          <p className="highlight-text">{t('slide7.cards.card5.highlight')}</p>
        </div>
      </div>
    </div>
  );
}

Slide7.title = 'Преимущества';

export default Slide7;
