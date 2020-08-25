import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    uid: 0
  },
  getters: {
    tasks: (state) => state.tasks
  },
  mutations: {
    addTask (state, value) {
      const newTask = value.trim()
      if (!newTask) {
        return
      }
      state.tasks.push({
        id: state.uid++,
        comment: newTask,
        completed: false
      })
    },
    deleteTask (state, taskId) {
      state.tasks = state.tasks.filter(task => task.id !== taskId)
      // 配列が空の場合はid値を初期化
      if (!state.tasks.length) {
        state.uid = 0
      }
    },
    changeState (state, { task, completed }) {
      state.tasks = state.tasks.map(item => {
        if (item.id === task.id) {
          item.completed = completed
        }
        return item
      })
    }
  }
})
