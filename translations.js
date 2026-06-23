const translations = {
  en: {
    candidate_name: "CAO TIEN DUNG",
    candidate_title: "Embedded Systems & AI Engineer",
    
    // UI Elements
    ui_theme_light: "Light Mode",
    ui_theme_dark: "Dark Mode",
    ui_print_pdf: "Export to PDF",
    ui_filter_label: "Filter Projects:",
    ui_all_projects: "All Projects",
    ui_ai_cv: "AI & Computer Vision",
    ui_embedded_iot: "Embedded & IoT",
    
    // Sidebar
    title_profile: "Profile",
    profile_text: "Senior Computer Systems Engineering student at Da Nang University of Science and Technology (DUT) with a proven dual foundation in Embedded Systems/IoT and Artificial Intelligence/Computer Vision. Developer of multiple production-ready AI applications, secure biometric locks, and microcontroller integrations. Seeking a professional internship to leverage software engineering, real-time hardware debugging, and edge AI deployment skills to build intelligent, high-performance systems.",
    
    title_skills: "Technical Skills",
    skill_programming: "Programming",
    skill_embedded: "Embedded & Hardware",
    skill_ai: "AI & Computer Vision",
    skill_web: "Web & Infrastructure",
    
    title_education: "Education",
    edu_dates: "2022 -> (Mar-Sep)/2027",
    edu_school: "Da Nang University of Science and Technology (DUT)",
    edu_degree: "Bachelor of Engineering in Computer Systems",
    edu_details: "Faculty of Electronics & Telecommunications",
    edu_gpa: "Cumulative GPA: 3.15 / 4.0",
    
    title_languages: "Languages",
    lang_english: "English",
    lang_english_detail: "TOEIC 650 (Intermediate, technical reading)",
    lang_japanese: "Japanese",
    lang_japanese_detail: "JLPT N4 (Pursuing N3, conversational)",
    
    title_certifications: "Certifications",
    cert_cpp: "<strong>C/C++ Programming</strong> - Codelearn",
    cert_python: "<strong>Python Programming</strong> - Coursera",
    
    // Projects Section
    title_projects: "Key Engineering Projects",
    divider_embedded: "EMBEDDED SYSTEMS & INTERNET OF THINGS",
    divider_ai: "ARTIFICIAL INTELLIGENCE & COMPUTER VISION",
    
    // Project 1
    p1_title: "Tourism & Shopee E-Commerce Simulator",
    p1_desc: "Developed a C++ terminal application simulating real-life travel reservation flows and Shopee catalog transactions.",
    p1_bullet1: "Designed robust class architectures utilizing composition, inheritance, and dynamic pointer allocation to master fundamental memory boundaries in standard C++.",
    
    // Project 2
    p2_title: "OCL Audio Power Amplifier Circuit Design",
    p2_desc: "Researched, designed, and manufactured a physical Output Capacitor-Less (OCL) high-fidelity analog audio power amplifier.",
    p2_bullet1: "<strong>Hardware Design:</strong> Simulated analog stages inside Proteus, completed PCB schematics, and routed double-sided traces using Altium Designer.",
    p2_bullet2: "<strong>Manufacturing:</strong> Etched, drilled, and hand-soldered discrete components onto the physical board, executing rigorous thermal management procedures.",
    p2_bullet3: "<strong>Validation:</strong> Verified signal stability with oscilloscopes, obtaining high signal-to-noise ratio output with zero cross-over distortion.",
    
    // Project 3
    p3_title: "AI-Based Automatic Sorting Conveyor System | PBL4",
    p3_desc: "Engineered an industrial-scale automated sorting assembly belt connecting microcontrollers and computer vision modules.",
    p3_bullet1: "<strong>Microcontroller Core:</strong> Designed the master scheduler on an STM32 MCU written in C++ object-oriented style, ensuring precise servo/DC motor synchronization for sorting actions.",
    p3_bullet2: "<strong>Edge Vision Integration:</strong> Developed a communication channel between the STM32 controller and a local computer processing OpenCV camera feeds to scan QR/barcodes and categorize assets.",
    p3_bullet3: "<strong>Cloud Ecosystem:</strong> Connected ESP32 modules to sync sorting tallies to a Firebase Realtime Database and handled automated banking QR payment triggers.",
    
    // Project 4
    p4_title: "FireGuard IoT — AI Smart Fire Alarm System",
    p4_desc: "Invented a smart fire inspection framework bridging local embedded sensor nodes and visual deep learning modules.",
    p4_bullet1: "<strong>Sensor Logic:</strong> Configured ESP32 microcontrollers to interface with flame and smoke sensors, managing automated physical alarm actuators (buzzers, water pumps).",
    p4_bullet2: "<strong>False Alarm Control:</strong> Programmed a local temporal 10-frame noise filtering routine on visual feeds, dropping false smoke reports by over <strong>90%</strong>.",
    p4_bullet3: "<strong>Remote Communication:</strong> Deployed automated Telegram alerts with live capture images and GPS location data upon fire validation.",
    
    // Project 5
    p5_title: "TrafficAI — LPR & Smart Vehicle Monitoring System",
    p5_desc: "Programmed a commercial-grade smart parking solution tracking vehicle counts and recognizing license plates instantly from real-time network streams.",
    p5_bullet1: "<strong>Neural Pipeline:</strong> Fine-tuned a custom YOLOv8 detector combined with EasyOCR, optimized through Intel OpenVINO runtime, ensuring ultra-low latency inference on edge CPU architectures.",
    p5_bullet2: "<strong>Dashboard Architecture:</strong> Built a complete control dashboard with FastAPI and PWA support, handling complex search, soft-delete data bins, blacklist configurations, and visual audit logs.",
    p5_bullet3: "<strong>Defense Shield:</strong> Wrote custom middleware for IP-based rate limiting, WebSocket validation, and secure authentication to defend against malicious API flooding.",
    
    // Project 6
    p6_title: "DeepLock Pro — Advanced Biometric Face Authentication",
    p6_desc: "Developed a premium, real-time facial verification suite equipped with robust presentation attack detection (liveness analysis) and biometric database encryption.",
    p6_bullet1: "<strong>Liveness Analysis (Anti-Spoofing):</strong> Implemented an active defense mechanism computing continuous Eye Aspect Ratio (EAR) across 15 frames alongside real-time Head Pose Estimation (Yaw/Pitch/Roll) to completely restrict print and screen replay attacks.",
    p6_bullet2: "<strong>Biometric Security:</strong> Extracted 128-D face descriptors and deployed encrypted database storage utilizing symmetric 128-bit AES Fernet cryptography with automated migration scripts.",
    p6_bullet3: "<strong>Image Enhancement:</strong> Integrated an adaptive light analyzer running Contrast Limited Adaptive Histogram Equalization (CLAHE) in the LAB color space, doubling face-matching accuracy in dark environments.",
    
    // Project 7
    p7_title: "DeepGuard — AI-Powered Deepfake Detection System",
    p7_desc: "Engineered a state-of-the-art production-ready deep learning pipeline designed to inspect and identify manipulated digital facial images and video records.",
    p7_bullet1: "<strong>Machine Learning:</strong> Trained an EfficientNet-B4 classification framework, achieving a benchmark <strong>0.985 AUC-ROC</strong> and <strong>0.962 F1-score</strong> on joint FaceForensics++ and Celeb-DF test sets.",
    p7_bullet2: "<strong>Explainable AI (XAI):</strong> Integrated Captum LayerGradCam algorithms to overlay heatmaps, pinpointing specific tampered facial areas to increase output interpretability.",
    p7_bullet3: "<strong>DevOps & Serving:</strong> Managed data version control utilizing DVC, developed high-performance REST endpoints with FastAPI, and containerized the pipeline via Docker Compose for uniform scaling.",
    print_confirm_text: "Click OK to open the Print Dialog.\n\nFor a perfect CV export:\n1. Set Destination to 'Save as PDF'.\n2. Enable 'Background graphics' (so theme highlights load correctly).\n3. Disable 'Headers and footers' (to remove browser links)."
  },
  vi: {
    candidate_name: "CAO TIẾN DŨNG",
    candidate_title: "Kỹ sư Hệ thống nhúng & Trí tuệ nhân tạo",
    
    // UI Elements
    ui_theme_light: "Giao diện Sáng",
    ui_theme_dark: "Giao diện Tối",
    ui_print_pdf: "Xuất file PDF",
    ui_filter_label: "Bộ lọc dự án:",
    ui_all_projects: "Tất cả dự án",
    ui_ai_cv: "AI & Thị giác máy tính",
    ui_embedded_iot: "Hệ thống nhúng & IoT",
    
    // Sidebar
    title_profile: "Giới thiệu bản thân",
    profile_text: "Sinh viên năm cuối ngành Kỹ thuật Hệ thống Máy tính tại Trường Đại học Bách khoa - Đại học Đà Nẵng (DUT), sở hữu nền tảng kép vững chắc về Hệ thống nhúng/IoT và Trí tuệ nhân tạo/Thị giác máy tính. Đã phát triển nhiều ứng dụng AI thực tế, hệ thống khóa sinh trắc học bảo mật và tích hợp lập trình vi điều khiển. Mong muốn tìm kiếm cơ hội thực tập chuyên nghiệp nhằm phát huy thế mạnh về kỹ thuật phần mềm, gỡ lỗi phần cứng thời gian thực và triển khai Edge AI để xây dựng các hệ thống thông minh, hiệu năng cao.",
    
    title_skills: "Kỹ năng chuyên môn",
    skill_programming: "Ngôn ngữ lập trình",
    skill_embedded: "Hệ thống nhúng & Phần cứng",
    skill_ai: "AI & Thị giác máy tính",
    skill_web: "Web & Hạ tầng",
    
    title_education: "Học vấn",
    edu_dates: "2022 -> (tháng 3-9)/2027",
    edu_school: "Trường Đại học Bách khoa - Đại học Đà Nẵng (DUT)",
    edu_degree: "Kỹ sư Kỹ thuật Hệ thống Máy tính",
    edu_details: "Khoa Điện tử - Viễn thông",
    edu_gpa: "Điểm trung bình tích lũy (GPA): 3.15 / 4.0",
    
    title_languages: "Ngoại ngữ",
    lang_english: "Tiếng Anh",
    lang_english_detail: "TOEIC 650 (Trung cấp, đọc hiểu tài liệu kỹ thuật tốt)",
    lang_japanese: "Tiếng Nhật",
    lang_japanese_detail: "JLPT N4 (Đang học lên N3, giao tiếp cơ bản)",
    
    title_certifications: "Chứng chỉ",
    cert_cpp: "<strong>Lập trình C/C++</strong> - Codelearn",
    cert_python: "<strong>Lập trình Python</strong> - Coursera",
    
    // Projects Section
    title_projects: "Các dự án kỹ thuật tiêu biểu",
    divider_embedded: "HỆ THỐNG NHÚNG & INTERNET OF THINGS (IoT)",
    divider_ai: "TRÍ TUỆ NHÂN TẠO & THỊ GIÁC MÁY TÍNH (AI)",
    
    // Project 1
    p1_title: "Trình mô phỏng Quản lý Tour & Sàn Shopee",
    p1_desc: "Phát triển ứng dụng mô phỏng quy trình đặt chỗ du lịch và giao dịch mua sắm trên Shopee trên màn hình dòng lệnh (Terminal) C++.",
    p1_bullet1: "Thiết kế cấu trúc lớp bền vững áp dụng tính bao đóng, kế thừa, đa hình và cấp phát con trỏ động nhằm tối ưu hóa quản lý và giải phóng bộ nhớ trong C++ tiêu chuẩn.",
    
    // Project 2
    p2_title: "Thiết kế mạch Khuếch đại Công suất Âm thanh OCL",
    p2_desc: "Nghiên cứu, thiết kế và chế tạo sản phẩm mạch khuếch đại công suất âm thanh analog độ trung thực cao không tụ đầu ra (OCL).",
    p2_bullet1: "<strong>Thiết kế phần cứng:</strong> Mô phỏng mạch khuếch đại analog trên Proteus, lập sơ đồ nguyên lý PCB và đi dây mạch 2 lớp (double-sided) bằng phần mềm Altium Designer.",
    p2_bullet2: "<strong>Chế tạo thực tế:</strong> Tự thực hiện các công đoạn ăn mòn bo mạch, khoan lỗ và hàn thủ công các linh kiện điện tử, tối ưu hóa tản nhiệt nhiệt độ hệ thống.",
    p2_bullet3: "<strong>Đo lường & Kiểm thử:</strong> Đo đạc và kiểm thử độ ổn định tín hiệu âm thanh bằng máy hiện sóng (Oscilloscope), đạt chỉ số méo tiếng cực thấp (zero cross-over distortion).",
    
    // Project 3
    p3_title: "Hệ thống Băng chuyền Phân loại Tự động bằng AI | PBL4",
    p3_desc: "Thiết kế và chế tạo mô hình băng chuyền phân loại tự động công nghiệp kết nối vi điều khiển và mô-đun thị giác máy tính.",
    p3_bullet1: "<strong>Hạt nhân vi điều khiển:</strong> Lập trình hệ thống điều khiển trung tâm trên vi điều khiển STM32 bằng ngôn ngữ C++ hướng đối tượng (OOP), đồng bộ hóa chính xác động cơ bước, động cơ servo và DC.",
    p3_bullet2: "<strong>Tích hợp thị giác máy tính:</strong> Xây dựng giao thức truyền thông giữa STM32 và máy tính cục bộ xử lý camera quét mã QR/mã vạch bằng OpenCV để phân loại sản phẩm.",
    p3_bullet3: "<strong>Hệ sinh thái đám mây:</strong> Sử dụng ESP32 để gửi dữ liệu đếm sản phẩm thời gian thực lên cơ sở dữ liệu Firebase Realtime Database, tích hợp hiển thị mã thanh toán ngân hàng tự động.",
    
    // Project 4
    p4_title: "FireGuard IoT — Hệ thống Cảnh báo Cháy thông minh tích hợp AI",
    p4_desc: "Phát triển hệ thống giám sát và báo cháy thông minh kết nối các nốt cảm biến nhúng và mô-đun học sâu nhận diện lửa.",
    p4_bullet1: "<strong>Mạch cảm biến:</strong> Lập trình vi điều khiển ESP32 đọc dữ liệu từ cảm biến lửa và khói, tự động kích hoạt còi hú báo động và hệ thống bơm nước dập lửa cơ học.",
    p4_bullet2: "<strong>Lọc báo động giả:</strong> Lập trình bộ lọc thời gian (temporal filtering) 10 khung hình trên luồng video giám sát, giảm thiểu tỷ lệ báo khói giả hơn <strong>90%</strong>.",
    p4_bullet3: "<strong>Truyền thông từ xa:</strong> Gửi thông báo khẩn cấp ngay lập tức qua Telegram bao gồm ảnh chụp hiện trường đám cháy và định vị vị trí bản đồ GPS khi phát hiện cháy.",
    
    // Project 5
    p5_title: "TrafficAI — Hệ thống Giám sát Xe thông minh & Nhận diện Biển số",
    p5_desc: "Lập trình giải pháp bãi đỗ xe thông minh chuyên nghiệp giúp đếm số lượng xe và nhận dạng biển số tự động từ luồng video camera thời gian thực.",
    p5_bullet1: "<strong>Luồng xử lý neural:</strong> Huấn luyện và tinh chỉnh mô hình YOLOv8 kết hợp thư viện nhận diện ký tự EasyOCR, tối ưu bằng Intel OpenVINO để chạy thời gian thực với độ trễ cực thấp trên chip CPU.",
    p5_bullet2: "<strong>Bảng điều khiển:</strong> Xây dựng trang quản trị hoàn chỉnh sử dụng FastAPI và PWA, hỗ trợ tìm kiếm nâng cao, bộ lọc lưu trữ, quản lý danh sách đen xe nghi vấn và lưu trữ dữ liệu thông tin ra vào.",
    p5_bullet3: "<strong>Bảo mật hệ thống:</strong> Thiết lập lớp middleware bảo mật giới hạn tần suất gửi yêu cầu (IP-based rate limiting), xác thực gói tin WebSocket để chống lại các cuộc tấn công spam API.",
    
    // Project 6
    p6_title: "DeepLock Pro — Khóa xác thực sinh trắc khuôn mặt cao cấp",
    p6_desc: "Phát triển hệ thống xác thực khuôn mặt thời gian thực tích hợp công nghệ chống giả mạo hình ảnh (Liveness Analysis) và mã hóa cơ sở dữ liệu khuôn mặt.",
    p6_bullet1: "<strong>Chống giả mạo sinh trắc (Anti-Spoofing):</strong> Xây dựng cơ chế phòng thủ chủ động tính toán chỉ số nháy mắt EAR liên tục 15 khung hình kết hợp ước lượng góc quay đầu để ngăn chặn hoàn toàn tấn công bằng ảnh in hoặc video điện thoại.",
    p6_bullet2: "<strong>Bảo mật dữ liệu:</strong> Trích xuất 128-D vector đặc trưng khuôn mặt và mã hóa lưu trữ bằng thuật toán đối xứng AES-128 Fernet, tích hợp sẵn script di chuyển cơ sở dữ liệu tự động.",
    p6_bullet3: "<strong>Cải thiện chất lượng ảnh:</strong> Tích hợp công cụ cân bằng ánh sáng thích ứng CLAHE trong không gian màu LAB, tăng gấp đôi độ chính xác nhận diện trong môi trường thiếu sáng hoặc ngược sáng.",
    
    // Project 7
    p7_title: "DeepGuard — Hệ thống Phát hiện Deepfake thông minh bằng AI",
    p7_desc: "Xây dựng giải pháp học sâu hoàn chỉnh giúp kiểm tra và nhận dạng các khuôn mặt kỹ thuật số bị chỉnh sửa, cắt ghép giả mạo (Deepfake) trong ảnh và video.",
    p7_bullet1: "<strong>Huấn luyện mô hình:</strong> Huấn luyện kiến trúc mạng EfficientNet-B4, đạt chỉ số kiểm thử xuất sắc <strong>0.985 AUC-ROC</strong> và <strong>0.962 F1-score</strong> trên tập dữ liệu FaceForensics++ và Celeb-DF.",
    p7_bullet2: "<strong>AI giải thích được (XAI):</strong> Tích hợp thuật toán Captum LayerGradCam để hiển thị bản đồ nhiệt (heatmap), khoanh vùng chính xác vị trí da mặt bị chỉnh sửa giả mạo giúp tối ưu độ trực quan.",
    p7_bullet3: "<strong>Quản trị & Đóng gói:</strong> Quản lý dữ liệu lớn bằng DVC, phát triển API hiệu năng cao với FastAPI và đóng gói container toàn bộ hệ thống bằng Docker Compose để dễ dàng triển khai rộng rãi.",
    print_confirm_text: "Nhấp OK để mở hộp thoại In.\n\nĐể xuất CV đẹp và chuẩn nhất:\n1. Chọn Đích đến (Destination) là 'Lưu dưới dạng PDF' (Save as PDF).\n2. Bật tùy chọn 'Đồ họa nền' (Background graphics) để hiển thị đầy đủ màu sắc.\n3. Tắt tùy chọn 'Tiêu đề và chân trang' (Headers and footers) để loại bỏ liên kết thừa."
  },
  ja: {
    candidate_name: "CAO TIEN DUNG （カオ・ティエン・ズン）",
    candidate_title: "組み込みシステム & AI開発エンジニア",
    
    // UI Elements
    ui_theme_light: "ライトモード",
    ui_theme_dark: "ダークモード",
    ui_print_pdf: "PDFに出力",
    ui_filter_label: "プロジェクトのフィルター:",
    ui_all_projects: "すべてのプロジェクト",
    ui_ai_cv: "AI & 画像処理",
    ui_embedded_iot: "組み込み & IoT",
    
    // Sidebar
    title_profile: "自己紹介",
    profile_text: "ダナン工科大学（DUT）コンピュータシステム工学科の最終学年。組み込みシステム・IoT技術と人工知能（AI）・コンピュータビジョンの両分野における強固な基盤を有しています。実用的なAIアプリケーション、セキュアな生体認証ロックシステム、およびマイクロコントローラ統合システムの開発実績があります。ソフトウェア開発、リアルタイムのハードウェアデバッグ、およびエッジAIの実装スキルを活かし、インテリジェントで高性能なシステム開発に貢献できるインターンシップの機会を求めています。",
    
    title_skills: "専門技術",
    skill_programming: "プログラミング",
    skill_embedded: "組み込み & ハードウェア",
    skill_ai: "AI & 画像処理",
    skill_web: "Web & インフラ",
    
    title_education: "学歴",
    edu_dates: "2022年 -> (3月-9月)/2027年",
    edu_school: "ダナン工科大学 (DUT)",
    edu_degree: "コンピュータシステム工学士",
    edu_details: "電子通信学部",
    edu_gpa: "累積評点平均 (GPA): 3.15 / 4.0",
    
    title_languages: "語学スキル",
    lang_english: "英語",
    lang_english_detail: "TOEIC 650点（中級、技術文書の読解力あり）",
    lang_japanese: "日本語",
    lang_japanese_detail: "日本語能力試験 N4（N3取得に向けて勉強中、日常会話レベル）",
    
    title_certifications: "資格・認定",
    cert_cpp: "<strong>C/C++プログラミング</strong> - Codelearn",
    cert_python: "<strong>Pythonプログラミング</strong> - Coursera",
    
    // Projects Section
    title_projects: "主な開発プロジェクト",
    divider_embedded: "組み込みシステム & IoT分野",
    divider_ai: "人工知能 & 画像処理分野",
    
    // Project 1
    p1_title: "旅行予約 & Shopee風ECシミュレーター",
    p1_desc: "C++言語を使用し、コンソール上で動作する旅行予約およびShopee風のEC注文処理シミュレーションアプリケーションを開発。",
    p1_bullet1: "オブジェクト指向プログラミング（OOP）の概念（カプセル化、継承、ポリモーフィズム）と動的メモリ確保を駆使し、メモリ管理を最適化した堅牢な設計を実証。",
    
    // Project 2
    p2_title: "OCL方式オーディオパワーアンプの回路設計と製作",
    p2_desc: "出力コンデンサレス（OCL）方式を採用した高忠実度（Hi-Fi）アナログオーディオパワーアンプの研究、回路設計、および実機製作。",
    p2_bullet1: "<strong>ハードウェア設計:</strong> Proteusによるアナログ回路シミュレーションを経て、Altium Designerを用いた2層プリント基板（PCB）の回路図設計および配線パターン作成を実施。",
    p2_bullet2: "<strong>実機製作:</strong> 基板の作成、穴あけ、ディスクリート部品の配線・手はんだ付けを自ら行い、熱暴走を防ぐためのヒートシンク冷却設計を適用。",
    p2_bullet3: "<strong>評価・検証:</strong> オシロスコープを用いた徹底的な波形測定により、ノイズ耐性と安定性を確認し、クロスオーバーひずみのないクリアなHi-Fi出力を実現。",
    
    // Project 3
    p3_title: "AI搭載自動仕分けベルトコンベアシステム | PBL4",
    p3_desc: "マイクロコントローラと画像処理技術を融合させた、産業用自動製品仕分けベルトコンベアシステムの開発。",
    p3_bullet1: "<strong>制御基盤:</strong> STM32マイコンを採用し、C++によるオブジェクト指向型ファームウェアを構築。仕分け用のサーボモータやDCモータの超精密リアルタイム同期制御を確立。",
    p3_bullet2: "<strong>エッジカメラ処理:</strong> ローカルPC上のOpenCVとSTM32マイコン間の高速シリアル通信により、製品のバーコードやQRコードをカメラで読み取り、自動的に分類する仕組みを実装。",
    p3_bullet3: "<strong>クラウド連携:</strong> ESP32マイコンを用いて仕分けカウントデータをFirebaseリアルタイムデータベースへ同期し、さらに決済用の自動QRコード生成機能も統合。",
    
    // Project 4
    p4_title: "FireGuard IoT — AI搭載スマート火災警報システム",
    p4_desc: "エッジセンサー端末とディープラーニングによる画像認識モデルを連携させた、IoT火災自動検知・警告システム。",
    p4_bullet1: "<strong>センシング基盤:</strong> ESP32マイコンに火炎センサーや煙センサーを接続し、自動アクチュエータ（ブザー、消火ウォーターポンプ）の即時起動アルゴリズムを構築。",
    p4_bullet2: "<strong>誤検知抑制:</strong> カメラ映像に対してローカルな10フレーム時間フィルタリング処理をプログラムし、埃などによる煙の誤検知率を <strong>90%</strong> 以上削減。",
    p4_bullet3: "<strong>遠隔通知システム:</strong> 火災を正式検知した際、カメラが撮影した現場の静止画とGPS位置情報をTelegram APIを通じて管理者に瞬時に自動配信。",
    
    // Project 5
    p5_title: "TrafficAI — AI搭載車両監視・ナンバープレート自動認識システム",
    p5_desc: "ネットワークカメラのリアルタイム映像から、車両の通行カウントおよびナンバープレートを自動解析・読み取りする高度なスマートパーキングソリューション。",
    p5_bullet1: "<strong>推論パイプライン:</strong> カスタマイズしたYOLOv8物体検出とEasyOCRモデルをファインチューニング。Intel OpenVINOを用いて最適化し、エッジCPU上でも超低遅延動作を実現。",
    p5_bullet2: "<strong>管理ダッシュボード:</strong> FastAPIおよびPWA（Progressive Web App）を用いて直感的な画面を開発。あいまい検索、ブラックリスト車両通知、証拠用ログ管理などの機能を搭載。",
    p5_bullet3: "<strong>セキュリティ保護:</strong> IP制限によるレートリミット（Middleware）、WebSocketの整合性チェック、安全な認証管理を実装し、悪意あるAPIスパム攻撃からシステムを堅牢に防御。",
    
    // Project 6
    p6_title: "DeepLock Pro — 生体顔認証セキュアロックシステム",
    p6_desc: "写真や画面再生物理攻撃を完全に防ぐ生体検知機能（Liveness Detection）と、生体データベース暗号化を備えたリアルタイム顔認証セキュリティ。",
    p6_bullet1: "<strong>なりすまし防止（生体検知）:</strong> 15フレーム間の連続的な眼アスペクト比（EAR）による瞬き検出に加え、頭部姿勢推定（ヨー・ピッチ・ロール角）を統合し、写真や画面表示による不正突破を完全に排除。",
    p6_bullet2: "<strong>生体暗号化保護:</strong> 検出した128次元の顔特徴量を暗号化。対称鍵暗号アルゴリズムAES-128 Fernetを用いてデータベース内に安全に保存し、移行用自動スクリプトも開発。",
    p6_bullet3: "<strong>暗所画像処理:</strong> LAB色空間におけるコントラスト制限適応度ヒストグラム平均化（CLAHE）技術を採用し、夜間や低照度環境下での顔一致認識精度を従来の約2倍に向上。",
    
    // Project 7
    p7_title: "DeepGuard — ディープラーニングによるディープフェイク検出システム",
    p7_desc: "高精度ディープラーニングモデルを用いて、デジタル処理により偽造・操作された顔写真や動画（ディープフェイク）を見分ける実用的な検知プラットフォーム。",
    p7_bullet1: "<strong>ディープラーニング:</strong> EfficientNet-B4アーキテクチャを採用し、国際基準のデータセット（FaceForensics++ / Celeb-DF）での検証にて <strong>0.985 AUC-ROC</strong> および <strong>0.962 F1-score</strong> という高水準の精度を達成。",
    p7_bullet2: "<strong>説明可能AI（XAI）:</strong> CaptumライブラリのLayerGrad-CAM++アルゴリズムを導入し、偽造と判定された顔の部分をヒートマップで可視化。判定プロセスの透明性と説明可能性を担保。",
    p7_bullet3: "<strong>DevOpsと実用化:</strong> 大容量の学習データや学習済みモデルをDVC（Data Version Control）で管理。FastAPIによる高速RESTful APIのエンドポイントを実装し、Docker Composeを用いて容易なコンテナ展開を可能に。",
    print_confirm_text: "【OK】をクリックして印刷ダイアログを開きます。\n\n美しくPDFを出力するための設定：\n1. 送信先を「PDFとして保存」に設定します。\n2. 「背景のグラフィック」にチェックを入れて有効にします。\n3. 「ヘッダーとフッター」のチェックを外して無効にします。"
  }
};

// Explicitly bind to window to ensure global access in script.js
window.translations = translations;
