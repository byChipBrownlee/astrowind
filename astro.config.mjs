import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import compress from 'astro-compress';
import icon from 'astro-icon';
import tasks from './src/utils/tasks';
// import NetlifyCMS from 'astro-netlify-cms';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin } from './src/utils/frontmatter.mjs';
import { ANALYTICS, SITE } from './src/utils/config.ts';
import decapCmsOauth from "astro-decap-cms-oauth";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const whenExternalScripts = (items = []) => ANALYTICS.vendors.googleAnalytics.id && ANALYTICS.vendors.googleAnalytics.partytown ? Array.isArray(items) ? items.map(item => item()) : [items()] : [];

// https://astro.build/config
export default defineConfig({
  site: SITE.site,
  base: SITE.base,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',
  output: 'static',
  integrations: [tailwind({
    applyBaseStyles: false
  }), sitemap(), mdx(),
  // NetlifyCMS({
  //   adminPath: '/npadmin',
  //   config: {
  //     backend: {
  //       name: 'git-gateway',
  //       branch: 'main',
  //     },
  //     collections: [{
  //       name: 'post',
  //       label: 'Post',
  //       folder: 'src/content/post',
  //       create: true,
  //       fields: [
  //         { label: 'Title', name: 'title', widget: 'string' },
  //         { label: 'Excerpt', name: 'excerpt', widget: 'string' },
  //         { label: 'Category', name: 'category', widget: 'string' },
  //         {
  //           label: 'Tags',
  //           name: 'tags',
  //           widget: 'list',
  //           allow_add: true,
  //           allow_delete: true,
  //           collapsed: false,
  //           field: { label: 'Tag', name: 'tag', widget: 'string' },
  //         },
  //         { label: 'Image', name: 'image', widget: 'string' },
  //         { label: 'Publish Date', name: 'publishDate', widget: 'datetime', required: false },
  //         { label: 'Author', name: 'author', widget: 'string' },
  //         { label: 'Content', name: 'body', widget: 'markdown' },
  //       ],
  //     },
  //     ],
  //   },
  // }),
  icon({
    include: {
      tabler: ['*'],
      'flat-color-icons': ['template', 'gallery', 'approval', 'document', 'advertising', 'currency-exchange', 'voice-presentation', 'business-contact', 'database']
    }
  }), ...whenExternalScripts(() => partytown({
    config: {
      forward: ['dataLayer.push']
    }
  })), tasks(), compress({
    CSS: true,
    HTML: false,
    Image: false,
    JavaScript: true,
    SVG: true,
    Logger: 1
  }), decapCmsOauth()],
  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin]
  },
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src')
      }
    }
  }
});