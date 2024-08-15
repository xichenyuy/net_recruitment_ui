import { defineStore } from "pinia"; 
import { ref } from "vue";
/**
 * 以use开头 store结尾 顾名思义
 * 
 * 第一个参数：名字，唯一性
 * 第二个参数：函数
 */
export const useTokenStore = defineStore('token', ()=>{
    const token = ref('');

    const setToken = (newToken) =>{
        token.value = newToken;
    }

    const removeToken = () =>{
        token.value = '';
    }

    return { token, setToken, removeToken }
});