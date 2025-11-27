import { useTranslation, Trans } from 'react-i18next';

function Slide3() {
  const { t } = useTranslation();

  return (
    <div className="slide-content">
      <h2>{t('slide3.h2')}</h2>
      <p className="subtitle">{t('slide3.subtitle')}</p>
      <div>
        <h3>{t('slide3.h3-1')}</h3>
        <p>
          <Trans i18nKey="slide3.p1" components={{ strong: <strong /> }} />
        </p>

        <h3>{t('slide3.h3-2')}</h3>
        <ul className="dense-list">
          <li>{t('slide3.li1')}</li>
          <li>{t('slide3.li2')}</li>
          <li>{t('slide3.li3')}</li>
          <li>{t('slide3.li4')}</li>
        </ul>

        <div className="alert">
          <Trans i18nKey="slide3.alert" components={{ strong: <strong /> }} />
        </div>
      </div>
    </div>
  );
}

Slide3.title = 'The Problem';

export default Slide3;

