

const path = require('path')
const testFilePath = 'D:/pk/Live_Edureka/node_rec/day1/path.js';


console.log(path.dirname(testFilePath));
console.log(path.basename(testFilePath));
console.log(path.extname(testFilePath));
console.log(path.isAbsolute(testFilePath));
console.table(path.parse(testFilePath));