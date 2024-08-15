<script lang="ts" setup>
import { ref } from 'vue';
const isCollapse = ref(true);

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
    <el-container class="layout-container">
        <el-container>
            <!-- 头部区域 -->
            <el-header>
                <div class="el-header__logo"></div>
                <div><strong>招新系统</strong></div>
                <el-dropdown placement="bottom-end">
                    <span class="el-dropdown__box">
                        <el-avatar src="../assets/default.png" />
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
            <el-container>
                <!-- 左侧菜单 -->
                <el-aside width="200px">
                    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
                        <el-radio-button :value="false">expand</el-radio-button>
                        <el-radio-button :value="true">collapse</el-radio-button>
                    </el-radio-group>
                    <el-menu active-text-color="#ffd04b"  
                        default-active="/article/category"
                        :collaspe="isCollapse"
                        @open="handleOpen"
                        @close="handleClose"
                        router>
                        <el-menu-item>
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
                        <el-sub-menu >
                            <template #title>
                                <el-icon><Tools /></el-icon>
                                <span>配置中心</span>
                            </template>
                            <el-menu-item-group title="Group One">
                                <el-menu-item>
                                    <el-icon><User /></el-icon>
                                    <span>用户管理</span>
                                </el-menu-item>
                            </el-menu-item-group>
                        </el-sub-menu>
                        <el-sub-menu >
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
                    <!-- 右侧主区域 -->
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                    <!-- 右侧底部区域 -->
                    <el-footer>大事件 ©2023 Created by 黑马程序员</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </el-container>
</template>

<style lang="scss" scoped>
.layout-container {
    height: 100vh;

    .el-aside {
        // background-color: #FF7614;

        

        .el-menu {
            border-right: none;
        }
    }

    .el-header {

        background-color: #FF7614;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &__logo {
            height: 120px;
            background: url('@/assets/logo.png') no-repeat center / 120px auto;
        }


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