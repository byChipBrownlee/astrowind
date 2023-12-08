import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_MREqSxk9.mjs';

const _page0  = () => import('./chunks/callback_-vvbGjUG.mjs');
const _page1  = () => import('./chunks/generic_KF-spPbd.mjs');
const _page2  = () => import('./chunks/admin_RLpY1RqO.mjs');
const _page3  = () => import('./chunks/index_1pklZLcK.mjs');
const _page4  = () => import('./chunks/index_MaRKV2TA.mjs');
const _page5  = () => import('./chunks/services_HTYeQeiI.mjs');
const _page6  = () => import('./chunks/contact_qJ5ELqkP.mjs');
const _page7  = () => import('./chunks/lead-generation_XVTe4Zrf.mjs');
const _page8  = () => import('./chunks/click-through_MlccW_Gx.mjs');
const _page9  = () => import('./chunks/subscription_QIaEpzQC.mjs');
const _page10  = () => import('./chunks/pre-launch__BXtZ_nt.mjs');
const _page11  = () => import('./chunks/product_yah7_njA.mjs');
const _page12  = () => import('./chunks/sales_n8xGvXlY.mjs');
const _page13  = () => import('./chunks/pricing_OagzaqLP.mjs');
const _page14  = () => import('./chunks/privacy_jBSE3K3y.mjs');
const _page15  = () => import('./chunks/rss_mEKwecMU.mjs');
const _page16  = () => import('./chunks/about_SCuqluDF.mjs');
const _page17  = () => import('./chunks/mobile-app_fQMveP3V.mjs');
const _page18  = () => import('./chunks/personal_UlOa537V.mjs');
const _page19  = () => import('./chunks/startup_NaqrjqvP.mjs');
const _page20  = () => import('./chunks/saas_jAWQeZkQ.mjs');
const _page21  = () => import('./chunks/terms_GiaXIVH3.mjs');
const _page22  = () => import('./chunks/404_-RqEqoVm.mjs');
const _page23  = () => import('./chunks/_.._0eOTxcKa.mjs');
const _page24  = () => import('./chunks/_.._dhYFJfvj.mjs');
const _page25  = () => import('./chunks/_.._QdGI0N9g.mjs');
const _page26  = () => import('./chunks/index_Na4a8lnc.mjs');const pageMap = new Map([["node_modules/astro-decap-cms-oauth/src/oauth/callback.ts", _page0],["node_modules/astro/dist/assets/endpoint/generic.js", _page1],["node_modules/astro-decap-cms-oauth/src/admin.astro", _page2],["node_modules/astro-decap-cms-oauth/src/oauth/index.ts", _page3],["src/pages/index.astro", _page4],["src/pages/services.astro", _page5],["src/pages/contact.astro", _page6],["src/pages/landing/lead-generation.astro", _page7],["src/pages/landing/click-through.astro", _page8],["src/pages/landing/subscription.astro", _page9],["src/pages/landing/pre-launch.astro", _page10],["src/pages/landing/product.astro", _page11],["src/pages/landing/sales.astro", _page12],["src/pages/pricing.astro", _page13],["src/pages/privacy.md", _page14],["src/pages/rss.xml.ts", _page15],["src/pages/about.astro", _page16],["src/pages/homes/mobile-app.astro", _page17],["src/pages/homes/personal.astro", _page18],["src/pages/homes/startup.astro", _page19],["src/pages/homes/saas.astro", _page20],["src/pages/terms.md", _page21],["src/pages/404.astro", _page22],["src/pages/[...blog]/[category]/[...page].astro", _page23],["src/pages/[...blog]/[tag]/[...page].astro", _page24],["src/pages/[...blog]/[...page].astro", _page25],["src/pages/[...blog]/index.astro", _page26]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
