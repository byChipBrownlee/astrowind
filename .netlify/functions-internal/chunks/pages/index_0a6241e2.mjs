import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, j as renderComponent, h as addAttribute, u as unescapeHTML, F as Fragment, A as AstroError, n as UnknownContentCollectionError, o as renderUniqueStylesheet, p as renderScriptElement, q as createHeadAndContent } from '../astro_9c060e94.mjs';
import 'clsx';
import { g as $$Icon, $ as $$WidgetWrapper, a as $$Headline, i as $$ItemGrid, e as $$Image, b as $$Button, j as $$Hero, f as $$Features2, k as $$Stats, d as $$PageLayout } from './about_33ad8f8c.mjs';
import { twMerge } from 'tailwind-merge';
import { f as findImage, b as getPermalink, A as APP_BLOG, B as BLOG_BASE, C as CATEGORY_BASE, T as TAG_BASE, e as cleanSlug, P as POST_PERMALINK_PATTERN, t as trimSlash, c as getBlogPermalink } from './404_4ca9da51.mjs';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import { $ as $$CallToAction } from './click-through_9dbd7aa2.mjs';

const $$Astro$9 = createAstro("https://wonderful-caramel-31cc80.netlify.app");
const $$Note = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Note;
  return renderTemplate`${maybeRenderHead()}<section class="bg-blue-50 dark:bg-slate-800 not-prose"> <div class="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-md text-center font-medium"> <span class="font-bold"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:info-square", "class": "w-5 h-5 inline-block align-text-bottom" })} Philosophy:</span> Simplicity, Best Practices and High Performance
</div> </section>`;
}, "/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/components/widgets/Note.astro", void 0);

const $$Astro$8 = createAstro("https://wonderful-caramel-31cc80.netlify.app");
const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Features;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    items = [],
    columns = 2,
    defaultIcon,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-5xl ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": classes?.headline })} ${renderComponent($$result2, "ItemGrid", $$ItemGrid, { "items": items, "columns": columns, "defaultIcon": defaultIcon, "classes": {
    container: "",
    title: "md:text-[1.3rem]",
    icon: "text-white bg-primary rounded-full w-10 h-10 p-2 md:w-12 md:h-12 md:p-3 mr-4 rtl:ml-4 rtl:mr-0",
    ...classes?.items ?? {}
  } })} ` })}`;
}, "/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/components/widgets/Features.astro", void 0);

const $$Astro$7 = createAstro("https://wonderful-caramel-31cc80.netlify.app");
const $$Timeline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Timeline;
  const { items = [], classes = {}, defaultIcon } = Astro2.props;
  const {
    container: containerClass = "",
    panel: panelClass = "",
    title: titleClass = "",
    description: descriptionClass = "",
    icon: defaultIconClass = "text-primary dark:text-slate-200 border-primary dark:border-blue-700"
  } = classes;
  return renderTemplate`${items && items.length && renderTemplate`${maybeRenderHead()}<div${addAttribute(containerClass, "class")}>${items.map(
    ({ title, description, icon, classes: itemClasses = {} }, index = 0) => renderTemplate`<div${addAttribute(twMerge("flex", panelClass, itemClasses?.panel), "class")}><div class="flex flex-col items-center mr-4 rtl:mr-0 rtl:ml-4"><div><div class="flex items-center justify-center">${(icon || defaultIcon) && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon || defaultIcon, "class": twMerge(
      "w-10 h-10 p-2 rounded-full border-2",
      defaultIconClass,
      itemClasses?.icon
    ) })}`}</div></div>${index !== items.length - 1 && renderTemplate`<div class="w-px h-full bg-black/10 dark:bg-slate-400/50"></div>`}</div><div${addAttribute(`pt-1 ${index !== items.length - 1 ? "pb-8" : ""}`, "class")}>${title && renderTemplate`<p${addAttribute(twMerge(
      "text-xl font-bold",
      titleClass,
      itemClasses?.title
    ), "class")}>${unescapeHTML(title)}</p>`}${description && renderTemplate`<p${addAttribute(twMerge(
      "text-muted mt-2",
      descriptionClass,
      itemClasses?.description
    ), "class")}>${unescapeHTML(description)}</p>`}</div></div>`
  )}</div>`}`;
}, "/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/components/ui/Timeline.astro", void 0);

const $$Astro$6 = createAstro("https://wonderful-caramel-31cc80.netlify.app");
const $$Steps = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Steps;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    items = [],
    image = await Astro2.slots.render("image"),
    isReversed = false,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-5xl ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(["flex flex-col gap-8 md:gap-12", { "md:flex-row-reverse": isReversed }, { "md:flex-row": image }], "class:list")}> <div${addAttribute(["md:py-4 md:self-center", { "md:basis-1/2": image }, { "w-full": !image }], "class:list")}> ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "text-left rtl:text-right",
    title: "text-3xl lg:text-4xl",
    ...classes?.headline ?? {}
  } })} ${renderComponent($$result2, "Timeline", $$Timeline, { "items": items, "classes": classes?.items })} </div> ${image && renderTemplate`<div class="relative md:basis-1/2"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "inset-0 object-cover object-top w-full rounded-md shadow-lg md:absolute md:h-full bg-gray-400 dark:bg-slate-700", "widths": [400, 768], "sizes": "(max-width: 768px) 100vw, 432px", "width": 432, "height": 768, "layout": "cover", "src": image?.src, "alt": image?.alt || "" })}`} </div>`} </div> ` })}`;
}, "/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/components/widgets/Steps.astro", void 0);

const $$Astro$5 = createAstro("https://wonderful-caramel-31cc80.netlify.app");
const $$Content = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Content;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    content = await Astro2.slots.render("content"),
    callToAction,
    items = [],
    columns,
    image = await Astro2.slots.render("image"),
    isReversed = false,
    isAfterContent = false,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${isAfterContent ? "pt-0 md:pt-0 lg:pt-0" : ""} ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "max-w-xl sm:mx-auto lg:max-w-2xl",
    title: "text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading",
    subtitle: "max-w-3xl mx-auto sm:text-center text-xl text-muted dark:text-slate-400"
  } })} ${maybeRenderHead()}<div class="mx-auto max-w-7xl p-4 md:px-8"> <div${addAttribute(`md:flex ${isReversed ? "md:flex-row-reverse" : ""} md:gap-16`, "class")}> <div class="md:basis-1/2 self-center"> ${content && renderTemplate`<div class="mb-12 text-lg dark:text-slate-400">${unescapeHTML(content)}</div>`} ${callToAction && renderTemplate`<div class="mt-[-40px] mb-8 text-primary"> ${renderComponent($$result2, "Button", $$Button, { "variant": "link", ...callToAction })} </div>`} ${renderComponent($$result2, "ItemGrid", $$ItemGrid, { "items": items, "columns": columns, "defaultIcon": "tabler:check", "classes": {
    container: `gap-y-4 md:gap-y-8`,
    panel: "max-w-none",
    title: "text-lg font-medium leading-6 dark:text-white ml-2 rtl:ml-0 rtl:mr-2",
    description: "text-muted dark:text-slate-400 ml-2 rtl:ml-0 rtl:mr-2",
    icon: "flex h-7 w-7 items-center justify-center rounded-full bg-green-600 dark:bg-green-700 text-gray-50 p-1",
    action: "text-lg font-medium leading-6 dark:text-white ml-2 rtl:ml-0 rtl:mr-2"
  } })} </div> <div aria-hidden="true" class="mt-10 md:mt-0 md:basis-1/2"> ${image && renderTemplate`<div class="relative m-auto max-w-4xl"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "mx-auto w-full rounded-lg bg-gray-500 shadow-lg", "width": 500, "height": 500, "widths": [400, 768], "sizes": "(max-width: 768px) 100vw, 432px", "layout": "responsive", ...image })}`} </div>`} </div> </div> </div> ` })}`;
}, "/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/components/widgets/Content.astro", void 0);

const $$Astro$4 = createAstro("https://wonderful-caramel-31cc80.netlify.app");
const $$GridItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$GridItem;
  const { post } = Astro2.props;
  const image = await findImage(post.image);
  return renderTemplate`${maybeRenderHead()}<article class="mb-6 transition"> <div class="relative md:h-64 bg-gray-400 dark:bg-slate-700 rounded shadow-lg mb-6"> ${image && renderTemplate`<a${addAttribute(getPermalink(post.permalink, "post"), "href")}> ${renderComponent($$result, "Image", $$Image, { "src": image, "class": "w-full md:h-full rounded shadow-lg bg-gray-400 dark:bg-slate-700", "widths": [400, 900], "width": 400, "sizes": "(max-width: 900px) 400px, 900px", "alt": post.title, "aspectRatio": "16:9", "layout": "cover", "loading": "lazy", "decoding": "async" })} </a>`} </div> <h3 class="mb-2 text-xl font-bold leading-tight sm:text-2xl font-heading"> ${!APP_BLOG?.post?.isEnabled ? post.title : renderTemplate`<a${addAttribute(getPermalink(post.permalink, "post"), "href")} class="hover:text-primary dark:hover:text-blue-700  transition ease-in duration-200"> ${post.title} </a>`} </h3> <p class="text-muted dark:text-slate-400 text-lg">${post.excerpt}</p> </article>`;
}, "/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/components/blog/GridItem.astro", void 0);

const $$Astro$3 = createAstro("https://wonderful-caramel-31cc80.netlify.app");
const $$Grid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Grid;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-6 row-gap-5 md:grid-cols-2 lg:grid-cols-4 -mb-6"> ${posts.map((post) => renderTemplate`${renderComponent($$result, "Item", $$GridItem, { "post": post })}`)} </div>`;
}, "/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/components/blog/Grid.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!(Object.assign({"BASE_URL":"/","MODE":"production","DEV":false,"PROD":true,"SSR":true,"SITE":"https://wonderful-caramel-31cc80.netlify.app","ASSETS_PREFIX":undefined},{_:process.env._,}))?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} \u2192 ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/post/get-started-website-with-astro-tailwind-css.md": () => import('../get-started-website-with-astro-tailwind-css_364a2190.mjs'),"/src/content/post/how-to-customize-astrowind-to-your-brand.md": () => import('../how-to-customize-astrowind-to-your-brand_c719c4e4.mjs'),"/src/content/post/landing.md": () => import('../landing_01c01094.mjs'),"/src/content/post/markdown-elements-demo-post.mdx": () => import('../markdown-elements-demo-post_0c5641ab.mjs'),"/src/content/post/useful-resources-to-create-websites.md": () => import('../useful-resources-to-create-websites_d3cd44f0.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"post":{"type":"content","entries":{"get-started-website-with-astro-tailwind-css":"/src/content/post/get-started-website-with-astro-tailwind-css.md","landing":"/src/content/post/landing.md","markdown-elements-demo-post":"/src/content/post/markdown-elements-demo-post.mdx","how-to-customize-astrowind-to-your-brand":"/src/content/post/how-to-customize-astrowind-to-your-brand.md","useful-resources-to-create-websites":"/src/content/post/useful-resources-to-create-websites.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/post/get-started-website-with-astro-tailwind-css.md": () => import('../get-started-website-with-astro-tailwind-css_81bcf635.mjs'),"/src/content/post/how-to-customize-astrowind-to-your-brand.md": () => import('../how-to-customize-astrowind-to-your-brand_edf1f617.mjs'),"/src/content/post/landing.md": () => import('../landing_3755fbf0.mjs'),"/src/content/post/markdown-elements-demo-post.mdx": () => import('../markdown-elements-demo-post_53ea6fc8.mjs'),"/src/content/post/useful-resources-to-create-websites.md": () => import('../useful-resources-to-create-websites_c2760424.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const generatePermalink = async ({
  id,
  slug,
  publishDate,
  category
}) => {
  const year = String(publishDate.getFullYear()).padStart(4, "0");
  const month = String(publishDate.getMonth() + 1).padStart(2, "0");
  const day = String(publishDate.getDate()).padStart(2, "0");
  const hour = String(publishDate.getHours()).padStart(2, "0");
  const minute = String(publishDate.getMinutes()).padStart(2, "0");
  const second = String(publishDate.getSeconds()).padStart(2, "0");
  const permalink = POST_PERMALINK_PATTERN.replace("%slug%", slug).replace("%id%", id).replace("%category%", category || "").replace("%year%", year).replace("%month%", month).replace("%day%", day).replace("%hour%", hour).replace("%minute%", minute).replace("%second%", second);
  return permalink.split("/").map((el) => trimSlash(el)).filter((el) => !!el).join("/");
};
const getNormalizedPost = async (post) => {
  const { id, slug: rawSlug = "", data } = post;
  const { Content, remarkPluginFrontmatter } = await post.render();
  const {
    publishDate: rawPublishDate = /* @__PURE__ */ new Date(),
    updateDate: rawUpdateDate,
    title,
    excerpt,
    image,
    tags: rawTags = [],
    category: rawCategory,
    author,
    draft = false,
    metadata = {}
  } = data;
  const slug = cleanSlug(rawSlug);
  const publishDate = new Date(rawPublishDate);
  const updateDate = rawUpdateDate ? new Date(rawUpdateDate) : void 0;
  const category = rawCategory ? cleanSlug(rawCategory) : void 0;
  const tags = rawTags.map((tag) => cleanSlug(tag));
  return {
    id,
    slug,
    permalink: await generatePermalink({ id, slug, publishDate, category }),
    publishDate,
    updateDate,
    title,
    excerpt,
    image,
    category,
    tags,
    author,
    draft,
    metadata,
    Content,
    // or 'content' in case you consume from API
    readingTime: remarkPluginFrontmatter?.readingTime
  };
};
const load = async function() {
  const posts = await getCollection("post");
  const normalizedPosts = posts.map(async (post) => await getNormalizedPost(post));
  const results = (await Promise.all(normalizedPosts)).sort((a, b) => b.publishDate.valueOf() - a.publishDate.valueOf()).filter((post) => !post.draft);
  return results;
};
let _posts;
const isBlogEnabled = APP_BLOG.isEnabled;
const isBlogListRouteEnabled = APP_BLOG.list.isEnabled;
const isBlogPostRouteEnabled = APP_BLOG.post.isEnabled;
const isBlogCategoryRouteEnabled = APP_BLOG.category.isEnabled;
const isBlogTagRouteEnabled = APP_BLOG.tag.isEnabled;
const blogListRobots = APP_BLOG.list.robots;
const blogPostRobots = APP_BLOG.post.robots;
const blogCategoryRobots = APP_BLOG.category.robots;
const blogTagRobots = APP_BLOG.tag.robots;
const blogPostsPerPage = APP_BLOG?.postsPerPage;
const fetchPosts = async () => {
  if (!_posts) {
    _posts = await load();
  }
  return _posts;
};
const findLatestPosts = async ({ count }) => {
  const _count = count || 4;
  const posts = await fetchPosts();
  return posts ? posts.slice(0, _count) : [];
};
const getStaticPathsBlogList = async ({ paginate }) => {
  if (!isBlogEnabled || !isBlogListRouteEnabled)
    return [];
  return paginate(await fetchPosts(), {
    params: { blog: BLOG_BASE || void 0 },
    pageSize: blogPostsPerPage
  });
};
const getStaticPathsBlogPost = async () => {
  if (!isBlogEnabled || !isBlogPostRouteEnabled)
    return [];
  return (await fetchPosts()).flatMap((post) => ({
    params: {
      blog: post.permalink
    },
    props: { post }
  }));
};
const getStaticPathsBlogCategory = async ({ paginate }) => {
  if (!isBlogEnabled || !isBlogCategoryRouteEnabled)
    return [];
  const posts = await fetchPosts();
  const categories = /* @__PURE__ */ new Set();
  posts.map((post) => {
    typeof post.category === "string" && categories.add(post.category.toLowerCase());
  });
  return Array.from(categories).flatMap(
    (category) => paginate(
      posts.filter((post) => typeof post.category === "string" && category === post.category.toLowerCase()),
      {
        params: { category, blog: CATEGORY_BASE || void 0 },
        pageSize: blogPostsPerPage,
        props: { category }
      }
    )
  );
};
const getStaticPathsBlogTag = async ({ paginate }) => {
  if (!isBlogEnabled || !isBlogTagRouteEnabled)
    return [];
  const posts = await fetchPosts();
  const tags = /* @__PURE__ */ new Set();
  posts.map((post) => {
    Array.isArray(post.tags) && post.tags.map((tag) => tags.add(tag.toLowerCase()));
  });
  return Array.from(tags).flatMap(
    (tag) => paginate(
      posts.filter((post) => Array.isArray(post.tags) && post.tags.find((elem) => elem.toLowerCase() === tag)),
      {
        params: { tag, blog: TAG_BASE || void 0 },
        pageSize: blogPostsPerPage,
        props: { tag }
      }
    )
  );
};

const $$Astro$2 = createAstro("https://wonderful-caramel-31cc80.netlify.app");
const $$BlogLatestPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogLatestPosts;
  const {
    title = await Astro2.slots.render("title"),
    linkText = "View all posts",
    linkUrl = getBlogPermalink(),
    information = await Astro2.slots.render("information"),
    count = 4,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  const posts = APP_BLOG.isEnabled ? await findLatestPosts({ count }) : [];
  return renderTemplate`${APP_BLOG.isEnabled ? renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": classes?.container, "bg": bg }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col lg:justify-between lg:flex-row mb-8">${title && renderTemplate`<div class="md:max-w-sm"><h2 class="text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none group font-heading mb-2">${unescapeHTML(title)}</h2>${APP_BLOG.list.isEnabled && linkText && linkUrl && renderTemplate`${renderComponent($$result2, "Button", $$Button, { "variant": "link", "href": linkUrl }, { "default": ($$result3) => renderTemplate`${linkText} »` })}`}</div>`}${information && renderTemplate`<p class="text-muted dark:text-slate-400 lg:text-sm lg:max-w-md">${unescapeHTML(information)}</p>`}</div>${renderComponent($$result2, "Grid", $$Grid, { "posts": posts })}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {})}`}`;
}, "/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/components/widgets/BlogLatestPosts.astro", void 0);

const $$Astro$1 = createAstro("https://wonderful-caramel-31cc80.netlify.app");
const $$FAQs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FAQs;
  const {
    title = "",
    subtitle = "",
    tagline = "",
    items = [],
    columns = 2,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${renderComponent($$result2, "ItemGrid", $$ItemGrid, { "items": items, "columns": columns, "defaultIcon": "tabler:chevron-right", "classes": {
    container: `${columns === 1 ? "max-w-4xl" : ""} gap-y-8 md:gap-y-12`,
    panel: "max-w-none",
    icon: "flex-shrink-0 mt-1 w-6 h-6 text-primary"
  } })} ` })}`;
}, "/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/components/widgets/FAQs.astro", void 0);

const $$Astro = createAstro("https://wonderful-caramel-31cc80.netlify.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const metadata = {
    title: "AstroWind \u2014 Free template for creating websites with Astro + Tailwind CSS",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "actions": [
    {
      variant: "primary",
      text: "Get template",
      href: "https://github.com/onwidget/astrowind",
      target: "_blank",
      icon: "tabler:download"
    },
    { text: "Learn more", href: "#features" }
  ], "image": { src: "~/assets/images/hero.png", alt: "AstroWind Hero Image" } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span class="hidden sm:inline"> <span class="font-semibold">AstroWind</span> is a free, customizable and production-ready template for Astro 3.0
        + Tailwind CSS.</span> <span class="block mb-1 sm:hidden font-bold text-blue-600">AstroWind: Production-ready.</span>
Suitable for Startups, Small Business, SaaS websites, Professional Portfolios, Marketing websites, Landing Pages
      & Blogs.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Free template for <span class="hidden xl:inline">creating websites with</span> <span class="text-accent dark:text-white highlight"> Astro 3.0</span> + Tailwind CSS
` })}` })}  ${renderComponent($$result2, "Note", $$Note, {})}  ${renderComponent($$result2, "Features", $$Features, { "id": "features", "tagline": "Features", "title": "What you get with AstroWind", "subtitle": "One of the most professional and comprehensive templates currently on the market. Most starred & forked Astro theme in 2022.", "items": [
    {
      title: "Astro + Tailwind CSS Integration",
      description: "A seamless integration between two great frameworks that offer high productivity, performance and versatility.",
      icon: "tabler:brand-tailwind"
    },
    {
      title: "Ready-to-use Components",
      description: "Widgets made with Tailwind CSS ready to be used in Marketing Websites, SaaS, Blogs, Personal Profiles, Small Business...",
      icon: "tabler:components"
    },
    {
      title: "Best Practices",
      description: "Creating secure, efficient, and user-friendly websites that deliver exceptional experiences and lasting value.",
      icon: "tabler:list-check"
    },
    {
      title: "Excellent Page Speed",
      description: "Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates.",
      icon: "tabler:rocket"
    },
    {
      title: "Search Engine Optimization (SEO)",
      description: "SEO lies in its ability to enhance a website's visibility, driving organic traffic and enabling it to reach a wider audience.",
      icon: "tabler:arrows-right-left"
    },
    {
      title: "Open to new ideas and contributions",
      description: "Embracing a culture that is open to new ideas and contributions is integral fostering innovation, collaboration, and a dynamic user experience.",
      icon: "tabler:bulb"
    }
  ] })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "tagline": "Inside template", "title": "AstroWind's Blueprint: Fun Meets Functionality!", "items": [
    {
      title: "Built on top of Astro 3.0",
      description: "Benefiting from the performance and developer-friendly features of this modern static site generator."
    },
    {
      title: "Styled using Tailwind CSS",
      description: "Facilitating rapid design and consistent styling with this highly popular utility-first CSS framework."
    },
    {
      title: "Cross-browser compatibility",
      description: "Ensure your website looks and functions consistently across various web browsers, delivering a seamless experience to all users."
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Colorful Image"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Building on modern foundations</h3>
Gain a competitive advantage by incorporating industry leading practices
` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "isAfterContent": true, "items": [
    {
      title: "High level of customization",
      description: `Tailor the template effortlessly to match your brand's identity and requirements, making your website distinct and saving you time.`
    },
    {
      title: "Multiple layout possibilities",
      description: "Explore various layout options to find the structure that best presents your content, enhancing user engagement and navigation."
    },
    {
      title: "Fully responsive design",
      description: "Ensure your website's optimal performance on various devices and screen sizes, providing a consistent and enjoyable user experience."
    },
    {
      title: "Integration of media",
      description: "Seamlessly incorporate images, videos, and multimedia elements that enhance your content and engage visitors effectively."
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2194&q=80",
    alt: "Blueprint Image"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate`Ensure your online presence truly represents you.` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "isAfterContent": true, "items": [
    {
      title: "Enhanced user engagement",
      description: "Captivate your audience with interactive elements, intuitive navigation, and visually appealing layouts, encouraging longer visits."
    },
    {
      title: "Continuous improvement",
      description: "Ensure your website stays aligned with the latest trends and technologies through regular updates and enhancements."
    },
    {
      title: "Time and resource efficiency",
      description: "Skip the time-consuming process of building a website from scratch and launch your online presence sooner with AstroWind."
    },
    {
      title: "Community support",
      description: `Join the growing AstroWind community for insights, resources, and assistance, ensuring you're never alone on your web development journey.`
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1611462985358-60d3498e0364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Astronauts Image"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate`Designed to foster growth and success.` })}` })}  ${renderComponent($$result2, "Steps", $$Steps, { "title": "Get your dream website up and running in no time with AstroWind.", "items": [
    {
      title: 'Step 1: <span class="font-medium">Download</span>',
      description: "Kickstart with GitHub! Either fork the AstroWind template or simply click 'Use this template'. Your canvas awaits, ready for your digital masterpiece. In just a few clicks, you've already set the foundation.",
      icon: "tabler:package"
    },
    {
      title: 'Step 2: <span class="font-medium">Add content</em>',
      description: "Pour your vision into it. Add images, text, and all that jazz to breathe life into your digital space. Remember, it's the content that tells your story, so make it captivating.",
      icon: "tabler:letter-case"
    },
    {
      title: 'Step 3: <span class="font-medium">Customize styles</span>',
      description: "Give it your personal touch. Tailor colors, fonts, and layouts until it feels just right. Your unique flair, amplified by AstroWind! Precision in design ensures a seamless user experience.",
      icon: "tabler:paint"
    },
    {
      title: "Ready!",
      icon: "tabler:check"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1616198814651-e71f960c3180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    alt: "Steps image"
  } })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Most used widgets", "subtitle": "Provides frequently used components for building websites using Tailwind CSS", "tagline": "Components", "items": [
    {
      title: "Headers",
      description: "Ever tried driving without GPS? Boom! That's why websites need headers for direction.",
      icon: "flat-color-icons:template"
    },
    {
      title: "Heros",
      description: "Picture a superhero landing \u2013 epic, right? That's the job of a Hero section, making grand entrances!",
      icon: "flat-color-icons:gallery"
    },
    {
      title: "Features",
      description: "Where websites strut their stuff and show off superpowers. No holding back on the bragging rights here!",
      icon: "flat-color-icons:approval"
    },
    {
      title: "Content",
      description: "Dive into the meat and potatoes of a site; without it, you'd just be window shopping. Content is king.",
      icon: "flat-color-icons:document"
    },
    {
      title: "Call-to-Action",
      description: `That enthusiastic friend who's always urging, "Do it! Do it!"? Yeah, that's this button nudging you towards adventure.`,
      icon: "flat-color-icons:advertising"
    },
    {
      title: "Pricing",
      description: "Behold the dessert menu of the website world. Tempting choices await, can you resist?",
      icon: "flat-color-icons:currency-exchange"
    },
    {
      title: "Testimonial",
      description: "Step into the gossip corner! Here, other visitors spill the beans and share the juicy details.",
      icon: "flat-color-icons:voice-presentation"
    },
    {
      title: "Contact",
      description: "Like a digital mailbox, but faster! Drop a line, ask a question, or send a virtual high-five. Ding! Message in.",
      icon: "flat-color-icons:business-contact"
    },
    {
      title: "Footers",
      description: "The footer's like the credits of a movie but sprinkled with easter eggs. Time to hunt!",
      icon: "flat-color-icons:database"
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "BlogLatestPosts", $$BlogLatestPosts, { "title": "Find out more content in our Blog", "information": `The blog is used to display AstroWind documentation.
                        Each new article will be an important step that you will need to know to be an expert in creating a website using Astro + Tailwind CSS.
                        Astro is a very interesting technology. Thanks.
                ` })}  ${renderComponent($$result2, "FAQs", $$FAQs, { "title": "Frequently Asked Questions", "subtitle": "Dive into the following questions to gain insights into the powerful features that AstroWind offers and how it can elevate your web development journey.", "tagline": "FAQs", "classes": { container: "max-w-6xl" }, "items": [
    {
      title: "Why AstroWind?",
      description: "Michael Knight a young loner on a crusade to champion the cause of the innocent. The helpless. The powerless in a world of criminals who operate above the law. Here he comes Here comes Speed Racer. He's a demon on wheels."
    },
    {
      title: "What do I need to start?",
      description: "Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds. Many say exploration is part of our destiny, but it\u2019s actually our duty to future generations."
    },
    {
      title: "How to install the Astro + Tailwind CSS template?",
      description: "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows."
    },
    {
      title: "What's something that you don't understand?",
      description: "A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear. I didn't even know we were calling him Big Bear."
    },
    {
      title: "What is something that you would like to try again?",
      description: "A business big enough that it could be listed on the NASDAQ goes belly up. Disappears! It ceases to exist without me. No, you clearly don't know who you're talking to, so let me clue you in."
    },
    {
      title: "If you could only ask one question to each person you meet, what would that question be?",
      description: "This is not about revenge. This is about justice. A lot of things can change in twelve years, Admiral. Well, that's certainly good to know. About four years. I got tired of hearing how young I looked."
    }
  ] })}  ${renderComponent($$result2, "Stats", $$Stats, { "stats": [
    { title: "Downloads", amount: "132K" },
    { title: "Stars", amount: "24.8K" },
    { title: "Forks", amount: "10.3K" },
    { title: "Users", amount: "48.4K" }
  ] })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "actions": [
    {
      variant: "primary",
      text: "Get template",
      href: "https://github.com/onwidget/astrowind",
      target: "_blank",
      icon: "tabler:download"
    }
  ] }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Be very surprised by these huge fake numbers you are seeing on this page. <br class="hidden md:inline">Don't
      waste more time! :P
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Astro&nbsp;+&nbsp;<br class="block sm:hidden"><span class="sm:whitespace-nowrap">Tailwind CSS</span> ` })}` })} ` })}`;
}, "/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/pages/index.astro", void 0);

const $$file = "/Users/charlesbrownlee/Documents/GitHub/byChipBrownlee/exploration/astrowind/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Content as $, $$FAQs as a, $$Steps as b, $$BlogLatestPosts as c, $$Features as d, blogCategoryRobots as e, fetchPosts as f, getStaticPathsBlogCategory as g, getStaticPathsBlogTag as h, blogTagRobots as i, getStaticPathsBlogList as j, blogListRobots as k, getStaticPathsBlogPost as l, blogPostRobots as m, index as n };
