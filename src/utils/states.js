import { defineStore } from "pinia"
import { ref } from "vue"

export const useMessagesStore = defineStore('messages', () => {
  const result = ref(undefined)
  const queue = ref([])
  const snackbar = ref(false)
  const url = ref('')
  const navigatedFromScan = ref(false);
  const loading = ref(false)
  function add(message) {
    snackbar.value = true
    queue.value.push(message)
  }
  function close() {
    snackbar.value = false
    queue.value = []
  }

  return { queue, add, result, close, snackbar, url, navigatedFromScan, loading }
})
