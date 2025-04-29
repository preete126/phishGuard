/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import router from '@/router'
import vuetify from './vuetify'
import pinia from '@/stores'

export function registerPlugins (app) {
  app
  .use(vuetify)
  .use(router)
  .use(pinia)
}
