<template>
  <div id="app">
    <div class="container my-5">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h1 class="mb-3 title">Todoリスト</h1>
          <TodoController />
          <table class="table is-fullwidth">
            <thead>
              <tr>
                <th>ID</th>
                <th>コメント</th>
                <th>状態</th>
              </tr>
            </thead>
            <TodoList />
          </table>
          <h2 class="title is-4">新規タスクの追加</h2>
          <TodoInput />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoController from './components/TodoController.vue'
export default {
  name: 'App',
  components: {
    TodoInput,
    TodoList,
    TodoController
  }
}
</script>

<style lang="scss">
@import '../node_modules/bulma/bulma.sass';
</style>
