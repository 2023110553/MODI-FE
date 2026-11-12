import { useEffect, useState } from 'react'
import CartRows from './CartRows.jsx'
import { kioskImage, won } from './menu.js'
import { CheckoutLayout } from './checkoutStyles.js'

const desserts = [
  ['떠먹는 스초생', 7200, 'suggest-strawberry', [-55, -78, 567, 632]],
  ['떠먹는 아박', 6800, 'suggest-abak', [-30, -121, 535, 592]],
  ['부드러운 고구마 생크림 케이크', 7800, 'suggest-cake', [-45, -120, 536, 596]],
  ['P.망고생', 6800, 'suggest-mango', [-12, -101, 529, 588]],
]
const snacks = [
  ['반숙란', 2300, 'suggest-egg'],
  ['고구마 바', 1400, 'suggest-yam'],
  ['픽업 초코&밀크 비스킷 바', 1700, 'suggest-biscuit'],
  ['넛츠 앤 푸르츠', 2800, 'suggest-nuts'],
]

function suggestion([name, price, image], quantity = 1) {
  return { key: `suggestion:${image}`, name, price, image, option: '', quantity }
}

function Actions({ back, backLabel = '이전', next, nextLabel, disabled, className = '' }) {
  return (
    <footer className={`detail-actions ${className}`}>
      <button onClick={back}>{backLabel}</button>
      {next && <button onClick={next} disabled={disabled}>{nextLabel}</button>}
    </footer>
  )
}

function DessertSuggestions({ onAdd, onSkip, onMenu }) {
  const [quantities, setQuantities] = useState({})

  function change(image, delta) {
    setQuantities((current) => ({ ...current, [image]: Math.max(0, (current[image] ?? 0) + delta) }))
  }

  return (
    <section className="dessert-screen">
      <h1 className="dessert-title">디저트와 함께 즐기세요</h1>
      <section className="dessert-grid">
        {desserts.map(([name, price, image, [x, y, width, height]]) => (
          <article key={image}>
            <div className="dessert-image" style={{
              maskImage: `url("${kioskImage('dessert-image-mask', 'svg')}")`,
            }}>
              <img src={kioskImage(image)} alt="" style={{
                left: `${x / 10.8}cqw`,
                top: `${y / 10.8}cqw`,
                width: `${width / 10.8}cqw`,
                height: `${height / 10.8}cqw`,
              }} />
            </div>
            <p>{name}</p>
            <div className="dessert-quantity">
              <span className="dessert-price">{won(price)}</span>
              <button aria-label={`${name} 수량 줄이기`} disabled={!quantities[image]} onClick={() => change(image, -1)}>
                <img src={kioskImage('dessert-quantity', 'svg')} alt="" /><span aria-hidden="true">-</span>
              </button>
              <output>{quantities[image] ?? 0}</output>
              <button aria-label={`${name} 수량 늘리기`} onClick={() => change(image, 1)}>
                <img src={kioskImage('dessert-quantity', 'svg')} alt="" /><span aria-hidden="true">+</span>
              </button>
            </div>
          </article>
        ))}
      </section>
      <button className="more-menu" onClick={onMenu}>메뉴 더보기 <span>&gt;</span></button>
      <Actions className="dessert-actions" back={onSkip} backLabel="괜찮아요" next={() => {
        for (const item of desserts) {
          if (quantities[item[2]]) onAdd(suggestion(item, quantities[item[2]]))
        }
        onSkip()
      }} nextLabel="추가할게요" />
    </section>
  )
}

function PaymentMethods({ total, navigate }) {
  const amount = total.toLocaleString('ko-KR')
  return (
    <>
      <div className="payment-total">
        <span>총주문금액<strong>{amount}</strong></span><b>−</b>
        <span>할인금액<strong>0</strong></span><b>−</b>
        <span>결제금액<strong>0</strong></span><b>=</b>
        <span>남은결제금액<strong>{won(total)}</strong></span>
      </div>
      <section className="payment-methods">
        <h1>결제방법을 선택해주세요</h1>
        <div className="payment-grid">
          <button className="wide" onClick={() => navigate('card')}><span className="payment-logo card-logo" /> 신용카드</button>
          <button disabled>제휴카드</button>
          <button disabled>모바일상품권/기프트카드<br />카카오페이굿딜<img src={kioskImage('payment-gift')} alt="" /></button>
          <button className="wide easy-payment" disabled>
            <span><img src={kioskImage('payment-kakao')} alt="카카오페이" /><span className="payment-logo naver-logo" aria-label="네이버페이" /></span>
            <span>간편결제<small>일부 점포 불가</small></span>
          </button>
          <button disabled>하트<small>쿠폰/바코드 할인</small><img src={kioskImage('payment-barcode')} alt="" /></button>
          <button disabled>통신사(SKT, KT, U+)<small>쿠폰/바코드 할인</small></button>
        </div>
      </section>
      <Actions back={() => navigate('review')} />
    </>
  )
}

function CardPayment({ screen, navigate }) {
  useEffect(() => {
    const next = { card: 'remove-card', 'remove-card': 'bell', bell: 'complete' }[screen]
    const timeout = setTimeout(() => navigate(next), 1800)
    return () => clearTimeout(timeout)
  }, [screen, navigate])

  return (
    <section className="card-payment">
      <div className="card-title">
        {screen !== 'bell' && <><h1>신용카드 결제</h1><p>신용카드 혹은 모바일 페이로 결제 가능합니다<br />아래의 위치에 넣거나 대 주세요</p></>}
      </div>
      <section className="card-instructions">
        {screen === 'bell' ? <Warning /> : <p>주문완료 메시지 확인 후 카드를 챙겨 주세요</p>}
      </section>
      <Actions back={() => navigate('payment')} />
      {screen !== 'card' && (
        <div className="payment-overlay">
          <div className="payment-notice" data-stage={screen} role="status">
            {screen === 'remove-card' ? <><h2>알림</h2><p>신용카드를 제거해주세요.</p></>
              : <><img className="payment-dots" src={kioskImage('payment-dots', 'svg')} alt="" /><p>진동벨이 나오고 있습니다.</p></>}
          </div>
        </div>
      )}
    </section>
  )
}

function Warning() {
  return <p className="order-warning"><img src={kioskImage('order-warning', 'svg')} alt="" />잊으신 물건이 없는지 확인하세요.</p>
}

export default function Checkout({ screen, navigate, reset, service, cart, count, total, onAdd, onQuantity, onRemove, onDessertMenu }) {
  return (
    <CheckoutLayout>
      {screen === 'desserts' && <DessertSuggestions onAdd={onAdd} onSkip={() => navigate('review')} onMenu={onDessertMenu} />}
      {screen === 'review' && (
        <section className="review-screen">
          <h1 className="review-title">주문 내역을 확인하고 결제하기를 누르세요</h1>
          <div className="cart-heading"><span>메뉴</span><span>수량</span><span>금액</span></div>
          <section className="review-cart"><CartRows items={cart} onQuantity={onQuantity} onRemove={onRemove} review /></section>
          <section className="snack-suggestions">
            <h2>가볍게 즐기기 좋은 간식 어때요?</h2>
            <div>
              {snacks.map(([name, price, image]) => (
                <button key={image} onClick={() => onAdd(suggestion([name, price, image]))}>
                  <span className="snack-add" aria-hidden="true"><img src={kioskImage('review-add', 'svg')} alt="" />+</span>
                  <span className="snack-image"><img src={kioskImage(image)} alt="" /></span>
                  <p>{name}</p><p>{won(price)}</p>
                </button>
              ))}
            </div>
          </section>
          <div className="review-total">
            <strong>[{service === '매장' ? '매장이용' : '포장'}]</strong>
            <div>총 수량 <strong>{count}<small>개</small></strong></div>
            <div>합계 <strong>{total.toLocaleString('ko-KR')}<small>원</small></strong></div>
          </div>
          <Actions className="review-actions" back={() => navigate('menu')} next={() => navigate('payment')} nextLabel="결제하기" disabled={!count} />
        </section>
      )}
      {screen === 'payment' && <PaymentMethods total={total} navigate={navigate} />}
      {['card', 'remove-card', 'bell'].includes(screen) && <CardPayment screen={screen} navigate={navigate} />}
      {screen === 'complete' && (
        <>
          <section className="complete-message"><h1>주문 완료</h1><p>영수증과 진동벨을 가져가세요</p><Warning /></section>
          <Actions className="receipt-actions" back={reset} backLabel="영수증받기" next={reset} nextLabel="영수증받지않기" />
        </>
      )}
    </CheckoutLayout>
  )
}
