<template>
  <tbody>
    <tr v-for="task in filteredTasks" :key="task.id">
      <td>{{ task.id }}</td>
      <td>{{ task.comment }}</td>
      <td>
        <button type="button" class="ml-2 button is-small is-light" @click="changeState(task)"><span v-if="!task.completed">作業中</span><span v-else>完了</span></button>
        <button type="button" class="ml-2 button is-small is-light" @click="deleteTask(task)">削除</button></td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: 'TodoList',
  data () {
    return {
      tasks: this.$store.getters.tasks
    }
  },
  computed: {
    visibility () {
      return this.$store.getters.visibility
    },
    filteredTasks () {
      if (this.visibility === 'all') {
        return this.tasks
      } else if (this.visibility === 'working') {
        return this.tasks.filter((task) =>
          !task.completed
        )
      } else if (this.visibility === 'completed') {
        return this.tasks.filter((task) =>
          task.completed
        )
      }
      return this.tasks
    }
  },
  methods: {
    deleteTask (task) {
      this.$store.commit('deleteTask', task.id)
    },
    changeState (task) {
      this.$store.commit('changeState', {
        task,
        completed: !task.completed
      })
    }
  }
}
</script>
