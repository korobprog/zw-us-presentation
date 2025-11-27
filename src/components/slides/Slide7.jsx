import { useTranslation } from 'react-i18next';

function Slide7() {
  const { t } = useTranslation();

  return (
    <div className="slide-content">
      <h2>{t('slide7.h2')}</h2>
      <p className="subtitle">{t('slide7.subtitle')}</p>
      <div className="grid-2">
        <div>
          <h3>{t('slide7.h3-1')}</h3>
          <ul className="check-list">
            <li>{t('slide7.li1')}</li>
            <li>{t('slide7.li2')}</li>
            <li>{t('slide7.li3')}</li>
            <li>{t('slide7.li4')}</li>
            <li>{t('slide7.li5')}</li>
            <li>{t('slide7.li6')}</li>
            <li>{t('slide7.li7')}</li>
          </ul>
        </div>
        <div className="chart-box">
          <h3>{t('slide7.chart-h3')}</h3>
          <div className="chart-container">
            <div className="y-axis">
              <span>70</span>
              <span>60</span>
              <span>50</span>
              <span>40</span>
              <span>30</span>
              <span>20</span>
              <span>10</span>
              <span>0</span>
            </div>
            <div className="bars-area">
              <div className="bar-group">
                <div className="bar-label">$8 млрд</div>
                <div className="bar bar-zw" style={{ '--height': '12%' }}></div>
                <div className="bar-title">ZW&US</div>
              </div>
              <div className="bar-group">
                <div className="bar-label">$30 млрд</div>
                <div className="bar bar-brics" style={{ '--height': '45%' }}></div>
                <div className="bar-title">BRICS</div>
              </div>
              <div className="bar-group">
                <div className="bar-label">$62 млрд</div>
                <div className="bar bar-global" style={{ '--height': '90%' }}></div>
                <div className="bar-title">Global</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Slide7.title = 'Market & Business Model';

export default Slide7;

