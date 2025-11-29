import React from 'react';
import { useTranslation } from 'react-i18next';

function Slide15() {
    const { t } = useTranslation();
    return (
        <div className="slide-content">
            <h2>{t('slide15.h2')}</h2>

            <div className="team-list-block">
                <h3>{t('slide15.list.h3')}</h3>
                <ul>
                    <li>{t('slide15.list.items.li1')}</li>
                    <li>{t('slide15.list.items.li2')}</li>
                    <li>{t('slide15.list.items.li3')}</li>
                    <li>{t('slide15.list.items.li4')}</li>
                    <li>{t('slide15.list.items.li5')}</li>
                    <li>{t('slide15.list.items.li6')}</li>
                    <li>{t('slide15.list.items.li7')}</li>
                </ul>
            </div>

            <div className="highlight-box">
                <p>{t('slide15.highlight')}</p>
            </div>
        </div>
    );
}

Slide15.title = 'Команда проекта';

export default Slide15;
