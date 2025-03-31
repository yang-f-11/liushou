<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#337ecc"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect" 
  >
    <div class="flex-grow" /> 
    <el-menu-item index="1">首页</el-menu-item>

      <!-- 中间：标语 -->
      <div class="slogan">
        <h1>孤影不孤，心声有应</h1>
      </div>

    <el-sub-menu index="3">
      <template #title>爱心捐赠</template>
      <el-menu-item index="3-1">在线捐赠</el-menu-item>
    </el-sub-menu>

    <!-- 下半部分：导航菜单 -->
    <div class="nav-menu-container">
      <el-menu :default-active="activeIndex2" class="nav-menu" mode="horizontal" background-color="#337ecc"
        text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>

        <el-sub-menu index="2">
          <template #title>公益模块</template>
          <el-menu-item index="2-1">流动/留守儿童</el-menu-item>
          <el-menu-item index="2-2">家长</el-menu-item>
          <el-menu-item index="2-3">社工站和公益机构</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="3">
          <template #title>爱心捐赠</template>
          <el-menu-item index="3-1">证书申领</el-menu-item>
          <el-menu-item index="3-2">政府补贴</el-menu-item>
          <el-sub-menu index="3-3">
            <template #title>捐赠方式</template>
            <el-menu-item index="3-3-1">短信捐赠</el-menu-item>
            <el-menu-item index="3-3-2">银行转账</el-menu-item>
            <el-menu-item index="3-3-3">网上捐款</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>

    <el-sub-menu index="7">
      <template #title>加入我们</template>
      <el-menu-item index="7-1">志愿者</el-menu-item>
      <el-menu-item index="7-2">联系我们</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => { //添加路径
  const routes = {
  '1':'/home',

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({ path: "/search", query: { q: searchQuery.value } });
  }
};

  // 爱心捐赠
  '3-1': '/donation',

  // 信息公开
  '4-1': '/info/report',
  '4-2': '/info/finance',

  // 党建专栏
  '5-1': '/party/report',

  // 关于我们
  '6-1': '/about/members',
  '6-2': '/about/constitution',
  '6-3': '/about/rules',
  '6-4': '/about/centre',

  // 加入我们
  '7-1': '/join/volunteer',
  '7-2': '/join/contact'
  };

  // 示例登录验证（仅针对公益模块）
  if (key.startsWith('2')) {
    isLogin(routes[key]);
  } else {
    router.push(routes[key]);
  }
};

const isLogin = (path: string) => {
  try {
    const token = localStorage.getItem('access_token');
    const identity = localStorage.getItem("user_identity");
    if (token && identity && path.includes(identity)) {
      router.push(path);
    } else {
      router.push('/login');
    }
  } catch (error) {
    console.error("登录验证错误", error);
    router.push('/login');
  }
};
</script>

<style>
.flex-grow {
  flex-grow: 0.5;
}

.slogan h1 {
  font-size: 26px;
  font-weight: bold;
  color: #d9534f;
  margin: 0;
}


</style>
