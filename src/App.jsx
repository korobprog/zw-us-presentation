import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Controls from './components/Controls';
import LanguageSelector from './components/LanguageSelector';
import Slide1 from './components/slides/Slide1';
import Slide2 from './components/slides/Slide2';
import Slide3 from './components/slides/Slide3';
import Slide4 from './components/slides/Slide4';
import Slide5 from './components/slides/Slide5';
import Slide6 from './components/slides/Slide6';
import Slide7 from './components/slides/Slide7';
import Slide8 from './components/slides/Slide8';
import Slide9 from './components/slides/Slide9';
import Slide10 from './components/slides/Slide10';
import Slide11 from './components/slides/Slide11';
import Slide12 from './components/slides/Slide12';
import { generatePPTX } from './utils/exportPPTX';
import { generatePDF } from './utils/exportPDF';

const slides = [
  Slide1, Slide2, Slide3, Slide4, Slide5, Slide6,
  Slide7, Slide8, Slide9, Slide10, Slide11, Slide12
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Инициализируем состояние синхронно, проверяя localStorage до первого рендера
  const [showLanguageSelector, setShowLanguageSelector] = useState(() => {
    const savedLang = localStorage.getItem('presentationLang');
    return !savedLang; // Показываем селектор, если языка нет
  });
  const { i18n } = useTranslation();
  const slideRefs = useRef([]);

  useEffect(() => {
    const savedLang = localStorage.getItem('presentationLang');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  const handleLanguageSelected = () => {
    setShowLanguageSelector(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      } else if (e.key === 'ArrowRight' && currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const goToSlide = (index) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  };

  const handleExport = () => {
    const slidesData = slideRefs.current.map((slideElement, index) => {
      if (!slideElement) return null;

      const slideContent = slideElement.querySelector('.slide-content');
      if (!slideContent) return null;

      const SlideComponent = slides[index];
      const isTitleSlide = slideContent.classList.contains('title-slide');

      if (isTitleSlide) {
        const h1 = slideContent.querySelector('h1')?.textContent;
        const h2 = slideContent.querySelector('h2')?.textContent;
        const quote = slideContent.querySelector('.quote')?.textContent;
        return {
          title: SlideComponent.title || `Slide ${index + 1}`,
          isTitleSlide: true,
          h1,
          h2,
          quote
        };
      }

      const h2 = slideContent.querySelector('h2')?.textContent;
      const grid2 = slideContent.querySelector('.grid-2');
      const contentWithImage = slideContent.querySelector('.content-with-image');

      if (grid2) {
        const cols = Array.from(grid2.children);
        return {
          title: SlideComponent.title || `Slide ${index + 1}`,
          layout: 'grid-2',
          h2,
          leftContent: extractContent(cols[0]),
          rightContent: extractContent(cols[1])
        };
      } else if (contentWithImage) {
        const textCol = slideContent.querySelector('.text-col');
        const imgCol = slideContent.querySelector('.img-col img');
        const isReverse = contentWithImage.classList.contains('reverse');
        return {
          title: SlideComponent.title || `Slide ${index + 1}`,
          layout: 'content-with-image',
          h2,
          isReverse,
          textContent: textCol ? extractContent(textCol) : null,
          image: imgCol ? imgCol.src : null
        };
      } else {
        return {
          title: SlideComponent.title || `Slide ${index + 1}`,
          h2,
          content: extractContent(slideContent)
        };
      }
    }).filter(Boolean);

    generatePPTX(slidesData);
  };

  const handleExportPDF = async () => {
    await generatePDF(slideRefs.current);
  };

  const extractContent = (element) => {
    if (!element) return [];
    const content = [];
    Array.from(element.children).forEach(child => {
      if (child.tagName === 'H3') {
        content.push({ type: 'h3', text: child.textContent });
      } else if (child.tagName === 'H4') {
        content.push({ type: 'h4', text: child.textContent });
      } else if (child.tagName === 'P') {
        content.push({ type: 'p', text: child.textContent });
      } else if (child.tagName === 'UL' || child.tagName === 'OL') {
        const items = Array.from(child.children).map(li => li.textContent);
        content.push({ type: child.tagName.toLowerCase(), items });
      } else if (child.classList.contains('card') || child.classList.contains('stat-card')) {
        content.push(...extractContent(child));
      }
    });
    return content;
  };

  if (showLanguageSelector) {
    return (
      <div className="app">
        <LanguageSelector onLanguageSelect={handleLanguageSelected} />
      </div>
    );
  }

  return (
    <div className="app">
      <Controls
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrev={() => goToSlide(currentSlide - 1)}
        onNext={() => goToSlide(currentSlide + 1)}
        onExport={handleExport}
        onExportPDF={handleExportPDF}
      />
      <div className="slides-container">
        {slides.map((SlideComponent, index) => (
          <div
            key={index}
            ref={el => slideRefs.current[index] = el}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            data-title={SlideComponent.title || `Slide ${index + 1}`}
          >
            <SlideComponent />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

