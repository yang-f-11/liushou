<script setup lang="ts">
import { ref,reactive } from 'vue';
import Header from '@/components/Header.vue';
import Block from '@/components/Block.vue'
import Footer from '@/components/Footer.vue'
import '@/views/home.css'; //外部导入css
const images = ref([
  'home_pic/image1.jpg',
  'home_pic/image2.jpg',
  'home_pic/image3.jpg'
]);
import { useRouter } from 'vue-router';
const router = useRouter();

const carouselItems = ref([
  'activity/act1.jpg',
  'activity/act2.jpg',
  'activity/act3.jpg',
  'activity/act4.jpg',
  'activity/act5.jpg',
  'activity/act6.jpg',
]);

const video = ref([
  'video/video1.mp4'
])

const word = ref([
  "习近平：少年儿童是我们伟大祖国的希望、我们伟大民族的希望。",
  "少年儿童是祖国的未来。 —— 习近平",
  "习近平：少年强则国强，少年进步则国进步。",

])

const focusData = ref([
  { title: '人民领袖｜总书记谈到的“苹果故事”意味深长', link: 'https://news.cctv.com/2025/03/25/ARTIE9OmtihDrn3XeQaxdhuV250321.shtml?spm=C94212.PX2vlYqXvXQY.S57313.2' },
  { title: '奋进的春天｜让人民群众有更多获得感', link: 'https://news.cctv.com/2025/02/27/ARTIetkjLzgL4JP1uYTKwF9T250225.shtml?spm=C94212.PX2vlYqXvXQY.S57313.12' },
  { title: '团圆年｜岁末问暖 共祝美好', link: 'https://news.cctv.com/2025/02/02/ARTIYRRXI6SuOM3BKbWYb4KV250123.shtml?spm=C94212.PX2vlYqXvXQY.S57313.20' },
  { title: '12356热线为青少年心理健康提供专业支持', link: 'https://edu.cctv.com/2025/01/07/ARTIuwA3FmvnXOxyh6QGn4af250107.shtml' },
  { title: '你好，代表｜胡春莲：守护青少年心理健康，完善医教协同服务体系', link: 'https://people.cctv.com/2025/03/10/ARTIWQKZlK8WUNNc74YyXKZm250310.shtml' },
  { title: '线上线下结合，专家共同研讨青少年心理健康问题', link: 'https://edu.cctv.com/2024/10/31/ARTI1uiZRXS9C8WKIP6dBXft241031.shtml' },
]);

// 图书数据
const books = reactive([
  {
    title: "小海蒂",
    author: "约翰娜·施皮里",
    image: "books/book1.jpg",
    description: "一个关于爱和成长的温暖故事。",
    link: "https://book.douban.com/subject/1023712/"
  },
  {
    title: "我不焦虑",
    author: "安娜·巴恩斯",
    image: "books/book2.jpg",
    description: "帮助孩子克服焦虑的指南。",
    link: "https://book.douban.com/subject/35857847/"
  },
  {
    title: "我很愤怒",
    author: "迈克尔·伊恩·布莱克",
    image: "books/book3.jpg",
    description: "引导孩子理解和管理愤怒情绪。",
    link: "https://book.douban.com/subject/35100421/"
  },
  {
    title: "驭风少年",
    author: "威廉·卡明奎巴",
    image: "books/book4.jpg",
    description: "一个自闭症少年的励志故事。",
    link: "https://book.douban.com/subject/34442005/"
  },
  {
    title: "不爱说话的十一岁",
    author: "露西·弗兰克",
    image: "books/book5.jpg",
    description: "讲述一个沉默少年的成长故事。",
    link: "https://book.douban.com/subject/35003713/"
  },
  {
    title: "我和我的情绪",
    author: "伊丽莎白·科尔",
    image: "books/book6.jpg",
    description: "帮助孩子理解和管理自己的情绪。",
    link: "https://book.douban.com/subject/36536557/"
  },
  {
    title: "追光的孩子",
    author: "唐·库苏",
    image: "books/book7.jpg",
    description: "一个关于梦想与坚持的动人故事。",
    link: "https://book.douban.com/subject/36442292/"
  }
]);

import { project } from "@/stores/pages";
const pj = project()
const project_overview = ref(pj.project_overview);
const demo = ref(pj.demo)
const info = ref(pj.info)
const news = ref(pj.news)
const Video = ref(pj.video)
const charity = ref(pj.charity)
</script>

<template>
  <el-container>
    <el-header style="padding: 0;">
      <div style="height: 100px;" class="header-top">

        <div class="logo-and-name">
          <img class="logo-img" src="@/assets/logo.png" alt="Logo" />
          <span class="platform-name">童心智联公益平台</span>
        </div>
        
        <div class="slogan">
          <h1>孤影不孤，心声有应</h1>
        </div>

        <div class="search-box">
          <el-input placeholder="请输入搜索内容">
            <template #append>
              <el-button>
                <el-icon><Search /></el-icon>
              </el-button>
            </template>
          </el-input>
        </div>
      </div>
      <Header></Header>
    </el-header>
    <div style="height: 120px;"></div>
    <el-main class="main_pattern">
        <div class="block text-center">
            <el-carousel height="500px">
              <el-carousel-item v-for="(image, index) in images" :key="index">
                <img :src="image" alt="Carousel Image" style="width: 100%; height: 100%; object-fit: cover;"/>
              </el-carousel-item>
            </el-carousel>
        </div>

        <div class="block text-center">
          <br>
          <el-carousel height="150px">
            <el-carousel-item v-for="item in word" :key="item">
              <div style="font-size: 40px;">{{ item }}</div>
            </el-carousel-item>
          </el-carousel>
        </div>
    </el-main>   
    <el-main class="main_pattern"> 
      <div style="font-size: 20px; color:rgb(38, 148, 244); ">帮助人次：317</div>
      <el-row :gutter="20">
        
      </el-row>
    </el-main>
    <el-main class="main_pattern">
      <el-row :gutter="20">
        <Block title="项目概述" morePath="/project-overview" :Span="8" :items="project_overview"></Block>
        <Block title="最新动态" morePath="/news" :Span="8" :items="news"></Block>
        <Block title="公益模块" morePath="/charity-page" :Span="8" :items="charity"></Block>
      </el-row> 

      <el-row :gutter="20">
        <Block title="视频推荐" morePath="/process-module" :Span="12" :items="Video"></Block>
        <Block title="信息公开" morePath="/info-pages" :Span="12" :items="info"></Block>
      </el-row>   
      
      <el-row>
        <el-col :span="12" :offset="6">
          <el-card class="box-card focus-section" shadow="hover">
            <template #header>
              <div class="card-header">
                <span class="theme">
                  <i class="el-icon-view" style="margin-right: 6px;"> </i>聚焦</span>
                <el-button type="danger">
                  <a href="https://news.cctv.com/" target="_blank" rel="noopener noreferrer" style="color: #fff; text-decoration: none;">更多</a>
                </el-button>
              </div>
            </template>
            <div v-for="(item, index) in focusData" :key="index" class="text item">
              <a :href="item.link" target="_blank" rel="noopener noreferrer">
                {{ item.title }}
              </a>
            </div>

          </el-card>
        </el-col>
      </el-row>
    </el-main> 
    
    <el-main class="main_pattern">
      <section class="autism-books">
        <h2>推荐书籍</h2>
        <el-row :gutter="20">
          <el-col
            v-for="book in books"
            :key="book.title"
            :span="12"
          >
            <el-card class="book-card" shadow="hover">
              <div class="book-card-flex">
                <div class="book-info">
                <h3>{{ book.title }}</h3>
                <p><strong>作者:</strong> {{ book.author }}</p>
                <p>{{ book.description }}</p>
                <el-button
                  type="primary"
                  size="mini">
                <a :href="book.link" target="_blank" style="color: #fff;">
                  在线阅读
                </a>
                </el-button>
              </div>

              <div class="book-cover-container">
                <img :src="book.image" :alt="book.title" class="book-cover" />
              </div>
            </div>
            </el-card>
          </el-col>
        </el-row>
      </section>
    </el-main>

    <el-main class="main_pattern">
      <span class="theme" style="font-size: 30px;">活动掠影</span>
      <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item v-for="(image, index) in carouselItems" :key="index">
          <img :src="image" alt="Carousel Image"/>
        </el-carousel-item>
      </el-carousel>    

      <span class="theme" style="font-size: 30px;">视频展示</span>
      <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item v-for="(videoSrc, index) in video" :key="index">
          <video 
            :src="videoSrc" 
            controls 
            autoplay 
            loop
            muted
            class="video-player"
          />
        </el-carousel-item>
      </el-carousel>
    </el-main>

    <el-divider />
    <el-footer>
      <Footer></Footer>
    </el-footer>
          
    
  </el-container>

  <el-backtop :right="100" :bottom="100" />

</template>

<style scoped>
/* 假设你的导航栏高度是 60px */
.main_pattern {
  margin-top: 72px;
}

</style>