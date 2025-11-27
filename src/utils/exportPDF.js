import html2pdf from 'html2pdf.js';

export async function generatePDF(slideRefs) {
  // Создаем временный контейнер для всех слайдов
  const container = document.createElement('div');
  container.style.position = 'absolute';
  container.style.left = '-9999px';
  container.style.width = '1280px'; // Ширина слайда из CSS
  container.style.backgroundColor = '#000';
  
  // Копируем все слайды в контейнер
  slideRefs.forEach((slideElement, index) => {
    if (!slideElement) return;
    
    const slideClone = slideElement.cloneNode(true);
    const slideContent = slideClone.querySelector('.slide-content');
    
    if (slideContent) {
      // Убираем класс active и другие динамические классы
      slideClone.classList.remove('active');
      slideClone.style.display = 'block';
      slideClone.style.width = '1280px';
      slideClone.style.height = '720px'; // Высота слайда из CSS
      slideClone.style.pageBreakAfter = 'always';
      slideClone.style.marginBottom = '0';
      slideClone.style.position = 'relative';
      
      // Убеждаемся, что контент виден
      slideContent.style.display = 'block';
      slideContent.style.opacity = '1';
      slideContent.style.visibility = 'visible';
      slideContent.style.width = '100%';
      slideContent.style.height = '100%';
      
      container.appendChild(slideClone);
    }
  });
  
  // Добавляем контейнер в DOM временно
  document.body.appendChild(container);
  
  try {
    // Настройки для PDF
    const opt = {
      margin: 0,
      filename: 'ZW_US_Presentation.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        logging: false,
        windowWidth: 1280,
        windowHeight: 720,
        backgroundColor: '#000'
      },
      jsPDF: { 
        unit: 'px', 
        format: [1280, 720], 
        orientation: 'landscape',
        compress: true
      },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };
    
    // Экспортируем в PDF
    await html2pdf().set(opt).from(container).save();
  } catch (error) {
    console.error('Ошибка при экспорте PDF:', error);
    alert('Произошла ошибка при экспорте PDF. Попробуйте еще раз.');
  } finally {
    // Удаляем временный контейнер
    if (document.body.contains(container)) {
      document.body.removeChild(container);
    }
  }
}

