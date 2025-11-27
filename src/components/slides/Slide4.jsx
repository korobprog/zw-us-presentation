import { useTranslation, Trans } from 'react-i18next';

function Slide4() {
  const { t } = useTranslation();

  return (
    <div className="slide-content">
      <h2>{t('slide4.h2')}</h2>
      <div className="content-with-image">
        <div className="text-col">
          <ul className="dense-list">
            <li>{t('slide4.li1')}</li>
            <li>{t('slide4.li2')}</li>
            <li>{t('slide4.li3')}</li>
            <li>{t('slide4.li4')}</li>
            <li>{t('slide4.li5')}</li>
            <li>{t('slide4.li6')}</li>
            <li>{t('slide4.li7')}</li>
            <li>{t('slide4.li8')}</li>
          </ul>
        </div>
        <div className="img-col">
          <img src="/images/circular_system_diagram.png" alt="Zero Waste System Cycle" />
        </div>
      </div>
      <div className="bottom-bar">
        <p>
          <Trans i18nKey="slide4.req" components={{ strong: <strong /> }} />
        </p>
        <p>
          <Trans i18nKey="slide4.effects" components={{ strong: <strong /> }} />
        </p>
      </div>
    </div>
  );
}

Slide4.title = 'Our Solution';

export default Slide4;

