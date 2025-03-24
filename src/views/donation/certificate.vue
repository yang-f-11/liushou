<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/donation/certificate">证书申领</a></el-breadcrumb-item>
        </el-breadcrumb>   
        <!-- 以下为正文 -->
        
        <h1>证书申领说明</h1>   
        <div>
            在申领证书前，需确认满足以下条件：
            通过官方认可的公益平台或机构完成捐赠（如红十字会、公益基金会等）。
            个人或企业均可申请，部分机构可能要求最低捐赠金额或频次。
        </div>
        <h1>提供以下信息</h1>
        <div>
            <div>捐赠人姓名或企业名称</div>
            <div>捐赠金额或物资清单</div>
            <div>捐赠时间和订单编号</div>
            <div>电子邮箱或联系方式</div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style>


</style>