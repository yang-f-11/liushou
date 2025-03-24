<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/donation/subsidy">政府补贴</a></el-breadcrumb-item>
        </el-breadcrumb>   
        <!-- 以下为正文 -->
        <h1>公益项目资助</h1>   
        <div>
            <div>专项财政补助：由民政、教育或妇联等部门拨款，用于改善儿童教育、生活条件。</div>
            <div>公益创投资金：政府定期组织公益项目申报，提供扶持基金</div>
            <div>社会救助与福利补贴：部分地方政府为公益机构提供 房租减免、税收优惠 等</div>
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