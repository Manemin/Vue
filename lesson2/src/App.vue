<template>
  <div>
    <addTodo/>
    <todoList :list="list"/>
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
      list: ['11', '22', '33']
    }
  }
}
</script>

<style>
</style>
