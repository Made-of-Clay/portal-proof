export const id = 'PluginAlpha';
export const register = (registryList: string[]) =>
    registryList.includes(id)
        ? import('./routes').then(module => module.routes)
        : Promise.resolve([]);