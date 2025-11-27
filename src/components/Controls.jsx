import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

function Controls({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onExport,
  onExportPDF,
  variant = 'desktop'
}) {
  const { t, i18n } = useTranslation();
  const [showExportMenu, setShowExportMenu] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const exportMenuRef = useRef(null);
  const langMenuRef = useRef(null);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('presentationLang', lang);
    setShowLangMenu(false);
  };

  const toggleLangMenu = () => {
    setShowLangMenu(!showLangMenu);
  };

  const toggleExportMenu = () => {
    setShowExportMenu(!showExportMenu);
  };

  const handleExportPPTX = () => {
    setShowExportMenu(false);
    onExport();
  };

  const handleExportPDF = () => {
    setShowExportMenu(false);
    onExportPDF();
  };

  // Закрытие меню при клике вне их
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (exportMenuRef.current && !exportMenuRef.current.contains(event.target)) {
        setShowExportMenu(false);
      }
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setShowLangMenu(false);
      }
    };

    if (showExportMenu || showLangMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showExportMenu, showLangMenu]);

  return (
    <div className={`controls controls-${variant}`}>
      <button id="prevBtn" onClick={onPrev} disabled={currentSlide === 0}>
        {t('prevBtn')}
      </button>
      <span id="slideCounter">
        {currentSlide + 1} / {totalSlides}
      </span>
      <button id="nextBtn" onClick={onNext} disabled={currentSlide === totalSlides - 1}>
        {t('nextBtn')}
      </button>
      <div className="lang-menu-container" ref={langMenuRef}>
        <button id="langBtn" className="lang-toggle" onClick={toggleLangMenu}>
          {i18n.language === 'en' ? 'English' : 'Русский'}
        </button>
        {showLangMenu && (
          <div className="lang-menu">
            <button 
              className={`lang-menu-item ${i18n.language === 'en' ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
            >
              English
            </button>
            <button 
              className={`lang-menu-item ${i18n.language === 'ru' ? 'active' : ''}`}
              onClick={() => changeLanguage('ru')}
            >
              Русский
            </button>
          </div>
        )}
      </div>
      <div className="export-menu-container" ref={exportMenuRef}>
        <button id="exportBtn" className="primary" onClick={toggleExportMenu}>
          {t('exportBtn')}
        </button>
        {showExportMenu && (
          <div className="export-menu">
            <button className="export-menu-item" onClick={handleExportPPTX}>
              {t('exportPptxBtn')}
            </button>
            <button className="export-menu-item" onClick={handleExportPDF}>
              {t('exportPdfBtn')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Controls;

