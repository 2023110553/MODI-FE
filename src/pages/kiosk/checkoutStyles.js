import { kioskImage } from './menu.js'
import { styled } from 'styled-components'

export const CheckoutLayout = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 0;

  .checkout-title {
    height: 18cqw; flex: none; display: grid; place-content: center; gap: .5cqw; text-align: center;
    font-size: 3.7cqw;
  }
  .checkout-title h1 { font-size: 4.65cqw; line-height: 1.25; }
  .detail-actions { margin-top: auto; }
  .detail-actions button:only-child { grid-column: 1 / -1; }
  .detail-actions button:disabled { opacity: .65; }

  .dessert-screen { position: relative; flex: 1; }
  .dessert-title {
    position: absolute; inset: calc(98 * 100cqw / 1080) 0 auto;
    text-align: center; font-size: calc(60 * 100cqw / 1080); font-weight: 600; line-height: normal;
  }
  .dessert-grid {
    position: absolute; top: calc(287 * 100cqw / 1080); left: calc(40 * 100cqw / 1080);
    display: grid; grid-template-columns: repeat(2, calc(491 * 100cqw / 1080));
    gap: calc(20 * 100cqw / 1080) calc(19 * 100cqw / 1080);
  }
  .dessert-grid article {
    position: relative; height: calc(580 * 100cqw / 1080);
    font-size: calc(36 * 100cqw / 1080); line-height: normal; text-align: center;
  }
  .dessert-grid article::after {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    border: calc(100cqw / 1080) solid var(--ink); border-radius: calc(30 * 100cqw / 1080);
  }
  .dessert-image {
    position: relative; height: calc(431 * 100cqw / 1080); overflow: hidden;
    border-radius: calc(30 * 100cqw / 1080) calc(30 * 100cqw / 1080) 0 0;
    mask-size: 100% 100%; mask-repeat: no-repeat;
  }
  .dessert-image img { position: absolute; display: block; object-fit: fill; }
  .dessert-grid article p { position: absolute; inset: calc(456 * 100cqw / 1080) 0 auto; white-space: nowrap; }
  .dessert-grid article:nth-child(3) p { transform: scaleX(.94); }
  .dessert-quantity {
    position: absolute; top: calc(516 * 100cqw / 1080); left: calc(103 * 100cqw / 1080);
    display: grid; grid-template-columns: calc(175 * 100cqw / 1080) calc(28 * 100cqw / 1080) calc(54 * 100cqw / 1080) calc(28 * 100cqw / 1080);
    align-items: center; text-align: left;
  }
  .dessert-price { justify-self: start; white-space: nowrap; }
  .dessert-quantity output { text-align: center; }
  .dessert-quantity button {
    position: relative; display: grid; place-items: center; width: calc(28 * 100cqw / 1080);
    height: calc(28 * 100cqw / 1080); font-size: calc(30 * 100cqw / 1080); font-weight: 300; line-height: 1;
  }
  .dessert-quantity button img { position: absolute; inset: 0; width: 100%; height: auto; }
  .dessert-quantity button span { position: relative; }
  .more-menu {
    position: absolute; top: calc(1502 * 100cqw / 1080); left: calc(40 * 100cqw / 1080);
    width: calc(1001 * 100cqw / 1080); height: calc(160 * 100cqw / 1080); background: #f2f3e9;
    font-weight: 600; font-size: calc(40 * 100cqw / 1080);
  }
  .more-menu span { color: var(--accent); }
  .dessert-screen .dessert-actions {
    position: absolute; inset: auto 0 0; grid-template-columns: calc(340 * 100cqw / 1080) 1fr;
    gap: calc(16 * 100cqw / 1080); height: calc(160 * 100cqw / 1080);
  }
  .dessert-actions button { font-weight: 600; }

  .review-screen { --u: calc(100cqw / 1080); position: relative; flex: 1; }
  .review-title {
    position: absolute; inset: calc(56 * var(--u)) 0 auto;
    text-align: center; font-size: calc(50 * var(--u)); font-weight: 600; line-height: normal;
  }
  .cart-heading {
    position: absolute; inset: calc(193 * var(--u)) 0 auto; height: calc(76 * var(--u));
    background: #f2f3e9; color: black; font-size: calc(40 * var(--u)); font-weight: 300; line-height: normal;
  }
  .cart-heading span { position: absolute; top: calc(14 * var(--u)); }
  .cart-heading span:nth-child(1) { left: calc(149 * var(--u)); }
  .cart-heading span:nth-child(2) { left: calc(730 * var(--u)); transform: translateX(-50%); }
  .cart-heading span:nth-child(3) { left: calc(936 * var(--u)); transform: translateX(-50%); }
  .review-cart {
    position: absolute; inset: calc(269 * var(--u)) calc(39 * var(--u)) auto;
    height: calc(756 * var(--u)); overflow: auto; scrollbar-width: none;
  }
  .review-cart .cart-row {
    position: relative; display: block; height: calc(124 * var(--u)); padding: 0;
    font-size: calc(40 * var(--u)); line-height: normal;
  }
  .review-cart .cart-row > img {
    position: absolute; top: calc(24 * var(--u)); left: calc(1 * var(--u)); width: calc(78 * var(--u));
    aspect-ratio: 1; object-fit: cover;
  }
  .review-cart .cart-item-name { position: absolute; top: calc(19 * var(--u)); left: calc(109 * var(--u)); max-width: calc(505 * var(--u)); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .review-cart .cart-item-name small { margin: calc(8 * var(--u)) 0 0 calc(4 * var(--u)); font-size: calc(24 * var(--u)); overflow: hidden; text-overflow: ellipsis; }
  .review-cart .quantity { position: absolute; top: calc(42 * var(--u)); left: calc(634 * var(--u)); width: calc(122.644 * var(--u)); height: calc(49.294 * var(--u)); display: flex; justify-content: space-between; gap: 0; }
  .review-cart .quantity button, .review-cart .remove-item {
    position: relative; display: grid; place-items: center; width: calc(31.294 * var(--u));
    height: calc(31.294 * var(--u)); flex: none; border: 0; background: transparent; opacity: 1;
    font-size: calc(30 * var(--u)); font-weight: 300; line-height: 1;
  }
  .review-cart .quantity img, .review-cart .remove-item img { position: absolute; inset: 0; width: 100%; height: auto; }
  .review-cart .quantity button span { position: relative; }
  .review-cart .cart-price { position: absolute; top: calc(43 * var(--u)); right: calc(.586 * var(--u)); gap: calc(14.12 * var(--u)); color: black; }

  .snack-suggestions { position: absolute; inset: calc(1025 * var(--u)) 0 auto; height: calc(357 * var(--u)); background: #f2f3e9; }
  .snack-suggestions h2 { position: absolute; top: calc(19 * var(--u)); left: calc(40 * var(--u)); font-size: calc(40 * var(--u)); font-weight: 400; line-height: normal; }
  .snack-suggestions > div {
    position: absolute; top: calc(96 * var(--u)); left: calc(40 * var(--u));
    display: grid; grid-template-columns: repeat(4, calc(225.835 * var(--u))); gap: calc(32.555 * var(--u));
  }
  .snack-suggestions button { position: relative; height: calc(231 * var(--u)); border: calc(100cqw / 1080) solid var(--ink); font-size: calc(24 * var(--u)); line-height: normal; }
  .snack-add {
    position: absolute; right: calc(9.87 * var(--u)); top: calc(10.47 * var(--u)); display: grid; place-items: center;
    width: calc(31.835 * var(--u)); height: calc(31.294 * var(--u)); color: var(--paper);
    font-size: calc(30 * var(--u)); font-weight: 300; line-height: 1; isolation: isolate;
  }
  .snack-add img { position: absolute; inset: 0; width: 100%; height: auto; z-index: -1; }
  .snack-image {
    position: absolute; left: 50%; top: calc(21.66 * var(--u)); transform: translateX(-50%); width: calc(78.67 * var(--u));
    aspect-ratio: 1; border-radius: 50%; overflow: hidden;
  }
  .snack-image img { position: absolute; left: calc(-41.873 * var(--u)); top: calc(-21.57 * var(--u)); width: calc(162.415 * var(--u)); height: calc(121.812 * var(--u)); object-fit: cover; }
  .snack-suggestions button p { position: absolute; inset: calc(121 * var(--u)) calc(20 * var(--u)) auto; }
  .snack-suggestions button p:last-child { top: calc(189 * var(--u)); }

  .review-total {
    position: absolute; inset: calc(1382 * var(--u)) 0 auto; height: calc(160 * var(--u));
    display: grid; grid-template-columns: calc(323 * var(--u)) calc(364 * var(--u)) 1fr;
    align-items: center; background: var(--sage); color: var(--paper); font-size: calc(40 * var(--u)); font-weight: 600;
  }
  .review-total > strong { padding-left: calc(40 * var(--u)); }
  .review-total div { display: flex; justify-content: space-between; align-items: baseline; padding-right: calc(48 * var(--u)); }
  .review-total div + div { padding-left: calc(26 * var(--u)); padding-right: calc(40 * var(--u)); border-left: calc(100cqw / 1080) solid #d5ded7; }
  .review-total div strong { font-size: calc(60 * var(--u)); font-weight: 800; }
  .review-total small { font-size: calc(40 * var(--u)); font-weight: 600; }
  .review-screen .review-actions {
    position: absolute; inset: calc(1557 * var(--u)) 0 auto; height: calc(160 * var(--u));
    grid-template-columns: calc(532 * var(--u)) 1fr; gap: calc(16 * var(--u));
  }
  .review-actions button { font-weight: 600; }

  .payment-total {
    position: relative; flex: 0 0 calc(193 * var(--u)); display: flex; justify-content: space-between; align-items: flex-start;
    padding: calc(39 * var(--u)) calc(40 * var(--u)) 0; text-align: center; font-size: calc(40 * var(--u)); color: black;
  }
  .payment-total strong { display: block; font-weight: 600; }
  .payment-total span:last-child { color: var(--accent); }
  .payment-methods { position: relative; flex: 0 0 calc(1351 * var(--u)); background: #f2f3e9; }
  .payment-methods h1 { position: absolute; inset: calc(74 * var(--u)) 0 auto; text-align: center; font-size: calc(50 * var(--u)); font-weight: 600; }
  .payment-grid button {
    position: absolute; display: flex; align-items: center; justify-content: center; flex-direction: column;
    width: calc(532 * var(--u)); height: calc(250 * var(--u)); box-shadow: inset 0 0 0 var(--u) #020352ba;
    background: var(--paper); font-weight: 500; font-size: calc(40 * var(--u)); line-height: normal;
  }
  .payment-grid button small { display: block; font-weight: 400; font-size: calc(28 * var(--u)); }
  .payment-grid .wide { width: 100%; flex-direction: row; }
  .payment-grid button:nth-child(1) { top: calc(199 * var(--u)); }
  .payment-grid button:nth-child(2) { top: calc(467 * var(--u)); }
  .payment-grid button:nth-child(3) { top: calc(467 * var(--u)); left: calc(539 * var(--u)); font-size: calc(36 * var(--u)); }
  .payment-grid button:nth-child(4) { top: calc(735 * var(--u)); }
  .payment-grid button:nth-child(5) { top: calc(1003 * var(--u)); font-size: calc(34 * var(--u)); }
  .payment-grid button:nth-child(6) { top: calc(1003 * var(--u)); left: calc(548 * var(--u)); }
  .payment-grid button:nth-child(3) img { width: calc(128 * var(--u)); height: calc(72 * var(--u)); object-fit: cover; }
  .payment-grid button:nth-child(5) img { width: calc(151 * var(--u)); height: calc(73 * var(--u)); object-fit: cover; }
  .payment-logo { display: block; background: url('${kioskImage('payment-logos')}') no-repeat; }
  .card-logo { position: absolute; left: calc(422 * var(--u)); top: calc(82 * var(--u)); width: calc(100 * var(--u)); height: calc(87 * var(--u)); background-size: 237.73% 100%; background-position: right center; }
  .payment-grid button:nth-child(1) { padding-left: calc(85 * var(--u)); }
  .easy-payment > span:first-child { position: absolute; left: calc(340 * var(--u)); top: calc(62 * var(--u)); }
  .easy-payment img { display: block; width: calc(131 * var(--u)); height: calc(50 * var(--u)); object-fit: cover; }
  .naver-logo { position: absolute; top: calc(35 * var(--u)); left: calc(8 * var(--u)); width: calc(116 * var(--u)); height: calc(91 * var(--u)); background-size: 214.6% 100%; background-position: 15% center; }
  .easy-payment > span + span { position: absolute; left: calc(480 * var(--u)); top: calc(69 * var(--u)); text-align: center; }

  .card-payment { --u: calc(100cqw / 1080); position: relative; flex: 1; }
  .card-title { position: relative; height: calc(315 * var(--u)); text-align: center; }
  .card-title h1 { position: absolute; inset: calc(58 * var(--u)) 0 auto; font-size: calc(50 * var(--u)); font-weight: 600; line-height: normal; }
  .card-title p { position: absolute; inset: calc(127 * var(--u)) 0 auto; font-size: calc(40 * var(--u)); line-height: calc(56 * var(--u)); }
  .card-instructions { position: relative; height: calc(1351 * var(--u)); background: #f2f3e9; text-align: center; }
  .card-instructions > p:not(.order-warning) { position: absolute; inset: calc(607 * var(--u)) 0 auto; font-size: calc(50 * var(--u)); line-height: normal; white-space: nowrap; }
  .card-instructions .order-warning { inset: calc(1159 * var(--u)) 0 auto; }
  .card-payment > .detail-actions { position: absolute; inset: auto 0 0; height: calc(160 * var(--u)); }
  .card-payment > .detail-actions button { border-color: #020352ba; font-weight: 600; }
  .payment-overlay { position: absolute; inset: calc(-78 * var(--u)) 0 0; background: rgb(32 53 43 / 30%); }
  .payment-notice {
    position: absolute; left: calc(257 * var(--u)); top: calc(681 * var(--u)); width: calc(565 * var(--u)); height: calc(638 * var(--u));
    box-shadow: inset 0 0 0 calc(100cqw / 1080) var(--ink); background: var(--paper); color: black; text-align: center; line-height: normal;
  }
  .payment-notice h2 {
    position: absolute; inset: calc(82 * var(--u)) 0 auto;
    font-size: calc(50 * var(--u)); font-weight: 400;
  }
  .payment-notice[data-stage='remove-card']::after {
    content: ''; position: absolute; top: calc(192 * var(--u)); left: 50%; transform: translateX(-50%);
    width: calc(385 * var(--u)); height: var(--u); background: var(--ink);
  }
  .payment-notice p { position: absolute; inset: calc(366 * var(--u)) 0 auto; font-size: calc(36 * var(--u)); white-space: nowrap; }
  .payment-notice[data-stage='bell'] p { top: calc(423 * var(--u)); }
  .payment-dots { position: absolute; top: calc(196 * var(--u)); left: calc(213 * var(--u)); width: calc(141 * var(--u)); height: auto; }
  .complete-message { flex: 1; position: relative; text-align: center; color: black; font-size: calc(40 * var(--u)); }
  .complete-message h1 { position: absolute; inset: calc(659 * var(--u)) 0 auto; font-size: calc(50 * var(--u)); font-weight: 400; }
  .complete-message > p:not(.order-warning) { position: absolute; inset: calc(793 * var(--u)) 0 auto; }
  .order-warning {
    position: absolute; inset: calc(1352 * var(--u)) 0 auto; display: flex; align-items: center; justify-content: center;
    gap: calc(8 * var(--u)); color: var(--ink); font-size: calc(50 * var(--u));
  }
  .order-warning img { width: 5.2cqw; height: auto; }
  .detail-actions.receipt-actions { grid-template-columns: calc(394 * var(--u)) 1fr; }
`
