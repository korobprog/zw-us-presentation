import React from 'react';
import { useTranslation } from 'react-i18next';

function Slide12() {
  const { t } = useTranslation();
  return (
    <div className="slide-content">
      <h2>{t('slide12.h2')}</h2>

      <div className="evidence-grid">
        <div className="evidence-col">
          <h3>{t('slide12.cols.tech.h3')}</h3>
          <ul>
            <li>{t('slide12.cols.tech.list.li1')}</li>
            <li>{t('slide12.cols.tech.list.li2')}</li>
            <li>{t('slide12.cols.tech.list.li3')}</li>
            <li>{t('slide12.cols.tech.list.li4')}</li>
          </ul>
        </div>

        <div className="evidence-col">
          <h3>{t('slide12.cols.equip.h3')}</h3>
          <ul>
            <li>{t('slide12.cols.equip.list.li1')}</li>
            <li>{t('slide12.cols.equip.list.li2')}</li>
            <li>{t('slide12.cols.equip.list.li3')}</li>
          </ul>
        </div>

        <div className="evidence-col">
          <h3>{t('slide12.cols.cert.h3')}</h3>
          <ul>
            <li>{t('slide12.cols.cert.list.li1')}</li>
            <li>{t('slide12.cols.cert.list.li2')}</li>
          </ul>
        </div>

        <div className="evidence-col highlight">
          <h3>{t('slide12.cols.res.h3')}</h3>
          <ul>
            <li>{t('slide12.cols.res.list.li1')}</li>
            <li>{t('slide12.cols.res.list.li2')}</li>
            <li>{t('slide12.cols.res.list.li3')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

Slide12.title = 'Технологии';

export default Slide12;
