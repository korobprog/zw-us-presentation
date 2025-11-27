import { useTranslation } from 'react-i18next';

function LanguageSelector({ onLanguageSelect }) {
  const { i18n } = useTranslation();

  const handleLanguageSelect = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('presentationLang', lang);
    onLanguageSelect();
  };

  return (
    <div className="language-selector">
      <div className="language-selector-content">
        <h1 className="language-selector-title">Выберите язык / Choose Language</h1>
        <div className="language-selector-buttons">
          <button 
            className="language-selector-btn language-selector-btn-ru"
            onClick={() => handleLanguageSelect('ru')}
          >
            <span className="language-flag">🇷🇺</span>
            <span className="language-name">Русский</span>
          </button>
          <button 
            className="language-selector-btn language-selector-btn-en"
            onClick={() => handleLanguageSelect('en')}
          >
            <span className="language-flag">🇬🇧</span>
            <span className="language-name">English</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LanguageSelector;

