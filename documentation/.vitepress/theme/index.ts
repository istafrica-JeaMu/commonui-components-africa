import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

// Import all documentation components
import TipBlock from '../../src/components/TipBlock.vue'
import InteractiveWrapper from '../../src/components/InteractiveWrapper.vue'
import GenerateDocs from '../../src/components/GenerateDocs.vue'
import FeedbackList from '../../src/components/FeedbackList.vue'

// Import library components
import RuneButton from '../../../lib/src/components/Inputs/RuneButton.vue'
import RuneIcon from '../../../lib/src/components/DataDisplay/RuneIcon.vue'
import RuneSpinner from '../../../lib/src/components/Feedback/RuneSpinner.vue'

import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // Register documentation components globally
    app.component('TipBlock', TipBlock)
    app.component('InteractiveWrapper', InteractiveWrapper)
    app.component('GenerateDocs', GenerateDocs)
    app.component('FeedbackList', FeedbackList)
    
    // Register library components globally for demos
    app.component('RuneButton', RuneButton)
    app.component('RuneIcon', RuneIcon)
    app.component('RuneSpinner', RuneSpinner)
  }
} satisfies Theme 