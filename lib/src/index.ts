import { App, Plugin } from 'vue';
import PrimeVue from 'primevue/config';
import * as components from './components';
import config, { setOptions } from './utils/config';
import { merge } from './utils/helpers';
import './style.css';

const plugin: Plugin = {
  install(app: App, options = {}) {
    // Options
    app.use(PrimeVue, {
      unstyled: true,
    });
    setOptions(merge(config, options, true));
    for (const name in components) {
      app.component(name, components[name as keyof typeof components]);
    }
  },
};

export default plugin;

export * from './components';
export * from './composables';
export * from './components/types';
export * from './utils/dateUtils';
export * from './utils/slotsUtils';
export * from './utils';
export * from './volt'; 