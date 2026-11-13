import { css } from 'styled-components'

export const contrastStyles = css`
  &&&[data-contrast='true'] {
    --ink: #10251b;
    --paper: #fffdf5;
    --surface: #eef2ef;
    --sage: #173c2b;
    --accent: #813300;
    --line: #10251b;
    --contrast-action: #ffb366;
    --contrast-stroke: max(2px, calc(3 * var(--u)));
    --contrast-disabled-ink: #4b554f;
    --contrast-disabled-bg: #e0e5e1;

    .detail-totals .amount, .cart-price, .payment-total,
    .complete-message, .payment-notice, .cart-heading {
      color: var(--ink);
    }

    .catalog, .detail-summary, .personal-choices, .cart-heading,
    .snack-suggestions, .payment-methods, .card-instructions {
      background: var(--surface);
    }

    .toolbar { color: var(--ink); font-weight: 650; }
    .toolbar button, .toolbar-end span {
      border-color: var(--ink);
      box-shadow: inset 0 0 0 1px var(--ink);
      background: var(--paper);
    }
    .toolbar button img, .toolbar-end img, .order-warning img {
      filter: grayscale(1) brightness(.3);
    }
    .payment-dots { filter: brightness(.5); }

    .start-actions button { background: var(--sage); color: var(--paper); }
    .start-actions button + button img { filter: brightness(0); }
    .start-actions button + button, .order-bar button,
    .detail-actions button + button, .detail-actions button:only-child {
      background: var(--contrast-action);
      color: var(--ink);
      box-shadow: inset 0 0 0 var(--contrast-stroke) var(--ink);
    }
    .order-bar, .review-total { background: var(--sage); color: var(--paper); }
    .order-bar div + div::before, .review-total div + div { border-color: var(--paper); }

    .product strong, .product-price, .categories button,
    .subcategories button, .detail-info h2, .cart-heading,
    .personal-heading button, .personal-choices button,
    .bubble-choice, .quantity button span, .dessert-quantity button span {
      font-weight: 650;
    }
    .detail-fields fieldset button, .detail-actions button,
    .payment-grid button, .more-menu { font-weight: 650; }
    .detail-actions button, .detail-fields fieldset button {
      background: var(--paper);
      color: var(--ink);
    }
    .detail-actions button + button, .detail-actions button:only-child {
      background: var(--contrast-action);
    }

    .product::after, .detail-fields fieldset button,
    .detail-actions button, .personal-heading button,
    .personal-choices button, .cart-scroll-buttons button,
    .payment-grid button, .payment-notice {
      box-shadow: inset 0 0 0 var(--contrast-stroke) var(--ink);
    }
    .dessert-grid article::after, .snack-suggestions button {
      border-width: var(--contrast-stroke);
    }
    .badge { z-index: 1; background: var(--accent); color: var(--paper); font-weight: 700; }
    .badge[data-badge='Best'] { background: var(--ink); }

    .categories button[aria-pressed='true'] {
      background: var(--ink); color: var(--paper);
      box-shadow: 0 0 0 2px var(--ink);
      text-decoration: underline; text-underline-offset: .2em;
    }
    .subcategories button[aria-pressed='true'],
    .detail-fields fieldset button[aria-pressed='true'],
    .personal-choices button[aria-pressed='true'] {
      background: var(--ink); color: var(--paper);
      font-weight: 750;
      text-decoration: underline; text-underline-offset: .2em;
    }
    .step-dot { border-width: max(2px, calc(2 * var(--u))); }
    .steps li::before { border-top-width: 2px; }
    .steps li[aria-current='step'] { font-weight: 750; }

    .detail-fields .personal-options, .more-menu {
      background: var(--paper); color: var(--ink);
      box-shadow: inset 0 0 0 var(--contrast-stroke) var(--ink);
    }
    .bubble-choice img { visibility: hidden; }
    .bubble-choice input {
      opacity: 1;
      height: calc(28 * var(--u));
      align-self: center;
      accent-color: var(--ink);
      cursor: pointer;
    }

    .quantity button, .dessert-quantity button {
      background: var(--paper); color: var(--ink);
      box-shadow: inset 0 0 0 2px var(--ink);
      border-radius: 50%;
    }
    .quantity button img, .dessert-quantity button img { visibility: hidden; }
    .remove-item {
      background: var(--paper); color: var(--ink);
      box-shadow: inset 0 0 0 2px var(--ink);
      border-radius: 50%;
    }
    .remove-item { position: relative; }
    .remove-item img { position: absolute; inset: 0; visibility: hidden; }
    .remove-item::after { content: '×'; font-weight: 750; line-height: 1; }
    .snack-add { background: var(--ink); color: var(--paper); border-radius: 50%; font-weight: 700; }
    .snack-add img { visibility: hidden; }
    button:disabled, .detail-actions button:disabled {
      opacity: 1;
      color: var(--contrast-disabled-ink);
      background: var(--contrast-disabled-bg);
      box-shadow: none;
      outline: 2px dashed var(--contrast-disabled-ink);
      outline-offset: -2px;
    }
    .product:disabled::after { background: transparent; box-shadow: none; }
    .pagination button:disabled {
      background: transparent;
      outline: none;
      text-decoration: line-through;
    }
    :focus-visible, .bubble-choice:has(input:focus-visible) {
      outline: 3px solid var(--ink);
      outline-offset: 3px;
    }
    .order-bar button:focus-visible {
      outline: 4px solid var(--paper);
      outline-offset: calc(-4px - var(--contrast-stroke));
    }
  }
`
