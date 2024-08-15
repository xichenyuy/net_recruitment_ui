//定制请求的实例

//导入axios  npm install axios
import axios from 'axios';
import { ElMessage } from 'element-plus';
//定义一个变量,记录公共的前缀  ,  baseURL
const baseURL = '/api';
const instance = axios.create({baseURL})

import { useTokenStore } from '@/stores/token';
//添加请求拦截器
instance.interceptors.request.use(
    (config)=>{ //请求前的回调
        //添加token
        const tokenStore = useTokenStore();
        if(tokenStore.token){
            config.headers.Authorization = tokenStore.token;
        }
        return config;
    },
    (err) =>{   //请求错误的回调
        //异步状态转化为失败
        Promise.reject(err)
    }
)

// 由于加载顺序的问题 不能使用vue中的这种写法
// import { useRouter } from 'vue-router';
// const router = useRouter();

import router from '@/router'


//添加响应拦截器
instance.interceptors.response.use(
    result=>{
        if(result.data.code === 0){
            return result.data;
        }
        ElMessage.error(result.data.message ? result.data.message:'服务异常')
        //异步操作的状态转换为失败
        return Promise.reject(result.data)
    },
    err=>{
        //判断响应状态码 若为401 则未登录 跳转到登录页面
        if(err.response.status === 401){
            ElMessage.error('请先登录');
            router.push('/login');
        } else {
            ElMessage.error('服务异常')
        }
    
        return Promise.reject(err);//异步的状态转化成失败的状态
    }
)

export default instance;