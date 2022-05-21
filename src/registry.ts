// explicitly import all available Portal Plugins and call their register functions

import { RouteRecordRaw } from 'vue-router';
import { register as registerPluginAlpha } from './pluginAlpha';

export default async function registerPortalPlugins(pluginIds: string[]) {
    function callRegister(register: (registryList: string[]) => Promise<RouteRecordRaw[]>) {
        return register(pluginIds)
    }
    const resolvedPluginRoutes = await Promise.all([
        callRegister(registerPluginAlpha),
        // callRegister(registerPluginBeta),
        // callRegister(registerPluginGamma),
    ]);
    return resolvedPluginRoutes.flat();
}