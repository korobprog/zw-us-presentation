import { useTranslation, Trans } from 'react-i18next';

function Slide10() {
  const { t } = useTranslation();

  return (
    <div className="slide-content">
      <h2>{t('slide10.h2')}</h2>
      <div className="content-with-image">
        <div className="text-col">
          <p>{t('slide10.p')}</p>
          <ul className="role-list">
            <li>
              <Trans i18nKey="slide10.li1" components={{ strong: <strong /> }} />
            </li>
            <li>
              <Trans i18nKey="slide10.li2" components={{ strong: <strong /> }} />
            </li>
            <li>
              <Trans i18nKey="slide10.li3" components={{ strong: <strong /> }} />
            </li>
            <li>
              <Trans i18nKey="slide10.li4" components={{ strong: <strong /> }} />
            </li>
          </ul>
          <div className="experience-box">
            <Trans i18nKey="slide10.exp" components={{ strong: <strong /> }} />
          </div>
        </div>
        <div className="img-col">
          <img src="/images/team_1764206984411.png" alt="Team" />
        </div>
      </div>
    </div>
  );
}

Slide10.title = 'Team';

export default Slide10;

