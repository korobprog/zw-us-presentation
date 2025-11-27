import { useTranslation, Trans } from 'react-i18next';

function Slide1() {
  const { t } = useTranslation();

  return (
    <div className="slide-content title-slide">
      <div className="overlay"></div>
      <h1>{t('slide1.h1')}</h1>
      <h2>{t('slide1.h2')}</h2>
      <p>
        <Trans i18nKey="slide1.direction" components={{ strong: <strong /> }} />
      </p>
      <p>
        <Trans i18nKey="slide1.partners" components={{ strong: <strong /> }} />
      </p>
      <p className="quote">{t('slide1.quote')}</p>
    </div>
  );
}

Slide1.title = 'Title Slide';

export default Slide1;

