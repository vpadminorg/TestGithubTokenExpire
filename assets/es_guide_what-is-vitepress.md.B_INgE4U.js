import{_ as e,c as a,o as r,aT as t}from"./chunks/framework.DnmJAMNq.js";const h=JSON.parse('{"title":"Qué es VitePress?","description":"","frontmatter":{},"headers":[],"relativePath":"es/guide/what-is-vitepress.md","filePath":"es/guide/what-is-vitepress.md","lastUpdated":1730715231000}'),i={name:"es/guide/what-is-vitepress.md"},s=t('<h1 id="what-is-vitepress" tabindex="-1">Qué es VitePress? <a class="header-anchor" href="#what-is-vitepress" aria-label="Permalink to &quot;Qué es VitePress? {#what-is-vitepress}&quot;">​</a></h1><p>VitePress es un <a href="https://en.wikipedia.org/wiki/Static_site_generator" target="_blank" rel="noreferrer">Generador de Sitios Estáticos</a> (SSG) proyectado para crear sitios rápidos y centrados en contenido. En suma, VitePress utiliza su contenido fuente escrito en <a href="https://en.wikipedia.org/wiki/Markdown" target="_blank" rel="noreferrer">Markdown</a>, aplica un tema a el y genera páginas HTML estáticas que pueden ser facilmente implantadas en cualquier lugar.</p><div class="tip custom-block" style="padding-top:8px;"> Quiere apenas experimentar? Valla al [Início Rápido](./getting-started). </div><h2 id="use-cases" tabindex="-1">Casos de Uso <a class="header-anchor" href="#use-cases" aria-label="Permalink to &quot;Casos de Uso {#use-cases}&quot;">​</a></h2><ul><li><p><strong>Documentación</strong></p><p>VitePress viene con un tema por defecto proyectado para documentación técnica. El alimenta esta página que está leyendo ahora, juntamente con la documentación <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">Vite</a>, <a href="https://rollupjs.org/" target="_blank" rel="noreferrer">Rollup</a>, <a href="https://pinia.vuejs.org/" target="_blank" rel="noreferrer">Pinia</a>, <a href="https://vueuse.org/" target="_blank" rel="noreferrer">VueUse</a>, <a href="https://vitest.dev/" target="_blank" rel="noreferrer">Vitest</a>, <a href="https://d3js.org/" target="_blank" rel="noreferrer">D3</a>, <a href="https://unocss.dev/" target="_blank" rel="noreferrer">UnoCSS</a>, <a href="https://iconify.design/" target="_blank" rel="noreferrer">Iconify</a> e <a href="https://www.vuetelescope.com/explore?framework.slug=vitepress" target="_blank" rel="noreferrer">muchos otros</a>.</p><p>La <a href="https://vuejs.org/" target="_blank" rel="noreferrer">documentación oficial Vue.js</a> también está basada en VitePress, pero usa un tema personalizado compartido entre varias traducciones.</p></li><li><p><strong>Blogs, Portfólios y sitios de Marketing</strong></p><p>VitePress soporta <a href="./custom-theme">temas totalmente personalizables</a>, con la experiencia de desarrollador por defecto de una aplicaciónn Vite + Vue. La construcción con Vite significa que puede aprovechar directamente plugins Vite de su rico ecosistema. Adicionalmente, VitePress proporciona APIs flexibles para<a href="./data-loading">cargar datos</a> (locales o remotos) y <a href="./routing#dynamic-routes">generar rutas dinámicamente</a>. Puede usarlo para construir practicamente cualquier cosa desde que los datos puedan ser determinados en el momento del build.</p><p>El <a href="https://blog.vuejs.org/" target="_blank" rel="noreferrer">blog oficial Vue.js</a> es un blog simple que genera su página inicial basada en contenido local.</p></li></ul><h2 id="developer-experience" tabindex="-1">Experiencia de Desarrollador <a class="header-anchor" href="#developer-experience" aria-label="Permalink to &quot;Experiencia de Desarrollador {#developer-experience}&quot;">​</a></h2><p>VitePress visa proporcionar excelente Experiencia de Desarrollador (DX) al trabajar con contenido en Markdown.</p><ul><li><p><strong><a href="https://vitejs.dev/" target="_blank" rel="noreferrer">Alimentado por Vite:</a></strong> inicialización instantánea del servidor, con ediciones siempre reflejadas instantáneamente (&lt;100ms) sin recarga de página.</p></li><li><p><strong><a href="./markdown">Extensiones Markdown Integradas:</a></strong> Frontmatter, tablas, destaque de sintaxis... usted escoje. Especificamente, VitePress proporciona muchos recursos para trabajar con bloques de código, tornandolo ideal para documentación altamente técnica.</p></li><li><p><strong><a href="./using-vue">Markdown Mejorado por Vue:</a></strong> cada página Markdown es también un <a href="https://pt.vuejs.org/guide/scaling-up/sfc.html" target="_blank" rel="noreferrer">Componente de Archivo único</a>, gracias a la compatibilidad de sintaxis de 100% del template Vue con HTML. Puede también incorporar iteractividad con su contenido estático usando recursos de template Vue o componentes Vue importados.</p></li></ul><h2 id="performance" tabindex="-1">Desempeño <a class="header-anchor" href="#performance" aria-label="Permalink to &quot;Desempeño {#performance}&quot;">​</a></h2><p>Al contrario de muchos SSGs tradicionales, un sitio generado por VitePress es la verdad una <a href="https://en.wikipedia.org/wiki/Single-page_application" target="_blank" rel="noreferrer">Single Page Application</a> (SPA).</p><ul><li><p><strong>Carga Inicial Rápida</strong></p><p>La visita inicial a cualquier página será servida con el HTML estático pré-renderizado para velocidad de carga rápida y SEO optimizado. La página entonces carga un paquete JavaScript que transforma la página en una SPA Vue (&quot;hidratación&quot;). El proceso de hidratación es extremadamente rápido: en <a href="https://pagespeed.web.dev/report?url=https%3A%2F%2Fvitepress.dev%2F" target="_blank" rel="noreferrer">PageSpeed Insights</a>, sitios típicos VitePress alcanzan puntuaciones de desempeño casi perfectas, incluso en dispositivos móbiles de bajo desempeño con una red lenta.</p></li><li><p><strong>Navegación Rápida pos-carga</strong></p><p>Más importante todavía, el modelo SPA lleva a una mejor experiencia del usuario <strong>después</strong> de la carga inicial. La navegación subsequente dentro del sitio no causará una recarga adicional completa de la página. En vez de eso, el contenido de la página de entrada será buscado y actualizado dinámicamente. VitePress también pre-carga automáticamente pedazos de página para links que están dentro del viewport. En la mayoría de los casos, la navegación pos-carga parecerá instantánea.</p></li><li><p><strong>Interactividad Sin Penalidades</strong></p><p>Para ser capaz de hidratar las partes dinámicas Vue incorporadas dentro del Markdown estático, cada página Markdown es procesada como un componente Vue y compilada en JavaScript. Esto puede parecer ineficiente, pero el compilador Vue es suficientemente inteligente para separar las partes estáticas y dinámicas, minimizando tanto el costo de hidratación así como el tamaño de carga. Para la carga inicial de la página, las partes estáticas son automáticamente eliminadas de la carga JavaScript y omitidas durante la hidratación.</p></li></ul><h2 id="what-about-vuepress" tabindex="-1">Y VuePress? <a class="header-anchor" href="#what-about-vuepress" aria-label="Permalink to &quot;Y VuePress? {#what-about-vuepress}&quot;">​</a></h2><p>VitePress es el sucesor espiritual de VuePress. VuePress era orginalmente basado en Vue 2 y webpack. Con Vue 3 y Vite, VitePress ofrece una experiencia de desarrollador significamente mejor, mejor desempeño en producción, un tema por defecto más pulido y un API de personalización más flexible.</p><p>A diferencia del API entre VitePress y VuePress reside principalmente en temas y personalización. Si estuviera usando VuePress 1 con el tema por defecto, la migración para VitePress debe ser relativamente simple.</p><p>También hubo esfuerzo invertido en VuePress 2, que también soporta Vue 3 y Vite con mejor compatibilidad que con VuePress 1. Sin embargo, mantener dos SSGs en paralelo no es sustentable, entonces el equipo Vue decidió enfocarse en VitePress como el principal SSG recomendado a largo plazo.</p>',15),n=[s];function o(l,d,p,c,u,m){return r(),a("div",null,n)}const f=e(i,[["render",o]]);export{h as __pageData,f as default};
