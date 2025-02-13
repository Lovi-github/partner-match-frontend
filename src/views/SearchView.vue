<script setup lang="ts">
import {ref} from 'vue';
import {showToast} from 'vant';

// 搜索文本
const searchText = ref('');
// 已选择的标签数组（存储完整标签对象）
// const selectedTags = ref([]);

// 关闭标签方法
const closeTag = (index: number) => {
    activeIds.value.splice(index, 1);
};

// 修改后的搜索逻辑
const onSearch = (val: string) => {
    if (!val) return;

    let found = false;
    items.value.forEach((parentItem) => {
        parentItem.children?.forEach((childItem) => {
            if (childItem.text === val) {
                activeIndex.value = parentItem.index;
                const isExist = activeIds.value.includes(childItem.id); // 检查 id 是否存在
                if (!isExist) {
                    activeIds.value.push(childItem.id); // 仅存储 id
                }
                found = true;
            }
        });
    });

    searchText.value = '';
    if (!found) showToast(`未找到 ${val}`);
};

// 根据 id 查找标签文本
const getTagText = (id: string) => {
    for (const parent of items.value) {
        const child = parent.children?.find((child) => child.id === id);
        if (child) return child.text;
    }
    return '';
};
const onCancel = () => showToast('取消');


//分类选择
//分类的index
const activeIndex = ref(0);
//分类细分类目
const activeIds = ref<string[]>([]); // 改为存储纯 id 数组
const items = ref([
    {
        index: 0,
        text: '浙江',
        children: [
            {text: '杭州', id: '杭州'},
            {text: '温州', id: '温州'},
            {text: '宁波', id: '宁波', disabled: true},
        ],
    },
    {
        index: 1,
        text: '江苏',
        children: [
            {text: '南京', id: '南京'},
            {text: '无锡', id: '无锡'},
            {text: '徐州', id: '徐州'},
        ],
    },
    {text: '福建', disabled: true},
]);


</script>

<template>
    <form action="/">
        <van-search
            v-model="searchText"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
        />
    </form>
    <!--已选择的标签-->
    <van-divider>已选择的标签</van-divider>
    <van-tag
        v-for="(id, index) in activeIds"
        :key="id"
        closeable
        size="medium"
        type="primary"
        @close="closeTag(index)"
    >
        {{ getTagText(id) }} <!-- 通过 id 获取文本 -->
    </van-tag>
    <!--分类选择-->
    <van-divider>分类选择</van-divider>
    <van-tree-select
        v-model:active-id="activeIds"
        v-model:main-active-index="activeIndex"
        :items="items"
    />

</template>

<style scoped>

</style>