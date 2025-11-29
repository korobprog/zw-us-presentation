import React from 'react';
import { useTranslation } from 'react-i18next';

function Slide18() {
    const { t } = useTranslation();
    return (
        <div className="slide-content">
            <h2>{t('slide18.h2')}</h2>

            <div className="contacts-block">
                <h3>{t('slide18.info.h3')}</h3>

                <div className="contact-item">
                    <span className="label">{t('slide18.info.whatsapp')}</span>
                    <span className="value">+7 900 000-00-00</span>
                </div>

                <div className="contact-item">
                    <span className="label">{t('slide18.info.email')}</span>
                    <span className="value">info@zw-us.com</span>
                </div>
            </div>
        </div>
    );
}

Slide18.title = 'Контакты';

export default Slide18;
