import React from 'react';
import { useTranslation } from 'react-i18next';

function Slide5() {
  const { t } = useTranslation();
  return (
    <div className="slide-content">
      <h2>{t('slide5.h2')}</h2>
      <p className="subtitle">{t('slide5.subtitle')}</p>

      <div className="list-layout">
        <ul className="styled-list">
          <li>{t('slide5.list.li1')}</li>
          <li>{t('slide5.list.li2')}</li>
          <li>{t('slide5.list.li3')}</li>
          <li>{t('slide5.list.li4')}</li>
          <li>{t('slide5.list.li5')}</li>
          <li>{t('slide5.list.li6')}</li>
          <li>{t('slide5.list.li7')}</li>
          <li>{t('slide5.list.li8')}</li>
          <li>{t('slide5.list.li9')}</li>
        </ul>
      </div>

      <div className="highlight-box">
        <p>{t('slide5.highlight')}</p>
      </div>
    </div>
  );
}

Slide5.title = 'Regional Systems';

export default Slide5;
