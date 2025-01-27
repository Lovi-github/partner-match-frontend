<script setup lang="ts">
import { ref } from 'vue';
import {showToast} from 'vant';
import HomeView from "@/views/HomeView.vue";
import TeamView from "@/views/TeamView.vue";
import MineView from "@/views/MineView.vue";


const active = ref(0);
const onChange = (index) => {
    // showToast(`${index}`);
    // console.log(active.value)
}

</script>

<template>
    <!--顶部导航栏-->
    <van-nav-bar title="标题" left-text="返回" left-arrow>
        <template #right>
            <van-icon name="search" size="18" />
        </template>
    </van-nav-bar>
    <!--内容部分-->
    <div class="content">
        <template v-if="active === 0">
            <home-view></home-view>
        </template>
        <template v-if="active === 1">
            <TeamView></TeamView>
        </template>
        <template v-if="active === 2">
            <MineView></MineView>
        </template>
    </div>
    <!--底部导航栏-->
    <van-tabbar v-model="active" @change="onChange">
        <van-tabbar-item icon="home-o">主页</van-tabbar-item>
        <van-tabbar-item icon="search">队伍</van-tabbar-item>
        <van-tabbar-item icon="friends-o">个人</van-tabbar-item>
    </van-tabbar>



</template>

<style scoped>

</style>