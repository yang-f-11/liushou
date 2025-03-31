import { defineStore } from "pinia";

export const project = defineStore("project", {
  state: () => ({
    project_overview: [
        { title: '钱塘区留守儿童关爱：共筑温暖成长之路', path:'/project-overview/page1' },
        { title: 'AI助力心理需求辅导', path:'/project-overview/page2' },
        { title: '线上线下构建网络交流平台', path:'/project-overview/page3' },
    ],

    news: [
      { title: '平台线下机构现已成功开展周末营活动，得到家长、学校与社会组织的大力支持与多数好评', path:'/news/page1' },
      { title: '‘作情绪的主人’主题活动开展，引导孩子们的情绪健康发展', path:'/news/page2' },
      { title: '平台上新区块链存证，保证关键数据（捐赠记录、项目进展）上链确保不可篡改', path:'/news/page3' },
    ],

    charity: [
      { title:'志愿者暖冬行动：为留守儿童送去温暖与希望',path:'/charity-page/page1' },
      { title:'乡村女孩的求学路：她用努力改变命运',path:'/charity-page/page2' },
      { title:'全国留守儿童现状调查：他们最需要什么？',path:'/charity-page/page3' },
      { title:'希望之光：如何通过公益项目改变留守儿童的未来',path:'/charity-page/page4' },
    ],

    info: [
      { title:'志愿者暖冬行动：为留守儿童送去温暖与希望',path:'/info-pages/page1' },
      { title:'乡村女孩的求学路：她用努力改变命运',path:'/info-pages/page2' },
      { title:'全国留守儿童现状调查：他们最需要什么？',path:'/info-pages/page3' },
      { title:'希望之光：如何通过公益项目改变留守儿童的未来',path:'/info-pages/page4' },
      { title:'希望之光：如何通过公益项目改变留守儿童的未来',path:'/info-pages/page5' },
      { title:'希望之光：如何通过公益项目改变留守儿童的未来',path:'/info-pages/page6' },
    ],

    video: [
      { title: 'item', path:'/#' },
      { title: 'item', path:'/#' },
      { title: 'item', path:'/#' },
      { title: 'item', path:'/#' },
      { title: 'item', path:'/#' },
      { title: 'item', path:'/#' },
    ],

    demo: [
        { title: 'item', path:'/#' },
        { title: 'item', path:'/#' },
        { title: 'item', path:'/#' },
        { title: 'item', path:'/#' },
        { title: 'item', path:'/#' },
        { title: 'item', path:'/#' },
    ]
  }),
});