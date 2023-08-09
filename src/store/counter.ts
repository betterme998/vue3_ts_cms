import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 100
  }),
  getters: {
    doubleCounter(state) {
      return state.counter * 2
    }
  },
  actions: {
    // 指定参数类型
    changeCounterAction(newCounter: number) {
      this.counter = newCounter
    }
  }
})

export default useCounterStore
