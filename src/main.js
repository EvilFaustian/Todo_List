import { createApp} from 'vue'
import router from './router'
import store from './store'
import 'animate.css'
import Master from './components/layouts/MainMaster'

/* import mitt from 'mitt';                  // Import mitt
export const emitter = mitt();

const app = createApp(App);
app.provide('eventBus', emitter);          // ✅ Provide as `emitter`
app.mount('#app'); */


createApp(Master).use(store).use(router).mount('#app')
