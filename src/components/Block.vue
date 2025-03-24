<template>
    <el-col :span="Span">
      <el-card class="box-card">
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
  
  defineProps<{
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
    height: 190px;
    overflow: hidden; /* 隐藏超出部分 */

    /* 设置max-height添加滚动条 */
    /* flex: 1;
    max-height: 200px; 
    overflow-y: auto;
    padding-right: 10px; */
  }
  </style>
  