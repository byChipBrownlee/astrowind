const _default = new Proxy({"src":"/_astro/default.5cdc518a.png","width":2400,"height":1256,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

export { _default as default };
