import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

function Controls({ currentSlide, totalSlides, onPrev, onNext, onExport, onExportPDF }) {
  const { t, i18n } = useTranslation();
  const [showExportMenu, setShowExportMenu] = useState(false);
  const exportMenuRef = useRef(null);

  const switchLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('presentationLang', newLang);
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

  // Закрытие меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (exportMenuRef.current && !exportMenuRef.current.contains(event.target)) {
        setShowExportMenu(false);
      }
    };

    if (showExportMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showExportMenu]);

  return (
    <div className="controls">
      <button id="prevBtn" onClick={onPrev} disabled={currentSlide === 0}>
        {t('prevBtn')}
      </button>
      <span id="slideCounter">
        {currentSlide + 1} / {totalSlides}
      </span>
      <button id="nextBtn" onClick={onNext} disabled={currentSlide === totalSlides - 1}>
        {t('nextBtn')}
      </button>
      <button id="langBtn" className="lang-toggle" onClick={switchLanguage}>
        {i18n.language === 'en' ? 'EN / РУ' : 'EN / РУ'}
      </button>
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

