<template>
  <div id="app">
    <div class="container my-5">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h1 class="mb-3 title">Todoリスト</h1>
          <div class="control">
            <label class="radio">
              <input type="radio" name="status" checked value="all">
              全て
            </label>
            <label class="radio">
              <input type="radio" name="status" value="working">
              作業中
            </label>
            <label class="radio">
              <input type="radio" name="status" value="completed">
              完了
            </label>
          </div>

          <table class="table is-fullwidth">
            <thead>
              <tr>
                <th>ID</th>
                <th>コメント</th>
                <th>状態</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>b</td>
                <td><button type="button" class="ml-2 button is-small is-light">作業中</button><button type="button" class="ml-2 button is-small is-light">削除</button></td>
              </tr>
              <tr>
                <td>2</td>
                <td>b</td>
                <td><button type="button" class="ml-2 button is-small is-light">作業中</button><button type="button" class="ml-2 button is-small is-light">削除</button></td>
              </tr>
              <tr>
                <td>3</td>
                <td>b</td>
                <td><button type="button" class="ml-2 button is-small is-light">作業中</button><button type="button" class="ml-2 button is-small is-light">削除</button></td>
              </tr>
            </tbody>
          </table>
          <h2 class="title is-4">新規タスクの追加</h2>
          <div class="columns">
            <input type="text" class="input">
            <button type="button" class="ml-2 button is-dark">追加</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
@import '../node_modules/bulma/bulma.sass';
</style>
