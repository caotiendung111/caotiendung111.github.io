const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  const filePath = path.resolve(__dirname, 'index.html');
  await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });
  
  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true
  });
  
  fs.writeFileSync('CV_CaoTienDung_Knox.pdf', pdfBuffer);
  const stats = fs.statSync('CV_CaoTienDung_Knox.pdf');
  console.log(`Generated final PDF size: ${(stats.size / 1024).toFixed(2)} KB`);
  
  await browser.close();
})();
