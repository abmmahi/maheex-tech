export type ToolCategory =
  | "image-pdf"
  | "text"
  | "developer"
  | "design"
  | "calculators"
  | "utilities"
  | "bangla";

export interface Tool {
  slug: string;
  category: ToolCategory;
  name: string;
  shortDescription: string; // shown on the card
  seoTitle: string; // unique, under about 60 characters
  seoDescription: string; // unique, under about 155 characters
  keywords: string[];
  icon: string; // lucide-react icon name (must exist in components/tools/ToolIcon.tsx)
  priority: boolean; // true = launch tool (star)
  status: "live" | "planned";
  related: string[]; // slugs of related tools
}

export interface CategoryInfo {
  slug: ToolCategory;
  name: string;
  description: string;
}

export const categories: CategoryInfo[] = [
  {
    slug: "image-pdf",
    name: "Image & PDF",
    description: "Compress, convert, resize and edit images and PDF files.",
  },
  {
    slug: "text",
    name: "Text",
    description:
      "Count words, change letter case, compare text and clean up lists of lines.",
  },
  {
    slug: "developer",
    name: "Developer",
    description:
      "Format and convert JSON, encode and decode data, test patterns and generate identifiers.",
  },
  {
    slug: "design",
    name: "Design",
    description: "Convert colors and generate CSS for gradients, shadows and sizes.",
  },
  {
    slug: "calculators",
    name: "Calculators",
    description:
      "Quick calculators for age, percentages, loans, dates, time zones and units.",
  },
  {
    slug: "utilities",
    name: "Utilities",
    description: "Everyday helpers such as QR codes, passwords, timers and more.",
  },
  {
    slug: "bangla",
    name: "Bangla",
    description:
      "Tools for Bangladesh and Bangla: GPA, numbers in Bangla words and Bijoy to Unicode.",
  },
];

export const tools: Tool[] = [
  // ---------- image-pdf (12) ----------
  {
    slug: "image-compressor",
    category: "image-pdf",
    name: "Image Compressor",
    shortDescription: "Reduce the file size of JPG, PNG and WebP images.",
    seoTitle: "Image Compressor: Reduce JPG, PNG and WebP Size",
    seoDescription:
      "Compress JPG, PNG and WebP images and compare the size before and after. A free online image compressor that runs in your browser.",
    keywords: ["image compressor", "compress image", "reduce image size", "jpg compressor"],
    icon: "ImageDown",
    priority: true,
    status: "planned",
    related: ["image-resizer", "image-converter", "pdf-compress"],
  },
  {
    slug: "image-converter",
    category: "image-pdf",
    name: "Image Converter",
    shortDescription: "Convert images between PNG, JPG and WebP.",
    seoTitle: "Image Converter: PNG, JPG and WebP Online",
    seoDescription:
      "Convert images between PNG, JPG and WebP. Pick the output format and quality, then download the result. Free and runs in your browser.",
    keywords: ["image converter", "png to jpg", "jpg to png", "webp converter"],
    icon: "RefreshCw",
    priority: true,
    status: "planned",
    related: ["image-compressor", "heic-to-jpg", "image-resizer"],
  },
  {
    slug: "heic-to-jpg",
    category: "image-pdf",
    name: "HEIC to JPG Converter",
    shortDescription: "Convert iPhone HEIC photos to JPG.",
    seoTitle: "HEIC to JPG Converter: Convert iPhone Photos Online",
    seoDescription:
      "Convert HEIC photos from an iPhone to JPG so they open anywhere. Free HEIC to JPG converter that runs in your browser.",
    keywords: ["heic to jpg", "heic converter", "iphone photo converter", "convert heic"],
    icon: "FileImage",
    priority: true,
    status: "planned",
    related: ["image-converter", "image-compressor", "image-resizer"],
  },
  {
    slug: "image-resizer",
    category: "image-pdf",
    name: "Image Resizer",
    shortDescription: "Resize images by pixels, or aim for a target file size in KB.",
    seoTitle: "Image Resizer: Change Size by Pixels or Target KB",
    seoDescription:
      "Resize images to exact pixel dimensions or aim for a target file size in KB. Free online image resizer.",
    keywords: ["image resizer", "resize image", "resize image to kb", "change image size"],
    icon: "Maximize",
    priority: true,
    status: "planned",
    related: ["image-compressor", "image-converter", "favicon-generator"],
  },
  {
    slug: "pdf-merge",
    category: "image-pdf",
    name: "Merge PDF",
    shortDescription: "Combine several PDF files into one.",
    seoTitle: "Merge PDF Files: Combine PDFs Into One Online",
    seoDescription:
      "Combine several PDF files into a single document and set the order. Free online PDF merger.",
    keywords: ["merge pdf", "combine pdf", "join pdf files", "pdf merger"],
    icon: "Layers",
    priority: true,
    status: "planned",
    related: ["pdf-split", "pdf-compress", "image-to-pdf"],
  },
  {
    slug: "pdf-compress",
    category: "image-pdf",
    name: "Compress PDF",
    shortDescription: "Make PDF files smaller, with a quality option.",
    seoTitle: "Compress PDF: Reduce PDF File Size Online",
    seoDescription:
      "Reduce the size of a PDF with a quality option. Free online PDF compressor, with honest notes on what browser-based compression can do.",
    keywords: ["compress pdf", "reduce pdf size", "pdf compressor", "shrink pdf"],
    icon: "Archive",
    priority: true,
    status: "planned",
    related: ["pdf-merge", "pdf-split", "image-compressor"],
  },
  {
    slug: "pdf-split",
    category: "image-pdf",
    name: "Split PDF",
    shortDescription: "Split a PDF into separate pages or page ranges.",
    seoTitle: "Split PDF: Extract Pages From a PDF Online",
    seoDescription:
      "Split a PDF into single pages or page ranges and download the parts. Free online PDF splitter.",
    keywords: ["split pdf", "extract pdf pages", "pdf splitter", "separate pdf pages"],
    icon: "Scissors",
    priority: true,
    status: "planned",
    related: ["pdf-merge", "pdf-compress", "pdf-to-jpg"],
  },
  {
    slug: "image-to-pdf",
    category: "image-pdf",
    name: "Image to PDF",
    shortDescription: "Turn one or more images into a PDF file.",
    seoTitle: "Image to PDF: Convert JPG and PNG to PDF",
    seoDescription:
      "Combine JPG and PNG images into one PDF, one image per page. Free online image to PDF converter.",
    keywords: ["image to pdf", "jpg to pdf", "png to pdf", "photo to pdf"],
    icon: "FileText",
    priority: false,
    status: "planned",
    related: ["pdf-merge", "pdf-to-jpg", "image-compressor"],
  },
  {
    slug: "pdf-to-jpg",
    category: "image-pdf",
    name: "PDF to JPG",
    shortDescription: "Convert PDF pages into JPG images.",
    seoTitle: "PDF to JPG: Convert PDF Pages to Images",
    seoDescription:
      "Turn each page of a PDF into a JPG image you can download. Free online PDF to JPG converter.",
    keywords: ["pdf to jpg", "pdf to image", "convert pdf to jpg", "pdf page to image"],
    icon: "FileImage",
    priority: false,
    status: "planned",
    related: ["image-to-pdf", "pdf-split", "image-converter"],
  },
  {
    slug: "exif-data-remover",
    category: "image-pdf",
    name: "EXIF Data Remover",
    shortDescription: "Remove metadata such as camera info and location from photos.",
    seoTitle: "EXIF Data Remover: Strip Photo Metadata Online",
    seoDescription:
      "Remove EXIF metadata such as camera details and GPS location from photos before you share them. Free online tool.",
    keywords: ["exif remover", "remove exif data", "strip photo metadata", "remove image metadata"],
    icon: "Shield",
    priority: false,
    status: "planned",
    related: ["image-compressor", "image-converter", "image-resizer"],
  },
  {
    slug: "favicon-generator",
    category: "image-pdf",
    name: "Favicon Generator",
    shortDescription: "Create favicon files in common sizes from an image.",
    seoTitle: "Favicon Generator: Make Favicons From an Image",
    seoDescription:
      "Create favicon files in the common sizes from your logo or image. Free online favicon generator.",
    keywords: ["favicon generator", "make favicon", "favicon from image", "ico generator"],
    icon: "Star",
    priority: false,
    status: "planned",
    related: ["image-resizer", "image-converter", "base64-to-image"],
  },
  {
    slug: "base64-to-image",
    category: "image-pdf",
    name: "Base64 to Image",
    shortDescription: "Decode a Base64 string and preview or download it as an image.",
    seoTitle: "Base64 to Image: Decode Base64 Strings Online",
    seoDescription:
      "Paste a Base64 string and preview it as an image, then download it. Free online Base64 to image decoder.",
    keywords: ["base64 to image", "decode base64 image", "base64 image viewer", "base64 decoder"],
    icon: "Binary",
    priority: false,
    status: "planned",
    related: ["base64-encoder-decoder", "image-converter", "favicon-generator"],
  },

  // ---------- text (8) ----------
  {
    slug: "word-counter",
    category: "text",
    name: "Word Counter",
    shortDescription: "Count words, characters, sentences and reading time.",
    seoTitle: "Word Counter: Count Words and Characters Online",
    seoDescription:
      "Count words, characters, sentences and paragraphs, and see the estimated reading time. Free online word counter.",
    keywords: ["word counter", "character counter", "count words", "reading time"],
    icon: "Type",
    priority: true,
    status: "planned",
    related: ["case-converter", "social-character-counter", "text-diff-checker"],
  },
  {
    slug: "case-converter",
    category: "text",
    name: "Case Converter",
    shortDescription: "Change text to uppercase, lowercase, title case and more.",
    seoTitle: "Case Converter: Uppercase, Lowercase, Title Case",
    seoDescription:
      "Convert text to uppercase, lowercase, title case, sentence case and more in one click. Free online case converter.",
    keywords: ["case converter", "uppercase converter", "lowercase converter", "title case"],
    icon: "CaseSensitive",
    priority: true,
    status: "planned",
    related: ["word-counter", "slug-generator", "fancy-text-generator"],
  },
  {
    slug: "lorem-ipsum-generator",
    category: "text",
    name: "Lorem Ipsum Generator",
    shortDescription: "Generate placeholder text by paragraphs, sentences or words.",
    seoTitle: "Lorem Ipsum Generator: Placeholder Text Online",
    seoDescription:
      "Generate Lorem Ipsum placeholder text by paragraphs, sentences or words. Free online Lorem Ipsum generator.",
    keywords: ["lorem ipsum generator", "placeholder text", "dummy text", "lorem ipsum"],
    icon: "AlignLeft",
    priority: false,
    status: "planned",
    related: ["word-counter", "case-converter", "slug-generator"],
  },
  {
    slug: "text-diff-checker",
    category: "text",
    name: "Text Diff Checker",
    shortDescription: "Compare two texts and see what changed.",
    seoTitle: "Text Diff Checker: Compare Two Texts Online",
    seoDescription:
      "Paste two versions of a text and see added and removed lines side by side. Free online text diff checker.",
    keywords: ["text diff checker", "compare text", "text difference", "diff tool"],
    icon: "Replace",
    priority: false,
    status: "planned",
    related: ["duplicate-line-remover", "word-counter", "json-formatter"],
  },
  {
    slug: "duplicate-line-remover",
    category: "text",
    name: "Duplicate Line Remover",
    shortDescription: "Remove repeated lines from a list and keep the rest.",
    seoTitle: "Duplicate Line Remover: Clean Up Lists Online",
    seoDescription:
      "Remove duplicate lines from a list and keep the original order. Free online duplicate line remover.",
    keywords: ["duplicate line remover", "remove duplicate lines", "unique lines", "dedupe list"],
    icon: "Copy",
    priority: false,
    status: "planned",
    related: ["text-diff-checker", "case-converter", "word-counter"],
  },
  {
    slug: "slug-generator",
    category: "text",
    name: "Slug Generator",
    shortDescription: "Turn a title into a clean URL slug.",
    seoTitle: "Slug Generator: Make URL-Friendly Slugs Online",
    seoDescription:
      "Turn any title into a clean, URL-friendly slug. Free online slug generator.",
    keywords: ["slug generator", "url slug", "seo friendly url", "create slug"],
    icon: "Hash",
    priority: false,
    status: "planned",
    related: ["case-converter", "url-encoder-decoder", "word-counter"],
  },
  {
    slug: "fancy-text-generator",
    category: "text",
    name: "Fancy Text Generator",
    shortDescription: "Turn plain text into stylish Unicode text for bios and posts.",
    seoTitle: "Fancy Text Generator: Stylish Unicode Text Online",
    seoDescription:
      "Turn plain text into stylish Unicode text you can paste into bios and posts. Free online fancy text generator.",
    keywords: ["fancy text generator", "stylish text", "unicode text", "cool fonts"],
    icon: "Sparkles",
    priority: false,
    status: "planned",
    related: ["case-converter", "social-character-counter", "word-counter"],
  },
  {
    slug: "social-character-counter",
    category: "text",
    name: "Social Media Character Counter",
    shortDescription: "Check text length against common social media limits.",
    seoTitle: "Social Media Character Counter: Check Post Length",
    seoDescription:
      "Check your text length against common character limits for social media posts. Free online character counter.",
    keywords: ["social media character counter", "post length checker", "tweet length", "bio length"],
    icon: "MessageCircle",
    priority: false,
    status: "planned",
    related: ["word-counter", "fancy-text-generator", "case-converter"],
  },

  // ---------- developer (10) ----------
  {
    slug: "json-formatter",
    category: "developer",
    name: "JSON Formatter",
    shortDescription: "Format, validate and minify JSON.",
    seoTitle: "JSON Formatter and Validator Online",
    seoDescription:
      "Format, validate and minify JSON with clear error messages. Free online JSON formatter and validator.",
    keywords: ["json formatter", "json validator", "json beautifier", "json minify"],
    icon: "Braces",
    priority: true,
    status: "planned",
    related: ["json-to-csv", "base64-encoder-decoder", "html-css-js-minifier"],
  },
  {
    slug: "json-to-csv",
    category: "developer",
    name: "JSON to CSV Converter",
    shortDescription: "Convert JSON data into CSV for spreadsheets.",
    seoTitle: "JSON to CSV Converter Online",
    seoDescription:
      "Convert a JSON array into CSV you can open in a spreadsheet. Free online JSON to CSV converter.",
    keywords: ["json to csv", "convert json to csv", "json to excel", "json converter"],
    icon: "Table",
    priority: false,
    status: "planned",
    related: ["json-formatter", "markdown-to-html", "base64-encoder-decoder"],
  },
  {
    slug: "base64-encoder-decoder",
    category: "developer",
    name: "Base64 Encoder and Decoder",
    shortDescription: "Encode text to Base64 or decode Base64 back to text.",
    seoTitle: "Base64 Encoder and Decoder Online",
    seoDescription:
      "Encode text to Base64 or decode Base64 back to readable text. Free online Base64 encoder and decoder.",
    keywords: ["base64 encoder", "base64 decoder", "base64 encode", "base64 decode"],
    icon: "Binary",
    priority: false,
    status: "planned",
    related: ["url-encoder-decoder", "jwt-decoder", "base64-to-image"],
  },
  {
    slug: "jwt-decoder",
    category: "developer",
    name: "JWT Decoder",
    shortDescription: "Read the header and payload of a JSON Web Token.",
    seoTitle: "JWT Decoder: Read JSON Web Tokens Online",
    seoDescription:
      "Decode a JSON Web Token to read its header and payload. Free online JWT decoder. It does not verify signatures.",
    keywords: ["jwt decoder", "decode jwt", "json web token", "jwt viewer"],
    icon: "KeyRound",
    priority: false,
    status: "planned",
    related: ["base64-encoder-decoder", "json-formatter", "hash-generator"],
  },
  {
    slug: "url-encoder-decoder",
    category: "developer",
    name: "URL Encoder and Decoder",
    shortDescription: "Encode or decode URLs and query strings.",
    seoTitle: "URL Encoder and Decoder Online",
    seoDescription:
      "Encode or decode URLs and query string values. Free online URL encoder and decoder.",
    keywords: ["url encoder", "url decoder", "encode url", "percent encoding"],
    icon: "Link",
    priority: false,
    status: "planned",
    related: ["base64-encoder-decoder", "slug-generator", "regex-tester"],
  },
  {
    slug: "regex-tester",
    category: "developer",
    name: "Regex Tester",
    shortDescription: "Test regular expressions against sample text.",
    seoTitle: "Regex Tester: Test Regular Expressions Online",
    seoDescription:
      "Test regular expressions against sample text and see the matches highlighted. Free online regex tester.",
    keywords: ["regex tester", "regular expression tester", "regex online", "test regex"],
    icon: "Regex",
    priority: false,
    status: "planned",
    related: ["url-encoder-decoder", "text-diff-checker", "json-formatter"],
  },
  {
    slug: "uuid-v4-generator",
    category: "developer",
    name: "UUID v4 Generator",
    shortDescription: "Generate random version 4 UUIDs.",
    seoTitle: "UUID v4 Generator: Random UUIDs Online",
    seoDescription:
      "Generate random version 4 UUIDs, one or many at a time. Free online UUID v4 generator.",
    keywords: ["uuid generator", "uuid v4", "random uuid", "guid generator"],
    icon: "Fingerprint",
    priority: false,
    status: "planned",
    related: ["hash-generator", "password-generator", "base64-encoder-decoder"],
  },
  {
    slug: "hash-generator",
    category: "developer",
    name: "Hash Generator",
    shortDescription: "Generate SHA hashes from text.",
    seoTitle: "Hash Generator: SHA Hashes From Text Online",
    seoDescription: "Generate SHA hashes from text. Free online hash generator.",
    keywords: ["hash generator", "sha256 generator", "sha hash", "text hash"],
    icon: "Hash",
    priority: false,
    status: "planned",
    related: ["uuid-v4-generator", "jwt-decoder", "password-generator"],
  },
  {
    slug: "markdown-to-html",
    category: "developer",
    name: "Markdown to HTML Converter",
    shortDescription: "Convert Markdown to HTML with a live preview.",
    seoTitle: "Markdown to HTML Converter With Live Preview",
    seoDescription:
      "Write Markdown and see the HTML output with a live preview. Free online Markdown to HTML converter.",
    keywords: ["markdown to html", "markdown converter", "markdown preview", "md to html"],
    icon: "FileCode",
    priority: false,
    status: "planned",
    related: ["html-css-js-minifier", "json-formatter", "word-counter"],
  },
  {
    slug: "html-css-js-minifier",
    category: "developer",
    name: "HTML, CSS and JS Minifier",
    shortDescription: "Minify HTML, CSS and JavaScript to reduce file size.",
    seoTitle: "HTML, CSS and JS Minifier Online",
    seoDescription:
      "Minify HTML, CSS and JavaScript to reduce file size. Free online code minifier.",
    keywords: ["html minifier", "css minifier", "js minifier", "minify code"],
    icon: "Minimize2",
    priority: false,
    status: "planned",
    related: ["markdown-to-html", "json-formatter", "px-to-rem-converter"],
  },

  // ---------- design (4) ----------
  {
    slug: "color-converter",
    category: "design",
    name: "Color Converter",
    shortDescription: "Convert colors between HEX, RGB and HSL.",
    seoTitle: "Color Converter: HEX, RGB and HSL Online",
    seoDescription:
      "Convert colors between HEX, RGB and HSL and copy the value. Free online color converter.",
    keywords: ["color converter", "hex to rgb", "rgb to hex", "hsl converter"],
    icon: "Palette",
    priority: false,
    status: "planned",
    related: ["gradient-generator", "box-shadow-generator", "px-to-rem-converter"],
  },
  {
    slug: "gradient-generator",
    category: "design",
    name: "CSS Gradient Generator",
    shortDescription: "Build a CSS gradient and copy the code.",
    seoTitle: "CSS Gradient Generator: Create and Copy CSS",
    seoDescription:
      "Build a CSS linear or radial gradient visually and copy the code. Free online CSS gradient generator.",
    keywords: ["css gradient generator", "gradient generator", "linear gradient", "css gradient"],
    icon: "Paintbrush",
    priority: false,
    status: "planned",
    related: ["color-converter", "box-shadow-generator", "px-to-rem-converter"],
  },
  {
    slug: "box-shadow-generator",
    category: "design",
    name: "Box Shadow Generator",
    shortDescription: "Design a CSS box shadow visually and copy the code.",
    seoTitle: "CSS Box Shadow Generator With Live Preview",
    seoDescription:
      "Design a CSS box shadow with live preview and copy the code. Free online box shadow generator.",
    keywords: ["box shadow generator", "css box shadow", "shadow generator", "css shadow"],
    icon: "Square",
    priority: false,
    status: "planned",
    related: ["gradient-generator", "color-converter", "px-to-rem-converter"],
  },
  {
    slug: "px-to-rem-converter",
    category: "design",
    name: "PX to REM Converter",
    shortDescription: "Convert pixels to rem and back with a custom base size.",
    seoTitle: "PX to REM Converter Online",
    seoDescription:
      "Convert pixels to rem and rem to pixels with your own base font size. Free online PX to REM converter.",
    keywords: ["px to rem", "rem to px", "px to rem converter", "css units"],
    icon: "Ruler",
    priority: false,
    status: "planned",
    related: ["color-converter", "box-shadow-generator", "html-css-js-minifier"],
  },

  // ---------- calculators (7) ----------
  {
    slug: "age-calculator",
    category: "calculators",
    name: "Age Calculator",
    shortDescription: "Find your exact age in years, months and days.",
    seoTitle: "Age Calculator: Exact Age in Years, Months, Days",
    seoDescription:
      "Find your exact age in years, months and days from your date of birth. Free online age calculator.",
    keywords: ["age calculator", "calculate age", "date of birth calculator", "exact age"],
    icon: "Cake",
    priority: true,
    status: "planned",
    related: ["date-difference-calculator", "percentage-calculator", "bmi-bmr-calculator"],
  },
  {
    slug: "percentage-calculator",
    category: "calculators",
    name: "Percentage Calculator",
    shortDescription: "Work out percentages, percentage change and more.",
    seoTitle: "Percentage Calculator: Percent Of, Change and More",
    seoDescription:
      "Calculate percentages, percentage change and what percent one number is of another. Free online percentage calculator.",
    keywords: ["percentage calculator", "percent calculator", "percentage change", "calculate percentage"],
    icon: "Percent",
    priority: true,
    status: "planned",
    related: ["loan-emi-calculator", "unit-converter", "age-calculator"],
  },
  {
    slug: "loan-emi-calculator",
    category: "calculators",
    name: "Loan EMI Calculator",
    shortDescription: "Estimate your monthly loan payment (EMI).",
    seoTitle: "Loan EMI Calculator: Monthly Payment Estimator",
    seoDescription:
      "Estimate your monthly loan payment (EMI) from the amount, interest rate and term. Free online EMI calculator.",
    keywords: ["loan emi calculator", "emi calculator", "monthly loan payment", "loan calculator"],
    icon: "Wallet",
    priority: false,
    status: "planned",
    related: ["percentage-calculator", "unit-converter", "age-calculator"],
  },
  {
    slug: "bmi-bmr-calculator",
    category: "calculators",
    name: "BMI and BMR Calculator",
    shortDescription: "Calculate BMI and BMR from height, weight and age.",
    seoTitle: "BMI and BMR Calculator Online",
    seoDescription:
      "Calculate BMI and BMR from your height, weight and age. Free online calculator for general information only.",
    keywords: ["bmi calculator", "bmr calculator", "body mass index", "calorie calculator"],
    icon: "Heart",
    priority: false,
    status: "planned",
    related: ["age-calculator", "unit-converter", "percentage-calculator"],
  },
  {
    slug: "date-difference-calculator",
    category: "calculators",
    name: "Date Difference Calculator",
    shortDescription: "Count the days, weeks and months between two dates.",
    seoTitle: "Date Difference Calculator: Days Between Dates",
    seoDescription:
      "Count the days, weeks and months between two dates. Free online date difference calculator.",
    keywords: ["date difference calculator", "days between dates", "date calculator", "date duration"],
    icon: "Calendar",
    priority: false,
    status: "planned",
    related: ["age-calculator", "timezone-converter", "percentage-calculator"],
  },
  {
    slug: "timezone-converter",
    category: "calculators",
    name: "Time Zone Converter",
    shortDescription: "Convert a time between time zones.",
    seoTitle: "Time Zone Converter Online",
    seoDescription:
      "Convert a date and time between time zones around the world. Free online time zone converter.",
    keywords: ["time zone converter", "timezone converter", "convert time zones", "world time"],
    icon: "Clock",
    priority: false,
    status: "planned",
    related: ["date-difference-calculator", "age-calculator", "pomodoro-timer"],
  },
  {
    slug: "unit-converter",
    category: "calculators",
    name: "Unit Converter",
    shortDescription: "Convert length, weight, temperature and other units.",
    seoTitle: "Unit Converter: Length, Weight, Temperature",
    seoDescription:
      "Convert length, weight, temperature and other units. Free online unit converter.",
    keywords: ["unit converter", "length converter", "weight converter", "temperature converter"],
    icon: "Scale",
    priority: false,
    status: "planned",
    related: ["percentage-calculator", "bmi-bmr-calculator", "px-to-rem-converter"],
  },

  // ---------- utilities (6) ----------
  {
    slug: "qr-code-generator",
    category: "utilities",
    name: "QR Code Generator",
    shortDescription: "Create a QR code for a link or text.",
    seoTitle: "QR Code Generator: Create QR Codes Online",
    seoDescription:
      "Create a QR code for a link or text and download it as an image. Free online QR code generator.",
    keywords: ["qr code generator", "create qr code", "qr code maker", "text to qr code"],
    icon: "QrCode",
    priority: true,
    status: "planned",
    related: ["password-generator", "url-encoder-decoder", "base64-encoder-decoder"],
  },
  {
    slug: "password-generator",
    category: "utilities",
    name: "Password Generator",
    shortDescription: "Generate strong random passwords.",
    seoTitle: "Password Generator: Create Strong Random Passwords",
    seoDescription:
      "Generate strong random passwords with the length and characters you choose. Free online password generator.",
    keywords: ["password generator", "strong password", "random password", "secure password generator"],
    icon: "Lock",
    priority: true,
    status: "planned",
    related: ["uuid-v4-generator", "hash-generator", "qr-code-generator"],
  },
  {
    slug: "yt-thumbnail-downloader",
    category: "utilities",
    name: "YouTube Thumbnail Downloader",
    shortDescription: "Get the thumbnail of a YouTube video from its link.",
    seoTitle: "YouTube Thumbnail Downloader Online",
    seoDescription:
      "Get the thumbnail image of a YouTube video by pasting its link. Free online YouTube thumbnail downloader.",
    keywords: ["youtube thumbnail downloader", "yt thumbnail", "download youtube thumbnail", "video thumbnail"],
    icon: "Download",
    priority: false,
    status: "planned",
    related: ["image-converter", "image-resizer", "qr-code-generator"],
  },
  {
    slug: "typing-speed-test",
    category: "utilities",
    name: "Typing Speed Test",
    shortDescription: "Test your typing speed in English or Bangla.",
    seoTitle: "Typing Speed Test: English and Bangla",
    seoDescription:
      "Test your typing speed and accuracy in English or Bangla. Free online typing speed test.",
    keywords: ["typing speed test", "typing test", "wpm test", "bangla typing test"],
    icon: "Keyboard",
    priority: false,
    status: "planned",
    related: ["pomodoro-timer", "word-counter", "number-to-bangla-words"],
  },
  {
    slug: "pomodoro-timer",
    category: "utilities",
    name: "Pomodoro Timer",
    shortDescription: "Focus with a simple Pomodoro timer.",
    seoTitle: "Pomodoro Timer: Focus and Break Intervals Online",
    seoDescription:
      "A simple Pomodoro timer with focus and break intervals you can change. Free online Pomodoro timer.",
    keywords: ["pomodoro timer", "focus timer", "study timer", "work timer"],
    icon: "Timer",
    priority: false,
    status: "planned",
    related: ["typing-speed-test", "timezone-converter", "text-to-speech"],
  },
  {
    slug: "text-to-speech",
    category: "utilities",
    name: "Text to Speech",
    shortDescription: "Read text aloud with your browser's built-in voices.",
    seoTitle: "Text to Speech: Read Text Aloud in Your Browser",
    seoDescription:
      "Listen to your text read aloud using your browser's built-in voices. Free online text to speech.",
    keywords: ["text to speech", "read text aloud", "tts online", "speech synthesis"],
    icon: "Volume2",
    priority: false,
    status: "planned",
    related: ["word-counter", "typing-speed-test", "pomodoro-timer"],
  },

  // ---------- bangla (3) ----------
  {
    slug: "gpa-cgpa-calculator",
    category: "bangla",
    name: "GPA and CGPA Calculator (Bangladesh)",
    shortDescription: "Calculate GPA and CGPA using the Bangladesh grading scale.",
    seoTitle: "GPA and CGPA Calculator for Bangladesh",
    seoDescription:
      "Calculate GPA and CGPA using the Bangladesh grading scale. Free online GPA and CGPA calculator.",
    keywords: ["gpa calculator bangladesh", "cgpa calculator", "gpa calculator", "bangladesh grading"],
    icon: "GraduationCap",
    priority: true,
    status: "planned",
    related: ["percentage-calculator", "number-to-bangla-words", "age-calculator"],
  },
  {
    slug: "number-to-bangla-words",
    category: "bangla",
    name: "Number to Bangla Words",
    shortDescription: "Write numbers and taka amounts in Bangla words.",
    seoTitle: "Number to Bangla Words: Taka and Poisha Converter",
    seoDescription:
      "Write numbers and taka and poisha amounts in Bangla words. Free online number to Bangla words converter.",
    keywords: ["number to bangla words", "taka in words", "bangla number converter", "amount in words bangla"],
    icon: "Languages",
    priority: true,
    status: "planned",
    related: ["gpa-cgpa-calculator", "bijoy-to-unicode", "percentage-calculator"],
  },
  {
    slug: "bijoy-to-unicode",
    category: "bangla",
    name: "Bijoy to Unicode Converter",
    shortDescription: "Convert Bijoy-encoded text to Unicode Bangla.",
    seoTitle: "Bijoy to Unicode Converter for Bangla Text",
    seoDescription:
      "Convert Bijoy-encoded text to Unicode Bangla. Free online Bijoy to Unicode converter.",
    keywords: ["bijoy to unicode", "bijoy converter", "bangla unicode converter", "ansi to unicode bangla"],
    icon: "Type",
    priority: true,
    status: "planned",
    related: ["number-to-bangla-words", "gpa-cgpa-calculator", "typing-speed-test"],
  },
];

// ---------- helpers ----------
// Only tools with status "live" may appear in the directory, category pages,
// the sitemap and generateStaticParams.

export function getLiveTools(): Tool[] {
  return tools.filter((tool) => tool.status === "live");
}

export function getLiveToolsByCategory(slug: string): Tool[] {
  return getLiveTools().filter((tool) => tool.category === slug);
}

export function getCategory(slug: string): CategoryInfo | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}
