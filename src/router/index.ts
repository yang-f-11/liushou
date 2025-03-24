import { createRouter, createWebHistory } from 'vue-router'
import Charity from '@/views/charity/charity.vue'
import Children from '@/views/charity/children.vue'
import Donation from '@/views/donation/donation.vue'
import Certificate from '@/views/donation/certificate.vue'
import Subsidy from '@/views/donation/subsidy.vue'
import Duanxin from '@/views/donation/methods/duanxin.vue'
import Parents from '@/views/charity/parents.vue'
import Ngo from '@/views/charity/ngo.vue'
import Login from '@/views/login.vue'
import Register from '@/views/register.vue'
import project_overview from '@/views/project-overview/project-overview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path:"/", redirect:"/home"},
    { path:"/home", component:()=> import("../views/home.vue") },
    { path:"/register", component:Register },
    { path:"/login", component:Login },
    {
      path: '/charity',
      component: Charity,
      children: [
        {
          path: 'children',  // 注意这里是相对路径，不需要加 
          component:Children
        },
        {
          path: 'parents',
          component:Parents
        },
        {
          path: 'ngo', 
          component:Ngo
        },
      ]
    },
    {
      path: '/donation',
      component: Donation,
      children: [
        {
          path: 'certificate',
          component:Certificate
        },
        {
          path: 'subsidy',
          component:Subsidy
        },
        {
          path: 'methods/one',
          component:Duanxin
        }
      ]
    },
    {
      path: '/project-overview',
      component: project_overview,
    }
  ],
})


export default router
