<template>
  <div>
    <div>
      <label>Email  </label>
      <input type="email" v-model.lazy="email">
      <br>
      <label>Password  </label>
      <input type="password" v-model.lazy="pass">
      <br>
      <label>Male  </label>
      <input type="radio" name="gender" id="male" v-model="radio" value="male">
      <label>Female  </label>
      <input type="radio" name="gender" v-model="radio" value="female">
      <br>
    </div>
    <button @click="log">submit</button>
  </div>
</template>

<script>


export default {
  name: "Login",

  data() {
    return {
      email: '',
      pass: '',
      radio: ''
    }
  },

  methods: {
    log() {
      console.log(JSON.stringify(this.$data))
    },
  },
}
</script>

<style scoped>

</style>