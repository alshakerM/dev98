export function removeReadMore(str) {
  if (typeof window !== 'undefined' && window.DOMParser) {
    const parser = new DOMParser();
    const dom = parser.parseFromString(str, 'text/html');
    dom.querySelector('.read-more')?.remove();
    return dom.documentElement.innerHTML;
  }
  return str;
}
export function copy(text) {
  navigator.clipboard.writeText(text);
}
export function readingTime(content) {
  const words = decodeEntities(content).split(' ').length;
  const wpm = 226;
  const time = Math.ceil(words / wpm);
  return time;
}

export function decodeEntities(str) {
  if (typeof window !== 'undefined' && window.DOMParser) {
    const parser = new DOMParser();
    const dom = parser.parseFromString(str, 'text/html');
    return dom.documentElement.textContent;
  } else {
    return str;
  }
}
