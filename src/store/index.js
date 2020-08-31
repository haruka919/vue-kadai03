import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    uid: 0,
    visibility: 'all'
  },
  getters: {
    filteredTasks (state) {
      switch (state.visibility) {
        case 'all':
          return state.tasks
        case 'working':
          return state.tasks.filter((task) =>
            !task.completed
          )
        case 'completed':
          return state.tasks.filter((task) =>
            task.completed
          )
      }
    },
    visibility: (state) => state.visibility
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
    },
    changeVisibility (state, value) {
      state.visibility = value
    }
  }
})
