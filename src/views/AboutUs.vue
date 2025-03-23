2<template>
  <div class="focus">
    <el-container>
      <el-header style="padding: 0;">
        <Header></Header>
      </el-header>
      <!-- 搜索框 -->
      <div class="flex-container">
        <div class="search-box">
          <el-input placeholder="请输入关键字" v-model="searchQuery" class="input-with-select">
            <template #append>
              <el-button @click="handleSearch" style="color: red;">
                <el-icon><Search /></el-icon>
              </el-button>
            </template>
          </el-input>
        </div>
      </div>
      <!-- 搜索框下方的分割线 -->
      <div class="divider-light-gray"></div>
      <el-main>
        <h1>Content</h1>
        <!-- 添加粗的灰色分割线 -->
        <div class="divider-thick-gray"></div>

        <!-- 增加相关内容在无序列表中 -->
        <ul class="content-list">
          <li v-for="(item, index) in contentItems" :key="index">
            {{ item.title }} [{{ item.date }}]
          </li>
        </ul>

        <!-- 分页功能 -->
        <div class="pagination-container">
          <el-pagination
            layout="prev, pager, next"
            :total="400" 
            @current-change="handlePageChange"
            class="custom-pagination"
          ></el-pagination>
        </div>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
    
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue';

const searchQuery = ref('');
const contentItems = [
  { title: '叶一楠南', date: '2023-09-01' },
  { title: '叶一楠东', date: '2023-09-02' },
  { title: '叶一楠西', date: '2023-09-03' },
  { title: '叶一楠北', date: '2023-09-03' },
  { title: '叶一楠南', date: '2023-09-03' },
  { title: '叶一楠南', date: '2023-09-03' },
  { title: '叶一楠南', date: '2023-09-03' },
  { title: '叶一楠南', date: '2023-09-03' },
  { title: '叶一楠南', date: '2023-09-03' },
  { title: '叶一楠南', date: '2023-09-03' },
  // 更多内容...
];

const handlePageChange = (currentPage: number) => {
  console.log('Current page:', currentPage);
};

const handleSearch = () => {
  console.log('Search query:', searchQuery.value);
};
</script>

<style scoped>
.focus {
  padding: 20px;
}

.flex-container {
  display: flex;
  align-items: center; /* 垂直居中 */
}

.search-box {
  margin-top: 20px;
  text-align: right;
  margin-bottom: 10px;
  width: 300px;
  margin-left: calc(70% - 30px);
}

.el-input .el-input__inner {
  width: 500px; /* 设置搜索框宽度 */
}

/* 搜索框右侧的图标样式 */
.el-input .el-input-group__append button {
  background-color: transparent;
  border-left: none;
  color: red;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

p {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
}

img {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}

.divider-light-gray {
  border-top: 1px solid #e0e0e0;
  margin: 10px 0;
}

.divider-thick-gray {
  /* 调整分割线的粗细 */
  border-top: 6px solid #c4c0c0;
  margin: 20px 0;
}

.content-list li {
  margin-bottom: 20px;
  font-size: 16px;
}

/* 新增样式 */
.pagination-container {
  display: flex;
  justify-content: flex-end; /* 右对齐 */
  margin-top: 40px;
}

</style>  
