<script setup>
import { ref } from 'vue'

const isCollapse = ref(false);

const toggleMenu = () => {
    isCollapse.value = !isCollapse.value;
}

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<template>
    <el-container class="layout-container">
        <!-- 左侧菜单 -->
        <el-aside :width="isCollapse ? '60px' : '200px'" >
            <el-menu active-text-color="#ffd04b"  
                default-active="/article/category"
                :collapse="isCollapse"
                @open="handleOpen"
                @close="handleClose"
                router>
                <el-menu-item index="1">
                    <el-icon><HomeFilled /></el-icon>
                    <span>首页</span>
                </el-menu-item>
                <el-menu-item index="/article/category">
                    <el-icon><Checked /></el-icon>
                    <span>面试管理</span>
                </el-menu-item>
                <el-menu-item index="/article/manage">
                    <el-icon><Management /></el-icon>
                    <span>面试配置</span>
                </el-menu-item>

                <el-sub-menu index="2">
                    <template #title>
                        <el-icon><Tools /></el-icon>
                        <span>配置中心</span>
                    </template>
                    <el-menu-item-group title="Group One">
                        <el-menu-item index="3">
                            <el-icon><User /></el-icon>
                            <span>用户管理</span>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
                <el-sub-menu index="4">
                    <template #title>
                        <el-icon><UserFilled /></el-icon>
                        <span>个人中心</span>
                    </template>
                    <el-menu-item-group title="Group Two">
                        <el-menu-item index="/user/info">
                            <el-icon><User /></el-icon>
                            <span>基本资料</span>
                        </el-menu-item>
                        <el-menu-item index="/user/avatar">
                            <el-icon><Crop /></el-icon>
                            <span>更换头像</span>
                        </el-menu-item>
                        <el-menu-item index="/user/resetPassword">
                            <el-icon><EditPen /></el-icon>
                            <span>重置密码</span>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
            </el-menu>
        </el-aside>
        <el-container>
            <!-- 头部区域 -->
            <el-header>
                <el-icon style="height: 100%;" @click="toggleMenu"><Fold /></el-icon>
                <div style="height: 100%; display: flex; align-items: center;">
                    <el-image src="../../src/assets/团学logo.png" style="height: 100%;"></el-image>
                    <span style="color: #fff;">团委学生会招新系统</span>
                </div>
                <el-dropdown placement="bottom-end">
                    <span class="el-dropdown__box">
                        <el-avatar src="../../src/assets/default.png" />
                        <el-icon>
                            <CaretBottom />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item command="profile"><el-icon><User /></el-icon>基本资料</el-dropdown-item>
                            <el-dropdown-item command="avatar"><el-icon><Crop /></el-icon>更换头像</el-dropdown-item>
                            <el-dropdown-item command="password"><el-icon><EditPen /></el-icon>重置密码</el-dropdown-item>
                            <el-dropdown-item command="logout"><el-icon><SwitchButton /></el-icon>退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-header>
            <!-- 主区域 -->
            <el-main><router-view></router-view></el-main>
            <!-- 底部区域 -->
            <el-footer>招新系统 ©2024 Created by netmen</el-footer>
        </el-container>
    </el-container>
</template>

<style lang="scss" scoped>
.layout-container {
    height: 100vh;

    .el-aside {
        // background-color: #FF7614;
        // height: 100%;

        transition: width 0.5s ease; /* 宽度变化的过渡效果 */
        /* 可能还需要其他样式来确保过渡效果正确应用 */
        // overflow: hidden; /* 隐藏超出宽度的内容 */
        
        .el-menu {
            border-right: none;
        }
    }

    .el-header {
        background-color: #FF7614;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .el-dropdown__box {
            display: flex;
            align-items: center;

            .el-icon {
                color: #999;
                margin-left: 10px;
            }

            &:active,
            &:focus {
                outline: none;
            }
        }
    }

    

    

    .el-footer {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: #666;
    }
}
</style>