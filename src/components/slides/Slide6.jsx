import { useTranslation } from 'react-i18next';

function Slide6() {
  const { t } = useTranslation();

  const headers = [
    { key: 'th1' },
    { key: 'th2', highlight: true },
    { key: 'th3' },
    { key: 'th4' }
  ];

  const rows = ['row1', 'row2', 'row3', 'row4', 'row5'];

  return (
    <div className="slide-content">
      <h2>{t('slide6.h2')}</h2>
      <table className="comparison-table">
        <thead>
          <tr>
            {headers.map(({ key, highlight }) => (
              <th key={key} className={highlight ? 'highlight' : ''}>
                {t(`slide6.${key}`)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((rowKey) => (
            <tr key={rowKey}>
              {headers.map(({ key, highlight }, index) => (
                <td
                  key={`${rowKey}-${key}`}
                  className={highlight ? 'highlight' : ''}
                  data-label={t(`slide6.${key}`)}
                >
                  {t(`slide6.${rowKey}.td${index + 1}`)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Slide6.title = 'Competitive Advantage';

export default Slide6;

