import { catalog } from './catalog.js'

export const categories = Object.keys(catalog)

export function menuProduct([name, price, image, badge, layer], category, section) {
  const drink = (category === '커피/음료' && section !== '아이스크림/빙수')
    || ['caramel', 'frappe', 'vin-chaud'].includes(image)
  const coldOnly = /아이스|콜드브루|프라페|쉐이크|주스|\(ICE\)/.test(name)
  const hotOnly = /뱅쇼|\(HOT\)/.test(name)
  const temperatures = drink
    ? [...(coldOnly ? [] : ['따뜻하게']), ...(hotOnly ? [] : ['차갑게'])]
    : undefined

  return {
    id: name.replace(/\s+/g, ' ').trim(),
    name,
    price: typeof price === 'number' ? price : undefined,
    availability: typeof price === 'string' ? price : undefined,
    image,
    badge,
    layer,
    temperatures,
  }
}

export const won = (price) => `${price.toLocaleString('ko-KR')}원`

const images = import.meta.glob('../../assets/kiosk/*.{png,svg}', { eager: true, import: 'default' })

export const kioskImage = (name, extension = 'png') => images[`../../assets/kiosk/${name}.${extension}`]
