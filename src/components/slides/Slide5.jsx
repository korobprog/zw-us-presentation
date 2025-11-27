import { useTranslation } from 'react-i18next';

function Slide5() {
  const { t } = useTranslation();

  return (
    <div className="slide-content">
      <h2>{t('slide5.h2')}</h2>
      <div className="content-with-image reverse">
        <div className="text-col">
          <h3>{t('slide5.h3-1')}</h3>
          <p>{t('slide5.p1')}</p>
          <h3>{t('slide5.h3-2')}</h3>
          <ul>
            <li>{t('slide5.li1')}</li>
            <li>{t('slide5.li2')}</li>
            <li>{t('slide5.li3')}</li>
            <li>{t('slide5.li4')}</li>
            <li>{t('slide5.li5')}</li>
          </ul>
          <div className="highlight-box">
            {t('slide5.highlight')}
          </div>
        </div>
        <div className="img-col">
          <img src="/images/construction_materials_1764206946189.png" alt="RPC Materials" />
        </div>
      </div>
    </div>
  );
}

Slide5.title = 'Technology';

export default Slide5;

