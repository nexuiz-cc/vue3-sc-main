import axios from 'axios'
import { useMenuStore } from '../stores/menu'
const menuStore = useMenuStore()
export default function getresdata() {
  axios
    .get('http://localhost:5000/product/menu')
    .then(function (response) {
      menuStore.$state.resdata = response.data;
      
      return menuStore.$state.resdata;
    })
    .catch(function (error) {
      console.log(error)

    })
    console.log('resdata:',menuStore.$state.resdata);
}
