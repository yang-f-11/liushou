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
import project_page1 from '@/views/project-overview/page/page1.vue'
import project_page2 from '@/views/project-overview/page/page2.vue'
import project_page3 from '@/views/project-overview/page/page3.vue'
import project_page4 from '@/views/project-overview/page/page4.vue'
import project_page5 from '@/views/project-overview/page/page5.vue'
import project_page6 from '@/views/project-overview/page/page6.vue'
import Join from '@/views/join/join.vue'
import Contact from '@/views/join/contact.vue'
import Volunteer from '@/views/join/volunteer.vue'
import About from '@/views/about/about.vue'
import Centre from '@/views/about/centre.vue'
import Constitution from '@/views/about/constitution.vue'
import Members from '@/views/about/members.vue'
import Rules from '@/views/about/rules.vue'
import News from '@/views/news/news.vue'
import News_page1 from '@/views/news/news/page1.vue'
import News_page2 from '@/views/news/news/page2.vue'
import News_page3 from '@/views/news/news/page3.vue'
import News_page4 from '@/views/news/news/page4.vue'
import Charity_p from '@/views/charity-page/charity.vue'
import Charity_page1 from '@/views/charity-page/charity/page1.vue'
import Charity_page2 from '@/views/charity-page/charity/page2.vue'
import Charity_page3 from '@/views/charity-page/charity/page3.vue'
import Charity_page4 from '@/views/charity-page/charity/page4.vue'

import Info from '@/views/info/info.vue'
import Finance from '@/views/info/finance.vue'
import Report from '@/views/info/report.vue'
import Party from '@/views/party/party.vue'
import Party_Report from '@/views/party/report.vue'
import Info_pages from '@/views/info-pages/info.vue'
import Info_pages1 from '@/views/info-pages/info/page1.vue'
import Info_pages2 from '@/views/info-pages/info/page2.vue'
import Info_pages3 from '@/views/info-pages/info/page3.vue'
import Info_pages4 from '@/views/info-pages/info/page4.vue'
import Info_pages5 from '@/views/info-pages/info/page5.vue'
import Info_pages6 from '@/views/info-pages/info/page6.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path:"/", redirect:"/home"},
    { path:"/home", component:()=> import("../views/home.vue") },
    { path:"/register", component:Register },
    { path:"/login", component:Login },
    {
      path: '/join',
      component: Join,
      children: [
        {
          path: 'volunteer',  // 注意这里是相对路径，不需要加 
          component:Volunteer,
          meta: { title: '志愿者' },
        },
        {
          path: 'contact',
          component:Contact,
          meta: { title: '联系我们' },
        },
      ]
    },
    {
      path: '/about',
      component: About,
      meta: { title: '关于我们' },
      children: [
        {
          path: 'centre',  // 注意这里是相对路径，不需要加 
          component:Centre,
          meta: { title: '平台中心站' },
        },
        {
          path: 'constitution',
          component:Constitution,
          meta: { title: '平台章程' },
        },
        {
          path: 'members',
          component:Members,
          meta: { title: '平台成员' },
        },
        {
          path: 'rules',
          component:Rules,
          meta: { title: '管理制度' },
        },
      ]
    },
    {
      path: '/charity',
      component: Charity,
      children: [
        {
          path: 'children',  // 注意这里是相对路径，不需要加 
          component:Children,
          
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
          component:Certificate,
          meta: { title: '证书申领' },
        },
        {
          path: 'subsidy',
          component:Subsidy,
          meta: { title: '政府补贴' },
        },
        {
          path: 'methods/one',
          component:Duanxin,
          meta: { title: '短信捐赠' },
        }
      ]
    },
    {
      path: '/info',
      component: Info,
      children: [
        {
          path: 'finance',
          component: Finance,
          meta: { title: '资金用途' },
        },
        {
          path: 'report',
          component: Report,
          meta: { title: '工作报告' },
        },
      ]
    },
    {
      path: '/party',
      component: Party,
      children: [
        {
          path: 'report',
          component: Party_Report,
          meta: { title: '党建报告' },
        },
      ]  
    },
    {path: '/project-overview',component: project_overview,},
    {path: '/project-overview/page1',component: project_page1,},
    {path: '/project-overview/page2',component: project_page2,},
    {path: '/project-overview/page3',component: project_page3,},
    {path: '/project-overview/page4',component: project_page4,},
    {path: '/project-overview/page5',component: project_page5,},
    {path: '/project-overview/page6',component: project_page6,},
    {path: '/news',component: News,},

    {path: '/news',component: News,},
    {path: '/news/page1',component: News_page1,},
    {path: '/news/page2',component: News_page2,},
    {path: '/news/page3',component: News_page3,},
    {path: '/news/page4',component: News_page4,},

    {path:'/charity-page',component:Charity_p},
    {path:'/charity-page/page1',component:Charity_page1},
    {path:'/charity-page/page2',component:Charity_page2},
    {path:'/charity-page/page3',component:Charity_page3},
    {path:'/charity-page/page4',component:Charity_page4},

    {path: '/info-pages',component: Info_pages},
    {path: '/info-pages/page1',component: Info_pages1},
    {path: '/info-pages/page2',component: Info_pages2},
    {path: '/info-pages/page3',component: Info_pages3},
    {path: '/info-pages/page4',component: Info_pages4},
    {path: '/info-pages/page5',component: Info_pages5},
    {path: '/info-pages/page6',component: Info_pages6},

  ],
})


export default router
