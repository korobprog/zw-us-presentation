import { useTranslation } from 'react-i18next';

function Slide8() {
  const { t } = useTranslation();

  return (
    <div className="slide-content">
      <h2>{t('slide8.h2')}</h2>
      <p>{t('slide8.p')}</p>
      <div className="grid-2">
        <div>
          <h3>{t('slide8.h3-1')}</h3>
          <ul>
            <li>{t('slide8.scope.li1')}</li>
            <li>{t('slide8.scope.li2')}</li>
            <li>{t('slide8.scope.li3')}</li>
            <li>{t('slide8.scope.li4')}</li>
          </ul>
          <h3>{t('slide8.h3-2')}</h3>
          <ul>
            <li>{t('slide8.kpi.li1')}</li>
            <li>{t('slide8.kpi.li2')}</li>
            <li>{t('slide8.kpi.li3')}</li>
            <li>{t('slide8.kpi.li4')}</li>
          </ul>
        </div>
        <div className="timeline-box">
          <h3>{t('slide8.h3-3')}</h3>
          <ol>
            <li>{t('slide8.timeline.li1')}</li>
            <li>{t('slide8.timeline.li2')}</li>
            <li>{t('slide8.timeline.li3')}</li>
            <li>{t('slide8.timeline.li4')}</li>
            <li>{t('slide8.timeline.li5')}</li>
            <li>{t('slide8.timeline.li6')}</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

Slide8.title = 'Pilot Project';

export default Slide8;

