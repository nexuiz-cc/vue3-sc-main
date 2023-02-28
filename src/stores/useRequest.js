import { ref } from "vue";
import axios from "axios";

export function useRequest(url) {
    const data = ref({});
      axios
        .get(url)
        .then((res) => {
            data.value = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    return {
      data 
    };
  }