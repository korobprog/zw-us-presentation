import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Controls from './components/Controls';
import MobileControls from './components/MobileControls';
import LanguageSelector from './components/LanguageSelector';
import SwipeHint from './components/SwipeHint';
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
import Slide13 from './components/slides/Slide13';
import Slide14 from './components/slides/Slide14';
import Slide15 from './components/slides/Slide15';
import Slide16 from './components/slides/Slide16';
import Slide17 from './components/slides/Slide17';
import Slide18 from './components/slides/Slide18';
import Slide19 from './components/slides/Slide19';
import { generatePPTX } from './utils/exportPPTX';
import { generatePDF } from './utils/exportPDF';

const slides = [
  Slide1, Slide2, Slide3, Slide4, Slide5, Slide6,
  Slide7, Slide8, Slide9, Slide10, Slide11, Slide12,
  Slide13, Slide14, Slide15, Slide16, Slide17, Slide18, Slide19
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
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);
  const touchOnScrollable = useRef(false);
  const ignoreSwipe = useRef(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('presentationLang');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  // Scaling Logic
  const [scale, setScale] = useState(1);
  const [isResponsive, setIsResponsive] = useState(false);
  const [isMobileControls, setIsMobileControls] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const slideWidth = 1280;
      const slideHeight = 720;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      console.log('Resize:', { windowWidth, windowHeight, slideWidth, slideHeight });

      // Threshold for switching to responsive mode
      // User complained about 1024px, so we include it in responsive mode
      if (windowWidth <= 1024) {
        console.log('Switching to Responsive Mode');
        setIsResponsive(true);
        setScale(1); // Reset scale for responsive mode
      } else {
        console.log('Switching to Scaling Mode');
        setIsResponsive(false);
        const scaleX = windowWidth / slideWidth;
        const scaleY = windowHeight / slideHeight;
        const newScale = Math.min(scaleX, scaleY);
        setScale(newScale);
      }

      setIsMobileControls(windowWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial calculation

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [showSwipeHint, setShowSwipeHint] = useState(false);

  const handleLanguageSelected = () => {
    setShowLanguageSelector(false);
    // Показываем подсказку о навигации после выбора языка
    setShowSwipeHint(true);
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

  // Проверка, является ли элемент таблицей или прокручиваемым контейнером
  const isScrollableElement = (element) => {
    if (!element) return false;

    const scrollableAncestor = element.closest('.slide');
    if (scrollableAncestor && scrollableAncestor.scrollHeight > scrollableAncestor.clientHeight) {
      return true;
    }

    if (element.tagName === 'TABLE' ||
      element.closest('table') ||
      element.classList.contains('comparison-table')) {
      return true;
    }

    const style = window.getComputedStyle(element);
    const overflowX = style.overflowX;
    const overflowY = style.overflowY;
    const canScrollX = (overflowX === 'auto' || overflowX === 'scroll') && element.scrollWidth > element.clientWidth;
    const canScrollY = (overflowY === 'auto' || overflowY === 'scroll') && element.scrollHeight > element.clientHeight;

    return canScrollX || canScrollY;
  };

  // Обработчики для свайп-навигации
  const handleTouchStart = (e) => {
    touchOnScrollable.current = isScrollableElement(e.target);
    ignoreSwipe.current = false;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (!touchStartX.current) return;

    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;

    const deltaX = touchStartX.current - touchEndX.current;
    const deltaY = touchStartY.current - touchEndY.current;

    if ((touchOnScrollable.current && Math.abs(deltaY) > Math.abs(deltaX)) ||
      Math.abs(deltaY) > Math.abs(deltaX) + 10) {
      ignoreSwipe.current = true;
      touchStartX.current = 0;
      touchEndX.current = 0;
      touchStartY.current = 0;
      touchEndY.current = 0;
    }
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    if (ignoreSwipe.current) {
      touchOnScrollable.current = false;
      ignoreSwipe.current = false;
      touchStartX.current = 0;
      touchEndX.current = 0;
      touchStartY.current = 0;
      touchEndY.current = 0;
      return;
    }

    const distanceX = touchStartX.current - touchEndX.current;
    const distanceY = touchStartY.current - touchEndY.current;
    const minSwipeDistance = 50;

    // Если вертикальное движение больше горизонтального, это прокрутка, а не свайп
    if (Math.abs(distanceY) > Math.abs(distanceX)) {
      touchStartX.current = 0;
      touchEndX.current = 0;
      touchStartY.current = 0;
      touchEndY.current = 0;
      return;
    }

    if (Math.abs(distanceX) > minSwipeDistance) {
      if (distanceX > 0 && currentSlide < slides.length - 1) {
        // Свайп влево - следующий слайд
        goToSlide(currentSlide + 1);
      } else if (distanceX < 0 && currentSlide > 0) {
        // Свайп вправо - предыдущий слайд
        goToSlide(currentSlide - 1);
      }
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
    touchStartY.current = 0;
    touchEndY.current = 0;
  };

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
      <SwipeHint showAfterLanguageSelect={showSwipeHint} />
      <div className="presentation-wrapper">
        <div
          className={`slides-container ${isResponsive ? 'responsive-mode' : ''}`}
          style={isResponsive ? {} : {
            transform: `scale(${scale})`,
            transformOrigin: 'center center'
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
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
        {isMobileControls ? (
          <MobileControls
            currentSlide={currentSlide}
            totalSlides={slides.length}
            onPrev={() => goToSlide(currentSlide - 1)}
            onNext={() => goToSlide(currentSlide + 1)}
            onExport={handleExport}
            onExportPDF={handleExportPDF}
          />
        ) : (
          <Controls
            currentSlide={currentSlide}
            totalSlides={slides.length}
            onPrev={() => goToSlide(currentSlide - 1)}
            onNext={() => goToSlide(currentSlide + 1)}
            onExport={handleExport}
            onExportPDF={handleExportPDF}
          />
        )}
      </div>
    </div>
  );
}

export default App;

