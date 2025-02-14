<script setup lang="ts">
import router from "@/router";
const editUser = (title: string, value: string) =>{
    router.push({ path: '/editUser', query: {
        title: title,
        value: value }
    });
}
</script>

<template>
    <van-cell title="昵称" is-link to="/editUser"
              value="lovi" @click="editUser('昵称', 'lovi')" />
    <van-cell title="账号" is-link :to="{ path: '/editUser', query: { title: '账号', value: 'loviAc' } }" value="loviAc" />
    <!--todo：头像单独处理-->
    <!--
    https://img1.baidu.com/it/u=2874422640,3007073968&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800
    -->
    <van-cell title="头像" is-link to="/editUser" >
        <van-image
            width="4rem"
            height="4rem"
            fit="cover"
            src="https://img1.baidu.com/it/u=2874422640,3007073968&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800"
        />
    </van-cell>
    <van-cell title="性别" is-link :to="{ path: '/editUser', query: {title: '性别', value: '女' } }" value="女" />
    <van-cell title="电话" is-link :to="{ path: '/editUser', query: { title: '电话', value: '1234' } }" value="1234" />
    <van-cell title="邮箱" is-link :to="{ path: '/editUser', query: { title: '邮箱', value: 'xx123@qq.com' } }" value="xx123@qq.com" />
    <van-cell title="注册时间" is-link :to="{ path: '/editUser', query: { title: '注册时间', value: '2025/02/13 16:57:53' } }" value="2025/02/13 16:57:53" />
    <router-view></router-view>
</template>

<style scoped>

</style>