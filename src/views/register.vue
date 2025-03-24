<template>
    <el-container>
    <el-header style="padding: 0;"><Header></Header></el-header>
    <el-main class="table_pattern">
        <div style="font-size:30px">用户注册</div>
            <el-divider />
        <Register_table></Register_table>
    </el-main>
    </el-container>

</template>

<script lang="ts" setup>
import Register_table from '@/components/Register_table.vue';
import Header from '@/components/Header.vue';
</script>

<style>
.table_pattern{
    padding: 20px 200px;
}
</style>