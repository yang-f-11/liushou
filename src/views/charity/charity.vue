<template>
  <el-container>
    <el-header style="padding: 0;">
      <Header></Header>
    </el-header>
    <el-main class="main_pattern">
      <div style="font-size:30px">个人天地</div>
      <el-divider />
      <RouterView />
      <br><br>
      <el-row :gutter="20">
        <Block title="最新动态" morePath="/process-module" :Span="8" :items="demo"></Block>
        <Block title="心灵帮助" morePath="/process-module" :Span="8" :items="demo"></Block>
        <Block title="鸡汤文学" morePath="/process-module" :Span="8" :items="demo"></Block>
      </el-row>  
    </el-main>
    <el-main class="main_pattern">
      <el-row :gutter="20" justify="space-between">
        <el-col :span="12">
          <div class="chat-container">
            <h1><el-icon>
                <HelpFilled />
              </el-icon> AI情感分析师</h1>
            <el-input v-model="userInput" placeholder="输入消息..." @keyup.enter="sendMessage" />
            <el-button type="primary" @click="sendMessage" :loading="loading">发送</el-button>
            <div class="chat-messages">
              <div v-for="(msg, index) in messages" :key="index">
                <div v-if="msg.role === 'user'" class="user-message">用户: {{ msg.content }}</div>
                <div v-if="msg.role === 'ai'" class="ai-message">deepseek: {{ msg.content }}</div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="10">
          <!-- <div id="mapContainer" class="map-container"></div> -->
          <el-calendar v-model="value" />
        </el-col>
      </el-row>
      <section class="mbti-section">
        <h2>MBTI性格类型自测</h2>
        <p>“终于被理解的感觉真好。”</p>
        <el-button type="primary" @click="jumpToMBTI" style="font-size: 18px;">
          前往自测
        </el-button>
      </section>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import Header from '@/components/Header.vue';
import axios from 'axios';
import { ref, onMounted } from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";
import Block from '@/components/Block.vue'
const route = useRoute();

import { project } from "@/stores/pages";
const pj = project()
const demo = ref(pj.demo)

// 定义变量
const value = ref(new Date());
const userInput = ref('');
const messages = ref([
  { role: 'ai', content: '你好！有什么我可以帮忙的吗？' },
]);

const loading = ref(false);
const backendURL = 'http://127.0.0.1:8000/api/chat/';

const sendMessage = async () => {
  if (!userInput.value.trim()) return;
  loading.value = true;

  messages.value.push({ role: 'user', content: userInput.value });

  try {
    const response = await axios.post(backendURL, { message: userInput.value });

    const aiResponse = response.data.reply;
    messages.value.push({ role: 'ai', content: aiResponse });

  } catch (error) {
    console.error('请求后端接口失败:', error);
    messages.value.push({ role: 'ai', content: '发生错误，请稍后再试！' });
  }

  // 清空用户输入框
  userInput.value = '';

  loading.value = false;
};
const jumpToMBTI = () => {
  window.open('https://www.16personalities.com/ch/', '_blank');
};
</script>

<style>
.main_pattern {
  /* 侧边距离 */
  padding: 20px 150px;
}

.grid-content {
  border-radius: 4px;
  min-height: 350px;
  /* background-color: rgb(214, 252, 250); */
}

.chat-container {
  width: 100%;
  height: 600px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #f9f9f9;
}

.chat-messages {
  flex-grow: 1; /* 让聊天消息区填充剩余空间 */
  overflow-y: auto; /* 当内容超出时显示滚动条 */  
  max-height: 400px;
  overflow-y: auto;
  padding: 5px;
  border: 1px solid #ccc;
  background: white;
  border-radius: 5px;
}

.user-message {
  text-align: right;
  background: #007bff;
  color: white;
  padding: 5px;
  margin: 5px;
  border-radius: 8px;
}

.ai-message {
  text-align: left;
  color: black;
  padding: 5px;
  margin: 5px;
  border-radius: 8px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 20px;
}

.item {
  margin-bottom: 8px;
}

.theme {
  font-size: 20px;
  font-weight: bold;
  color: red;
  position: relative;
}

.theme::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 100%;
  height: 2px;
  background-color: red;
}
.survey-embed {
  margin-top: 30px;
  padding: 20px;
  background: #f8f8f8; /* 根据需要 */
}

.mbti-section {
  margin-top: 30px;
  padding: 20px;
  background: #fdfdfd;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
}

.mbti-section h2 {
  font-size: 28px;
  margin-bottom: 10px;
}

.mbti-section p {
  font-size: 18px;
  margin-bottom: 20px;
}
</style>
