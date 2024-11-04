import{_ as n,D as l,c as p,j as a,a as s,I as e,aT as t,o}from"./chunks/framework.DnmJAMNq.js";const x=JSON.parse('{"title":"Configuração Frontmatter","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"pt/reference/frontmatter-config.md","filePath":"pt/reference/frontmatter-config.md","lastUpdated":1730715231000}'),h={name:"pt/reference/frontmatter-config.md"},d=t(`<h1 id="frontmatter-config" tabindex="-1">Configuração Frontmatter <a class="header-anchor" href="#frontmatter-config" aria-label="Permalink to &quot;Configuração Frontmatter {#frontmatter-config}&quot;">​</a></h1><p>Frontmatter permite a configuração baseada em páginas. Em cada arquivo markdown, você pode usar a configuração frontmatter para sobrepor opções de configuração a nível de site ou de tema. Além disso, existem opções de configuração que só podem ser definidas em frontmatter.</p><p>Exemplo de uso:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Documentação com VitePress</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">editLink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span></code></pre></div><p>Você pode acessar os dados do frontmatter através da variável global <code>$frontmatter</code> em expressões Vue:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ $frontmatter.title }}</span></span></code></pre></div><h2 id="title" tabindex="-1">title <a class="header-anchor" href="#title" aria-label="Permalink to &quot;title&quot;">​</a></h2><ul><li>Tipo: <code>string</code></li></ul><p>Título para a página. É o mesmo que <a href="./site-config#title">config.title</a>, e sobrepõe a configuração a nível de site.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VitePress</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h2 id="titletemplate" tabindex="-1">titleTemplate <a class="header-anchor" href="#titletemplate" aria-label="Permalink to &quot;titleTemplate&quot;">​</a></h2><ul><li>Tipo: <code>string | boolean</code></li></ul><p>O sufixo para o título. É o mesmo que <a href="./site-config#titletemplate">config.titleTemplate</a>, e sobrepõe a configuração a nível de site.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VitePress</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">titleTemplate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Gerador de site estático com Vite &amp; Vue</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h2 id="description" tabindex="-1">description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;description&quot;">​</a></h2><ul><li>Tipo: <code>string</code></li></ul><p>Descrição para a página. É o mesmo que <a href="./site-config#description">config.description</a>, e sobrepõe a configuração a nível de site.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VitePress</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h2 id="head" tabindex="-1">head <a class="header-anchor" href="#head" aria-label="Permalink to &quot;head&quot;">​</a></h2><ul><li>Tipo: <code>HeadConfig[]</code></li></ul><p>Especifica tags head adicionais a serem injetadas na página atual. Elas serão acrescentadas após as tags head injetadas pela configuração a nível de site.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">meta</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">description</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">hello</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">meta</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">keywords</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">super duper SEO</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HeadConfig</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h2 id="default-theme-only" tabindex="-1">Somente no Tema Padrão <a class="header-anchor" href="#default-theme-only" aria-label="Permalink to &quot;Somente no Tema Padrão {#default-theme-only}&quot;">​</a></h2><p>As seguintes opções frontmatter são aplicáveis apenas ao usar o tema padrão.</p><h3 id="layout" tabindex="-1">layout <a class="header-anchor" href="#layout" aria-label="Permalink to &quot;layout&quot;">​</a></h3><ul><li>Tipo: <code>doc | home | page</code></li><li>Padrão: <code>doc</code></li></ul><p>Determina o layout da página.</p><ul><li><code>doc</code> - Aplica estilos de documentação padrão ao conteúdo markdown.</li><li><code>home</code> - Layout especial para a &quot;Página Inicial&quot;. Você pode adicionar opções extras como <code>hero</code> e <code>features</code> para criar rapidamente uma bela página inicial.</li><li><code>page</code> - Comporta-se de maneira semelhante a <code>doc</code>, mas não aplica estilos ao conteúdo. Útil quando você deseja criar uma página totalmente personalizada.</li></ul><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">layout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">doc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div>`,30),r={id:"hero",tabindex:"-1"},k=a("a",{class:"header-anchor",href:"#hero","aria-label":'Permalink to "hero <Badge type="info" text="apenas para página inicial" />"'},"​",-1),c=a("p",null,[s("Define o conteúdo da seção "),a("em",null,"hero"),s(" na página inicial quando "),a("code",null,"layout"),s(" está definido como "),a("code",null,"home"),s(". Mais detalhes em "),a("a",{href:"./default-theme-home-page"},"Tema Padrão: Página Inicial"),s(".")],-1),g={id:"features",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#features","aria-label":'Permalink to "features <Badge type="info" text="apenas para página inicial" />"'},"​",-1),m=t(`<p>Define os itens a serem exibidos na seção de funcionalidades quando <code>layout</code> está definido como <code>home</code>. Mais detalhes em <a href="./default-theme-home-page">Tema Padrão: Página Inicial</a>.</p><h3 id="navbar" tabindex="-1">navbar <a class="header-anchor" href="#navbar" aria-label="Permalink to &quot;navbar&quot;">​</a></h3><ul><li>Tipo: <code>boolean</code></li><li>Padrão: <code>true</code></li></ul><p>Se deve exibir a <a href="./default-theme-nav">barra de navegação</a>.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">navbar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h3 id="sidebar" tabindex="-1">sidebar <a class="header-anchor" href="#sidebar" aria-label="Permalink to &quot;sidebar&quot;">​</a></h3><ul><li>Tipo: <code>boolean</code></li><li>Padrão: <code>true</code></li></ul><p>Se deve exibir a <a href="./default-theme-sidebar">barra lateral</a>.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sidebar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h3 id="aside" tabindex="-1">aside <a class="header-anchor" href="#aside" aria-label="Permalink to &quot;aside&quot;">​</a></h3><ul><li>Tipo: <code>boolean | &#39;left&#39;</code></li><li>Padrão: <code>true</code></li></ul><p>Define a localização do componente aside no layout <code>doc</code>.</p><p>Configurar este valor como <code>false</code> impede a apresentação do elemento aside.<br> Configurar este valor como <code>true</code> apresenta o aside à direita.<br> Configurar este valor como <code>&#39;left&#39;</code> apresenta o aside à esquerda.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">aside</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h3 id="outline" tabindex="-1">outline <a class="header-anchor" href="#outline" aria-label="Permalink to &quot;outline&quot;">​</a></h3><ul><li>Tipo: <code>number | [number, number] | &#39;deep&#39; | false</code></li><li>Padrão: <code>2</code></li></ul><p>Os níveis do cabeçalho no <em>outline</em> a serem exibidos para a página. É o mesmo que <a href="./default-theme-config#outline">config.themeConfig.outline.level</a>, e sobrepõe o valor definido na configuração no nível do site.</p><h3 id="lastupdated" tabindex="-1">lastUpdated <a class="header-anchor" href="#lastupdated" aria-label="Permalink to &quot;lastUpdated&quot;">​</a></h3><ul><li>Tipo: <code>boolean | Date</code></li><li>Padrão: <code>true</code></li></ul><p>Se deve mostrar o texto de <a href="./default-theme-last-updated">última atualização</a> no rodapé da página atual. Se uma data e hora específica forem especificadas, ela será exibida em vez do último horário de modificação do git.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">lastUpdated</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h3 id="editlink" tabindex="-1">editLink <a class="header-anchor" href="#editlink" aria-label="Permalink to &quot;editLink&quot;">​</a></h3><ul><li>Tipo: <code>boolean</code></li><li>Padrão: <code>true</code></li></ul><p>Se deve exibir o <a href="./default-theme-edit-link">link de edição</a> no rodapé da página atual.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">editLink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h3 id="footer" tabindex="-1">footer <a class="header-anchor" href="#footer" aria-label="Permalink to &quot;footer&quot;">​</a></h3><ul><li>Tipo: <code>boolean</code></li><li>Padrão: <code>true</code></li></ul><p>Se deve exibir o <a href="./default-theme-footer">rodapé</a>.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h3 id="pageclass" tabindex="-1">pageClass <a class="header-anchor" href="#pageclass" aria-label="Permalink to &quot;pageClass&quot;">​</a></h3><ul><li>Tipo: <code>string</code></li></ul><p>Adiciona um nome de classe extra a uma página específica.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pageClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">custom-page-class</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><p>Em seguida, você pode personalizar os estilos desta página específica no arquivo <code>.vitepress/theme/custom.css</code>:</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-page-class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* estilos específicos da página */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,35);function E(y,b,f,F,C,v){const i=l("Badge");return o(),p("div",null,[d,a("h3",r,[s("hero "),e(i,{type:"info",text:"apenas para página inicial"}),s(),k]),c,a("h3",g,[s("features "),e(i,{type:"info",text:"apenas para página inicial"}),s(),u]),m])}const _=n(h,[["render",E]]);export{x as __pageData,_ as default};