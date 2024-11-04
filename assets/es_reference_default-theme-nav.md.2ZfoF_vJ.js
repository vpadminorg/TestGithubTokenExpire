import{_ as s,c as i,o as a,aT as n}from"./chunks/framework.DnmJAMNq.js";const g=JSON.parse('{"title":"Navegación","description":"","frontmatter":{},"headers":[],"relativePath":"es/reference/default-theme-nav.md","filePath":"es/reference/default-theme-nav.md","lastUpdated":1730715231000}'),e={name:"es/reference/default-theme-nav.md"},l=n(`<h1 id="nav" tabindex="-1">Navegación <a class="header-anchor" href="#nav" aria-label="Permalink to &quot;Navegación {#nav}&quot;">​</a></h1><p>Refiriéndose a la barra de navegación que se muestra en la parte superior de la página. Contiene el título del sitio, enlaces del menú global, etc.</p><h2 id="site-title-and-logo" tabindex="-1">Título y logotipo del sitio <a class="header-anchor" href="#site-title-and-logo" aria-label="Permalink to &quot;Título y logotipo del sitio {#site-title-and-logo}&quot;">​</a></h2><p>Por defecto, la navegación muestra el título del sitio que hace referencia al valor de <a href="./site-config#title"><code>config.title</code></a>. Si desea cambiar lo que se muestra en la navegación, puede configurar un texto personalizado en el <code>themeConfig.siteTitle</code>.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    siteTitle: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Mi Título Personalizado&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Si tiene un logotipo para su sitio web, puede mostrarlo pasando la ruta a la imagen. Debes colocar el logo directamente dentro de la carpeta. <code>public</code>, y establezca la ruta absoluta hacia él.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    logo: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/my-logo.svg&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Cuando agrega un logotipo, se muestra junto con el título del sitio. Si su logotipo tiene todo lo que necesita y desea ocultar el texto del título, configure <code>false</code> en la opción <code>siteTitle</code>.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    logo: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/my-logo.svg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    siteTitle: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>También puedes pasar un objeto como logotipo si quieres agregar un atributo. <code>alt</code> o personalizarlo según el modo claro/oscuro. Consultar <a href="./default-theme-config#logo"><code>themeConfig.logo</code></a> para obtener más detalles.</p><h2 id="navigation-links" tabindex="-1">Links de Navegación <a class="header-anchor" href="#navigation-links" aria-label="Permalink to &quot;Links de Navegación {#navigation-links}&quot;">​</a></h2><p>Puedes configurar la opción <code>themeConfig.nav</code> para añadir enlaces a tu navegación.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    nav: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Guia&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/guide&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Configuración&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/config&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Registro de Cambios&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://github.com/...&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><code>text</code> es el texto que se muestra en la navegación, y el <code>link</code> es el link al que será navegando cuando se hace click en el texto. Para el enlace, establezca la ruta al archivo sin el prefijo <code>.md</code> y siempre comenzar por <code>/</code>.</p><p>Links de navegación también pueden ser menus <em>dropdown</em>. Para hacer eso, establezca la clave de <code>items</code> en la opción del link.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    nav: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Guia&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/guide&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Menú Dropdown&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        items: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          { text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Item A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/item-1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          { text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Item B&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/item-2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          { text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Item C&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/item-3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Tenga en cuenta que el titulo del menú <em>dropdown</em> (<code>Menu Dropdown</code> en el ejemplo anterior) no puede tener una propiedad <code>link</code>, ya que se convierte en un botón para abrir el cuadro del dialogo dropdown.</p><p>También puedes agregar &quot;secciones&quot; a los elementos del menú <em>dropdown</em> pasando más elementos anidados.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    nav: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Guia&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/guia&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Menú Dropdown&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        items: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // Título da seção.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Título de la sección A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            items: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              { text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Item A de la sección A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;...&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              { text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Item B de la sección B&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;...&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Menú Dropdown&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        items: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // También puedes omitir el título</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            items: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              { text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Item A da Seção A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;...&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              { text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Item B da Seção B&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;...&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="customize-link-s-active-state" tabindex="-1">Personaliza el estado &quot;activo&quot; del link <a class="header-anchor" href="#customize-link-s-active-state" aria-label="Permalink to &quot;Personaliza el estado &quot;activo&quot; del link {#customize-link-s-active-state}&quot;">​</a></h3><p>Los elementos del menú de navegación se resaltarán cuando la página actual esté en la ruta correspondiente. Si desea personalizar la ruta que debe coincidir, establezca la propiedad <code>activeMatch</code> el regex como um valor en string.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    nav: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // Este link esta en estado activo cuando</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // el usuario esta en el camino \`/config/\`.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Guia&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/guide&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        activeMatch: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/config/&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><code>activeMatch</code> Debería ser un string regex, pero deberías definirla como un string. No podemos usar un objeto RegExp real aquí porque no es serializable durante el tiempo de construcción.</p></div><h3 id="customize-link-s-target-and-rel-attributes" tabindex="-1">Personalizar los atributos &quot;target&quot; y &quot;rel&quot; de links <a class="header-anchor" href="#customize-link-s-target-and-rel-attributes" aria-label="Permalink to &quot;Personalizar los atributos &quot;target&quot; y &quot;rel&quot; de links {#customize-link-s-target-and-rel-attributes}&quot;">​</a></h3><p>Por defecto, VitePress determina automáticamente lod atributos <code>target</code> y <code>rel</code> en función de si existe un enlace externo o no. Pero si quieres, también puedes personalizarlos.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    nav: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Merchandise&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://www.thegithubshop.com/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        target: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;_self&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        rel: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;sponsored&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="social-links" tabindex="-1">Links Scociales <a class="header-anchor" href="#social-links" aria-label="Permalink to &quot;Links Scociales {#social-links}&quot;">​</a></h2><p>Consulte <a href="./default-theme-config#sociallinks"><code>socialLinks</code></a>.</p>`,28),t=[l];function p(h,k,E,d,r,o){return a(),i("div",null,t)}const y=s(e,[["render",p]]);export{g as __pageData,y as default};
