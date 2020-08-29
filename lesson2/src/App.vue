<template>
  <div>
    <addTodo @addItem="addItem($event)" />
    <todoList :list="list" @delItem="delItem($event)"/>
    <hr>
    <Login/>
  </div>
</template>

<script>

import addTodo from "@/components/addTodo";
import todoList from "@/components/todo/todoList";
import Login from "@/components/email/Login";

export default {
  name: 'App',
  components: {
    addTodo,
    todoList,
    Login
  },
  data() {
    return {
      list: []
    }
  },
  methods: {
    delItem(index) {
      this.list.splice(index, 1);
    },
    addItem(item) {
      this.list.push(item);
    },
  }
}
</script>

<style>
</style>
