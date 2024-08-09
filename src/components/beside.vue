//左侧菜单栏
<template>
  <div class="menu-container">
    <el-radio-group style="margin-bottom: 20px">
      <el-radio-button @click="toggleMenu">|||</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon style="color: coral;"><House /></el-icon>
          <span>首页</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">一面面试</el-menu-item>
          <el-menu-item index="1-2">未参加一面的名单</el-menu-item>
          <el-menu-item index="1-3">应试者管理</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-4">第二志愿审核</el-menu-item>
          <el-menu-item index="1-5">调剂管理</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon style="color: coral;"><ChatRound /></el-icon>
        <template #title>最新消息通知</template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon style="color: coral;"><Setting /></el-icon>
        <template #title>系统设置</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><Setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
  </div>
  <div class="content-container">
    <!-- 这里放置其他内容 -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  ChatRound,
  Document,
  House,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(false); // 初始化折叠状态
function toggleMenu() {
  isCollapse.value = !isCollapse.value;
}
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.menu-container {
  position: fixed; /* 固定位置 */
  top: 0; /* 固定在顶部 */
  left: 0; /* 固定在左侧 */
  height: 100vh; /* 高度占满整个视口高度 */
  overflow-y: auto; /* 允许垂直滚动 */
  z-index: 1000; /* 确保菜单栏在其他内容之上 */
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;
}

.content-container {
  margin-left: 250px; /* 确保内容不被菜单栏遮挡 */
  padding: 20px;

}
.el-radio-button {
  background-color:rgb(255, 118, 20);
  border-color: rgb(255, 118, 20);
  color: #fff; /* 自定义文本颜色 */
}

.el-radio-button:hover {
  background-color:rgb(255, 118, 20);
  border-color: rgb(255, 118, 20);/* 自定义悬停边框颜色 */
  color: #fff; /* 自定义悬停文本颜色 */
}
</style>
