import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_550dd2b6.mjs';

const _page0  = () => import('./chunks/callback_e5294da0.mjs');
const _page1  = () => import('./chunks/generic_a07c4320.mjs');
const _page2  = () => import('./chunks/admin_9a1c1708.mjs');
const _page3  = () => import('./chunks/index_d839b4da.mjs');
const _page4  = () => import('./chunks/index_869137fe.mjs');
const _page5  = () => import('./chunks/services_50666c00.mjs');
const _page6  = () => import('./chunks/contact_e2c6ff81.mjs');
const _page7  = () => import('./chunks/lead-generation_1cfc3134.mjs');
const _page8  = () => import('./chunks/click-through_324dcddd.mjs');
const _page9  = () => import('./chunks/subscription_d8b35c29.mjs');
const _page10  = () => import('./chunks/pre-launch_bd8f3ce9.mjs');
const _page11  = () => import('./chunks/product_93e0e4b5.mjs');
const _page12  = () => import('./chunks/sales_c1399f61.mjs');
const _page13  = () => import('./chunks/pricing_b1fa5d2f.mjs');
const _page14  = () => import('./chunks/privacy_c9fc844b.mjs');
const _page15  = () => import('./chunks/rss_4fcd906b.mjs');
const _page16  = () => import('./chunks/about_112a5183.mjs');
const _page17  = () => import('./chunks/mobile-app_9b5150c4.mjs');
const _page18  = () => import('./chunks/personal_4a16c0d4.mjs');
const _page19  = () => import('./chunks/startup_d0bb3e24.mjs');
const _page20  = () => import('./chunks/saas_3240f622.mjs');
const _page21  = () => import('./chunks/terms_1f71fa85.mjs');
const _page22  = () => import('./chunks/404_0c8f1c45.mjs');
const _page23  = () => import('./chunks/_.._16b97657.mjs');
const _page24  = () => import('./chunks/_.._a8c83642.mjs');
const _page25  = () => import('./chunks/_.._2a7e9037.mjs');
const _page26  = () => import('./chunks/index_6ee97b36.mjs');const pageMap = new Map([["node_modules/astro-decap-cms-oauth/src/oauth/callback.ts", _page0],["node_modules/astro/dist/assets/endpoint/generic.js", _page1],["node_modules/astro-decap-cms-oauth/src/admin.astro", _page2],["node_modules/astro-decap-cms-oauth/src/oauth/index.ts", _page3],["src/pages/index.astro", _page4],["src/pages/services.astro", _page5],["src/pages/contact.astro", _page6],["src/pages/landing/lead-generation.astro", _page7],["src/pages/landing/click-through.astro", _page8],["src/pages/landing/subscription.astro", _page9],["src/pages/landing/pre-launch.astro", _page10],["src/pages/landing/product.astro", _page11],["src/pages/landing/sales.astro", _page12],["src/pages/pricing.astro", _page13],["src/pages/privacy.md", _page14],["src/pages/rss.xml.ts", _page15],["src/pages/about.astro", _page16],["src/pages/homes/mobile-app.astro", _page17],["src/pages/homes/personal.astro", _page18],["src/pages/homes/startup.astro", _page19],["src/pages/homes/saas.astro", _page20],["src/pages/terms.md", _page21],["src/pages/404.astro", _page22],["src/pages/[...blog]/[category]/[...page].astro", _page23],["src/pages/[...blog]/[tag]/[...page].astro", _page24],["src/pages/[...blog]/[...page].astro", _page25],["src/pages/[...blog]/index.astro", _page26]]);
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
