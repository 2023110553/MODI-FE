import { kioskImage } from './menu.js'

export default function CartRows({ items, onQuantity, onRemove, review = false }) {
  return items.map((item) => (
    <div className="cart-row" key={item.key}>
      <img src={kioskImage(item.image)} alt="" />
      <div className="cart-item-name">{item.name}<small>{item.option}</small></div>
      <div className="quantity">
        <button disabled={item.quantity === 1} onClick={() => onQuantity(item.key, -1)} aria-label={`${item.name} 수량 줄이기`}>
          <img src={kioskImage(review ? 'review-quantity' : 'dessert-quantity', 'svg')} alt="" /><span aria-hidden="true">-</span>
        </button>
        <output>{item.quantity}</output>
        <button onClick={() => onQuantity(item.key, 1)} aria-label={`${item.name} 수량 늘리기`}>
          <img src={kioskImage(review ? 'review-quantity' : 'dessert-quantity', 'svg')} alt="" /><span aria-hidden="true">+</span>
        </button>
      </div>
      <div className="cart-price">
        {(item.quantity * item.price).toLocaleString('ko-KR')}
        <button className="remove-item" onClick={() => onRemove(item.key)} aria-label={`${item.name} 삭제`}>
          <img src={kioskImage(review ? 'review-remove' : 'cart-remove', 'svg')} alt="" />
        </button>
      </div>
    </div>
  ))
}
