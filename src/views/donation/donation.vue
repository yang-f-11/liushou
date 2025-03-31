<template>
  <el-container>
    <el-header style="padding: 0;"><Header /></el-header>
    <el-main class="main_pattern">
      <el-card class="box-card">
        <h2>在线捐赠 - 选择支付方式</h2>
        <el-divider />

        <h3>请输入捐赠金额：</h3>
        <el-input v-model="amount" type="number" placeholder="请输入金额" style="width: 200px;" />
        
        <div style="margin-top: 20px;">
          <el-button type="primary" @click="startAlipayPayment">支付宝支付</el-button>
        </div>

        <div v-if="qrCodeUrl" style="margin-top: 20px;">
          <h3>请使用支付宝扫码支付</h3>
          <img :src="qrCodeUrl" alt="支付宝支付二维码" style="width: 200px; height: 200px;" />
          <el-button type="success" @click="checkPaymentStatus" style="margin-top: 20px;">检查支付状态</el-button>
        </div>
      </el-card>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import Header from "@/components/Header.vue";

const router = useRouter();
const amount = ref(""); // 用户输入的捐赠金额
const qrCodeUrl = ref(""); // 支付二维码

// 触发支付宝支付
const startAlipayPayment = async () => {
  if (!amount.value || parseFloat(amount.value) <= 0) {
    alert("请输入有效的金额！");
    return;
  }

  try {
    const response = await axios.post("http://localhost:8000/api/alipay/create/", {
      amount: amount.value,
    });
    qrCodeUrl.value = response.data.qr_code_url;  // 赋值二维码 URL
  } catch (error) {
    console.error("支付宝支付失败", error);
  }
};

// 轮询查询支付状态
const checkPaymentStatus = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/alipay/status/");
    if (response.data.status === "success") {
      router.push({
        path: "/donation/success",
        query: { amount: response.data.amount, orderId: response.data.order_id },
      });
    } else {
      alert("支付未完成，请稍后重试！");
    }
  } catch (error) {
    console.error("查询支付状态失败", error);
  }
};
</script>
