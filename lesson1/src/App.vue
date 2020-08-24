<template>
    <div>
        <!-- <input type="text" v-model="text" @keyup.enter="add()" /> -->
        <input type="text" v-model="text" />
        <button @click="add()" v-show="todo.length < 10">add new</button>
        <ul>
            <li v-for="(el, i) in todo" :key="`${el}- ${i}`">
                {{el}}
                <button @click="del(i)">del</button>
            </li>
        </ul>
        <div v-show="todo.length > 0">{{todo}}</div>
    </div>
</template>
<script>
export default {
    name: "App",
    data() {
        return {
            todo: [],
            text: "",
        };
    },
    methods: {
        add() {
            this.todo.push(this.text);
            console.log(this.todo);
        },
        del(i) {
            this.todo.splice(i, 1);
            console.log(this.todo);
        },
    },
};
</script>

<style>
</style>
