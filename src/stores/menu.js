import { defineStore } from 'pinia'
import { ref } from "vue";
export const useMenuStore = defineStore("menuStore", () => {
  
  const resdata = ref({});
  const username = ref('username');
  const password = ref('password');
  const isLogin = ref(false);
  function getresdata(){
    return this.resdata;
  }
  
  return { resdata, username, password ,isLogin,getresdata}
 
})