// Translation System
const translations = {
    ru: {
        // Controls
        'prevBtn': 'Назад',
        'nextBtn': 'Вперёд',
        'exportBtn': 'Экспорт в PPTX',

        // Slide 1
        'slide1-h1': 'ZW&US — Zero Waste & Full Employment System',
        'slide1-h2': 'Пилот и масштабирование глобальной экономики замкнутого цикла',
        'slide1-direction': 'Направление: Экология, переработка, социальная экономика, зелёная индустрия',
        'slide1-partners': 'Партнёры: Zero Waste Earth Alliance Foundation, Bionomix Solutions, Ecopoly Composite, ZWI Recycling',
        'slide1-quote': '"Мы очищаем Землю — создавая рабочие места, материю и изобилие"',

        // Slide 2
        'slide2-h2': 'Резюме проекта',
        'slide2-h3': 'Интегрированная глобальная система циклической экономики',
        'slide2-card1-h4': 'Кто мы',
        'slide2-card1-p': 'Интегрированная система, объединяющая экологические, социальные и технологические решения на основе циклической экономики.',
        'slide2-card2-h4': 'Что за решение',
        'slide2-card2-p': 'Zero Waste система, включающая сбор отходов, сортировку, переработку и производство материалов, энергетики и агросистем.',
        'slide2-card3-h4': 'В какой проблеме помогаем',
        'slide2-card3-p': 'Ликвидация свалок, загрязнения, дефицита ресурсов и разрушения экосистем.',
        'slide2-card4-h4': 'Ключевой эффект',
        'slide2-card4-li1': 'До 100% переработки сухих отходов',
        'slide2-card4-li2': 'Создание 8–12 направлений прибыли',
        'slide2-card4-li3': 'Полная занятость территории',

        // Slide 3
        'slide3-h2': 'Решаемая проблема',
        'slide3-subtitle': 'Глобальная проблема отходов, неэффективность существующих решений и отсутствие комплексного подхода к переработке',
        'slide3-h3-1': 'Глобальная проблема отходов',
        'slide3-p1': 'Индия производит <strong>5,6 млн тонн</strong> пластиковых отходов ежегодно, из которых 40% не перерабатывается.',
        'slide3-h3-2': 'Почему существующие решения не работают',
        'slide3-li1': 'Линейная экономика основана на "взял → использовал → выбросил"',
        'slide3-li2': 'Свалки растут, земля и вода отравляются',
        'slide3-li3': 'Высокая безработица и миграция населения',
        'slide3-li4': 'Большинство переработчиков не способны работать с смешанными RDF остатками',
        'slide3-alert': '<strong>Масштаб потерь:</strong> До 70% сухих отходов сегодня сжигается или выбрасывается на землю.',

        // Slide 4
        'slide4-h2': 'Описание решения',
        'slide4-li1': 'Сбор сухих отходов от дома к дому',
        'slide4-li2': 'Сеть MRF-центров для сортировки',
        'slide4-li3': 'Мобильное измельчение RDF',
        'slide4-li4': 'RPC-заводы — производство фанеры, досок, балок',
        'slide4-li5': 'Строительство зданий, мебели и ангаров',
        'slide4-li6': 'Zero Waste агросистема (почва, биомасса, биогаз)',
        'slide4-li7': 'Энергетическая инфраструктура',
        'slide4-li8': 'Образование и социальные программы',
        'slide4-req': '<strong>Что требуется:</strong> Земля (1400-4200 м²), доступ к RDF, электроснабжение, разрешения',
        'slide4-effects': '<strong>Эффекты:</strong> ₹2,7 CR/мес доход, 100% переработка RDF, 200+ рабочих мест',

        // Slide 5
        'slide5-h2': 'Технология и инновации',
        'slide5-h3-1': 'RPC технология',
        'slide5-p1': 'Recycled Polymer Composite: Преобразование RDF (мягкие/твёрдые полимеры + волокно) в строительный материал классом выше древесины.',
        'slide5-h3-2': 'Ключевые инновации',
        'slide5-li1': 'Пресс-экструзия под 200 тонн давления',
        'slide5-li2': 'Мобильные агломераторы на прицепах',
        'slide5-li3': 'Смешанная композитная масса HSSPC',
        'slide5-li4': 'Полный отказ от захоронения RDF',
        'slide5-li5': 'Промышленная палаточная сборка (быстрый запуск)',
        'slide5-highlight': 'Технологический прорыв: Технология перерабатывает то, что ранее считалось неперерабатываемым.',

        // Slide 6
        'slide6-h2': 'Конкурентные преимущества',
        'slide6-th1': 'Параметр',
        'slide6-th2': 'ZW&US',
        'slide6-th3': 'Типичный переработчик',
        'slide6-th4': 'Муниципальный полигон',
        'slide6-row1-td1': 'Работа с RDF',
        'slide6-row1-td2': '100%',
        'slide6-row1-td3': 'Нет',
        'slide6-row1-td4': 'Нет',
        'slide6-row2-td1': 'Продукция',
        'slide6-row2-td2': 'Строительные материалы',
        'slide6-row2-td3': 'Вторсырьё',
        'slide6-row2-td4': 'Отходы',
        'slide6-row3-td1': 'Экология',
        'slide6-row3-td2': 'Zero Waste',
        'slide6-row3-td3': 'Низкая',
        'slide6-row3-td4': 'Крайне низкая',
        'slide6-row4-td1': 'Социальный эффект',
        'slide6-row4-td2': 'Высокая занятость',
        'slide6-row4-td3': 'Низкий',
        'slide6-row4-td4': 'Отсутствует',
        'slide6-row5-td1': 'Бизнес-модель',
        'slide6-row5-td2': 'Полная экосистема (11 потоков)',
        'slide6-row5-td3': 'Один завод',
        'slide6-row5-td4': 'Плата за захоронение',

        // Slide 7
        'slide7-h2': 'Рынок и бизнес-модель',
        'slide7-subtitle': 'Глобальный рынок $2,6 трлн',
        'slide7-h3-1': 'Источники дохода',
        'slide7-li1': 'Производство RPC материалов',
        'slide7-li2': 'Строительство и модульные здания',
        'slide7-li3': 'Сортировка и продажа вторсырья',
        'slide7-li4': 'Аренда помещений',
        'slide7-li5': 'Лицензирование систем',
        'slide7-li6': 'Образовательные программы',
        'slide7-li7': 'Carbon credits',
        'slide7-chart-h3': 'Распределение рынка ($ млрд)',

        // Slide 8
        'slide8-h2': 'Пилотный проект Naggar',
        'slide8-p': 'Запуск эталонной территории на 200 000 жителей',
        'slide8-h3-1': 'Границы пилота',
        'slide8-scope-li1': 'RPC завод',
        'slide8-scope-li2': '8 MRF-центров',
        'slide8-scope-li3': 'Мобильное измельчение',
        'slide8-scope-li4': 'Ферма и образовательный центр',
        'slide8-h3-2': 'KPI',
        'slide8-kpi-li1': '120 тонн отходов/мес',
        'slide8-kpi-li2': '₹2,7 CR доход/мес',
        'slide8-kpi-li3': '206 рабочих мест',
        'slide8-kpi-li4': '1000+ тонн CO₂/год',
        'slide8-h3-3': 'Срок: 5-7 месяцев',
        'slide8-timeline-li1': 'Земля и разрешения',
        'slide8-timeline-li2': 'Палаточный завод и MRF-1',
        'slide8-timeline-li3': 'Монтаж оборудования',
        'slide8-timeline-li4': 'Обучение персонала',
        'slide8-timeline-li5': 'Запуск производства',
        'slide8-timeline-li6': 'Масштабирование',

        // Slide 9
        'slide9-h2': 'Затраты и экономический эффект',
        'slide9-card1-h3': 'Инвестиции',
        'slide9-card1-num1': '₹5,35 Cr',
        'slide9-card1-label1': 'RPC завод',
        'slide9-card1-num2': '₹13 Cr',
        'slide9-card1-label2': 'Полная система',
        'slide9-card2-h3': 'Месячная экономика',
        'slide9-card2-num1': '₹2,7 Cr',
        'slide9-card2-label1': 'Валовый доход',
        'slide9-card2-num2': '~₹1,2 Cr',
        'slide9-card2-label2': 'Чистая прибыль',
        'slide9-card3-h3': 'ROI',
        'slide9-card3-num1': '4,76 мес',
        'slide9-card3-label1': 'Операционная',
        'slide9-card3-num2': '24 мес',
        'slide9-card3-label2': 'Полная инфраструктура',

        // Slide 10
        'slide10-h2': 'Команда проекта',
        'slide10-p': 'Опытная команда с 20-летним опытом разработки Zero Waste систем в России, Индии и БРИКС.',
        'slide10-li1': '<strong>Основатели:</strong> Технология, система, управление',
        'slide10-li2': '<strong>Учёные:</strong> Миссионеры и миротворцы',
        'slide10-li3': '<strong>Инженеры:</strong> Оборудование (экструдеры, агломераторы)',
        'slide10-li4': '<strong>Департаменты:</strong> Экология, образование, финансы, юридический',
        'slide10-exp': '<strong>Почему мы?</strong> 20 лет практических испытаний (2005-2021). Собственные технологии. Проверенная модель внедрения.',

        // Slide 11
        'slide11-h2': 'План развития и масштабирования',
        'slide11-h3-1': 'От пилота до 49 000 систем',
        'slide11-li1': '<strong>Пилот:</strong> Naggar',
        'slide11-li2': '<strong>Расширение:</strong> Хаб с 24 линиями/мес, 8 региональных компаний',
        'slide11-li3': '<strong>Масштаб:</strong> 49 000 локальных систем по всей Индии',
        'slide11-h3-2': 'Шаги после пилота',
        'slide11-steps-li1': 'Расширение MRF-центров',
        'slide11-steps-li2': 'Запуск 2-3 дополнительных RPC линий',
        'slide11-steps-li3': 'Локальный колледж Zero Waste',

        // Slide 12
        'slide12-h1': 'Готовы к экономике будущего?',
        'slide12-h2': '"Мы не просто перерабатываем отходы — мы строим новую экономику"',
        'slide12-proposal': '<strong>Предложение:</strong> Запустить пилот на вашей территории в течение 30 дней.',
        'slide12-contact': '<strong>Свяжитесь с нами:</strong>',
        'slide12-phone': '+91-74-7749-7749 (WhatsApp)',
        'slide12-web': 'www.zerowasteindia.info'
    }
};

let currentLang = localStorage.getItem('presentationLang') || 'en';

function switchLanguage() {
    currentLang = currentLang === 'en' ? 'ru' : 'en';
    localStorage.setItem('presentationLang', currentLang);

    if (currentLang === 'ru') {
        applyTranslations();
    } else {
        revertToEnglish();
    }
}

function applyTranslations() {
    Object.keys(translations.ru).forEach(key => {
        const element = document.querySelector(`[data-i18n="${key}"]`);
        if (element) {
            element.innerHTML = translations.ru[key];
        }
    });
}

function revertToEnglish() {
    // Reload page to get original English content
    location.reload();
}

document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const slideCounter = document.getElementById('slideCounter');

    // Navigation
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
        slideCounter.textContent = `${index + 1} / ${totalSlides}`;
        currentSlide = index;
    }

    document.getElementById('prevBtn').addEventListener('click', () => {
        if (currentSlide > 0) showSlide(currentSlide - 1);
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        if (currentSlide < totalSlides - 1) showSlide(currentSlide + 1);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            if (currentSlide > 0) showSlide(currentSlide - 1);
        } else if (e.key === 'ArrowRight') {
            if (currentSlide < totalSlides - 1) showSlide(currentSlide + 1);
        }
    });

    // Language toggle
    document.getElementById('langBtn').addEventListener('click', switchLanguage);

    // Apply saved language on load
    if (currentLang === 'ru') {
        applyTranslations();
    }

    // PPTX Export Logic
    document.getElementById('exportBtn').addEventListener('click', generatePPTX);

    function generatePPTX() {
        const pptx = new PptxGenJS();
        pptx.layout = 'LAYOUT_16x9';

        slides.forEach((slide, index) => {
            const pptSlide = pptx.addSlide();
            const slideTitle = slide.getAttribute('data-title') || `Slide ${index + 1}`;

            // Global Background
            pptSlide.background = { path: "images/real_bg.png" };

            // Handle Title Slide specifically
            if (slide.classList.contains('title-slide')) {
                // Add overlay effect (semi-transparent black rect)
                pptSlide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: '100%', fill: { color: '000000', transparency: 50 } });

                const h1 = slide.querySelector('h1');
                const h2 = slide.querySelector('h2');
                const quotes = slide.querySelector('.quote');

                if (h1) pptSlide.addText(h1.innerText, { x: 0.5, y: 1.5, w: '90%', fontSize: 44, color: 'FFFFFF', bold: true, align: 'center' });
                if (h2) pptSlide.addText(h2.innerText, { x: 0.5, y: 3, w: '90%', fontSize: 32, color: 'EEEEEE', align: 'center' });
                if (quotes) pptSlide.addText(quotes.innerText, { x: 1, y: 5, w: '80%', fontSize: 24, color: 'F9A825', italic: true, align: 'center' });

                return; // Skip standard processing for title slide
            }

            // Standard Slide Header
            const h2 = slide.querySelector('h2');
            if (h2) {
                pptSlide.addText(h2.innerText, { x: 0.5, y: 0.3, w: '90%', fontSize: 32, color: '2E7D32', bold: true });
                // Add a divider line
                pptSlide.addShape(pptx.shapes.LINE, { x: 0.5, y: 0.9, w: '90%', h: 0, line: '2E7D32', lineSize: 2 });
            }

            // Process content
            // This is a simplified parser. For complex layouts, we approximate positions.

            // Check for grid layouts
            const grid2 = slide.querySelector('.grid-2');
            if (grid2) {
                // Split content into left and right
                const cols = grid2.children;
                if (cols.length >= 2) {
                    extractContentToSlide(pptSlide, cols[0], { x: 0.5, y: 1.2, w: 4.5 });
                    extractContentToSlide(pptSlide, cols[1], { x: 5.2, y: 1.2, w: 4.5 });
                }
            } else if (slide.querySelector('.content-with-image')) {
                const textCol = slide.querySelector('.text-col');
                const imgCol = slide.querySelector('.img-col img');
                const isReverse = slide.querySelector('.content-with-image').classList.contains('reverse');

                if (isReverse) {
                    if (imgCol) pptSlide.addImage({ path: "images/" + imgCol.getAttribute('src').replace('images/', ''), x: 0.5, y: 1.5, w: 4.5, h: 3.5 });
                    if (textCol) extractContentToSlide(pptSlide, textCol, { x: 5.2, y: 1.5, w: 4.5 });
                } else {
                    if (textCol) extractContentToSlide(pptSlide, textCol, { x: 0.5, y: 1.5, w: 4.5 });
                    if (imgCol) pptSlide.addImage({ path: "images/" + imgCol.getAttribute('src').replace('images/', ''), x: 5.2, y: 1.5, w: 4.5, h: 3.5 });
                }
            } else {
                // Default full width content
                const content = slide.querySelector('.slide-content');
                extractContentToSlide(pptSlide, content, { x: 0.5, y: 1.2, w: 9 });
            }
        });

        pptx.writeFile({ fileName: "ZW_US_Presentation.pptx" });
    }

    function extractContentToSlide(pptSlide, container, region) {
        let currentY = region.y;
        const spacing = 0.5;

        // Process children
        Array.from(container.children).forEach(child => {
            if (['H1', 'H2'].includes(child.tagName)) return; // Skip main headers handled separately

            if (child.tagName === 'H3' || child.tagName === 'H4') {
                pptSlide.addText(child.innerText, { x: region.x, y: currentY, w: region.w, fontSize: 18, color: '1565C0', bold: true });
                currentY += 0.4;
            } else if (child.tagName === 'P') {
                pptSlide.addText(child.innerText, { x: region.x, y: currentY, w: region.w, fontSize: 14, color: '333333' });
                currentY += 0.4;
            } else if (child.tagName === 'UL' || child.tagName === 'OL') {
                const items = Array.from(child.children).map(li => li.innerText);
                items.forEach(item => {
                    pptSlide.addText(item, { x: region.x, y: currentY, w: region.w, fontSize: 14, color: '333333', bullet: true });
                    currentY += 0.35;
                });
                currentY += 0.2;
            } else if (child.classList.contains('card') || child.classList.contains('stat-card')) {
                // Recursively handle cards but flatten slightly
                extractContentToSlide(pptSlide, child, { x: region.x, y: currentY, w: region.w });
                currentY += 0.5; // Add extra space after card
            }
        });
    }
});
