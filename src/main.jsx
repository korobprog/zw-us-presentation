import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './i18n';
import './style.css';

// Функция для скрытия адресной строки в мобильных браузерах
function hideAddressBar() {
  // Проверяем, что это мобильное устройство
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (!isMobile) return;

  // Функция для принудительного скрытия адресной строки
  const hideBar = () => {
    // Получаем реальную высоту viewport
    const vh = window.innerHeight;
    const vhFull = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    
    // Если есть разница (адресная строка видна), прокручиваем
    if (vh < vhFull) {
      // Увеличиваем высоту body для возможности прокрутки
      const currentHeight = document.body.scrollHeight;
      const neededHeight = vh + 2; // Добавляем немного для прокрутки
      
      if (currentHeight < neededHeight) {
        document.body.style.minHeight = `${neededHeight}px`;
      }
      
      // Прокручиваем на 1px вниз для скрытия адресной строки
      setTimeout(() => {
        window.scrollTo(0, 1);
        // Возвращаемся обратно, но адресная строка остается скрытой
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 50);
      }, 100);
    }
  };

  // Вызываем при загрузке
  const initHide = () => {
    // Ждем полной загрузки контента
    setTimeout(hideBar, 300);
    setTimeout(hideBar, 1000); // Повторная попытка после полной загрузки
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHide);
  } else {
    initHide();
  }

  // Вызываем при изменении ориентации
  window.addEventListener('orientationchange', () => {
    setTimeout(hideBar, 500);
    setTimeout(hideBar, 1000);
  });

  // Вызываем при изменении размера окна
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(hideBar, 200);
  });

  // Предотвращаем появление адресной строки при прокрутке вверх
  let lastScrollTop = 0;
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Если прокрутили вверх до самого верха, скрываем адресную строку
    if (scrollTop < lastScrollTop && scrollTop <= 1) {
      scrollTimeout = setTimeout(() => {
        window.scrollTo(0, 1);
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 50);
      }, 100);
    }
    
    lastScrollTop = scrollTop;
  });
}

// Запускаем функцию скрытия адресной строки
hideAddressBar();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

