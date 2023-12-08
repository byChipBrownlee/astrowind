import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import './chunks/astro_xNRJlNFq.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
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
    })
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
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/oauth/callback","pattern":"^\\/oauth\\/callback$","segments":[[{"content":"oauth","dynamic":false,"spread":false}],[{"content":"callback","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro-decap-cms-oauth/src/oauth/callback.ts","pathname":"/oauth/callback","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.NMl_MOj_.js"}],"styles":[],"routeData":{"type":"page","route":"/admin","pattern":"^\\/admin$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro-decap-cms-oauth/src/admin.astro","pathname":"/admin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/oauth","pattern":"^\\/oauth$","segments":[[{"content":"oauth","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro-decap-cms-oauth/src/oauth/index.ts","pathname":"/oauth","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/click-through.hjex8M2L.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/click-through.hjex8M2L.css"}],"routeData":{"route":"/services","type":"page","pattern":"^\\/services$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/click-through.hjex8M2L.css"}],"routeData":{"route":"/contact","type":"page","pattern":"^\\/contact$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/click-through.hjex8M2L.css"}],"routeData":{"route":"/landing/lead-generation","type":"page","pattern":"^\\/landing\\/lead-generation$","segments":[[{"content":"landing","dynamic":false,"spread":false}],[{"content":"lead-generation","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/landing/lead-generation.astro","pathname":"/landing/lead-generation","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/click-through.hjex8M2L.css"}],"routeData":{"route":"/landing/click-through","type":"page","pattern":"^\\/landing\\/click-through$","segments":[[{"content":"landing","dynamic":false,"spread":false}],[{"content":"click-through","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/landing/click-through.astro","pathname":"/landing/click-through","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/click-through.hjex8M2L.css"}],"routeData":{"route":"/landing/subscription","type":"page","pattern":"^\\/landing\\/subscription$","segments":[[{"content":"landing","dynamic":false,"spread":false}],[{"content":"subscription","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/landing/subscription.astro","pathname":"/landing/subscription","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/click-through.hjex8M2L.css"}],"routeData":{"route":"/landing/pre-launch","type":"page","pattern":"^\\/landing\\/pre-launch$","segments":[[{"content":"landing","dynamic":false,"spread":false}],[{"content":"pre-launch","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/landing/pre-launch.astro","pathname":"/landing/pre-launch","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/click-through.hjex8M2L.css"}],"routeData":{"route":"/landing/product","type":"page","pattern":"^\\/landing\\/product$","segments":[[{"content":"landing","dynamic":false,"spread":false}],[{"content":"product","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/landing/product.astro","pathname":"/landing/product","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/click-through.hjex8M2L.css"}],"routeData":{"route":"/landing/sales","type":"page","pattern":"^\\/landing\\/sales$","segments":[[{"content":"landing","dynamic":false,"spread":false}],[{"content":"sales","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/landing/sales.astro","pathname":"/landing/sales","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/click-through.hjex8M2L.css"}],"routeData":{"route":"/pricing","type":"page","pattern":"^\\/pricing$","segments":[[{"content":"pricing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pricing.astro","pathname":"/pricing","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/click-through.hjex8M2L.css"}],"routeData":{"route":"/privacy","type":"page","pattern":"^\\/privacy$","segments":[[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy.md","pathname":"/privacy","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.ts","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/click-through.hjex8M2L.css"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/click-through.hjex8M2L.css"}],"routeData":{"route":"/homes/mobile-app","type":"page","pattern":"^\\/homes\\/mobile-app$","segments":[[{"content":"homes","dynamic":false,"spread":false}],[{"content":"mobile-app","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/homes/mobile-app.astro","pathname":"/homes/mobile-app","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/click-through.hjex8M2L.css"}],"routeData":{"route":"/homes/personal","type":"page","pattern":"^\\/homes\\/personal$","segments":[[{"content":"homes","dynamic":false,"spread":false}],[{"content":"personal","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/homes/personal.astro","pathname":"/homes/personal","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/click-through.hjex8M2L.css"}],"routeData":{"route":"/homes/startup","type":"page","pattern":"^\\/homes\\/startup$","segments":[[{"content":"homes","dynamic":false,"spread":false}],[{"content":"startup","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/homes/startup.astro","pathname":"/homes/startup","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/click-through.hjex8M2L.css"}],"routeData":{"route":"/homes/saas","type":"page","pattern":"^\\/homes\\/saas$","segments":[[{"content":"homes","dynamic":false,"spread":false}],[{"content":"saas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/homes/saas.astro","pathname":"/homes/saas","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/click-through.hjex8M2L.css"}],"routeData":{"route":"/terms","type":"page","pattern":"^\\/terms$","segments":[[{"content":"terms","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terms.md","pathname":"/terms","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/click-through.hjex8M2L.css"}],"routeData":{"route":"/404","type":"page","pattern":"^\\/404$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}}],"site":"https://wonderful-caramel-31cc80.netlify.app","base":"/","trailingSlash":"never","compressHTML":true,"componentMetadata":[["/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/pages/landing/click-through.astro",{"propagation":"none","containsHead":true}],["/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/pages/landing/lead-generation.astro",{"propagation":"none","containsHead":true}],["/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/pages/landing/pre-launch.astro",{"propagation":"none","containsHead":true}],["/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/pages/landing/product.astro",{"propagation":"none","containsHead":true}],["/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/pages/landing/sales.astro",{"propagation":"none","containsHead":true}],["/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/pages/landing/subscription.astro",{"propagation":"none","containsHead":true}],["/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/pages/privacy.md",{"propagation":"none","containsHead":true}],["/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/pages/terms.md",{"propagation":"none","containsHead":true}],["/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/pages/[...blog]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/pages/[...blog]/[category]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/pages/[...blog]/[tag]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/pages/[...blog]/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/pages/homes/mobile-app.astro",{"propagation":"none","containsHead":true}],["/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/pages/homes/personal.astro",{"propagation":"in-tree","containsHead":true}],["/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/pages/homes/saas.astro",{"propagation":"in-tree","containsHead":true}],["/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/pages/homes/startup.astro",{"propagation":"none","containsHead":true}],["/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/pages/pricing.astro",{"propagation":"none","containsHead":true}],["/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/pages/services.astro",{"propagation":"none","containsHead":true}],["/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/node_modules/astro-decap-cms-oauth/src/admin.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/utils/blog.ts",{"propagation":"in-tree","containsHead":false}],["/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/components/widgets/BlogLatestPosts.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/homes/personal@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/homes/saas@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[...blog]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[...blog]/[category]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[...blog]/[tag]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[...blog]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/pages/rss.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@ts",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/node_modules/astro-decap-cms-oauth/src/admin.astro":"chunks/pages/admin_5a1xBA-R.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_yuzIctR8.mjs","/node_modules/astro-decap-cms-oauth/src/oauth/index.ts":"chunks/pages/index_3hSIN9L5.mjs","/src/pages/landing/lead-generation.astro":"chunks/pages/lead-generation_yFhgbMnD.mjs","/src/pages/homes/personal.astro":"chunks/pages/personal_LE216jYo.mjs","/src/pages/landing/pre-launch.astro":"chunks/pages/pre-launch_HINS1nM3.mjs","/src/pages/landing/product.astro":"chunks/pages/product_dgAtUgFs.mjs","/src/pages/rss.xml.ts":"chunks/pages/rss_OtN3SWhi.mjs","/src/pages/homes/saas.astro":"chunks/pages/saas__Ywvby5s.mjs","/src/pages/landing/sales.astro":"chunks/pages/sales_zaCDFQv8.mjs","/src/pages/services.astro":"chunks/pages/services_un1Nfc9M.mjs","/src/pages/homes/startup.astro":"chunks/pages/startup_rQJzUsWq.mjs","/src/pages/landing/subscription.astro":"chunks/pages/subscription_hwiF4bYW.mjs","/src/pages/terms.md":"chunks/pages/terms_WAIqRpnk.mjs","\u0000@astrojs-manifest":"manifest_MREqSxk9.mjs","\u0000@astro-page:node_modules/astro-decap-cms-oauth/src/oauth/callback@_@ts":"chunks/callback_-vvbGjUG.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_KF-spPbd.mjs","\u0000@astro-page:node_modules/astro-decap-cms-oauth/src/admin@_@astro":"chunks/admin_RLpY1RqO.mjs","\u0000@astro-page:node_modules/astro-decap-cms-oauth/src/oauth/index@_@ts":"chunks/index_1pklZLcK.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_MaRKV2TA.mjs","\u0000@astro-page:src/pages/services@_@astro":"chunks/services_HTYeQeiI.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_qJ5ELqkP.mjs","\u0000@astro-page:src/pages/landing/lead-generation@_@astro":"chunks/lead-generation_XVTe4Zrf.mjs","\u0000@astro-page:src/pages/landing/click-through@_@astro":"chunks/click-through_MlccW_Gx.mjs","\u0000@astro-page:src/pages/landing/subscription@_@astro":"chunks/subscription_QIaEpzQC.mjs","\u0000@astro-page:src/pages/landing/pre-launch@_@astro":"chunks/pre-launch__BXtZ_nt.mjs","\u0000@astro-page:src/pages/landing/product@_@astro":"chunks/product_yah7_njA.mjs","\u0000@astro-page:src/pages/landing/sales@_@astro":"chunks/sales_n8xGvXlY.mjs","\u0000@astro-page:src/pages/pricing@_@astro":"chunks/pricing_OagzaqLP.mjs","\u0000@astro-page:src/pages/privacy@_@md":"chunks/privacy_jBSE3K3y.mjs","\u0000@astro-page:src/pages/rss.xml@_@ts":"chunks/rss_mEKwecMU.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_SCuqluDF.mjs","\u0000@astro-page:src/pages/homes/mobile-app@_@astro":"chunks/mobile-app_fQMveP3V.mjs","\u0000@astro-page:src/pages/homes/personal@_@astro":"chunks/personal_UlOa537V.mjs","\u0000@astro-page:src/pages/homes/startup@_@astro":"chunks/startup_NaqrjqvP.mjs","\u0000@astro-page:src/pages/homes/saas@_@astro":"chunks/saas_jAWQeZkQ.mjs","\u0000@astro-page:src/pages/terms@_@md":"chunks/terms_GiaXIVH3.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_-RqEqoVm.mjs","\u0000@astro-page:src/pages/[...blog]/[category]/[...page]@_@astro":"chunks/_.._0eOTxcKa.mjs","\u0000@astro-page:src/pages/[...blog]/[tag]/[...page]@_@astro":"chunks/_.._dhYFJfvj.mjs","\u0000@astro-page:src/pages/[...blog]/[...page]@_@astro":"chunks/_.._QdGI0N9g.mjs","\u0000@astro-page:src/pages/[...blog]/index@_@astro":"chunks/index_Na4a8lnc.mjs","/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/assets/images/default.png":"chunks/default_-ycq-IHs.mjs","/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/assets/images/hero.png":"chunks/hero_lC7lo91g.mjs","/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/content/post/get-started-website-with-astro-tailwind-css.md?astroContentCollectionEntry=true":"chunks/get-started-website-with-astro-tailwind-css_3GkCPTAE.mjs","/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/content/post/how-to-customize-astrowind-to-your-brand.md?astroContentCollectionEntry=true":"chunks/how-to-customize-astrowind-to-your-brand_-151J76I.mjs","/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/content/post/landing.md?astroContentCollectionEntry=true":"chunks/landing_4qWVd4G9.mjs","/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/content/post/markdown-elements-demo-post.mdx?astroContentCollectionEntry=true":"chunks/markdown-elements-demo-post_q_sNnl3B.mjs","/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/content/post/useful-resources-to-create-websites.md?astroContentCollectionEntry=true":"chunks/useful-resources-to-create-websites_ZBL3LqBj.mjs","/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/content/post/get-started-website-with-astro-tailwind-css.md?astroPropagatedAssets":"chunks/get-started-website-with-astro-tailwind-css_MtWmxA8H.mjs","/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/content/post/how-to-customize-astrowind-to-your-brand.md?astroPropagatedAssets":"chunks/how-to-customize-astrowind-to-your-brand_7qnVm0eh.mjs","/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/content/post/landing.md?astroPropagatedAssets":"chunks/landing_JlgmnHH7.mjs","/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/content/post/markdown-elements-demo-post.mdx?astroPropagatedAssets":"chunks/markdown-elements-demo-post_LATGir75.mjs","/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/content/post/useful-resources-to-create-websites.md?astroPropagatedAssets":"chunks/useful-resources-to-create-websites_ADmNC_94.mjs","/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/content/post/get-started-website-with-astro-tailwind-css.md":"chunks/get-started-website-with-astro-tailwind-css_fJwWtwvG.mjs","/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/content/post/how-to-customize-astrowind-to-your-brand.md":"chunks/how-to-customize-astrowind-to-your-brand_qKSSHa6f.mjs","/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/content/post/landing.md":"chunks/landing_zJiQpNwG.mjs","/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/content/post/markdown-elements-demo-post.mdx":"chunks/markdown-elements-demo-post_wlNJDJUM.mjs","/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/content/post/useful-resources-to-create-websites.md":"chunks/useful-resources-to-create-websites_0nqD6Mg0.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.NMl_MOj_.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/app-store.Ld7RuCc9.png","/_astro/google-play.CEkzHKSz.png","/_astro/favicon.hokQozyD.ico","/_astro/favicon.L6f3wbtH.svg","/_astro/apple-touch-icon.xyJRu3aZ.png","/_astro/inter-greek-ext-wght-normal.-QGCzYqo.woff2","/_astro/inter-greek-wght-normal.8iAzSMjZ.woff2","/_astro/inter-cyrillic-ext-wght-normal.yBM_KeYt.woff2","/_astro/inter-cyrillic-wght-normal.ZiSV2vHp.woff2","/_astro/inter-latin-ext-wght-normal.jdaSF5G5.woff2","/_astro/inter-latin-wght-normal.YFatk6uG.woff2","/_astro/inter-vietnamese-wght-normal.PxkLsD1V.woff2","/_astro/hero.9Pvf-M2C.png","/_astro/default.Th1dKr9c.png","/_astro/click-through.hjex8M2L.css","/_headers","/robots.txt","/_astro/hoisted.NMl_MOj_.js","/admin/config.yml","/decapcms/config.yml","/decapcms/index.html"]});

export { manifest };