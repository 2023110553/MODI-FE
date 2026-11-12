import { createGlobalStyle, styled } from 'styled-components'
import interFont from '../../assets/kiosk/InterVariable.woff2'
import { contrastStyles } from './contrastStyles.js'

export const KioskGlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Inter;
    src: url('${interFont}') format('woff2');
    font-weight: 100 900;
    font-display: swap;
  }
  body { margin: 0; background: #20352b; }
`

export const KioskFrame = styled.main`
  --u: calc(100cqw / 1080);
  --ink: #20352b;
  --paper: #fffdf5;
  --surface: #eff0e6;
  --sage: #89998f;
  --accent: #ff933a;
  --line: #78877d;
  position: relative;
  container-type: inline-size;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: min(100vw, 56.25dvh, 1080px);
  aspect-ratio: 9 / 16;
  margin: auto;
  background: var(--paper);
  color: var(--ink);
  font-family: Inter, system-ui, sans-serif;

  *, *::before, *::after { box-sizing: inherit; }
  button { border: 0; padding: 0; background: transparent; color: inherit; font: inherit; cursor: pointer; }
  button:disabled { cursor: default; }
  :focus-visible { outline: 2px solid #3260d9; outline-offset: 2px; }
  h1, h2, p { margin: 0; }

  .preview { position: absolute; z-index: 2; inset: 0 auto auto 0; padding: .5rem; background: var(--ink); color: white; font-size: .8rem; }
  .preview summary { cursor: pointer; }
  .preview label { display: block; }

  .hero { position: relative; height: 143.15cqw; overflow: hidden; }
  .hero img { position: absolute; inset: -7.13cqw auto auto -2.41cqw; width: 104.91cqw; height: 157.41cqw; object-fit: cover; opacity: 0; transition: opacity 350ms ease; }
  .hero img[data-current='true'] { opacity: 1; }
  .hero img[data-photo='hero-mango'] { inset: calc(-189 * var(--u)) auto auto calc(-51 * var(--u)); width: calc(1182 * var(--u)); height: calc(1773 * var(--u)); }
  .hero img[data-photo='hero-matcha'] { inset: calc(218.5 * var(--u)) auto auto calc(-277.5 * var(--u)); width: calc(1665 * var(--u)); height: calc(1110 * var(--u)); transform: rotate(-90deg); }
  .hero img[data-photo='hero-coffee'] { inset: calc(-151 * var(--u)) auto auto calc(-47 * var(--u)); width: calc(1173.167 * var(--u)); height: calc(1759.75 * var(--u)); }
  @media (prefers-reduced-motion: reduce) { .hero img { transition: none; } }
  .toolbar {
    display: flex;
    align-items: flex-start;
    gap: .65cqw;
    height: 7.22cqw;
    flex: 0 0 7.22cqw;
    padding: 1.02cqw 1.39cqw 0;
    font-size: 3.7cqw;
    font-weight: 300;
    line-height: 1.15;
    color: var(--accent);
  }
  .toolbar button, .toolbar-end span {
    display: inline-flex;
    align-items: center;
    gap: .35cqw;
    border: 1px solid #dedfd6;
    background: #fff;
    white-space: nowrap;
  }
  .toolbar button img, .toolbar-end img { width: auto; height: 3.7cqw; }
  .hero + .toolbar { height: 6.85cqw; flex-basis: 6.85cqw; }
  .toolbar-end { display: flex; gap: .65cqw; margin-left: auto; }
  .flags { display: flex; gap: .65cqw; }
  .flags img { width: 6.67cqw; height: 4.44cqw; object-fit: cover; border: 1px solid #dedfd6; }

  .start-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 1.48cqw; height: 27.78cqw; }
  .start-actions button {
    display: flex; align-items: center; justify-content: center; gap: 1cqw;
    font-size: 5.56cqw; font-weight: 800; color: var(--paper); background: var(--sage);
  }
  .start-actions button + button { background: var(--accent); }
  .start-actions img { width: auto; height: 8.5cqw; }

  .steps {
    display: grid; grid-template-columns: repeat(3, 1fr);
    height: 11.3cqw; margin: 0 14%; padding: 1.8cqw 0 0;
    list-style: none; text-align: center; font-size: 2.78cqw;
  }
  .steps li { position: relative; }
  .steps li::before {
    content: ''; position: absolute; top: 6.1cqw; left: 50%; width: 100%; border-top: 1px dotted var(--line);
  }
  .steps li:last-child::before { display: none; }
  .step-dot {
    position: relative; display: grid; place-items: center; margin: .75cqw auto 0; width: 2.75cqw; aspect-ratio: 1;
    border: 1px solid var(--line); border-radius: 50%; background: var(--paper);
  }
  .steps li[data-complete='true'] .step-dot { background: var(--ink); }
  .step-dot img { width: 100%; height: auto; }
  .categories { display: flex; align-items: stretch; gap: 4cqw; height: 6.48cqw; padding: 0 3.9cqw; }
  .categories button { position: relative; white-space: nowrap; font-size: 2.78cqw; }
  .categories button[aria-pressed='true']::after {
    content: ''; position: absolute; inset: auto 0 0; height: .4cqw; border-radius: 1cqw; background: var(--ink);
  }
  .catalog { position: relative; flex: 1; display: flex; flex-direction: column; min-height: 0; background: #f2f3e9; padding: 2.6cqw 0 0; }
  .catalog h1 {
    width: fit-content; margin-left: 4.9cqw; padding: .25cqw 1cqw; border-radius: 2cqw;
    background: var(--ink); color: var(--paper); font-size: 2.78cqw; font-weight: 400;
  }
  .subcategories { display: flex; align-items: center; gap: 2.6cqw; padding-inline: 4.9cqw; height: 4.45cqw; }
  .subcategories button { padding: .2cqw .65cqw; border-radius: 2cqw; white-space: nowrap; font-size: 2.78cqw; }
  .subcategories button[aria-pressed='true'] { background: var(--ink); color: var(--paper); }
  .product-grid {
    position: absolute; top: calc(120 * 100cqw / 1080); left: calc(108 * 100cqw / 1080);
    display: grid; grid-template-columns: repeat(4, calc(212 * 100cqw / 1080));
    gap: calc(12 * 100cqw / 1080) calc(8 * 100cqw / 1080);
  }
  .product {
    position: relative; display: block; height: calc(239 * 100cqw / 1080);
    background: var(--paper); font-size: calc(24 * 100cqw / 1080); text-align: center; line-height: normal;
  }
  .product::after {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    box-shadow: inset 0 0 0 calc(100cqw / 1080) var(--ink);
  }
  .product:disabled::after { background: #20352b1a; }
  .product-image {
    position: absolute; left: 50%; top: calc(23 * 100cqw / 1080);
    transform: translateX(-50%); border-radius: 50%; overflow: hidden;
  }
  .product-image img { position: absolute; object-fit: cover; display: block; }
  .product strong, .product-price { position: absolute; inset-inline: calc(4 * 100cqw / 1080); }
  .product strong {
    display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2;
    font-weight: 400; line-height: calc(29 * 100cqw / 1080); word-break: keep-all;
  }
  .product strong[data-lines='fixed'] { display: block; white-space: pre; overflow: visible; }
  .product strong[data-compact='true'] { inset-inline: calc(-4 * var(--u)); transform: scaleX(.93); }
  .product-price { top: calc(204 * 100cqw / 1080); }
  .badge { position: absolute; top: 0; left: 0; background: var(--accent); color: white; padding: 0 .2cqw; font-size: 1.85cqw; }
  .badge[data-badge='Best'] { background: var(--ink); }
  .pagination { position: absolute; inset: calc(1147 * 100cqw / 1080) 0 auto; display: flex; align-items: center; justify-content: center; gap: 2.4cqw; font-size: 1.85cqw; }
  .pagination button { padding: .6cqw 0; }
  .cart-preview { position: relative; display: flex; height: calc(270 * var(--u)); padding: 0 calc(144 * var(--u)) 0 calc(40 * var(--u)); font-size: calc(30 * var(--u)); }
  .cart-scroll { flex: 1; overflow: auto; scrollbar-width: none; }
  .cart-scroll-buttons { position: absolute; top: calc(27 * var(--u)); left: calc(975 * var(--u)); display: grid; width: calc(65 * var(--u)); gap: calc(7 * var(--u)); }
  .cart-scroll-buttons button { height: calc(104 * var(--u)); box-shadow: inset 0 0 0 var(--u) var(--ink); background: white; }
  .cart-row { position: relative; height: calc(100 * var(--u)); box-shadow: inset 0 calc(-1 * var(--u)) var(--ink); }
  .cart-scroll .cart-row > img { position: absolute; top: calc(15 * var(--u)); left: 0; width: calc(70 * var(--u)); aspect-ratio: 1; object-fit: cover; border-radius: 50%; }
  .cart-scroll .cart-item-name { position: absolute; top: calc(18 * var(--u)); left: calc(91 * var(--u)); max-width: calc(450 * var(--u)); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .cart-scroll .quantity { position: absolute; top: calc(30 * var(--u)); left: calc(567 * var(--u)); width: calc(110 * var(--u)); height: calc(38 * var(--u)); justify-content: space-between; gap: 0; }
  .cart-price { display: flex; justify-content: flex-end; align-items: center; gap: calc(14 * var(--u)); }
  .cart-scroll .cart-price { position: absolute; top: calc(32 * var(--u)); right: 0; color: black; }
  .remove-item { display: grid; place-items: center; width: calc(28 * var(--u)); aspect-ratio: 1; }
  .remove-item img { width: 100%; height: auto; }
  .cart-row small { display: block; font-size: calc(20 * var(--u)); }
  .order-bar { display: grid; grid-template-columns: 36% 35% 29%; min-height: 14.81cqw; background: var(--sage); color: var(--paper); }
  .order-bar div { position: relative; display: flex; align-items: center; justify-content: space-between; padding: 0 2.4cqw; font-size: 3.7cqw; font-weight: 650; }
  .order-bar div + div::before { content: ''; position: absolute; left: 0; top: 32%; height: 48%; border-left: 1px solid #d5ded7; }
  .order-bar strong { font-size: 5.56cqw; font-weight: 800; }
  .order-bar small { font-size: 3.7cqw; }
  .order-bar button { background: var(--accent); font-size: 3.7cqw; font-weight: 750; }

  .product-detail { width: 100cqw; max-width: none; max-height: 100dvh; margin: 0 auto; padding: 0; border: 0; color: var(--ink); background: var(--paper); }
  .product-detail::backdrop { background: #20352b; }
  .detail-screen { position: relative; height: calc(1920 * var(--u)); font-size: calc(30 * var(--u)); }
  .detail-summary { position: absolute; inset: calc(74 * var(--u)) 0 auto; height: calc(347 * var(--u)); background: #f2f3e9; }
  .detail-image { position: absolute; top: calc(59 * var(--u)); left: calc(40 * var(--u)); width: calc(230 * var(--u)); height: calc(230 * var(--u)); overflow: hidden; mask-size: 100% 100%; mask-repeat: no-repeat; }
  .detail-image img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .detail-image[data-figma-crop='true'] img {
    position: absolute; left: calc(-19.714 * var(--u)); top: calc(-35.485 * var(--u));
    width: calc(252.343 * var(--u)); height: calc(272.057 * var(--u));
  }
  .detail-info h2 { position: absolute; top: calc(51 * var(--u)); left: calc(301 * var(--u)); right: calc(40 * var(--u)); font-size: calc(40 * var(--u)); font-weight: 400; line-height: normal; }
  .detail-info p { position: absolute; top: calc(107 * var(--u)); left: calc(302 * var(--u)); right: calc(40 * var(--u)); font-size: calc(30 * var(--u)); }
  .quantity { display: flex; align-items: center; gap: 1.4cqw; }
  .quantity button { position: relative; display: grid; place-items: center; width: calc(28 * var(--u)); aspect-ratio: 1; border: 0; line-height: 1; }
  .quantity button img { position: absolute; inset: 0; width: 100%; height: auto; }
  .quantity button span { position: relative; font-size: calc(30 * var(--u)); font-weight: 300; }
  .detail-totals .quantity { position: absolute; top: calc(252 * var(--u)); left: calc(303 * var(--u)); height: calc(38 * var(--u)); gap: calc(12 * var(--u)); }
  .detail-totals .quantity button:first-of-type { margin-left: calc(6 * var(--u)); }
  .detail-totals .quantity output { min-width: calc(30 * var(--u)); text-align: center; }
  .detail-totals .amount { position: absolute; top: calc(249 * var(--u)); right: calc(43 * var(--u)); display: flex; gap: calc(6 * var(--u)); align-items: center; color: black; }
  .detail-totals .amount strong { margin-left: calc(31 * var(--u)); font-size: calc(60 * var(--u)); font-weight: 500; }
  .detail-fields { position: absolute; inset: calc(493 * var(--u)) calc(39 * var(--u)) calc(258 * var(--u)) calc(40 * var(--u)); }
  .detail-fields fieldset { margin: 0; padding: 0; border: 0; height: calc(240 * var(--u)); }
  .detail-fields legend { height: calc(68 * var(--u)); padding: 0; font-size: calc(40 * var(--u)); line-height: normal; }
  .detail-fields fieldset button { width: calc(389 * var(--u)); height: calc(100 * var(--u)); margin-right: calc(20 * var(--u)); box-shadow: inset 0 0 0 var(--u) var(--ink); font-size: calc(40 * var(--u)); }
  .detail-fields fieldset button[aria-pressed='true'] { background: var(--ink); color: var(--paper); }
  .detail-fields .temperature button { width: 47%; }
  .detail-fields .temperature button:only-of-type { width: calc(554 * var(--u)); }
  .detail-fields .temperature button[data-cold='true'][aria-pressed='true'] { background: #0093ee; box-shadow: none; }
  .detail-fields .personal-options { position: absolute; inset: auto 0 0; height: calc(100 * var(--u)); background: #ff933a80; font-size: calc(40 * var(--u)); }
  .detail-actions { display: grid; grid-template-columns: 1fr 1fr; gap: calc(16 * var(--u)); min-height: calc(160 * var(--u)); }
  .detail-actions button { box-shadow: inset 0 0 0 var(--u) #020352ba; font-size: calc(40 * var(--u)); font-weight: 600; }
  .detail-actions button + button { box-shadow: none; background: var(--accent); color: var(--paper); }
  .detail-screen > .detail-actions { position: absolute; inset: auto 0 0; }
  .personal-summary .amount { position: absolute; top: calc(201 * var(--u)); left: 0; right: 0; height: calc(95 * var(--u)); font-size: calc(36 * var(--u)); }
  .personal-summary .amount span { position: absolute; display: grid; white-space: nowrap; }
  .personal-summary .amount span:nth-of-type(1) { left: calc(301 * var(--u)); }
  .personal-summary .amount span:nth-of-type(2) { left: calc(599 * var(--u)); }
  .personal-summary .amount span:nth-of-type(3) { left: calc(896 * var(--u)); }
  .personal-summary .amount b { position: absolute; top: calc(22 * var(--u)); left: calc(556 * var(--u)); font-weight: 400; }
  .personal-summary .amount b:nth-of-type(2) { left: calc(853 * var(--u)); }
  .personal-summary .amount strong { font-weight: 400; }
  .personal-summary .amount span:last-child strong { color: var(--accent); font-weight: 700; }
  .personal-fields { position: absolute; inset: calc(444 * var(--u)) calc(39 * var(--u)) auto calc(40 * var(--u)); }
  .personal-heading { position: relative; height: calc(49 * var(--u)); text-align: center; font-size: calc(40 * var(--u)); }
  .personal-heading button { position: absolute; right: 0; top: calc(6 * var(--u)); width: calc(140 * var(--u)); height: calc(36 * var(--u)); box-shadow: inset 0 0 0 var(--u) var(--ink); background: white; font-size: calc(30 * var(--u)); font-weight: 200; }
  .personal-fields fieldset { border: 0; padding: 0; margin: 0; height: calc(216 * var(--u)); }
  .personal-fields legend { height: calc(68 * var(--u)); font-size: calc(40 * var(--u)); padding: 0; }
  .personal-choices { display: flex; justify-content: flex-end; align-items: center; gap: calc(15 * var(--u)); height: calc(100 * var(--u)); padding-inline: calc(16 * var(--u)); background: #f2f3e9; }
  .personal-choices button { width: calc(125 * var(--u)); height: calc(36 * var(--u)); box-shadow: inset 0 0 0 var(--u) var(--ink); background: white; font-weight: 200; }
  .personal-choices:has(button:nth-child(4)) button { width: calc(104 * var(--u)); }
  .personal-choices button[aria-pressed='true'] { background: var(--ink); color: var(--paper); }
  .personal-heading button span, .personal-choices button span {
    display: block; margin-inline: calc(-8 * var(--u)); white-space: nowrap; transform: scaleX(.9);
  }
  .bubble-choice { position: relative; cursor: pointer; display: flex; gap: calc(20 * var(--u)); align-items: center; margin-left: calc(7 * var(--u)); margin-right: auto; font-weight: 200; }
  .bubble-choice input { position: absolute; inset: 0 auto 0 0; width: calc(28 * var(--u)); margin: 0; opacity: 0; }
  .bubble-choice img { width: calc(28 * var(--u)); height: auto; border-radius: 50%; }
  .bubble-choice:has(input:checked) img { background: #ff933a80; }
  .bubble-choice:has(input:focus-visible) { outline: 2px solid #3260d9; }

  ${contrastStyles}
`
