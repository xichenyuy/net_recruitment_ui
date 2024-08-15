
<script setup>
import { User, Lock } from '@element-plus/icons-vue'
import { ref } from 'vue'
// import { ElMessage } from 'element-plus';
//控制注册与登录表单的显示， 默认显示注册
const isRegister = ref(false)
//定义数据模型
const registerData = ref({
    username:'',
    password:'',
    rePassword:'',
})
//校验密码的函数
const checkRePassword = (rule, value, callback) =>{
    if(value === ''){
        callback(new Error('请再次确认密码'))
    } else if (value !== registerData.value.password){
        callback(new Error('请确保两次输入的密码一样'))
    } else {
        callback()
    }
}
//定义表单校验规则
const rules={
    username:[
        {required: true, message:'请输入用户名', trigger:'blur'},
        {min:5, max:16, message:'长度为5~16位非空字符', trigger:'blur'}
    ],
    password:[
        {required: true, message:'请输入密码', trigger:'blur'},
        {min:5, max:16, message:'长度为5~16位非空字符', trigger:'blur'}
    ],
    rePassword:[
        {validator:checkRePassword, trigger:'blur'},
    ],
}

import {userRegisterService, userLoginService} from '@/api/user'
import { ElMessage } from 'element-plus';
const register = async () =>{
    let result = await userRegisterService(registerData.value);
    ElMessage.success('注册成功')
}

const loginData = ref({
    username:'',
    password:''
})

import { useRouter } from 'vue-router'
import { useTokenStore } from '@/stores/token';
const tokenStore = useTokenStore();
const router = useRouter()
const login = async () =>{
    let result = await userLoginService(loginData.value);
    ElMessage.success('登录成功')
    // 跳转到首页 路由完成跳转 
    router.push('/');
    //将token存储到pinia中
    console.log(result);
    console.log(result.data);
    tokenStore.setToken(result.data.token)
}

</script>

<template>
    <el-row class="login-page">
        <el-col :span="12" class="bg"></el-col>
        <el-col :span="6" :offset="3" class="form">
            <el-card shadow="always" :body-style="{ padding: '20px' }">
                <template #header>
                    <h2 v-if="isRegister">注册</h2>
                    <h2 v-else>登录</h2>
                </template>
                <!-- 注册表单 -->
                <el-form :model="registerData" :rules="rules" ref="form" size="large" autocomplete="off" v-if="isRegister" >
                    <el-form-item prop="username">
                        <el-input v-model="registerData.username" :prefix-icon="User" placeholder="请输入用户名" ></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input v-model="registerData.password" :prefix-icon="Lock" type="password" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item prop="rePassword">
                        <el-input v-model="registerData.rePassword" :prefix-icon="Lock" type="password" placeholder="请输入再次密码"></el-input>
                    </el-form-item>
                    <!-- 注册按钮 -->
                    <el-form-item>
                        <el-button type="primary" auto-insert-space @click="register" style="width: 100%;">
                            注册
                        </el-button>
                    </el-form-item>
                    <el-form-item class="flex">
                        <el-link type="info" :underline="false" @click="isRegister = false">
                            ← 返回
                        </el-link>
                    </el-form-item>
                </el-form>
                <!-- 登录表单 -->
                <el-form :model="loginData" :rules="rules" ref="form" size="large" autocomplete="off" v-else>
                    <el-form-item prop="username">
                        <el-input v-model="loginData.username" :prefix-icon="User" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input v-model="loginData.password" name="password" :prefix-icon="Lock" type="password" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item class="flex">
                        <div class="flex">
                            <el-checkbox>记住我</el-checkbox>
                            <el-link type="primary" :underline="false">忘记密码？</el-link>
                        </div>
                    </el-form-item>
                    <!-- 登录按钮 -->
                    <el-form-item>
                        <el-button  type="primary" auto-insert-space @click="login" style="width: 100%;">登录</el-button>
                    </el-form-item>
                    <el-form-item class="flex">
                        <el-link type="info" :underline="false" @click="isRegister = true">
                            注册 →
                        </el-link>
                    </el-form-item>
                </el-form>
            </el-card>
            
           
        </el-col>
    </el-row>
</template>

<style lang="scss" scoped>
/* 样式 */
.login-page {
    height: 100vh;
    background-color: #fff;

    .bg {
        background: url('@/assets/logo2.png') no-repeat 60% center / 240px auto,
            url('@/assets/login_bg.jpg') no-repeat center / cover;
        border-radius: 0 20px 20px 0;
    }

    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        user-select: none;

        .flex {
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>