import{_ as s,c as a,o as i,aT as n}from"./chunks/framework.DnmJAMNq.js";const g=JSON.parse('{"title":"Генерация карты сайта","description":"","frontmatter":{},"headers":[],"relativePath":"ru/guide/sitemap-generation.md","filePath":"ru/guide/sitemap-generation.md","lastUpdated":1730715231000}'),e={name:"ru/guide/sitemap-generation.md"},t=n(`<h1 id="sitemap-generation" tabindex="-1">Генерация карты сайта <a class="header-anchor" href="#sitemap-generation" aria-label="Permalink to &quot;Генерация карты сайта {#sitemap-generation}&quot;">​</a></h1><p>VitePress поставляется с готовой поддержкой генерации файла <code>sitemap.xml</code> для вашего сайта. Чтобы включить её, добавьте следующее в файл <code>.vitepress/config.js</code>:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  sitemap: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    hostname: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://example.com&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Чтобы теги <code>&lt;lastmod&gt;</code> присутствовали в вашем файле <code>sitemap.xml</code>, вы можете включить опцию <a href="./../reference/default-theme-last-updated"><code>lastUpdated</code></a>.</p><h2 id="options" tabindex="-1">Параметры <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Параметры {#options}&quot;">​</a></h2><p>Поддержка карты сайта осуществляется с помощью модуля <a href="https://www.npmjs.com/package/sitemap" target="_blank" rel="noreferrer"><code>sitemap</code></a>. Вы можете передать любые поддерживаемые им параметры в опцию <code>sitemap</code> в вашем конфигурационном файле. Они будут переданы непосредственно в конструктор <code>SitemapStream</code>. Более подробную информацию см. в документации <a href="https://www.npmjs.com/package/sitemap#options-you-can-pass" target="_blank" rel="noreferrer"><code>sitemap</code></a>. Пример:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  sitemap: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    hostname: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://example.com&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    lastmodDateOnly: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>При использовании параметра <code>base</code> в своей конфигурации обязательно добавьте его в адрес <code>hostname</code>:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  base: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/my-site/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  sitemap: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    hostname: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://example.com/my-site/&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="transformitems-hook" tabindex="-1">Хук <code>transformItems</code> <a class="header-anchor" href="#transformitems-hook" aria-label="Permalink to &quot;Хук \`transformItems\` {#transformitems-hook}&quot;">​</a></h2><p>Вы можете использовать хук <code>sitemap.transformItems</code> для изменения элементов карты сайта перед их записью в файл <code>sitemap.xml</code>. Этот хук вызывается с массивом элементов sitemap и ожидает возвращения массива элементов sitemap. Пример:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  sitemap: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    hostname: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://example.com&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    transformItems</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">items</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // добавляем новые элементы или изменяем/фильтруем существующие</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      items.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        url: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/extra-page&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        changefreq: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;monthly&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        priority: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.8</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      })</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> items</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,12),p=[t];function l(h,k,d,r,E,o){return i(),a("div",null,p)}const m=s(e,[["render",l]]);export{g as __pageData,m as default};
