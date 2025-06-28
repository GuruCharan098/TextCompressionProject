const stopWords = [
  'the', 'a', 'an', 'in', 'on', 'of', 'to', 'and', 'for', 'with', 'by', 'at', 'from', 'is', 'have', 'been'
];

const compressText = (text) => {
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/);

  const freq = words.reduce((acc, w) => {
    acc[w] = (acc[w] || 0) + 1;
    return acc;
  }, {});

  const topWords = Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  const tokens = ['#', '@', '$', '%', '&', '*', '!', '+', '?', '='];
  const tokenMap = Object.fromEntries(
    topWords.map(([word], i) => [word, tokens[i]])
  );

  const compressed = words.map(w => tokenMap[w] || w).join(' ');
  return compressed;
};

const createIndex = (text) => {
  const cleanWords = text
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/);

  const index = {};
  cleanWords.forEach((word, position) => {
    if (!stopWords.includes(word) && word.length > 0) {
      if (!index[word]) index[word] = [];
      index[word].push(position);
    }
  });

  return index;
};

const search = (term, index) => {
  const normalized = term.toLowerCase().replace(/[^\w]/g, '');
  const positions = index[normalized] || [];
  return {
    term: normalized,
    positions,
    frequency: positions.length
  };
};

export { compressText, createIndex, search };
