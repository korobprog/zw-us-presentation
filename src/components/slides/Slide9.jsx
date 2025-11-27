import { useTranslation } from 'react-i18next';

function Slide9() {
  const { t } = useTranslation();

  return (
    <div className="slide-content">
      <h2>{t('slide9.h2')}</h2>
      <div className="grid-3">
        <div className="stat-card">
          <h3>{t('slide9.card1.h3')}</h3>
          <p className="big-num">{t('slide9.card1.num1')}</p>
          <p className="label">{t('slide9.card1.label1')}</p>
          <p className="big-num">{t('slide9.card1.num2')}</p>
          <p className="label">{t('slide9.card1.label2')}</p>
        </div>
        <div className="stat-card">
          <h3>{t('slide9.card2.h3')}</h3>
          <p className="big-num">{t('slide9.card2.num1')}</p>
          <p className="label">{t('slide9.card2.label1')}</p>
          <p className="big-num">{t('slide9.card2.num2')}</p>
          <p className="label">{t('slide9.card2.label2')}</p>
        </div>
        <div className="stat-card">
          <h3>{t('slide9.card3.h3')}</h3>
          <p className="big-num">{t('slide9.card3.num1')}</p>
          <p className="label">{t('slide9.card3.label1')}</p>
          <p className="big-num">{t('slide9.card3.num2')}</p>
          <p className="label">{t('slide9.card3.label2')}</p>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <img
          src="/images/graph_economics.png"
          alt="Economics Graph"
          style={{
            maxHeight: '300px',
            borderRadius: '10px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
          }}
        />
      </div>
    </div>
  );
}

Slide9.title = 'Economics';

export default Slide9;

