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
        <Block title="最新动态" morePath="/process-module" :Span="8"></Block>
        <Block title="心灵帮助" morePath="/process-module" :Span="8"></Block>
        <Block title="最近活动" morePath="/process-module" :Span="8"></Block>
      </el-row>  
    </el-main>
    <el-main class="main_pattern">
      <el-row :gutter="20" justify="space-between">
        <el-col :span="12">
          <div class="chat-container">
            <h1><el-icon><HelpFilled /></el-icon> AI情感分析师</h1>
            <el-input v-model="userInput" placeholder="输入消息..." @keyup.enter="sendMessage" />
            <el-button type="primary" @click="sendMessage" :loading="loading">发送</el-button>
            <div v-for="(msg, index) in messages" :key="index">
              <div v-if="msg.role === 'user'" style="text-align: right;">用户: {{ msg.content }}</div>
              <div v-if="msg.role === 'ai'" style="text-align: left;">deepseek: {{ msg.content }}</div>
            </div>
          </div>
        </el-col>
        <el-col :span="10">
          <!-- <div id="mapContainer" class="map-container"></div> -->
          <el-calendar v-model="value" />
        </el-col>
      </el-row>
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

// const getNearbyStations = async () => {
//   try {
//     const { data } = await axios.get('http://127.0.0.1:8000/api/nearby-stations/', {
//       params: { lat: userLat.value, lon: userLon.value },
//     });

//     nearbyStations.value = data.stations;
//     addMarkersToMap(nearbyStations.value);
//   } catch (error) {
//     console.error("获取附近关爱站失败:", error);
//   }
// };

// const userLat = ref(0);
// const userLon = ref(0);
// const nearbyStations = ref([]);

// const initMap = async () => {
//   const AMap = await AMapLoader.load({
//     key: "",
//     version: "2.0",
//     plugins: ["AMap.Geolocation"],
//   });

//   const map = new AMap.Map("mapContainer", { zoom: 14 });

//   const geolocation = new AMap.Geolocation({ enableHighAccuracy: true });
//   map.addControl(geolocation);

//   geolocation.getCurrentPosition((status, result) => {
//     if (status === "complete" && result.position) {
//       userLat.value = result.position.lat;
//       userLon.value = result.position.lng;
//       map.setCenter(result.position);

//       getNearbyStations();
//     }
//   });
// };

// const addMarkersToMap = (stations) => {
//   stations.forEach((station) => {
//     const [lng, lat] = station.location.split(",");
//     new AMap.Marker({
//       map,
//       position: [parseFloat(lng), parseFloat(lat)],
//       title: station.name,
//     });
//   });
// };

// onMounted(initMap);
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
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #f9f9f9;
}

.chat-messages {
  max-height: 200px;
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
  background: #ddd;
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
</style>
