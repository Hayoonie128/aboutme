# 프로젝트 작업 규칙

이 프로젝트는 Vanilla JavaScript와 Vite를 사용합니다. 코드 작업을 시작하기 전에 이 문서와 기존 파일 및 설정을 확인하고, 작업에 필요한 부분만 수정합니다.

1. HTML, CSS, JavaScript는 각각 분리된 파일로 작성합니다.
2. `index.html`과 `vite.config.js` 등 설정 파일은 프로젝트 루트에 두고, 애플리케이션의 CSS와 JavaScript 파일은 `src/`에 둡니다.
3. JavaScript 진입 파일은 HTML에서 `type="module"`로 연결합니다. CSS는 JavaScript 진입 파일에서 `import`하여 Vite 빌드에 포함합니다.
4. 외부 JavaScript 라이브러리는 `npm install`로 설치한 뒤 `import`로 사용합니다. CDN 방식은 사용하지 않습니다.
5. Vite는 루트의 `index.html`을 기본 진입점으로, `dist/`를 기본 빌드 출력 폴더로 사용합니다. 코드 변경 후 `npm run build`로 빌드를 확인합니다.

## Netlify 배포

GitHub 저장소를 Netlify에 연결한 뒤 다음 값을 사용합니다.

| 항목 | 값 |
| --- | --- |
| Build command | `npm run build` |
| Publish directory | `dist` |
