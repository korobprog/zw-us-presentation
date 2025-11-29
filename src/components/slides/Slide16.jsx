import React from 'react';
import { useTranslation } from 'react-i18next';
import mapImage from '../../../images/india_network_map.png';

function Slide16() {
    const { t } = useTranslation();
    return (
        <div
            className="slide-content slide-16-background"
            style={{
                backgroundImage: `linear-gradient(rgba(13, 27, 42, 0.85), rgba(13, 27, 42, 0.95)), url(${mapImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <h2>{t('slide16.h2')}</h2>
            <p className="subtitle">{t('slide16.subtitle')}</p>

            <div className="development-list">
                <div className="dev-item">
                    <div className="marker">1</div>
                    <p>{t('slide16.items.li1')}</p>
                </div>
                <div className="dev-item">
                    <div className="marker">2</div>
                    <p>{t('slide16.items.li2')}</p>
                </div>
                <div className="dev-item">
                    <div className="marker">3</div>
                    <p>{t('slide16.items.li3')}</p>
                </div>
                <div className="dev-item">
                    <div className="marker">4</div>
                    <p>{t('slide16.items.li4')}</p>
                </div>
                <div className="dev-item">
                    <div className="marker">5</div>
                    <p>{t('slide16.items.li5')}</p>
                </div>
                <div className="dev-item">
                    <div className="marker">6</div>
                    <p>{t('slide16.items.li6')}</p>
                </div>
            </div>
        </div>
    );
}

Slide16.title = 'План развития';

export default Slide16;
