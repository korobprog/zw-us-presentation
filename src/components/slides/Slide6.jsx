import { useTranslation } from 'react-i18next';

function Slide6() {
  const { t } = useTranslation();

  return (
    <div className="slide-content">
      <h2>{t('slide6.h2')}</h2>
      <table className="comparison-table">
        <thead>
          <tr>
            <th>{t('slide6.th1')}</th>
            <th className="highlight">{t('slide6.th2')}</th>
            <th>{t('slide6.th3')}</th>
            <th>{t('slide6.th4')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{t('slide6.row1.td1')}</td>
            <td className="highlight">{t('slide6.row1.td2')}</td>
            <td>{t('slide6.row1.td3')}</td>
            <td>{t('slide6.row1.td4')}</td>
          </tr>
          <tr>
            <td>{t('slide6.row2.td1')}</td>
            <td className="highlight">{t('slide6.row2.td2')}</td>
            <td>{t('slide6.row2.td3')}</td>
            <td>{t('slide6.row2.td4')}</td>
          </tr>
          <tr>
            <td>{t('slide6.row3.td1')}</td>
            <td className="highlight">{t('slide6.row3.td2')}</td>
            <td>{t('slide6.row3.td3')}</td>
            <td>{t('slide6.row3.td4')}</td>
          </tr>
          <tr>
            <td>{t('slide6.row4.td1')}</td>
            <td className="highlight">{t('slide6.row4.td2')}</td>
            <td>{t('slide6.row4.td3')}</td>
            <td>{t('slide6.row4.td4')}</td>
          </tr>
          <tr>
            <td>{t('slide6.row5.td1')}</td>
            <td className="highlight">{t('slide6.row5.td2')}</td>
            <td>{t('slide6.row5.td3')}</td>
            <td>{t('slide6.row5.td4')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

Slide6.title = 'Competitive Advantage';

export default Slide6;

