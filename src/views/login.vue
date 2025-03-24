<template>
<el-container>
    <el-header style="padding: 0;"><Header></Header></el-header>
    <el-main class="table_pattern">
        <div style="font-size:30px">登录</div>
            <el-divider />
        <Login></Login>
    </el-main>
    </el-container>
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue';
import Login from '@/components/Login_table.vue';
</script>

<style>


</style>