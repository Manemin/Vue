<template>
  <div>
    <input type="text">
    <button>add todo</button>
  </div>
</template>

<script>
export default {
  name: 'AddTodo',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
