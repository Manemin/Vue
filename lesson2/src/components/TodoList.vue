<template>
<div>
  <ul>
    <li v-for="(el, i) in list" :key="i">
      {{el}}
      <buton @click="del(i)">del</buton>
    </li>
  </ul>
</div>
</template>

<script>
export default {
name: "TodoList"

}
</script>

<style scoped>

</style>