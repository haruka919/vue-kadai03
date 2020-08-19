<template>
  <div class="columns">
    <input type="text" class="input">
    <button type="button" class="ml-2 button is-dark">追加</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
