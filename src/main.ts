import '~/styles/quasar/index.scss';
import '~/styles/twind.config';

import * as QuasarInstance from 'quasar';

import App from '~/app.vue';
import { createApp } from 'vue';
import { tw } from 'twind';

const app = createApp(App);

app.config.globalProperties.$tw = tw;

app
  .use(QuasarInstance.Quasar, {
    config: {},
    components: { ...QuasarInstance },
    directives: { QuasarInstance },
    plugins: { QuasarInstance },
  })
  .mount('#app');
