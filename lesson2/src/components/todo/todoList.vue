<template>
  <div>
    <ul>
      <li v-for="(el, i) in list" :key="i">
        <todoItem :el="el" :i=i @remove="delFromList($event)" />
      </li>
    </ul>
  </div>
</template>

<script>

import todoItem from "@/components/todo/todoItem";

export default {
  name: "todoList",
  components: {
    todoItem
  },
  props: {
    list: {
      type: Array
    }
  },
  data() {
    return {
    }
  },
  methods: {
    delFromList(i) {
      this.$emit('delItem', i)
    }
  }
}
</script>

<style scoped>

</style>