const puppeteer = require('puppeteer');
const sharp = require('sharp');
const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Set a standard viewport with scale factor 1.75 for better readability
    await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 1.75 });
    
    const filePath = path.resolve(__dirname, 'index.html');
    await page.goto(`file://${filePath}`, { waitUntil: 'networkidle2', timeout: 30000 });
    
    // Inject CSS to format the page cleanly for screenshots
    await page.evaluate(() => {
      document.body.style.margin = '0';
      document.body.style.padding = '0';
      document.body.style.background = '#fff';
      
      const themeSwitch = document.querySelector('.theme-switch-wrapper');
      if(themeSwitch) themeSwitch.style.display = 'none';
      
      const exportBtn = document.querySelector('.export-btn-container');
      if(exportBtn) exportBtn.style.display = 'none';
      
      const cvContainer = document.querySelector('.cv-container');
      if(cvContainer) {
        cvContainer.style.margin = '0';
        cvContainer.style.padding = '0';
      }
      
      const cvPage = document.querySelector('.cv-page');
      if(cvPage) {
        cvPage.style.margin = '0';
        cvPage.style.boxShadow = 'none';
        cvPage.style.width = '794px'; // Force exact pixel width for 96 DPI A4
      }
    });

    // Take full page screenshot of the cv-page element as PNG
    const cvPageElement = await page.$('.cv-page');
    const screenshotBuffer = await cvPageElement.screenshot({
      type: 'png',
      omitBackground: false
    });
    
    await browser.close();

    // Process image with sharp
    const metadata = await sharp(screenshotBuffer).metadata();
    const fullWidth = metadata.width;
    const fullHeight = metadata.height;
    
    // Calculate A4 height relative to width (A4 ratio is 297/210)
    const pageHeight = Math.round(fullWidth * (297 / 210));
    
    // Create new PDF
    const pdfDoc = await PDFDocument.create();
    
    // Slice image and add to PDF pages
    let currentY = 0;
    while (currentY < fullHeight) {
      let cropHeight = pageHeight;
      if (currentY + cropHeight > fullHeight) {
        cropHeight = fullHeight - currentY;
      }
      
      // Extract page and compress as 8-bit PNG (palette: true) to keep text perfectly sharp but tiny!
      const pageImageBuffer = await sharp(screenshotBuffer)
        .extract({ left: 0, top: currentY, width: fullWidth, height: cropHeight })
        .png({ palette: true, colors: 128, quality: 100 })
        .toBuffer();
        
      const pdfImage = await pdfDoc.embedPng(pageImageBuffer);
      const pdfPage = pdfDoc.addPage([fullWidth, cropHeight]);
      
      pdfPage.drawImage(pdfImage, {
        x: 0,
        y: 0,
        width: fullWidth,
        height: cropHeight,
      });
      
      currentY += cropHeight;
    }
    
    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync('CV_CaoTienDung_Japan_Optimized.pdf', pdfBytes);
    
    const stats = fs.statSync('CV_CaoTienDung_Japan_Optimized.pdf');
    console.log(`Successfully generated rasterized PDF. Size: ${(stats.size / 1024).toFixed(2)} KB`);
    
  } catch (err) {
    console.error("Error generating PDF:", err);
  }
})();
