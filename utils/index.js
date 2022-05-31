/**
 * Removes read-more anchor from the provided excerpt
 * @param {string} str the string of data that has the read-more
 * @returns {string} the same string without the read-more anchor
 */
export function removeReadMore(str) {
  if (typeof window !== 'undefined' && window.DOMParser) {
    const parser = new DOMParser();
    const dom = parser.parseFromString(str, 'text/html');
    dom.querySelector('.read-more')?.remove();
    return dom.documentElement.innerHTML;
  }
  return str;
}

/**
 * Copies text and adds it to the clipboard
 * @param {string} string the string you want to copy to the clipboard
 */
export function copy(text) {
  return navigator.clipboard.writeText(text);
}

/**
 * Calculates how much time does it take to read a certain amount of text, assumes 226 words per minute
 * @param {string} content text you want to calculate
 * @returns {number} a number of minuets it takes to read the text
 */
export function readingTime(content) {
  const words = decodeEntities(content).split(' ').length;
  const wpm = 226;
  const time = Math.ceil(words / wpm);
  return time;
}

/**
 * Decodes all HTML entities to normal text
 * @param {*} str the text that has the HTML entities
 * @returns {str} the string with the normal text
 */
export function decodeEntities(str) {
  if (typeof window !== 'undefined' && window.DOMParser) {
    const parser = new DOMParser();
    const dom = parser.parseFromString(str, 'text/html');
    return dom.documentElement.textContent;
  } else {
    return str;
  }
}
