import{_ as e,D as t,c as n,j as i,a as s,I as p,aT as l,o as h}from"./chunks/framework.DnmJAMNq.js";const A=JSON.parse('{"title":"MPA 모드","description":"","frontmatter":{},"headers":[],"relativePath":"ko/guide/mpa-mode.md","filePath":"ko/guide/mpa-mode.md","lastUpdated":1730715231000}'),d={name:"ko/guide/mpa-mode.md"},k={id:"mpa-mode",tabindex:"-1"},r=i("a",{class:"header-anchor",href:"#mpa-mode","aria-label":'Permalink to "MPA 모드 <Badge type="warning" text="실험적" /> {#mpa-mode}"'},"​",-1),c=l(`<p>MPA(멀티 페이지 애플리케이션) 모드는 <code>vitepress build --mpa</code> 명령어를 통해 또는 <code>mpa: true</code> 옵션을 통해 설정 파일에서 활성화할 수 있습니다.</p><p>MPA 모드에서는 모든 페이지가 기본적으로 JavaScript 없이 렌더링됩니다. 결과적으로, 생산 사이트는 감사 도구로부터 초기 방문 성능 점수를 더 좋게 받을 가능성이 높습니다.</p><p>그러나, SPA 네비게이션이 없기 때문에, 페이지 간 링크는 전체 페이지를 다시 로드하게 합니다. MPA 모드에서의 포스트-로드 탐색은 SPA 모드처럼 즉각적으로 느껴지지 않을 것입니다.</p><p>또한, 기본적으로 JS 없음을 의미하는 것은 여러분이 본질적으로 Vue를 서버 측 템플리팅 언어로만 사용하고 있다는 것을 의미합니다. 브라우저에서는 이벤트 핸들러가 연결되지 않으므로, 상호 작용성이 없을 것입니다. 클라이언트 측 JavaScript를 로드하려면 특별한 <code>&lt;script client&gt;</code> 태그를 사용해야 합니다:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> client</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;h1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;click&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;클라이언트 측 JavaScript!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 안녕하세요</span></span></code></pre></div><p><code>&lt;script client&gt;</code>는 VitePress 전용 기능으로, Vue 기능이 아닙니다. <code>.md</code> 및 <code>.vue</code> 파일 모두에서 작동하지만 MPA 모드에서만 작동합니다. 모든 테마 컴포넌트의 클라이언트 스크립트는 함께 번들링되며, 특정 페이지의 클라이언트 스크립트는 해당 페이지만을 위해 분할됩니다.</p><p><code>&lt;script client&gt;</code>는 <strong>Vue 컴포넌트 코드로 평가되지 않는다</strong>는 점을 주의하세요: 이것은 일반 JavaScript 모듈로 처리됩니다. 이러한 이유로, MPA 모드는 여러분의 사이트가 절대적으로 최소한의 클라이언트 측 상호작용만을 필요로 할 때만 사용되어야 합니다.</p>`,7);function o(E,g,m,_,y,u){const a=t("Badge");return h(),n("div",null,[i("h1",k,[s("MPA 모드 "),p(a,{type:"warning",text:"실험적"}),s(),r]),c])}const P=e(d,[["render",o]]);export{A as __pageData,P as default};
