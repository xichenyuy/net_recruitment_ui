import request from '@/utils/request'

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