import React from 'react';
import { useTranslation } from 'react-i18next';

function Slide3() {
  const { t } = useTranslation();
  return (
    <div className="slide-content">
      <h2>{t('slide3.h2')}</h2>
      <p className="subtitle">{t('slide3.subtitle')}</p>

      <div className="roles-grid">
        <div className="role-card">
          <h3>{t('slide3.roles.ceo.title')}</h3>
          <p>{t('slide3.roles.ceo.desc')}</p>
        </div>
        <div className="role-card">
          <h3>{t('slide3.roles.coo.title')}</h3>
          <p>{t('slide3.roles.coo.desc')}</p>
        </div>
        <div className="role-card">
          <h3>{t('slide3.roles.cfo.title')}</h3>
          <p>{t('slide3.roles.cfo.desc')}</p>
        </div>
        <div className="role-card">
          <h3>{t('slide3.roles.cto.title')}</h3>
          <p>{t('slide3.roles.cto.desc')}</p>
        </div>
        <div className="role-card">
          <h3>{t('slide3.roles.clo.title')}</h3>
          <p>{t('slide3.roles.clo.desc')}</p>
        </div>
        <div className="role-card">
          <h3>{t('slide3.roles.cso.title')}</h3>
          <p>{t('slide3.roles.cso.desc')}</p>
        </div>
        <div className="role-card">
          <h3>{t('slide3.roles.architect.title')}</h3>
          <p>{t('slide3.roles.architect.desc')}</p>
        </div>
        <div className="role-card">
          <h3>{t('slide3.roles.ai.title')}</h3>
          <p>{t('slide3.roles.ai.desc')}</p>
        </div>
      </div>

      <p className="footer-note">{t('slide3.footer')}</p>
    </div>
  );
}

Slide3.title = 'Наша команда';

export default Slide3;
