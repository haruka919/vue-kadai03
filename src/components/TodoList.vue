<template>
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
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    msg: String
  }
}
</script>
