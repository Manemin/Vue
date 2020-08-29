<template>
  <div>
    <span>{{el}}  </span>
    <button @click="delItem">del</button>
  </div>
</template>

<script>

export default {
  name: "todoItem",
  props: {
    el: {
      type: String
    },
    i: {
      type: Number
    }
  },
  methods: {
    delItem() {
      this.$emit('remove', this.i)
    }
  }
}
</script>

<style scoped>

</style>