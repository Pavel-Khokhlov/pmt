import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_DArtB3Sg.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_mFqmFTiq.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/macbook/dev/MY/massage-astro/","cacheDir":"file:///Users/macbook/dev/MY/massage-astro/node_modules/.astro/","outDir":"file:///Users/macbook/dev/MY/massage-astro/dist/","srcDir":"file:///Users/macbook/dev/MY/massage-astro/src/","publicDir":"file:///Users/macbook/dev/MY/massage-astro/public/","buildClientDir":"file:///Users/macbook/dev/MY/massage-astro/dist/client/","buildServerDir":"file:///Users/macbook/dev/MY/massage-astro/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/pmt/_astro/index.AhUPDlI_.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://pavel-khokhlov.github.io","base":"/pmt","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/macbook/dev/MY/massage-astro/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DSpg0pyD.mjs","/Users/macbook/dev/MY/massage-astro/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/Users/macbook/dev/MY/massage-astro/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DR9OQDTx.mjs","/Users/macbook/dev/MY/massage-astro/src/assets/images/feedback/index.js":"chunks/index_B9MXDrXV.mjs","@astrojs/vue/client.js":"_astro/client.DL4-F3Sf.js","/Users/macbook/dev/MY/massage-astro/src/components/sections/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.DA0gF-5f.js","/Users/macbook/dev/MY/massage-astro/src/components/sections/Certificates.astro?astro&type=script&index=0&lang.ts":"_astro/Certificates.astro_astro_type_script_index_0_lang.DhPTYTOq.js","/Users/macbook/dev/MY/massage-astro/src/components/sections/Navigation.astro?astro&type=script&index=0&lang.ts":"_astro/Navigation.astro_astro_type_script_index_0_lang.CTEr0Vtp.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/macbook/dev/MY/massage-astro/src/components/sections/Header.astro?astro&type=script&index=0&lang.ts","const t=document.querySelector(\".body\"),e=document.querySelector(\"[data-action=burger]\"),c=document.querySelector(\".burger-menu\");e&&e.addEventListener(\"click\",()=>{t&&t.classList.toggle(\"_unscroll\"),e&&e.classList.toggle(\"_active\"),c&&c.classList.toggle(\"_opened\")});"],["/Users/macbook/dev/MY/massage-astro/src/components/sections/Navigation.astro?astro&type=script&index=0&lang.ts","const t=document.querySelectorAll(\".nav__link._modal\"),l=()=>{const e=document.querySelector(\".burger\");e&&e.classList.toggle(\"_active\");const c=document.querySelector(\".burger-menu\");c&&c.classList.toggle(\"_opened\");const o=document.querySelector(\".body\");o&&o.classList.toggle(\"_unscroll\")};t.forEach(e=>e.addEventListener(\"click\",l));"]],"assets":["/pmt/_astro/certificate.ZtZerHwZ.webp","/pmt/_astro/trigger.qXWMZ1l9.webp","/pmt/_astro/pravilo.DZdLgDKR.webp","/pmt/_astro/kinezio.Dj2epsOV.webp","/pmt/_astro/perkucia.CLCxnVwt.webp","/pmt/_astro/veniki.szsDIQKm.webp","/pmt/_astro/certificate.C5u8wvgI.webp","/pmt/_astro/pravilo.DCRbV3UK.webp","/pmt/_astro/veniki.BLeCDX7r.webp","/pmt/_astro/perkucia.D9gRuwOe.webp","/pmt/_astro/trigger.N7hgno6S.webp","/pmt/_astro/kinezio.r31LTkh6.webp","/pmt/_astro/alex_p.CQvUes24.webp","/pmt/_astro/anna_klubnikina.BUtcONmc.webp","/pmt/_astro/juju_juliya_nails._jj5Pgjc.webp","/pmt/_astro/kristina.C1G9Hsta.webp","/pmt/_astro/diana.C-oReB-j.webp","/pmt/_astro/irina.BT3t7eym.webp","/pmt/_astro/tatiana.4RKwyodr.webp","/pmt/_astro/kseniya.DRG-WF2f.webp","/pmt/_astro/ts_andreeva.BJbMlffx.webp","/pmt/_astro/svetlana.CC-BFSO6.webp","/pmt/_astro/10.BjskrEIm.webp","/pmt/_astro/8.B6DNKCdn.webp","/pmt/_astro/9.BHeDTCVM.webp","/pmt/_astro/7.CgRlyFJD.webp","/pmt/_astro/rein.CEyJDSMT.webp","/pmt/_astro/5.A4cEvlo-.webp","/pmt/_astro/nataliya.DhSUolHn.webp","/pmt/_astro/sahatyi.zqFHeHen.webp","/pmt/_astro/Pacifico-Regular.DqRvctb9.ttf","/pmt/_astro/RobotoCondensed.BFsFSWXF.ttf","/pmt/_astro/index.AhUPDlI_.css","/pmt/favicon.ico","/pmt/_astro/Certificates.astro_astro_type_script_index_0_lang.DhPTYTOq.js","/pmt/_astro/client.DL4-F3Sf.js","/pmt/fonts/Jura.ttf","/pmt/fonts/Lobster-Regular.ttf","/pmt/fonts/Pacifico-Regular.ttf","/pmt/fonts/RobotoCondensed.ttf","/pmt/fonts/Rubik80sFade-Regular.ttf","/pmt/fonts/Trebuchet.ttf","/pmt/assets/images/background/feedbackH.webp","/pmt/assets/images/background/feedbackV.webp","/pmt/assets/images/background/mainH.webp","/pmt/assets/images/background/mainV.webp","/pmt/assets/images/background/portrait.webp"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"03n/LhCwrUaaIKcQ2z0s0EqOfwBALADdYlsMzJSRNTM=","sessionConfig":{"driver":"fs-lite","options":{"base":"/Users/macbook/dev/MY/massage-astro/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
