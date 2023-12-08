export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/about_P31u3mjn.mjs').then(n => n.o);

export { page };
