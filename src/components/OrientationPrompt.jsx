import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function OrientationPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    // Проверка на мобильное устройство
    const isMobile = () => {
      return window.innerWidth <= 768 || 
             /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };

    // Проверка ориентации
    const checkOrientation = () => {
      const isPortrait = window.matchMedia('(orientation: portrait)').matches;
      const mobile = isMobile();
      
      // Показываем подсказку только на мобильных устройствах в портретной ориентации
      setShowPrompt(mobile && isPortrait);
    };

    // Проверяем при загрузке
    checkOrientation();

    // Слушаем изменения ориентации
    const mediaQuery = window.matchMedia('(orientation: portrait)');
    const handleOrientationChange = () => {
      checkOrientation();
    };

    // Слушаем изменения размера окна (на случай изменения размера браузера)
    const handleResize = () => {
      checkOrientation();
    };

    // Используем addListener для совместимости со старыми браузерами
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleOrientationChange);
    } else {
      mediaQuery.addListener(handleOrientationChange);
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleOrientationChange);
      } else {
        mediaQuery.removeListener(handleOrientationChange);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  if (!showPrompt) {
    return null;
  }

  return (
    <div className="orientation-prompt">
      <div className="orientation-prompt-content">
        <div className="orientation-icon">
          <svg 
            width="80" 
            height="80" 
            viewBox="0 0 80 80" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect 
              x="15" 
              y="20" 
              width="50" 
              height="40" 
              rx="5" 
              stroke="currentColor" 
              strokeWidth="3"
            />
            <path 
              d="M25 20 L25 15 L35 15 L35 20" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
            <path 
              d="M45 20 L45 15 L55 15 L55 20" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
            <circle 
              cx="40" 
              cy="40" 
              r="8" 
              stroke="currentColor" 
              strokeWidth="2"
            />
            <path 
              d="M40 32 L40 28 M40 52 L40 48 M32 40 L28 40 M52 40 L48 40" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
          </svg>
        </div>
        <h2 className="orientation-title">{t('orientationPrompt.title')}</h2>
        <p className="orientation-message">{t('orientationPrompt.message')}</p>
      </div>
    </div>
  );
}

export default OrientationPrompt;

