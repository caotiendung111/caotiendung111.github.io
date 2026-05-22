# 🚀 Bộ Hồ Sơ CV Cao Cấp — Cao Tiến Dũng

Chào bạn Dũng! Tôi đã thiết kế và lập trình hoàn chỉnh một bộ hồ sơ CV tương tác cao cấp (Interactive Web Resume) trực tiếp trong thư mục làm việc của bạn (`e:\chinhsuacv`). 

Bộ CV này được phát triển bằng công nghệ **HTML5 / CSS3 (Vanilla) / JavaScript**, mang phong cách hiện đại chuyên nghiệp của các kỹ sư công nghệ cấp cao tại các doanh nghiệp lớn.

---

## 📂 Các File Đã Được Tạo Trong Thư Mục `e:\chinhsuacv\`

1. **[`index.html`](file:///e:/chinhsuacv/index.html)**: Chứa toàn bộ nội dung CV đã được hiệu đính chính tả, từ vựng tiếng Anh chuyên ngành và cấu trúc lại 7 dự án xuất sắc của bạn.
2. **[`style.css`](file:///e:/chinhsuacv/style.css)**: Thiết lập hệ thống màu sắc HSL cao cấp (Emerald & Slate), hiệu ứng hover mượt mà, Dark/Light mode và đặc biệt là **Print Stylesheet** tối ưu hóa kích thước in ấn A4 chuẩn chỉnh.
3. **[`script.js`](file:///e:/chinhsuacv/script.js)**: Xử lý chức năng chuyển đổi giao diện (Dark/Light), lọc dự án thông minh theo danh mục và lệnh in/xuất tệp PDF nhanh chóng.

---

## 🛠️ Hướng Dẫn Sử Dụng CV Web Tương Tác

### Bước 1: Mở CV Trên Trình Duyệt
- Click đúp vào file **`index.html`** trong thư mục `e:\chinhsuacv` để mở trên Chrome, Edge, Brave hoặc bất kỳ trình duyệt nào khác.
- Bạn sẽ thấy một giao diện cực kỳ bắt mắt với hiệu ứng chuyển động mượt mà, nút chuyển đổi **Dark/Light Mode** và các tab phân loại dự án tương tác (**AI & Computer Vision** / **Embedded & IoT**).

### Bước 2: Xuất Ra File PDF Chuẩn Để Đi Phỏng Vấn (Rất Quan Trọng!)
Để lưu CV thành file PDF gửi cho nhà tuyển dụng hoặc in ra giấy đi phỏng vấn:
1. Nhấn nút **Export to PDF** (màu xanh lá) ở góc trên bên phải trang web, hoặc nhấn tổ hợp phím **`Ctrl + P`**.
2. Tại hộp thoại in ấn của trình duyệt, hãy cài đặt các tùy chọn sau để đạt chất lượng in đẹp nhất:
   - **Máy in đích (Destination)**: Chọn **Lưu dưới dạng PDF (Save as PDF)**.
   - **Bố cục (Layout)**: Chọn **Dọc (Portrait)**.
   - **Khổ giấy**: Chọn **A4**.
   - **Lề (Margins)**: Chọn **Mặc định (Default)** hoặc **Không (None)**.
   - **Tùy chọn Khác (More settings)**:
     - Tích chọn **Đồ họa nền (Background graphics)**: BẮT BUỘC (để hiển thị các màu sắc, tag công nghệ và thanh sidebar).
     - Bỏ tích chọn **Đầu trang và chân trang (Headers and footers)**: BẮT BUỘC (để xóa các dòng link web thừa của trình duyệt ở viền trang).
3. Nhấn **Lưu (Save)** để tải file PDF 2 trang hoàn mỹ về máy tính!

### Bước 3: Thay Thế Ảnh Chân Dung Thực Tế Của Bạn
Hiện tại CV đang hiển thị avatar gradient chữ **"TD"** cực kỳ đẹp mắt. Để thay thế bằng ảnh thẻ thực tế của bạn:
1. Sao chép ảnh thẻ của bạn vào thư mục `e:\chinhsuacv` và đổi tên ảnh thành `profile.jpg` (hoặc định dạng `.png`).
2. Mở file `index.html` bằng một trình chỉnh sửa văn bản (Notepad, VS Code) và tìm đến dòng số 54:
   ```html
   <!-- <img src="profile.jpg" alt="Cao Tien Dung" class="profile-photo"> -->
   ```
3. Xóa dấu chú thích ẩn `<!--` và `-->` để kích hoạt ảnh:
   ```html
   <img src="profile.jpg" alt="Cao Tien Dung" class="profile-photo">
   ```
4. Lưu file lại và tải lại (F5) trang web trên trình duyệt!

---

## 🎨 Hướng Dẫn Chỉnh Sửa Trên Canva (Canva Link)

Nếu bạn vẫn muốn nộp CV bằng bản Canva qua link bạn gửi, hãy thực hiện các bước chỉnh sửa trực tiếp trên giao diện thiết kế Canva theo hướng dẫn chi tiết sau:

### 1. Sửa Lỗi Chính Tả & Tiêu Đề
- Tìm ô chữ **EMBEDDED PROGRAMING** -> Sửa ngay thành **EMBEDDED SYSTEMS & AI ENGINEER** (hoặc **EMBEDDED PROGRAMMING**). Lỗi thiếu chữ 'M' rất dễ bị nhà tuyển dụng đánh giá thấp sự cẩn thận.

### 2. Gom Nhóm Phần Ngôn Ngữ (Languages)
- **Vấn đề**: CV hiện tại có chữ `English` và `Japanese` cô độc ở chân cột trái, trong khi bên phải dưới phần `EDUCATION` lại có một dòng chi tiết `LANGUAGES: Japanese: JLPT N4...`.
- **Cách sửa**: Xóa hoàn toàn phần chữ `LANGUAGES` và thông tin ngôn ngữ ở phần bên phải (Education). Tại cột bên trái (Sidebar), kéo dãn khoảng cách và nhập nội dung chi tiết:
  * **English**: TOEIC 650 (Intermediate)
  * **Japanese**: JLPT N4 (Pursuing N3)

### 3. Tối Ưu Hóa Trình Bày 7 Dự Án (Projects)
Vì trên bản giấy/Canva không gian có hạn, để hiển thị cả 7 dự án một cách chuyên nghiệp nhất, bạn nên áp dụng các văn bản rút gọn có chọn lọc mà tôi đã biên soạn dưới đây. Hãy copy-paste chính xác vào các ô chữ dự án tương ứng trên Canva:

* **DeepGuard — Deepfake Detection** (2026)
  * *Tech*: Python, PyTorch, EfficientNet-B4, FastAPI, Grad-CAM++, Docker.
  * *Bullet 1*: Trained EfficientNet-B4 model achieving **0.985 AUC-ROC** on FaceForensics++ database with 24.5ms latency.
  * *Bullet 2*: Deployed explainable heatmaps via Grad-CAM++ to locate deepfake segments and served APIs via FastAPI.

* **DeepLock Pro — Face Authentication** (2026)
  * *Tech*: Python, OpenCV, face_recognition, AES-128 Fernet, CLAHE AI.
  * *Bullet 1*: Developed active liveness analysis (EAR blink detection & Head Pose) to bypass print/screen spoof attacks.
  * *Bullet 2*: Integrated symmetric AES-128 Fernet encryption for biometrics and CLAHE for 2x low-light accuracy.

* **TrafficAI — Vehicle LPR Monitoring** (2025 - 2026)
  * *Tech*: Python, YOLOv8, OpenVINO, EasyOCR, SQLite, FastAPI, PWA.
  * *Bullet 1*: Optimized YOLOv8 & EasyOCR pipeline using OpenVINO for fast edge CPU vehicle/plate scanning.
  * *Bullet 2*: Built a complete control dashboard with soft-delete bins and TrafficShield IP-rate limit protection.

* **Conveyor Sorting System | PBL4** (2025)
  * *Tech*: C/C++ (OOP), STM32, ESP32, OpenCV, Firebase.
  * *Bullet 1*: Programmed STM32 core system in object-oriented C++ for precise sorting motor drive control.
  * *Bullet 2*: Linked real-time OpenCV QR/barcode scanning with SQLite database and automated banking payment flows.

* **FireGuard IoT — Fire Alarm System** (2025 - 2026)
  * *Tech*: ESP32, YOLOv8, OpenCV, Streamlit, Telegram API.
  * *Bullet 1*: Reduced sensor false alarms by **90%** via a 10-frame visual temporal noise filtering algorithm.
  * *Bullet 2*: Enabled real-time Telegram photo broadcasts and physical alarm triggers via ESP32 microcontrollers.

* **OCL Audio Power Amplifier** (2024 - 2025)
  * *Tech*: Altium Designer, Proteus, PCB Routing, Soldering, Analog Electronics.
  * *Bullet 1*: Calculated parameters, designed schematics, and routed double-sided PCB layout in Altium Designer.
  * *Bullet 2*: Assembled a stable physical prototype, achieving high-fidelity audio with zero crossover distortion.

* **Tourism Management & Shopee Simulation** (2022 - 2023)
  * *Tech*: C++, OOP Concepts, Vectors, Pointers, File Handling.
  * *Bullet 1*: Built a console-based travel simulator mastery-level OOP class relationships and file systems storage.

Chúc bạn có một buổi phỏng vấn vô cùng thành công với bộ CV mới chuẩn chỉnh và ấn tượng này!
