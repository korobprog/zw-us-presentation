import { useTranslation, Trans } from 'react-i18next';

function Slide12() {
  const { t } = useTranslation();

  return (
    <div className="slide-content title-slide">
      <div className="overlay"></div>
      <h1>{t('slide12.h1')}</h1>
      <h2>{t('slide12.h2')}</h2>
      <div className="cta-box">
        <p>
          <Trans i18nKey="slide12.proposal" components={{ strong: <strong /> }} />
        </p>
        <p>
          <Trans i18nKey="slide12.contact" components={{ strong: <strong /> }} />
        </p>
        <p>{t('slide12.phone')}</p>
        <p>{t('slide12.web')}</p>
      </div>
    </div>
  );
}

Slide12.title = 'Conclusion';

export default Slide12;

