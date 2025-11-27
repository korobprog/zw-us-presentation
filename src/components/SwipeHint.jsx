import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function SwipeHint() {
  const [showHint, setShowHint] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    // Проверка на мобильное устройство
    const isMobile = () => {
      return window.innerWidth <= 768 || 
             /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };

    // Проверяем, показывали ли уже подсказку
    const hasSeenHint = localStorage.getItem('swipeHintSeen');
    
    if (isMobile() && !hasSeenHint) {
      setShowHint(true);
    }
  }, []);

  const handleClose = () => {
    setShowHint(false);
    localStorage.setItem('swipeHintSeen', 'true');
  };

  if (!showHint) {
    return null;
  }

  return (
    <div className="swipe-hint" onClick={handleClose}>
      <div className="swipe-hint-content" onClick={(e) => e.stopPropagation()}>
        <div className="swipe-hint-icon">
          <svg 
            width="60" 
            height="60" 
            viewBox="0 0 60 60" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M20 30 L35 20 L35 25 L45 25 L45 35 L35 35 L35 40 Z" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path 
              d="M40 30 L25 20 L25 25 L15 25 L15 35 L25 35 L25 40 Z" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
        <h2 className="swipe-hint-title">{t('swipeHint.title')}</h2>
        <p className="swipe-hint-message">{t('swipeHint.message')}</p>
        <button className="swipe-hint-button" onClick={handleClose}>
          {t('swipeHint.button')}
        </button>
      </div>
    </div>
  );
}

export default SwipeHint;

