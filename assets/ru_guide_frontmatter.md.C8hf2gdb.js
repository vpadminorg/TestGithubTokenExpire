import{_ as s,c as a,o as i,aT as t}from"./chunks/framework.DnmJAMNq.js";const g=JSON.parse('{"title":"Метаданные","description":"","frontmatter":{},"headers":[],"relativePath":"ru/guide/frontmatter.md","filePath":"ru/guide/frontmatter.md","lastUpdated":1730715231000}'),e={name:"ru/guide/frontmatter.md"},n=t(`<h1 id="frontmatter" tabindex="-1">Метаданные <a class="header-anchor" href="#frontmatter" aria-label="Permalink to &quot;Метаданные {#frontmatter}&quot;">​</a></h1><h2 id="usage" tabindex="-1">Использование <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Использование {#usage}&quot;">​</a></h2><p>VitePress поддерживает метаданные YAML во всех Markdown-файлах, разбирая их с помощью <a href="https://github.com/jonschlinkert/gray-matter" target="_blank" rel="noreferrer">gray-matter</a>. Метаданные должны находиться в верхней части Markdown-файла (перед любыми элементами, включая теги <code>&lt;script&gt;</code>) и иметь вид корректного YAML, заданного между тройными пунктирными линиями. Пример:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Документация с VitePress</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">editLink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span></code></pre></div><p>Многие параметры конфигурации сайта или темы по умолчанию имеют соответствующие опции в блоке метаданных. Вы можете использовать метаданные, чтобы переопределить определённое поведение только для текущей страницы. Подробности см. в <a href="./../reference/frontmatter-config">Справочнике по настройке метаданных</a>.</p><p>Вы также можете определить собственные метаданные, которые будут использоваться в динамических выражениях Vue на странице.</p><h2 id="accessing-frontmatter-data" tabindex="-1">Доступ к метаданным <a class="header-anchor" href="#accessing-frontmatter-data" aria-label="Permalink to &quot;Доступ к метаданным {#accessing-frontmatter-data}&quot;">​</a></h2><p>Доступ к метаданным можно получить через специальную глобальную переменную <code>$frontmatter</code>:</p><p>Вот пример того, как можно использовать его в файле Markdown:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Документация с VitePress</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">editLink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># {{ $frontmatter.title }}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Содержание руководства</span></span></code></pre></div><p>Вы также можете получить доступ к метаданным текущей страницы в <code>&lt;script setup&gt;</code> с помощью <a href="./../reference/runtime-api#usedata">хелпера <code>useData()</code></a>.</p><h2 id="alternative-frontmatter-formats" tabindex="-1">Альтернативные форматы метаданных <a class="header-anchor" href="#alternative-frontmatter-formats" aria-label="Permalink to &quot;Альтернативные форматы метаданных {#alternative-frontmatter-formats}&quot;">​</a></h2><p>VitePress также поддерживает синтаксис метаданных JSON, начинающийся и заканчивающийся фигурными скобками:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Веду блог как хакер&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;editLink&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span></code></pre></div>`,14),l=[n];function p(r,h,k,d,o,c){return i(),a("div",null,l)}const u=s(e,[["render",p]]);export{g as __pageData,u as default};
