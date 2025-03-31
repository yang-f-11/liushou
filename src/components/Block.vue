<template>
  <el-col :span="Span">
    <el-card class="box-card" >
      <template #header>
        <div class="card-header">
          <span class="theme">{{ title }}</span>
          <el-button type="danger" @click="navigateTo(morePath)">更多</el-button>
        </div>
      </template>

      <div class="text-list">
        <div 
          v-for="(item, index) in items" 
          :key="index" 
          class="text item" 
          @click="navigateTo(item.path)"
          style="cursor: pointer;"
        >
          {{ item.title }}
        </div>
      </div>
    </el-card>
  </el-col>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import router from '@/router';

const props = defineProps<{
  title: string;
  morePath: string;
  Span: number;
  items: { title: string; path: string }[];
}>();

const navigateTo = (path: string) => {
  router.push(path);
};
</script>

<style scoped>

.text-list {
  flex: 1;
  max-height: 200px;
  overflow-y: auto;
  padding-right: 10px;
}
.text.item {
  cursor: pointer;
  white-space: nowrap;  /* 不换行 */
  overflow: hidden;      /* 超出部分隐藏 */
  text-overflow: ellipsis; /* 显示省略号 */
  display: block;        /* 确保 text-overflow 生效 */
  width: 100%;           /* 让元素撑满父容器 */
}
</style>
