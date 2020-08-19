<template>
  <div class="columns">
    <input type="text" class="input" v-model="comment">
    <button type="button" class="ml-2 button is-dark" @click="addTask">追加</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      comment: ''
    }
  },
  methods: {
    addTask () {
      this.$emit('add-task', this.comment)
      this.comment = ''
    }
  }
}
</script>
