# MODI 키오스크

React, Vite, JavaScript, styled-components 기반 키오스크 프론트엔드입니다.

## 실행

```sh
npm install
npm run dev
```

`npm run build`로 배포용 파일을 만들고 `npm run preview`로 확인합니다.

## API 연결

기본 서버 주소는 `https://modi.kang0131.shop`입니다. 다른 서버를 사용하려면
`.env.example`을 `.env.local`로 복사해 `VITE_API_BASE_URL`을 바꾸고 개발 서버를 다시 시작합니다.

`src/api/client.js`의 `apiRequest(path, options)`는 서버 주소를 붙이고 HTTP 오류를 처리합니다.
성공하면 `Response`를 반환하므로 호출하는 쪽에서 응답 형식에 맞게 읽습니다.

## 폴더 구조

| 경로 | 용도 |
| --- | --- |
| `public/` | 그대로 제공하는 정적 파일 |
| `src/app/` | 앱 전역 구성 |
| `src/assets/` | 이미지, 아이콘, 폰트 |
| `src/components/common/` | 공통 UI |
| `src/components/kiosk/` | 키오스크 전용 UI |
| `src/features/personalization/` | 접근성 개인화 |
| `src/pages/` | 화면 단위 구성 |
| `src/styles/` | 공통 스타일 |
| `src/hooks/`, `src/utils/` | 공통 훅과 유틸리티 |

`src/App.jsx`에서 키오스크를 실행합니다. `src/pages/kiosk/`에는 시작, 메뉴, 상품
옵션, 주문 확인에 사용하는 UI와 목데이터가 있습니다.

개발 서버 주소에 `?preview`를 붙이면 **접근성 프로필 테스트**에서 네 설정을 독립적으로 선택할 수 있습니다.
`src/features/personalization/profile.js`에서 설정 이름과 기본값을 관리하고,
키오스크는 선택 상태를 최상위 요소의 `data-*` 속성에 전달합니다. 접근성에 따른
화면 변경은 이 속성을 사용하는 후속 작업으로 남겨두었습니다.
