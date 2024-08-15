import request from '@/utils/request'
import { useTokenStore } from '@/stores/token'

export const userRegisterService = (registerData) => {
    const params = new URLSearchParams()
    for (let key in registerData){
        params.append(key, registerData[key])
    }
    return request.post('/user/register', params)
}

export const userLoginService = (loginData) =>{
    return request.post('/user/login', loginData)
}




export const userList = (pageNum, pageSize) =>{
    const params = new URLSearchParams()
    params.append('pageNum', pageNum);
    params.append('pageSize', pageSize);
    const tokenStore = useTokenStore();

    //在pinia中定义的响应式都不需要value 可以直接使用
    return request.get('/user', params)
}