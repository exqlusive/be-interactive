require('./bootstrap');

import { createApp, h } from 'vue'
import { App, plugin } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init({
    delay: 0,
    color: '#ff6600'
})

const app = document.getElementById('app')

const application = createApp({
    render: () => h(App, {
        initialPage: JSON.parse(app.dataset.page),
        resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
    })
})
application
    .use(plugin)
    .mount(app)

application.config.globalProperties.trans = (key) => {
    return _.get(window.trans, key, key);
}
