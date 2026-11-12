import{$i as e,Bi as t,Ds as n,Js as r,Lt as i,Pi as a,Si as o,mc as s,qn as c,tc as l,tl as u,wi as d,xi as f}from"./CICfqp-Y.js";import{$i as p,to as m,va as h}from"./CvRvuR_i.js";async function g(e){let t=e.querySelectorAll(`img[src$=".svg"]`);for(let e of t){let t=e.src;try{let n=await fetch(t);if(!n.ok){console.warn(`Não foi possível carregar a imagem SVG: ${t}`);continue}let r=document.createElement(`div`);r.innerHTML=await n.text();let i=r.querySelector(`svg`);if(!i)continue;v(i,e),e.replaceWith(i)}catch(e){console.error(`Erro ao carregar SVG: ${t}`,e)}}}var _=[`class`,`style`,`width`,`height`];function v(e,t){y(e,t),x(e,t)}function y(e,t){if(e.hasAttribute(`viewBox`)){b(t)&&(e.removeAttribute(`width`),e.removeAttribute(`height`));for(let n of _){let r=t.getAttribute(n);r!==null&&e.setAttribute(n,r)}}}function b(e){return e.hasAttribute(`width`)||e.hasAttribute(`height`)||e.style.width!==``||e.style.height!==``}function x(e,t){let n=t.getAttribute(`aria-labelledby`),r=t.getAttribute(`aria-label`),i=n||r||t.getAttribute(`alt`);i===``?(e.setAttribute(`aria-hidden`,`true`),e.setAttribute(`focusable`,`false`)):(e.setAttribute(`role`,`img`),e.hasAttribute(`aria-label`)||e.hasAttribute(`aria-labelledby`)||(n?e.setAttribute(`aria-labelledby`,n):i&&e.setAttribute(`aria-label`,i)))}var S=`
  window.addEventListener('afterprint', function () { window.close() })
  function imprimir() {
    window.print()
  }
  function aoCarregar() {
    var fontes = document.fonts ? document.fonts.ready : Promise.resolve()
    Promise.resolve(fontes).then(imprimir, imprimir)
  }
  if (document.readyState === 'complete') {
    aoCarregar()
  } else {
    window.addEventListener('load', aoCarregar, { once: true })
  }
`,C=`<!DOCTYPE html>
<html lang="pt-BR">
  <head><meta charset="UTF-8" /><title>Gerando demonstrativo…</title></head>
  <body style="margin:0;height:100vh;display:flex;align-items:center;justify-content:center;font-family:sans-serif;color:#555;">
    Gerando o demonstrativo para impressão…
  </body>
</html>`;function w(){let t=e(),r=n();function i(){return Array.from(document.styleSheets,e=>{try{if(e.cssRules)return Array.from(e.cssRules,e=>e.cssText).join(`
`)}catch{console.warn(`Não foi possível acessar o conteúdo de uma folha de estilos:`,e.href)}return``}).filter(Boolean).join(`
`)}function a(e){let t=[e,...e.querySelectorAll(`*`)];for(let e of t){let t=[...e.classList].filter(e=>e===`q-dark`||e===`body--dark`||e.endsWith(`--dark`));for(let n of t)e.classList.remove(n)}}function o(e,t,n,r){return`
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${n}</title>
        <style>
          @page {
            size: a4 ${r?`landscape`:`portrait`};
          }
        </style>
        <style>${t}</style>
      </head>
      <body>
        ${e}
        <script>${S}<\/script>
      </body>
    </html>
    `}function s(){let e=window.open(``,`_blank`);return e&&(e.document.write(C),e.document.close()),e}async function c(e,n,s=!0,c){if(c){if(!e)c.close();else try{let t=e.cloneNode(!0);t.style.removeProperty(`zoom`),t.classList.remove(`q-ma-md`),a(t),await g(t);let r=i(),l=o(t.outerHTML,r,n,s),u=new Blob([l],{type:`text/html`});c.location.href=URL.createObjectURL(u)}catch(e){r.erro(e),c.close(),t.aviso(`Falha ao gerar o demonstrativo`,`Não foi possível preparar o demonstrativo para impressão. Tente novamente.`)}}}return{abrirJanela:s,imprimirHtml:c}}var T=500,E=25;async function D(e){let t=Date.now()+T;for(;Date.now()<t;){if(e.querySelector(`[data-fc-qr-resolvido="1"]`))return;await new Promise(e=>setTimeout(e,E))}}async function O(e,t,n,r=!0,i){if(!t){i?.close();return}let a=e.obterSnapshot();e.permalink.value=a?await e.criar(a):null,e.permalink.value&&(await h(),await D(t));try{await e.imprimirHtml(t,n,r,i)}finally{e.permalink.value=null}}var k=e=>JSON.parse(e,a);function A(){let e=u().app.baseURL??`/`,n=u(),{permalinks:r}=f(),{imprimirHtml:a}=w(),l=m(null);function p(t){if(typeof window>`u`)return t;let n=String(e).replace(/\/$/,``);return`${window.location.origin}${n}/permalink/${t}`}async function h(e){if(n.public.modoEstatico)return null;try{let t=await r.criar({corpo:i({...e,arquivo:c(e.arquivo)})});return{id:t.result.id,token:t.result.token,url:p(t.result.token),criadoEm:t.result.criadoEm,expiraEm:t.result.expiraEm}}catch{return null}}async function g(n){return(await s(t(e,o(d.abrir.caminhoApp??``,{token:n})),{parseResponse:k})).result}async function _(e){let t=await h(e);return t?{url:t.url,app:e.app,versao:e.versao,criadoEm:t.criadoEm}:null}return{permalink:l,criarPermalinkParaImpressao:h,recuperarPorPermalink:g,montarUrlPermalink:p,imprimir:(e,t,n,r=!0,i)=>O({permalink:l,criar:_,obterSnapshot:n.obterSnapshot,imprimirHtml:a},e,t,r,i)}}function j(){let e=r(),t=p(()=>e.idApp?l(e.idApp)?.capacidades:void 0),n=p(()=>t.value?.permalink===!0),i=p(()=>t.value?.linksPublicos===!0);return{permitePermalink:n,permiteLinkPublico:i,aberturaCompartilhamentoDisponivel:p(()=>n.value||i.value)}}export{A as n,w as r,j as t};