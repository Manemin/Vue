<template>
  <div id="list">
    <label>Item:</label>
    <input type="text" v-model="item.key">
    <br>
    <button @click="addItem">add item</button>
    <ul>
      <li v-for="(value, name) in list" :key="name">
        <input
            type="radio"
            name="select"
            :value=name
            v-model="radio"
        >
        {{ value }}
        <!--        <button @click="del(name)">Delete</button>-->
      </li>
    </ul>
    <button v-if="this.list.key !== 'List is Empty'" @click="del">Delete</button>
  </div>
</template>

<script>

export default {
  name: 'App',

  data() {
    return {
      list: {},
      radio: '',
      item: {
        key: ''
      },
      count: 0
    }
  },

  methods: {
    addItem() {
      this.$http.post('https://vue-lesson3.firebaseio.com/list.json', this.item)
          .then(() => console.log('Add Item'))
      // .catch((res) => console.error('Something Wrong', res))
    },
    del() {
      if (this.list.key === 'List is Empty') {
        this.list = {};
      } else {
        this.$http.delete(`https://vue-lesson3.firebaseio.com/list/${this.radio}.json`)
            .then(() => console.log('Remove Item'));
        this.radio = '';
      }
    },
  },

  beforeMount() {
    this.$http.get('https://vue-lesson3.firebaseio.com/list.json')
        .then(res => res.json())
        .then(res => Object.entries(res).forEach(([key, value]) => this.$set(this.list, key, value)))
        .catch(() => this.$set(this.list, 'key', 'List is Empty'))
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

ul {
  margin: 10px;
}

</style>
