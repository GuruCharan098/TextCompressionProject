import { compressText, createIndex, search } from '../utils/textUtils.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function runTests() {
    const filePath = path.resolve(__dirname, '../data/fragments.txt');

    let data;
    try {
        data = fs.readFileSync(filePath, 'utf8');
    } catch (err) {
        console.error("Error reading file:", err);
        return;
    }

    const text = data.trim();
    console.log("Original Text:", text);

    const compressed = compressText(text);
    console.log("Compressed:", compressed);

    const index = createIndex(text);
    console.log("Index:", index);

    const query = "galaxy";
    const result = search(query, index);
    console.log(`Search '${query}':`, result);
}

runTests();
