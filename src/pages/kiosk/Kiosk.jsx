import { useEffect, useRef, useState } from 'react'
import { accessibilityOptions, defaultProfile } from '../../features/personalization/profile.js'
import { catalog } from './catalog.js'
import { categories, kioskImage, menuProduct, won } from './menu.js'
import ProductOptions from './ProductOptions.jsx'
import CartRows from './CartRows.jsx'
import Checkout from './Checkout.jsx'
import { KioskFrame } from './styles.js'

const START_PHOTO_MS = 5_000
const startPhotos = ['hero', 'hero-mango', 'hero-matcha', 'hero-coffee']

function StartPhotos() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((index) => (index + 1) % startPhotos.length)
    }, START_PHOTO_MS)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="hero" aria-hidden="true">
      {startPhotos.map((name, index) => (
        <img key={name} src={kioskImage(name)} alt="" data-photo={name} data-current={index === current} />
      ))}
    </div>
  )
}

function KioskToolbar({ onHome, startScreen = false, detail = false, helpOnly = false }) {
  return (
    <header className="toolbar">
      {onHome && <button onClick={onHome}><img src={kioskImage('home')} alt="" />처음으로</button>}
      {!helpOnly && <div className="flags" aria-label="언어 선택">
        {(detail ? ['ko'] : ['ko', 'en', 'ja', 'zh']).map((language) => (
          <img key={language} src={kioskImage(`flag-${language}`)} alt={language.toUpperCase()} />
        ))}
      </div>}
      <div className="toolbar-end">
        {startScreen && <span><img src={kioskImage('voucher')} alt="" />모바일상품권 조회</span>}
        <span><img src={kioskImage('help')} alt="" />직원도움요청</span>
      </div>
    </header>
  )
}

function PreviewSettings({ profile, onChange }) {
  return (
    <details className="preview">
      <summary>접근성 프로필 테스트</summary>
      <p>설정 조합을 확인하는 개발용 패널입니다.</p>
      {accessibilityOptions.map(([key, label]) => (
        <label key={key}>
          <input type="checkbox" checked={profile[key]} onChange={(event) => onChange(key, event.target.checked)} />
          {label}
        </label>
      ))}
    </details>
  )
}

const figmaUnit = (pixels) => `${pixels / 10.8}cqw`
const compactLabels = new Set([
  '솔티드 카라멜 라떼',
  '부드러운 고구마 생크림 케이크(쁘띠)',
  'P.바스트 치즈 케이크(고르곤졸라)',
  '[세트]부드러운 에그 잉글리쉬 머핀',
  '[세트]스크램블 에그 샌드위치',
  '[세트]크랜베리 치킨 샌드위치',
])

function ProductCard({ item, onSelect }) {
  const [label, titleTop, crop] = item.layer
  const compact = compactLabels.has(item.name)
  const [left, top, width, height, maskWidth, maskHeight] = crop ?? [0, 0, 97, 97, 97, 97]

  return (
    <button className="product" disabled={Boolean(item.availability)} onClick={onSelect}>
      {item.badge && <span className="badge" data-badge={item.badge}>{item.badge}</span>}
      <span className="product-image" style={{ width: figmaUnit(maskWidth), height: figmaUnit(maskHeight) }}>
        <img src={kioskImage(item.image)} alt="" style={{
          left: figmaUnit(left), top: figmaUnit(top), width: figmaUnit(width), height: figmaUnit(height),
        }} />
      </span>
      <strong data-lines={compact || /[\n\u2028]/.test(label) ? 'fixed' : undefined} data-compact={compact} style={{ top: figmaUnit(titleTop) }}>
        {label.replaceAll('\u2028', '\n')}
      </strong>
      <span className="product-price">{item.availability ?? won(item.price)}</span>
    </button>
  )
}

export default function Kiosk() {
  const [profile, setProfile] = useState(defaultProfile)
  const [screen, setScreen] = useState('start')
  const [service, setService] = useState('')
  const [category, setCategory] = useState(categories[0])
  const [section, setSection] = useState(categories[0])
  const [page, setPage] = useState(0)
  const [product, setProduct] = useState(null)
  const [cart, setCart] = useState([])
  const cartScroll = useRef(null)
  const count = cart.reduce((sum, item) => sum + item.quantity, 0)
  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0)
  const sections = Object.keys(catalog[category])
  const pages = catalog[category][section] ?? []
  const products = pages[page] ?? []
  const step = screen === 'complete' ? 2 : screen === 'payment' ? 1 : 0
  const showSteps = ['menu', 'review', 'payment', 'complete'].includes(screen)

  function selectCategory(label) {
    setCategory(label)
    setSection(Object.keys(catalog[label])[0])
    setPage(0)
  }

  function reset() {
    setScreen('start')
    setService('')
    selectCategory(categories[0])
    setProduct(null)
    setCart([])
    setProfile(defaultProfile)
  }

  function start(label) {
    setService(label)
    setScreen('menu')
  }

  function addToCart(item) {
    setCart((items) => {
      if (!items.some(({ key }) => key === item.key)) return [...items, item]
      return items.map((entry) => entry.key === item.key
        ? { ...entry, quantity: entry.quantity + item.quantity }
        : entry)
    })
    setProduct(null)
  }

  function changeQuantity(key, delta) {
    setCart((items) => items.map((item) => item.key === key
      ? { ...item, quantity: Math.max(1, item.quantity + delta) }
      : item))
  }

  function removeItem(key) {
    setCart((items) => items.filter((item) => item.key !== key))
  }

  return (
    <KioskFrame
      data-simple={profile.simple}
      data-contrast={profile.contrast}
      data-guidance={profile.guidance}
      data-reach={profile.reach}
    >
      {import.meta.env.DEV && new URLSearchParams(globalThis.location?.search).has('preview') && (
        <PreviewSettings profile={profile} onChange={(key, value) => setProfile((current) => ({ ...current, [key]: value }))} />
      )}
      {screen === 'start' ? (
        <>
          <StartPhotos />
          <KioskToolbar startScreen />
          <div className="start-actions">
            <button onClick={() => start('매장')}><img src={kioskImage('dine-in')} alt="" />매장</button>
            <button onClick={() => start('포장')}><img src={kioskImage('takeout')} alt="" />포장</button>
          </div>
        </>
      ) : (
        <>
          {screen === 'complete' ? <div className="toolbar" /> : (
            <KioskToolbar
              onHome={['card', 'remove-card'].includes(screen) ? undefined : reset}
              detail={screen !== 'menu'}
              helpOnly={['card', 'remove-card'].includes(screen)}
            />
          )}
          {showSteps && <ol className="steps" aria-label="주문 단계">
            {['메뉴선택', '결제하기', '주문완료'].map((label, index) => (
              <li key={label} data-complete={index <= step} aria-current={index === step ? 'step' : undefined}>
                {label}
                <span className="step-dot">{index <= step && <img src={kioskImage('step-completed', 'svg')} alt="" />}</span>
              </li>
            ))}
          </ol>}
          {screen === 'menu' ? (
            <>
              <nav className="categories" aria-label="메뉴 카테고리">
                {categories.map((label) => (
                  <button key={label} aria-pressed={label === category} onClick={() => selectCategory(label)}>{label}</button>
                ))}
              </nav>
              <section className="catalog" aria-label="메뉴 목록">
                <nav className="subcategories" aria-label={`${category} 세부 메뉴`}>
                  {sections.map((label) => (
                    <button key={label} aria-pressed={label === section} onClick={() => {
                      setSection(label)
                      setPage(0)
                    }}>{label}</button>
                  ))}
                </nav>
                <div className="product-grid">
                  {products.map((entry) => {
                    const item = menuProduct(entry, category, section)
                    return <ProductCard key={item.id} item={item} onSelect={() => setProduct(item)} />
                  })}
                </div>
                {pages.length > 0 && (
                  <nav className="pagination" aria-label="메뉴 페이지">
                    <button disabled={page === 0} onClick={() => setPage(page - 1)}>&lt; 이전</button>
                    <span>{page + 1} / {pages.length}</span>
                    <button disabled={page + 1 === pages.length} onClick={() => setPage(page + 1)}>다음 &gt;</button>
                  </nav>
                )}
              </section>
              <section className="cart-preview" aria-label="담은 메뉴">
                <div className="cart-scroll" ref={cartScroll}>
                  <CartRows items={cart} onQuantity={changeQuantity} onRemove={removeItem} />
                </div>
                {count > 0 && <div className="cart-scroll-buttons">
                  <button aria-label="장바구니 위로" onClick={() => cartScroll.current.scrollBy({ top: -cartScroll.current.clientHeight })}>⌃</button>
                  <button aria-label="장바구니 아래로" onClick={() => cartScroll.current.scrollBy({ top: cartScroll.current.clientHeight })}>⌄</button>
                </div>}
              </section>
              <footer className="order-bar">
                <div><span>총 수량</span><strong>{count}<small>개</small></strong></div>
                <div><span>합계</span><strong>{total.toLocaleString('ko-KR')}<small>원</small></strong></div>
                <button disabled={!count} onClick={() => setScreen('desserts')}>주문하기</button>
              </footer>
            </>
          ) : (
            <Checkout screen={screen} navigate={setScreen} reset={reset} service={service} cart={cart}
              count={count} total={total} onAdd={addToCart} onQuantity={changeQuantity} onRemove={removeItem}
              onDessertMenu={() => { selectCategory('디저트'); setScreen('menu') }} />
          )}
        </>
      )}
      {product && (
        <ProductOptions key={product.id} product={product} service={service} onClose={() => setProduct(null)} onAdd={addToCart}>
          <KioskToolbar detail onHome={reset} />
        </ProductOptions>
      )}
    </KioskFrame>
  )
}
