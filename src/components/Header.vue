<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="red"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect" 
  >
  <el-menu-item index="0"><img src="../assets/pig.png"></el-menu-item>
    <!-- <div class="flex-grow" /> --> 
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

    <el-sub-menu index="4">
      <template #title>信息公开</template>
      <el-menu-item index="4-1">工作报告</el-menu-item>
      <el-menu-item index="4-2">item two</el-menu-item>
      <el-menu-item index="4-3">item three</el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="5">
      <template #title>党建专栏</template>
      <el-menu-item index="5-1">党建报告</el-menu-item>
      <el-menu-item index="5-2">item two</el-menu-item>
      <el-menu-item index="5-3">item three</el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="6">
      <template #title>关于我们</template>
      <el-menu-item index="6-1">平台成员</el-menu-item>
      <el-menu-item index="6-2">平台章程</el-menu-item>
      <el-menu-item index="6-3">管理制度</el-menu-item>
      <el-sub-menu index="6-4">
        <template #title>分支主题</template>
        <el-menu-item index="6-4-1">item one</el-menu-item>
        <el-menu-item index="6-4-2">item two</el-menu-item>
        <el-menu-item index="6-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>

    <el-sub-menu index="7">
      <template #title>加入我们</template>
      <el-menu-item index="7-1">普通志愿者</el-menu-item>
      <el-menu-item index="7-2">专业志愿者</el-menu-item>
      <el-menu-item index="7-3">大学生志愿者</el-menu-item>
      <el-menu-item index="7-4">联系我们</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => { //添加路径
  const routes = {
  '0':'/home',
  '1':'/home',

  // 公益模块
  '2-1': '/charity/children',
  '2-2': '/charity/parents',
  '2-3': '/charity/ngo',

  // 爱心捐赠
  '3-1': '/donation/certificate',
  '3-2': '/donation/subsidy',
  '3-3-1': '/donation/methods/one',
  '3-3-2': '/donation/methods/two',
  '3-3-3': '/donation/methods/three',

  // 信息公开
  '4-1': '/info/report',
  '4-2': '/info/two',
  '4-3': '/info/three',

  // 党建专栏
  '5-1': '/party/report',
  '5-2': '/party/two',
  '5-3': '/party/three',

  // 关于我们
  '6-1': '/about/members',
  '6-2': '/about/constitution',
  '6-3': '/about/rules',
  '6-4-1': '/about/branch/one',
  '6-4-2': '/about/branch/two',
  '6-4-3': '/about/branch/three',

  // 加入我们
  '7-1': '/join/volunteer/general',
  '7-2': '/join/volunteer/professional',
  '7-3': '/join/volunteer/university',
  '7-4': '/join/contact'
  };

  //登录验证
  if(key[0]==='2'){  
    is_login(routes,key);
  }else router.push(routes[key])
}

const is_login = (routes:any,key:any) => {  
  try {
    const token = localStorage.getItem('access_token');
    const identity = localStorage.getItem("user_identity")
    if (routes[key].substring(9) === identity && token) {
      router.push(routes[key]);
    }
    else{
      router.push('/login')
    }
  } catch (error) {
    
  }
}



</script>

<style>
.flex-grow {
  flex-grow: 1;
}

/* .el-menu {
  display: flex;
  justify-content: space-between; 
} */

/* 防止图片挤压，图片居中显示，多余的会被裁剪 */
img {   
  width:100%;
  height:100%;
  object-fit: cover; 
}


</style>