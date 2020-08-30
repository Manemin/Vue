<template>
  <div>
    <h1>My Project</h1>
    <br>
    <input type="text" v-model="text">
    <button @click="addItem">Add Item</button>
    <ul>
      <li v-for="(item, i) in list" :key="i">
        <input v-show="list.length > 0" type="radio" :value="i" v-model="selected">
        {{item}}
      </li>
    </ul>
    <button @click="remove">Delete</button>
  </div>

</template>

<script>

export default {
  name: 'MyProject',

  data() {
    return {
      list: [],
      text: '',
      selected: null

    }
  },
  methods: {
    addItem() {
      this.list.push(this.text);
      this.text = '';
    },
    remove() {
      this.list.splice(this.selected, 1)
    }
  }
}

</script>
<style scoped>

</style>