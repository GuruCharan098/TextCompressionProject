import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { compressText, createIndex, search } from '../utils/textUtils.js';

// __dirname workaround for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, '../data/fragments.txt');
const rawText = readFileSync(filePath, 'utf8');

// Compress
console.log("Compressed Text:");
console.log(compressText(rawText));

// Index
console.log("Searchable Index:");
const index = createIndex(rawText);
console.log(JSON.stringify(index, null, 2));

// Search test
console.log("Search Test: 'logs'");
console.log(search('logs', index));
