<<<<<<< HEAD
# 信稀塾 HP（ホームページ）

**信稀塾～オンライン×対面式学習塾～** の公式サイトです。  
コンバージョン（公式LINEへの登録）に特化した構成になっています。

## 技術スタック

- React 18
- Vite 7
- React Router
- CSS（セクションごと）

## サイト構成（上から順）

| セクション | コンポーネント | 内容 |
|-----------|----------------|------|
| Hero | `sections/Hero.jsx` | ファーストビュー・フック・メインコピー・LINE CTA・講師画像 |
| Concept | `sections/Concept.jsx` | なぜオンライン×対面？ |
| Strengths | `sections/Strengths.jsx` | 信稀塾の3つの強み（毎日・毎週・毎月） |
| Comparison | `sections/Comparison.jsx` | 他塾比較表・ターゲットエリア |
| Instructors | `sections/Instructors.jsx` | 講師紹介（丸田・北川・写真・沿革） |
| Pricing | `sections/Pricing.jsx` | 料金表 |
| CtaLine | `sections/CtaLine.jsx` | 最終CTA（LINE特典・QR・ボタン） |

## 公式LINE

- **友だち追加URL**: `https://lin.ee/2RYl7ZX`（`src/config.js` で設定済み。スマホ・PCどちらからも追加可能）
- **画像**: 公式LINEのQRコード画像を `public/line-qr.png` として配置してください。
- **ロゴ**: 信稀塾ロゴ画像を `public/logo.png` として配置してください。（ヘッダー・ヒーローで使用）

## 開発の進め方

```bash
npm install
npm run dev    # http://localhost:5173
npm run build
npm run preview
```

## デザイン

- **ベース**: 青（ネイビー）
- **アクセント**: 黄・LINE緑（CTA）
- **参考**: [LAF Online](https://www.laf-online.com/) のようなモダンで熱量のある構成
- レスポンシブ（モバイルファースト）

`public/logo.png`（ロゴ）と `public/line-qr.png`（LINEのQRコード）を配置すると、ヘッダー・ヒーロー・最終CTAで表示されます。講師写真はプレースホルダーのまま差し替え可能です。
=======
# Shinkizyuku_HP
>>>>>>> da9a1e484f7177b50f87dff65ad73534fb02adae
