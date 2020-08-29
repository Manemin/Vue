<template>
  <div>
    <span>{{el}}   </span>
    <button @click="del">del</button>
  </div>
</template>

<script>

export default {
  name: "todoItem",
  props: {
    el: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>