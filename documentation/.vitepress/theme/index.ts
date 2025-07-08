import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme'
import './custom.css';
import { TipBlock } from '../../src/components/documentation';
import GenerateDocs from '../../src/components/GenerateDocs.vue';
import FeedbackList from '../../src/components/FeedbackList.vue';
import InteractiveWrapper from '../../src/components/InteractiveWrapper.vue';
import { createPinia } from 'pinia';
import RuneComponents from '../../../lib/src/index';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    const pinia = createPinia();
    app.use(pinia);
    app.use(RuneComponents);
    app.component('InteractiveWrapper', InteractiveWrapper);
    app.component('FeedbackList', FeedbackList);
    app.component('GenerateDocs', GenerateDocs);
    app.component('TipBlock', TipBlock);
  },
} satisfies Theme; 