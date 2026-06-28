const translations = {
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
