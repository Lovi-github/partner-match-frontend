<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const nickname = ref('');

onMounted(() => {
    // 从路由的query中获取传递过来的value值
    nickname.value = route.query.value;
});
</script>

<template>
<!--要编辑的名称，需要往点击过来的组件交互-->
    {{nickname}}
    测试文字
</template>

<style scoped>

</style>