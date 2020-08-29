<template>
  <div>
    <input type="text" v-model="text">
    <button @click="add()">add todo</button>
  </div>
</template>

<script>
export default {
  name: 'addTodo',
  data() {
    return {
      text: ''
    }
  },
  methods: {
    add() {
      this.$emit('addItem', this.text);
      this.text = '';
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
