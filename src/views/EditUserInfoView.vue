<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {useRoute} from 'vue-router';

const route = useRoute();
const query = ref({
    value: '',
    title: '',
})
onMounted(() => {
    // 从路由的query中获取传递过来的value值
    // 使用三元运算符简洁地从路由的query中获取传递过来的值
    query.value.value = route.query.value !== undefined ? String(route.query.value) : '';
    query.value.title = route.query.title !== undefined ? String(route.query.title) : '';
});

const onSubmit = (values) => {
    console.log('submit被点击');
    console.log('submit', values);
};
</script>

<template>
<van-form @submit="onSubmit">
    <van-cell-group inset>
        <van-field
            v-model="query.value"
            name="editValue"
            :label="query.title"
        />
    </van-cell-group>
    <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
            提交
        </van-button>
    </div>
</van-form>

</template>

<style scoped>

</style>