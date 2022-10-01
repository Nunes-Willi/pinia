import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const nome = ref("")
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  function decrement() {
    count.value--;
  }
  function alterar(outro_nome) {
    nome.value = outro_nome;
  }

  return { count, doubleCount, nome, increment, decrement, alterar }
})
