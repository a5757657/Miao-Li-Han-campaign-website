import { createGlobalStyle } from "styled-components";
import Mantou from "./../assets/font/MantouSans.ttf";
import device from './../theme'


export default createGlobalStyle`
  :root {
    --slate-50: #f8fafc;
    --slate-100: #f1f5f9;
    --slate-200: #e2e8f0;
    --slate-300: #cbd5e1;
    --slate-400: #94a3b8;
    --slate-500: #64748b;
    --slate-600: #475569;
    --slate-700: #334155;
    --slate-800: #1e293b;
    --slate-900: #0f172a;

    --color-primary: #DA7D4A;
    --text-primary: #334155;
    --text-secondary: #64748B;
    --bg-color-theme1: #FDFCFB;
    --bg-color-theme2: #F7ECE1;

    --space-8: 8px;
    --space-16: 16px;
    --space-24: 24px;
    --space-32: 32px;
    --space-48: 48px;
    --space-64: 64px;
    --space-96: 96px;
    --space-192: 192px;

    --desktop: 1400px;
    --table: 768px;
    --mobile: 576px;
  }
* { 
  font-family: Inter, Noto Sans TC, sans-serif;
  color: var(--text-primary);
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
body {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
}
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.5;
}
p {
  font-weight: 400;
  line-height: 1.5;
}
h1 {
  font-size: 40px;
  letter-spacing: -0.02em;
  @media (max-width: ${device.mobile}) {
    font-size: 32px;
  }
}
h2 {
  font-size: 32px;
  @media (max-width: ${device.mobile}) {
    font-size: 24px;
  }
}
h3 {
  font-size: 28px;
  @media (max-width: ${device.mobile}) {
    font-size: 24px;
  }
}
h4 {
  font-size: 24px;
}
h5 {
  font-size: 20px;
}
h6 {
  font-size: 16px;
}
@font-face {
  font-family: 'Mantou';
  src: url(${Mantou})  format('truetype'),
}
`;
