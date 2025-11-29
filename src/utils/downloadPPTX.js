/**
 * Утилиты для скачивания готовых PPTX файлов
 */

/**
 * Скачивает файл по указанному пути
 * @param {string} filePath - Путь к файлу
 * @param {string} fileName - Имя файла для скачивания
 */
function downloadFile(filePath, fileName) {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/**
 * Скачивает русскую версию презентации
 */
export function downloadRussianPPTX() {
    downloadFile('/slide/ZW&US_RU.pptx', 'ZW&US_RU.pptx');
}

/**
 * Скачивает английскую версию презентации
 */
export function downloadEnglishPPTX() {
    downloadFile('/slide/ZW&US_ENG.pptx', 'ZW&US_ENG.pptx');
}

/**
 * Скачивает презентацию в зависимости от текущего языка
 * @param {string} language - Код языка ('ru' или 'en')
 */
export function downloadPPTXByLanguage(language) {
    if (language === 'ru') {
        downloadRussianPPTX();
    } else {
        downloadEnglishPPTX();
    }
}
