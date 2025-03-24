<template>
    <h1>你好!{{ name }}</h1>
</template>

<script lang="ts" setup>
const name = localStorage.getItem("user_name")
</script>

<style>


</style>