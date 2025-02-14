<script setup lang="ts">

</script>

<template>
    <van-cell title="昵称" is-link :to="{ path: '/mine/edit', query: { value: 'lovi' } }"
              value="lovi" />
    <van-cell title="账号" is-link :to="{ path: '/mine/edit', query: { value: 'loviAc' } }" value="loviAc" />
    <!--todo：头像单独处理-->
    <!--
    https://img1.baidu.com/it/u=2874422640,3007073968&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800
    -->
    <van-cell title="头像" is-link :to="{ path: '/mine/edit', query: { value: 'lovi' } }" >
        <van-image
            width="4rem"
            height="4rem"
            fit="cover"
            src="https://img1.baidu.com/it/u=2874422640,3007073968&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800"
        />
    </van-cell>
    <van-cell title="性别" is-link :to="{ path: '/mine/edit', query: { value: '女' } }" value="女" />
    <van-cell title="电话" is-link :to="{ path: '/mine/edit', query: { value: '1234' } }" value="1234" />
    <van-cell title="邮箱" is-link :to="{ path: '/mine/edit', query: { value: 'xx123@qq.com' } }" value="xx123@qq.com" />
    <van-cell title="注册时间" is-link :to="{ path: '/mine/edit', query: { value: '2025/02/13 16:57:53' } }" value="2025/02/13 16:57:53" />
</template>

<style scoped>

</style>