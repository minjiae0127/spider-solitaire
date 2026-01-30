const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// SVG 아이콘 생성 - 스파이더 카드게임 테마
const createSpiderIcon = (size) => {
  const centerX = size / 2;
  const centerY = size / 2;
  const scale = size / 512;

  return `
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2c5530"/>
      <stop offset="100%" style="stop-color:#1a4d37"/>
    </linearGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FFD700"/>
      <stop offset="100%" style="stop-color:#FFA500"/>
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff"/>
      <stop offset="100%" style="stop-color:#f0f0f0"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="2" dy="2" stdDeviation="3" flood-opacity="0.3"/>
    </filter>
  </defs>

  <!-- 배경 원 -->
  <circle cx="${centerX}" cy="${centerY}" r="${size * 0.48}" fill="url(#bg)" stroke="url(#gold)" stroke-width="${size * 0.03}"/>

  <!-- 카드들 (부채꼴 배치) -->
  <g filter="url(#shadow)" transform="translate(${centerX}, ${centerY * 0.85})">
    <!-- 왼쪽 카드 -->
    <g transform="rotate(-30)">
      <rect x="${-size * 0.08}" y="${-size * 0.12}" width="${size * 0.16}" height="${size * 0.22}" rx="${size * 0.015}" fill="url(#cardGrad)" stroke="#ccc" stroke-width="1"/>
      <text x="${-size * 0.04}" y="${-size * 0.02}" font-size="${size * 0.06}" font-weight="bold" fill="#000">A</text>
      <text x="${-size * 0.04}" y="${size * 0.05}" font-size="${size * 0.05}" fill="#000">♠</text>
    </g>
    <!-- 중앙 왼쪽 카드 -->
    <g transform="rotate(-15)">
      <rect x="${-size * 0.08}" y="${-size * 0.12}" width="${size * 0.16}" height="${size * 0.22}" rx="${size * 0.015}" fill="url(#cardGrad)" stroke="#ccc" stroke-width="1"/>
      <text x="${-size * 0.04}" y="${-size * 0.02}" font-size="${size * 0.06}" font-weight="bold" fill="#d32f2f">K</text>
      <text x="${-size * 0.04}" y="${size * 0.05}" font-size="${size * 0.05}" fill="#d32f2f">♥</text>
    </g>
    <!-- 중앙 카드 -->
    <g transform="rotate(0)">
      <rect x="${-size * 0.08}" y="${-size * 0.12}" width="${size * 0.16}" height="${size * 0.22}" rx="${size * 0.015}" fill="url(#cardGrad)" stroke="#ccc" stroke-width="1"/>
      <text x="${-size * 0.04}" y="${-size * 0.02}" font-size="${size * 0.06}" font-weight="bold" fill="#000">Q</text>
      <text x="${-size * 0.04}" y="${size * 0.05}" font-size="${size * 0.05}" fill="#000">♠</text>
    </g>
    <!-- 중앙 오른쪽 카드 -->
    <g transform="rotate(15)">
      <rect x="${-size * 0.08}" y="${-size * 0.12}" width="${size * 0.16}" height="${size * 0.22}" rx="${size * 0.015}" fill="url(#cardGrad)" stroke="#ccc" stroke-width="1"/>
      <text x="${-size * 0.04}" y="${-size * 0.02}" font-size="${size * 0.06}" font-weight="bold" fill="#d32f2f">J</text>
      <text x="${-size * 0.04}" y="${size * 0.05}" font-size="${size * 0.05}" fill="#d32f2f">♦</text>
    </g>
    <!-- 오른쪽 카드 -->
    <g transform="rotate(30)">
      <rect x="${-size * 0.08}" y="${-size * 0.12}" width="${size * 0.16}" height="${size * 0.22}" rx="${size * 0.015}" fill="url(#cardGrad)" stroke="#ccc" stroke-width="1"/>
      <text x="${-size * 0.04}" y="${-size * 0.02}" font-size="${size * 0.06}" font-weight="bold" fill="#000">10</text>
      <text x="${-size * 0.04}" y="${size * 0.05}" font-size="${size * 0.05}" fill="#000">♣</text>
    </g>
  </g>

  <!-- 거미 몸체 -->
  <ellipse cx="${centerX}" cy="${centerY * 1.25}" rx="${size * 0.12}" ry="${size * 0.1}" fill="#8B0000"/>
  <circle cx="${centerX}" cy="${centerY * 1.1}" r="${size * 0.07}" fill="#B22222"/>

  <!-- 거미 다리 -->
  <g stroke="#8B0000" stroke-width="${size * 0.015}" fill="none" stroke-linecap="round">
    <!-- 왼쪽 다리들 -->
    <path d="M${centerX - size * 0.08} ${centerY * 1.15} Q${centerX - size * 0.2} ${centerY * 1.0} ${centerX - size * 0.28} ${centerY * 0.9}"/>
    <path d="M${centerX - size * 0.1} ${centerY * 1.2} Q${centerX - size * 0.22} ${centerY * 1.15} ${centerX - size * 0.32} ${centerY * 1.1}"/>
    <path d="M${centerX - size * 0.1} ${centerY * 1.28} Q${centerX - size * 0.2} ${centerY * 1.3} ${centerX - size * 0.3} ${centerY * 1.35}"/>
    <path d="M${centerX - size * 0.08} ${centerY * 1.35} Q${centerX - size * 0.15} ${centerY * 1.45} ${centerX - size * 0.25} ${centerY * 1.5}"/>
    <!-- 오른쪽 다리들 -->
    <path d="M${centerX + size * 0.08} ${centerY * 1.15} Q${centerX + size * 0.2} ${centerY * 1.0} ${centerX + size * 0.28} ${centerY * 0.9}"/>
    <path d="M${centerX + size * 0.1} ${centerY * 1.2} Q${centerX + size * 0.22} ${centerY * 1.15} ${centerX + size * 0.32} ${centerY * 1.1}"/>
    <path d="M${centerX + size * 0.1} ${centerY * 1.28} Q${centerX + size * 0.2} ${centerY * 1.3} ${centerX + size * 0.3} ${centerY * 1.35}"/>
    <path d="M${centerX + size * 0.08} ${centerY * 1.35} Q${centerX + size * 0.15} ${centerY * 1.45} ${centerX + size * 0.25} ${centerY * 1.5}"/>
  </g>

  <!-- 거미 눈 -->
  <circle cx="${centerX - size * 0.025}" cy="${centerY * 1.08}" r="${size * 0.015}" fill="white"/>
  <circle cx="${centerX + size * 0.025}" cy="${centerY * 1.08}" r="${size * 0.015}" fill="white"/>
  <circle cx="${centerX - size * 0.025}" cy="${centerY * 1.08}" r="${size * 0.008}" fill="black"/>
  <circle cx="${centerX + size * 0.025}" cy="${centerY * 1.08}" r="${size * 0.008}" fill="black"/>

  <!-- 텍스트 "SPIDER" -->
  <text x="${centerX}" y="${centerY * 1.75}" text-anchor="middle" font-size="${size * 0.08}" font-weight="bold" fill="url(#gold)" font-family="Arial, sans-serif">SPIDER</text>
</svg>`;
};

async function generateIcons() {
  const publicDir = path.join(__dirname, '..', 'public');

  // 512x512 아이콘 생성
  const svg512 = createSpiderIcon(512);
  await sharp(Buffer.from(svg512))
    .png()
    .toFile(path.join(publicDir, 'logo512.png'));
  console.log('Created logo512.png');

  // 192x192 아이콘 생성
  const svg192 = createSpiderIcon(192);
  await sharp(Buffer.from(svg192))
    .png()
    .toFile(path.join(publicDir, 'logo192.png'));
  console.log('Created logo192.png');

  // favicon.ico 생성 (64x64 PNG를 ICO로)
  const svg64 = createSpiderIcon(64);
  await sharp(Buffer.from(svg64))
    .png()
    .toFile(path.join(publicDir, 'favicon.png'));

  // PNG를 ICO로 변환 (sharp는 ICO를 직접 지원하지 않으므로 PNG를 사용)
  // favicon.ico 대신 favicon.png를 사용하도록 HTML 수정 필요
  // 또는 32x32 PNG를 favicon으로 사용
  const svg32 = createSpiderIcon(32);
  await sharp(Buffer.from(svg32))
    .png()
    .toFile(path.join(publicDir, 'favicon-32.png'));
  console.log('Created favicon-32.png');

  // Apple touch icon (180x180)
  const svg180 = createSpiderIcon(180);
  await sharp(Buffer.from(svg180))
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Created apple-touch-icon.png');

  console.log('All icons generated successfully!');
}

generateIcons().catch(console.error);
