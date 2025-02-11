<script setup lang="ts">
import { ref } from 'vue';
import {showToast} from 'vant';
import HomeView from "@/views/HomeView.vue";
import TeamView from "@/views/TeamView.vue";
import MineView from "@/views/MineView.vue";


const active = ref(0);
// const onChange = (index) => {
//     showToast(`${index}`);
//     console.log(active.value)
// }

</script>

<template>
    <!--顶部导航栏-->
    <van-nav-bar title="标题" left-text="返回" left-arrow >
        <template #right>
            <!--进入搜索页面-->
            <router-link to="/search">
                <van-icon name="search" size="18" />
            </router-link>
        </template>
    </van-nav-bar>
    <!--内容部分-->
    <div class="content">
        <router-view></router-view>
    </div>
    <!--底部导航栏-->
    <van-tabbar route >
        <van-tabbar-item icon="home-o" to="/">主页</van-tabbar-item>
        <van-tabbar-item icon="search" to="/team" >队伍</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/mine">个人</van-tabbar-item>
    </van-tabbar>

</template>

<style scoped>

</style>