export default function cleanSet(set, startString) {
  if (!startString || !startString.length || typeof startString !== 'string') {
    return '';
  }

  const parts = [];
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      parts.push(value.slice(startString.length));
    }
  }

  return parts.join('-');
}
