import { defineStore } from "pinia";
import { ref } from "vue";

export const useMyStore = defineStore('my-store', () => {
  const date = ref(new Date());

  return {
    date,
  };
})
