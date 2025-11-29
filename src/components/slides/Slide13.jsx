import React from 'react';
import { useTranslation } from 'react-i18next';

function Slide13() {
    const { t } = useTranslation();
    return (
        <div className="slide-content">
            <h2>{t('slide13.h2')}</h2>
            <p className="subtitle">{t('slide13.subtitle')}</p>

            <div className="pilot-details">
                <div className="includes-block">
                    <h3>{t('slide13.includes.h3')}</h3>
                    <ul>
                        <li>{t('slide13.includes.list.li1')}</li>
                        <li>{t('slide13.includes.list.li2')}</li>
                        <li>{t('slide13.includes.list.li3')}</li>
                        <li>{t('slide13.includes.list.li4')}</li>
                        <li>{t('slide13.includes.list.li5')}</li>
                        <li>{t('slide13.includes.list.li6')}</li>
                        <li>{t('slide13.includes.list.li7')}</li>
                    </ul>
                </div>

                <div className="kpi-block">
                    <h3>{t('slide13.kpi.h3')}</h3>
                    <div className="kpi-grid">
                        <div className="kpi-item">
                            <div className="val">{t('slide13.kpi.items.item1.val')}</div>
                            <div className="lbl">{t('slide13.kpi.items.item1.lbl')}</div>
                        </div>
                        <div className="kpi-item">
                            <div className="val">{t('slide13.kpi.items.item2.val')}</div>
                            <div className="lbl">{t('slide13.kpi.items.item2.lbl')}</div>
                        </div>
                        <div className="kpi-item">
                            <div className="val">{t('slide13.kpi.items.item3.val')}</div>
                            <div className="lbl">{t('slide13.kpi.items.item3.lbl')}</div>
                        </div>
                        <div className="kpi-item">
                            <div className="val">{t('slide13.kpi.items.item4.val')}</div>
                            <div className="lbl">{t('slide13.kpi.items.item4.lbl')}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Slide13.title = 'Пилот Naggar';

export default Slide13;
