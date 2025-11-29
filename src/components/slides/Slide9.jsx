import React from 'react';
import { useTranslation } from 'react-i18next';

function Slide9() {
  const { t } = useTranslation();
  return (
    <div className="slide-content">
      <h2>{t('slide9.h2')}</h2>

      <div className="solution-grid">
        <div className="solution-col">
          <h3>{t('slide9.col1.h3')}</h3>
          <ul>
            <li>{t('slide9.col1.list.li1')}</li>
            <li>{t('slide9.col1.list.li2')}</li>
            <li>{t('slide9.col1.list.li3')}</li>
            <li>{t('slide9.col1.list.li4')}</li>
            <li>{t('slide9.col1.list.li5')}</li>
            <li>{t('slide9.col1.list.li6')}</li>
          </ul>
        </div>

        <div className="solution-col">
          <h3>{t('slide9.col2.h3')}</h3>
          <ul>
            <li>{t('slide9.col2.list.li1')}</li>
            <li>{t('slide9.col2.list.li2')}</li>
            <li>{t('slide9.col2.list.li3')}</li>
            <li>{t('slide9.col2.list.li4')}</li>
            <li>{t('slide9.col2.list.li5')}</li>
            <li>{t('slide9.col2.list.li6')}</li>
            <li>{t('slide9.col2.list.li7')}</li>
          </ul>
        </div>
      </div>

      <div className="highlight-box">
        <p>{t('slide9.highlight')}</p>
      </div>
    </div>
  );
}

Slide9.title = 'Описание решения';

export default Slide9;
