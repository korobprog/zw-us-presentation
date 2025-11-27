import PptxGenJS from 'pptxgenjs';

export function generatePPTX(slidesData) {
  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_16x9';

  slidesData.forEach((slideData, index) => {
    const pptSlide = pptx.addSlide();
    const slideTitle = slideData.title || `Slide ${index + 1}`;

    // Global Background
    try {
      pptSlide.background = { path: '/images/real_bg.png' };
    } catch (e) {
      console.warn('Could not set background:', e);
    }

    // Handle Title Slide specifically
    if (slideData.isTitleSlide) {
      pptSlide.addShape(pptx.shapes.RECTANGLE, {
        x: 0,
        y: 0,
        w: '100%',
        h: '100%',
        fill: { color: '000000', transparency: 50 }
      });

      if (slideData.h1) {
        pptSlide.addText(slideData.h1, {
          x: 0.5,
          y: 1.5,
          w: '90%',
          fontSize: 44,
          color: 'FFFFFF',
          bold: true,
          align: 'center'
        });
      }
      if (slideData.h2) {
        pptSlide.addText(slideData.h2, {
          x: 0.5,
          y: 3,
          w: '90%',
          fontSize: 32,
          color: 'EEEEEE',
          align: 'center'
        });
      }
      if (slideData.quote) {
        pptSlide.addText(slideData.quote, {
          x: 1,
          y: 5,
          w: '80%',
          fontSize: 24,
          color: 'F9A825',
          italic: true,
          align: 'center'
        });
      }
      return;
    }

    // Standard Slide Header
    if (slideData.h2) {
      pptSlide.addText(slideData.h2, {
        x: 0.5,
        y: 0.3,
        w: '90%',
        fontSize: 32,
        color: '2E7D32',
        bold: true
      });
      pptSlide.addShape(pptx.shapes.LINE, {
        x: 0.5,
        y: 0.9,
        w: '90%',
        h: 0,
        line: '2E7D32',
        lineSize: 2
      });
    }

    // Process content based on layout
    if (slideData.layout === 'grid-2') {
      if (slideData.leftContent) {
        addContentToSlide(pptSlide, slideData.leftContent, { x: 0.5, y: 1.2, w: 4.5 });
      }
      if (slideData.rightContent) {
        addContentToSlide(pptSlide, slideData.rightContent, { x: 5.2, y: 1.2, w: 4.5 });
      }
    } else if (slideData.layout === 'content-with-image') {
      if (slideData.isReverse) {
        if (slideData.image) {
          const imagePath = slideData.image.replace(window.location.origin, '').replace(/^\/images\//, '/images/');
          try {
            pptSlide.addImage({
              path: imagePath.startsWith('/') ? imagePath : `/images/${imagePath}`,
              x: 0.5,
              y: 1.5,
              w: 4.5,
              h: 3.5
            });
          } catch (e) {
            console.warn('Could not add image:', imagePath, e);
          }
        }
        if (slideData.textContent) {
          addContentToSlide(pptSlide, slideData.textContent, { x: 5.2, y: 1.5, w: 4.5 });
        }
      } else {
        if (slideData.textContent) {
          addContentToSlide(pptSlide, slideData.textContent, { x: 0.5, y: 1.5, w: 4.5 });
        }
        if (slideData.image) {
          const imagePath = slideData.image.replace(window.location.origin, '').replace(/^\/images\//, '/images/');
          try {
            pptSlide.addImage({
              path: imagePath.startsWith('/') ? imagePath : `/images/${imagePath}`,
              x: 5.2,
              y: 1.5,
              w: 4.5,
              h: 3.5
            });
          } catch (e) {
            console.warn('Could not add image:', imagePath, e);
          }
        }
      }
    } else {
      // Default full width content
      if (slideData.content) {
        addContentToSlide(pptSlide, slideData.content, { x: 0.5, y: 1.2, w: 9 });
      }
    }
  });

  pptx.writeFile({ fileName: 'ZW_US_Presentation.pptx' });
}

function addContentToSlide(pptSlide, content, region) {
  let currentY = region.y;

  content.forEach(item => {
    if (item.type === 'h3' || item.type === 'h4') {
      pptSlide.addText(item.text, {
        x: region.x,
        y: currentY,
        w: region.w,
        fontSize: 18,
        color: '1565C0',
        bold: true
      });
      currentY += 0.4;
    } else if (item.type === 'p') {
      pptSlide.addText(item.text, {
        x: region.x,
        y: currentY,
        w: region.w,
        fontSize: 14,
        color: '333333'
      });
      currentY += 0.4;
    } else if (item.type === 'ul' || item.type === 'ol') {
      item.items.forEach(itemText => {
        pptSlide.addText(itemText, {
          x: region.x,
          y: currentY,
          w: region.w,
          fontSize: 14,
          color: '333333',
          bullet: true
        });
        currentY += 0.35;
      });
      currentY += 0.2;
    }
  });
}

