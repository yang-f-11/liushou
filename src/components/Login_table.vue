<template>
    <el-form :model="form" label-width="120px">
      <el-form-item label="昵称">
        <el-input v-model="form.nickname" />
      </el-form-item>
      <el-form-item label="输入密码" prop="pass">
        <el-input v-model="form.pass" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认</el-button>
        <el-button @click="onRegister">注册</el-button>
      </el-form-item>
    </el-form>
</template>
  
<script lang="ts" setup>
import router from '@/router';
import { reactive } from 'vue'
import axios from 'axios';
import { ElMessage } from 'element-plus'

const form = reactive({
  nickname: '',
  pass: '',
})

const onSubmit = async () => {
  if (!form.nickname || !form.pass) {
    ElMessage.error("昵称和密码不能为空！");
    return;
  }
  try {
    const response = await axios.post('http://localhost:8000/api/login/', {
      nickname: form.nickname,
      password: form.pass,
    })
    
    // 登录成功，保存 Token
    if (response.data.success) {
      localStorage.setItem('access_token', response.data.token)
      localStorage.setItem("user_name", response.data.name);
      localStorage.setItem("user_identity", response.data.identity);
      ElMessage.success('登录成功')
      // 跳转到主页或其他页面
      router.push('/charity/'+response.data.identity)
    } else {
      ElMessage.error(response.data.message)
    }
  } catch (error) {
    ElMessage.error('登录失败，请检查网络或请求')
  }
}

const onRegister = () => {
  router.push('/register');
};
</script>
