export const accessibilityOptions = [
  ['simple', '핵심 메뉴 간소화'],
  ['contrast', '색상 고대비'],
  ['guidance', '터치 위치 안내'],
  ['reach', '화면 하단 조작'],
]

export const defaultProfile = Object.fromEntries(
  accessibilityOptions.map(([key]) => [key, false]),
)
