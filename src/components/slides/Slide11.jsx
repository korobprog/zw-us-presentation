import { useTranslation, Trans } from 'react-i18next';

function Slide11() {
  const { t } = useTranslation();

  return (
    <div className="slide-content">
      <h2>{t('slide11.h2')}</h2>
      <div className="content-with-image">
        <div className="text-col">
          <h3>{t('slide11.h3-1')}</h3>
          <ul className="steps-list">
            <li>
              <Trans i18nKey="slide11.li1" components={{ strong: <strong /> }} />
            </li>
            <li>
              <Trans i18nKey="slide11.li2" components={{ strong: <strong /> }} />
            </li>
            <li>
              <Trans i18nKey="slide11.li3" components={{ strong: <strong /> }} />
            </li>
          </ul>
          <h3>{t('slide11.h3-2')}</h3>
          <ul>
            <li>{t('slide11.steps.li1')}</li>
            <li>{t('slide11.steps.li2')}</li>
            <li>{t('slide11.steps.li3')}</li>
          </ul>
        </div>
        <div className="img-col">
          <img src="/images/india_network_map.png" alt="India Network Expansion" />
        </div>
      </div>
    </div>
  );
}

Slide11.title = 'Scaling Plan';

export default Slide11;

