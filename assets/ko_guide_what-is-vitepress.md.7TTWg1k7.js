import{_ as e,c as r,o as t,aT as a}from"./chunks/framework.DnmJAMNq.js";const V=JSON.parse('{"title":"VitePress란 무엇인가?","description":"","frontmatter":{},"headers":[],"relativePath":"ko/guide/what-is-vitepress.md","filePath":"ko/guide/what-is-vitepress.md","lastUpdated":1730715231000}'),s={name:"ko/guide/what-is-vitepress.md"},i=a('<h1 id="what-is-vitepress" tabindex="-1">VitePress란 무엇인가? <a class="header-anchor" href="#what-is-vitepress" aria-label="Permalink to &quot;VitePress란 무엇인가? {#what-is-vitepress}&quot;">​</a></h1><p>VitePress는 빠르고 컨텐츠 중심의 웹사이트를 구축하기 위해 설계된 <a href="https://en.wikipedia.org/wiki/Static_site_generator" target="_blank" rel="noreferrer">정적 사이트 생성기</a> (SSG)입니다. 간단히 말해, VitePress는 <a href="https://en.wikipedia.org/wiki/Markdown" target="_blank" rel="noreferrer">Markdown</a>으로 작성된 소스 컨텐츠를 가져와서 테마를 적용하고, 어디에나 쉽게 배포할 수 있는 정적 HTML 페이지를 생성합니다.</p><div class="tip custom-block" style="padding-top:8px;"><p>그냥 시도해보고 싶으세요? <a href="./getting-started">빠른 시작</a>으로 건너뛰세요.</p></div><h2 id="use-cases" tabindex="-1">사용 사례 <a class="header-anchor" href="#use-cases" aria-label="Permalink to &quot;사용 사례 {#use-cases}&quot;">​</a></h2><ul><li><p><strong>문서화</strong></p><p>VitePress는 기술 문서를 위해 설계된 기본 테마와 함께 제공됩니다. 이 테마는 바로 지금 읽고 있는 이 페이지뿐만 아니라 <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">Vite</a>, <a href="https://rollupjs.org/" target="_blank" rel="noreferrer">Rollup</a>, <a href="https://pinia.vuejs.org/" target="_blank" rel="noreferrer">Pinia</a>, <a href="https://vueuse.org/" target="_blank" rel="noreferrer">VueUse</a>, <a href="https://vitest.dev/" target="_blank" rel="noreferrer">Vitest</a>, <a href="https://d3js.org/" target="_blank" rel="noreferrer">D3</a>, <a href="https://unocss.dev/" target="_blank" rel="noreferrer">UnoCSS</a>, <a href="https://iconify.design/" target="_blank" rel="noreferrer">Iconify</a> 그리고 <a href="https://www.vuetelescope.com/explore?framework.slug=vitepress" target="_blank" rel="noreferrer">기타 많은</a> 문서화에 힘을 실어줍니다.</p><p><a href="https://vuejs.org/" target="_blank" rel="noreferrer">공식 Vue.js 문서</a>도 VitePress 기반으로 되어 있지만, 여러 번역 간에 공유되는 커스텀 테마를 사용합니다.</p></li><li><p><strong>블로그, 포트폴리오 및 마케팅 사이트</strong></p><p>VitePress는 표준 Vite + Vue 애플리케이션의 개발자 경험과 함께 <a href="./custom-theme">완전히 맞춤화된 테마</a>를 지원합니다. Vite 기반이기 때문에 풍부한 생태계에서 Vite 플러그인을 직접 활용할 수 있습니다. 또한, VitePress는 <a href="./data-loading">데이터 불러오기</a> (로컬 또는 원격) 및 <a href="./routing#dynamic-routes">동적으로 경로 생성하기</a>를 위한 유연한 API를 제공합니다. 빌드 시점에 데이터를 결정할 수 있다면 거의 모든 것을 구축할 수 있습니다.</p><p>공식 <a href="https://blog.vuejs.org/" target="_blank" rel="noreferrer">Vue.js 블로그</a>는 로컬 콘텐츠를 기반으로 색인 페이지를 생성하는 간단한 블로그입니다.</p></li></ul><h2 id="developer-experience" tabindex="-1">개발자 경험 <a class="header-anchor" href="#developer-experience" aria-label="Permalink to &quot;개발자 경험 {#developer-experience}&quot;">​</a></h2><p>VitePress는 Markdown 컨텐츠를 다룰 때 훌륭한 개발자 경험(DX)을 제공하고자 합니다.</p><ul><li><p><strong><a href="https://vitejs.dev/" target="_blank" rel="noreferrer">Vite 구동:</a></strong> 즉각적인 서버 시작이 가능하며, 페이지 새로고침 없이 항상 (&lt;100ms) 즉시 수정 사항이 반영됩니다.</p></li><li><p><strong><a href="./markdown">내장 Markdown 확장 기능:</a></strong> Frontmatter, 테이블, 구문 하이라이팅… 필요한 것이라면 무엇이든 있습니다. 특히, VitePress는 코드 블록과 작업할 때 많은 고급 기능을 제공하여 기술적 문서에 이상적입니다.</p></li><li><p><strong><a href="./using-vue">Vue를 향상된 Markdown:</a></strong> 각 Markdown 페이지는 HTML과 100% 문법 호환성을 가진 Vue 템플릿 덕분에 Vue <a href="https://vuejs.org/guide/scaling-up/sfc.html" target="_blank" rel="noreferrer">단일 파일 컴포넌트</a>입니다. Vue 템플릿 기능이나 가져온 Vue 컴포넌트를 사용하여 정적 콘텐츠에 상호작용성을 삽입할 수 있습니다.</p></li></ul><h2 id="performance" tabindex="-1">성능 <a class="header-anchor" href="#performance" aria-label="Permalink to &quot;성능 {#performance}&quot;">​</a></h2><p>전통적인 SSG들과 달리 각 탐색이 전체 페이지 새로고침을 초래하는 것이 아니라, VitePress로 생성된 웹사이트는 초기 방문 시 정적 HTML을 제공하지만, 사이트 내 이후 탐색에 대해서는 <a href="https://en.wikipedia.org/wiki/Single-page_application" target="_blank" rel="noreferrer">싱글 페이지 애플리케이션</a> (SPA)이 됩니다. 우리의 견해에 따르면, 이 모델은 성능에 있어 최적의 균형을 제공합니다:</p><ul><li><p><strong>빠른 초기 로딩</strong></p><p>어떤 페이지에 대한 초기 방문은 빠른 로딩 속도와 최적의 SEO를 위해 정적으로 사전 렌더링된 HTML이 제공됩니다. 그런 다음 페이지는 Vue SPA로 페이지를 변환하는 JavaScript 번들을 로드합니다(&quot;hydration&quot;). SPA hydration이 느리다는 일반적인 가정과 달리, 이 과정은 실제로 Vue 3의 순수 성능과 컴파일러 최적화 덕분에 매우 빠릅니다. <a href="https://pagespeed.web.dev/report?url=https%3A%2F%2Fvitepress.dev%2F" target="_blank" rel="noreferrer">PageSpeed Insights</a>에서 일반적인 VitePress 사이트는 저사양 모바일 장치에서도 느린 네트워크에서 거의 완벽한 성능 점수를 달성합니다.</p></li><li><p><strong>빠른 후속 로드 탐색</strong></p><p>더 중요한 것은 초기 로드 <strong>이후</strong> 사용자 경험이 개선된다는 것입니다. 사이트 내의 이후 탐색에서는 전체 페이지 새로고침이 더 이상 발생하지 않습니다. 대신, 들어오는 페이지의 콘텐츠가 가져와져 동적으로 업데이트됩니다. VitePress는 또한 뷰포트 내 링크에 대한 페이지 청크를 자동으로 사전 로드합니다. 대부분의 경우, 이후 로드 탐색은 즉각적으로 느껴질 것입니다.</p></li><li><p><strong>패널티 없는 상호작용성</strong></p><p>정적 Markdown 내에 내장된 동적 Vue 파트를 hydrate할 수 있도록 각 Markdown 페이지는 Vue 컴포넌트로 처리되고 JavaScript로 컴파일됩니다. 이것은 비효율적으로 들릴 수 있지만, Vue 컴파일러는 정적 부분과 동적 부분을 분리하여 hydration 비용과 페이로드 크기를 최소화하는 데 충분히 똑똑합니다. 초기 페이지 로드에 대해서, 정적 부분은 JavaScript 페이로드에서 자동으로 제거되고 hydration 동안 건너뛰어집니다.</p></li></ul><h2 id="what-about-vuepress" tabindex="-1">VuePress는 어떤가요? <a class="header-anchor" href="#what-about-vuepress" aria-label="Permalink to &quot;VuePress는 어떤가요? {#what-about-vuepress}&quot;">​</a></h2><p>VitePress는 VuePress의 영적 후계자입니다. 원래 VuePress는 Vue 2와 webpack에 기반을 두고 있었습니다. Vue 3와 Vite를 기반으로 한 VitePress는 훨씬 더 나은 DX, 더 나은 프로덕션 성능, 더 완성된 기본 테마, 그리고 더욱 유연한 커스터마이징 API를 제공합니다.</p><p>VitePress와 VuePress 사이의 API 차이는 주로 테마와 커스터마이징에 있습니다. 기본 테마를 사용하는 VuePress 1을 사용하는 경우, VitePress로 마이그레이션하는 것이 비교적 간단할 수 있습니다.</p><p>VuePress 2에도 투자된 노력이 있으며, 이것도 Vue 3와 Vite를 지원하고 VuePress 1과 더 호환됩니다. 그러나 동시에 두 개의 SSG를 병행하여 유지하는 것은 지속 가능하지 않으므로, Vue 팀은 장기적으로 주요 권장 SSG로 VitePress에 집중하기로 결정했습니다.</p>',15),o=[i];function n(p,l,h,u,d,g){return t(),r("div",null,o)}const c=e(s,[["render",n]]);export{V as __pageData,c as default};
