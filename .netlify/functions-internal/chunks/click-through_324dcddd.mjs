export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/click-through_21a255be.mjs').then(n => n.c);

export { page };
