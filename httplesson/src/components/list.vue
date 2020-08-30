<template>
  <div>
    <label>Name</label>
    <input type="text" v-model="item.key">
    <br>
    <button @click="addItem">add item</button>
    <ul>
      <li v-for="(value, name) in list" :key="name">
        {{value}}
      </li>
    </ul>
    <br>
    <button @click="del">Delete</button>
  </div>
</template>

<script>

export default {
  name: 'list',

  data() {
    return {
      list: {},
      item: {
        key: ''
      },
    }
  },

  methods: {
    addItem() {
      this.$http.post('https://vue-lesson3.firebaseio.com/list.json', this.item)
    },
    del() {
      this.$http.delete('https://vue-lesson3.firebaseio.com/list.json')
    }
  },

  beforeMount() {
    this.$http.get('https://vue-lesson3.firebaseio.com/list.json')
        .then(res => res.json())
        .then(res => Object.entries(res).forEach(([key, value]) => this.list[key] = value))
  }
}
</script>

<style>
label {
  margin: 10px;
}
button {
  margin-top: 10px;
}
</style>
