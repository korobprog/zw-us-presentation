import { useTranslation } from 'react-i18next';

function Slide2() {
  const { t } = useTranslation();

  return (
    <div className="slide-content">
      <h2>{t('slide2.h2')}</h2>
      <h3>{t('slide2.h3')}</h3>
      <div className="grid-2">
        <div className="card">
          <h4>{t('slide2.card1.h4')}</h4>
          <p>{t('slide2.card1.p')}</p>
        </div>
        <div className="card">
          <h4>{t('slide2.card2.h4')}</h4>
          <p>{t('slide2.card2.p')}</p>
        </div>
        <div className="card">
          <h4>{t('slide2.card3.h4')}</h4>
          <p>{t('slide2.card3.p')}</p>
        </div>
        <div className="card">
          <h4>{t('slide2.card4.h4')}</h4>
          <ul>
            <li>{t('slide2.card4.li1')}</li>
            <li>{t('slide2.card4.li2')}</li>
            <li>{t('slide2.card4.li3')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

Slide2.title = 'Project Summary';

export default Slide2;

