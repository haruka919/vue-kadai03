<template>
  <tbody>
    <tr v-for="task in tasks" :key="task.id">
      <td>{{ task.id }}</td>
      <td>{{ task.comment }}</td>
      <td>
        <button type="button" class="ml-2 button is-small is-light"><span v-if="!task.completed">作業中</span><span v-else>完了</span></button>
        <button type="button" class="ml-2 button is-small is-light">削除</button></td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: 'TodoList',
  computed: {
    tasks () {
      return this.$store.getters.tasks
    }
  }
}
</script>
