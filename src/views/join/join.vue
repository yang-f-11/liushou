<template>
    <el-container>
        <el-header style="padding: 0;"><Header></Header></el-header>
        <el-main  class="main_pattern">
            <el-card class="box-card">
                <div style="font-size:30px">{{ breadcrumbTitle }}</div>
                <el-divider />
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item v-for="(item, index) in breadcrumbItems" :key="index" :to="item.path">
                        {{ item.label }}
                    </el-breadcrumb-item>
                </el-breadcrumb>
                <RouterView />
            </el-card>
        </el-main>
    </el-container>
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const breadcrumbItems = computed(() => {
  const path = route.path.split('/').filter(item => item);
  const items = [
    { label: '首页', path: '/' }
  ];

  path.forEach((segment, index) => {
    const label = segment.replace(/-/g, ' ').toUpperCase();
    const fullPath = '/' + path.slice(0, index + 1).join('/');
    items.push({ label, path: fullPath });
  });

  return items;
});

const breadcrumbTitle = computed(() => {
  return route.meta.title;
});
</script>

<style>


</style>