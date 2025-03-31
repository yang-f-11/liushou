<template>
    <el-container>
        <el-header style="padding: 0;"><Header></Header></el-header>
        <el-main  class="main_pattern">
            <el-card class="box-card">
                <div style="font-size:30px">项目概述</div>
                <el-divider />
                <div class="text-list">
                    <div 
                        v-for="(item, index) in project_overview" 
                        :key="index" 
                        class="text item" 
                        @click="navigateTo(item.path)"
                        style="cursor: pointer;"
                    >
                        {{ item.title }}
                    </div>
                </div>
                
            </el-card>
        </el-main>
    </el-container>
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue';
import { project } from "@/stores/pages";
import { ref } from 'vue';
import router from '@/router';
const pj = project()
const project_overview = ref(pj.project_overview);
const navigateTo = (path: string) => {
    router.push(path);
  };


  
</script>

<style>


</style>