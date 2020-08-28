<template>
  <div class="control">
    <label class="radio">
      <input type="radio" name="visibility" v-model="visibility" value="all">
      全て
    </label>
    <label class="radio">
      <input type="radio" name="visibility" v-model="visibility" value="working">
      作業中
    </label>
    <label class="radio">
      <input type="radio" name="visibility" v-model="visibility" value="completed">
      完了
    </label>
  </div>
</template>

<script>
export default {
  name: 'TodoController',
  computed: {
    visibility () {
      return this.$store.getters.visibility
    }
  }
}
</script>
