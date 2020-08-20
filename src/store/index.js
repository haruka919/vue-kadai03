import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    uid: 1
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
      state.tasks.splice(--taskId, 1)
      // IDを振り直す
      state.tasks.forEach((task, taskId) => {
        task.id = ++taskId
      })
      state.uid = state.tasks.length + 1
    }
  }
})
