import { compressText, createIndex, search } from '../utils/textUtils.js';

function runTests() {
  const text = "Galaxy galaxy logs mission logs";

  const compressed = compressText(text);
  console.log("✅ Compressed:", compressed);

  const index = createIndex(text);
  console.log("✅ Index:", index);

  const result = search("logs", index);
  console.log("✅ Search 'logs':", result);
}

runTests();
