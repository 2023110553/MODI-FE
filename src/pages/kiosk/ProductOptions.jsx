import { useEffect, useRef, useState } from 'react'
import { kioskImage, won } from './menu.js'

const personalGroups = [
  ['물', ['물 많이', '물 보통', '물 적게', '물 없이']],
  ['얼음량', ['얼음 많이', '얼음 보통', '얼음 적게']],
  ['당도*', ['더 달게', '보통 당도', '덜 달게']],
]

function DetailImage({ product }) {
  return (
    <div className="detail-image" data-figma-crop={product.id === '피치 아이스티'} style={{
      maskImage: `url("${kioskImage('detail-image-mask', 'svg')}")`,
    }}>
      <img src={kioskImage(product.image)} alt="" />
    </div>
  )
}

export default function ProductOptions({ product, service, onClose, onAdd, children }) {
  const dialog = useRef(null)
  const [temperature, setTemperature] = useState(product.temperatures?.[0] ?? '')
  const [cup, setCup] = useState(service === '매장' ? '머그컵' : '일회용 컵')
  const [quantity, setQuantity] = useState(1)
  const [personal, setPersonal] = useState({})
  const [draft, setDraft] = useState(null)
  const drink = Boolean(product.temperatures)
  const selected = Object.values(personal).filter((value) => typeof value === 'string')
  const option = drink ? [temperature === '차갑게' ? '아이스' : '핫', '맥스', cup, ...selected, personal.bubble && '버블'].filter(Boolean).join(' | ') : ''
  const price = product.price + (personal.bubble ? 700 : 0)

  useEffect(() => {
    const element = dialog.current
    element.showModal()
    return () => element.close()
  }, [])

  function addItem() {
    onAdd({
      key: `${product.id}:${option}`,
      image: product.image ?? product.id,
      name: product.name,
      price,
      option,
      quantity,
    })
  }

  function personalChoices([label, values]) {
    return (
      <fieldset key={label}>
        <legend>{label}</legend>
        <div className="personal-choices">
          {values.map((value) => (
            <button key={value} aria-pressed={draft[label] === value} onClick={() => setDraft({ ...draft, [label]: value })}><span>{value}</span></button>
          ))}
        </div>
      </fieldset>
    )
  }

  if (draft) {
    const extra = draft.bubble ? 700 : 0
    return (
      <dialog className="product-detail" ref={dialog} aria-labelledby="product-title" onCancel={onClose}>
        <div className="detail-screen">
          {children}
          <section className="detail-summary personal-summary">
            <DetailImage product={product} />
            <div className="detail-info">
              <h2 id="product-title">{product.name}</h2>
              <div className="amount">
                <span>상품 금액<strong>{won(product.price * quantity)}</strong></span><b>+</b>
                <span>추가 금액<strong>{won(extra * quantity)}</strong></span><b>=</b>
                <span>주문 금액<strong>{won((product.price + extra) * quantity)}</strong></span>
              </div>
            </div>
          </section>
          <div className="personal-fields">
            <div className="personal-heading">퍼스널옵션<button onClick={() => setDraft({})}><span>선택초기화</span></button></div>
            {personalGroups.slice(0, 2).map(personalChoices)}
            <fieldset>
              <legend>버블</legend>
              <div className="personal-choices">
                <label className="bubble-choice">
                  <input type="checkbox" checked={Boolean(draft.bubble)} onChange={(event) => setDraft({ ...draft, bubble: event.target.checked })} />
                  <img src={kioskImage('bubble-check', 'svg')} alt="" />버블 +700원
                </label>
              </div>
            </fieldset>
            {personalChoices(personalGroups[2])}
          </div>
          <footer className="detail-actions">
            <button onClick={() => setDraft(null)}>이전</button>
            <button onClick={() => { setPersonal(draft); setDraft(null) }}>퍼스널옵션저장</button>
          </footer>
        </div>
      </dialog>
    )
  }

  return (
    <dialog className="product-detail" ref={dialog} aria-labelledby="product-title" onCancel={onClose}>
      <div className="detail-screen">
        {children}
        <section className="detail-summary">
          <DetailImage product={product} />
          <div className="detail-info">
            <div>
              <h2 id="product-title">{product.name}</h2>
              {option && <p>{option}</p>}
            </div>
            <div className="detail-totals">
              <div className="quantity">
                수량
                <button aria-label="수량 줄이기" disabled={quantity === 1} onClick={() => setQuantity(quantity - 1)}>
                  <img src={kioskImage('dessert-quantity', 'svg')} alt="" /><span aria-hidden="true">-</span>
                </button>
                <output aria-label="선택 수량">{quantity}</output>
                <button aria-label="수량 늘리기" onClick={() => setQuantity(quantity + 1)}>
                  <img src={kioskImage('dessert-quantity', 'svg')} alt="" /><span aria-hidden="true">+</span>
                </button>
              </div>
              <div className="amount">금액 <strong>{(price * quantity).toLocaleString('ko-KR')}</strong><span>원</span></div>
            </div>
          </div>
        </section>
        <div className="detail-fields">
          {drink && (
            <>
              <fieldset className="temperature">
                <legend>온도</legend>
                {product.temperatures.map((value) => (
                  <button key={value} data-cold={value === '차갑게'} aria-pressed={temperature === value} onClick={() => setTemperature(value)}>
                    {value === '차갑게' ? '아이스' : '핫'}
                  </button>
                ))}
              </fieldset>
              <fieldset><legend>사이즈</legend><button aria-pressed="true">맥스</button></fieldset>
              <fieldset>
                <legend>컵 선택</legend>
                {[service === '매장' ? '머그컵' : '일회용 컵', '개인 텀블러'].map((value) => (
                  <button key={value} aria-pressed={cup === value} onClick={() => setCup(value)}>{value}</button>
                ))}
              </fieldset>
              <button className="personal-options" onClick={() => setDraft(personal)}>퍼스널옵션 더보기</button>
            </>
          )}
        </div>
        <footer className="detail-actions">
          <button onClick={onClose}>주문 취소</button>
          <button onClick={addItem}>메뉴담기</button>
        </footer>
      </div>
    </dialog>
  )
}
