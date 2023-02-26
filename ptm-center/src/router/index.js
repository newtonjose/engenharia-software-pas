import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import PatientAvatar from '@core/components/webxr/XrButton.vue'

// routes.patients.children = [{  path: 'profile', component: PatientAvatar }]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/patients/:id',
    //   component: PatientAvatar,
    //   children: [
    //     {
    //       path: 'avatar',
    //       component: PatientAvatar,
    //     },
    //   ],
    // },
    ...setupLayouts(routes),
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})
export default router
