const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'departments.json');

const readData = () => {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
  }
  return [];
};

// Sử dụng hàm
const departments = readData();
console.log(departments);