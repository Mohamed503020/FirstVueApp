<!-- eslint-disable -->
<template>
  <h1>hello</h1>
  <ul>
    <li v-for="name in names">{{ name }}</li>
  </ul>
  <h1>{{ age }}</h1>
  <button @click="updateAge()">increase age </button>
</template>
<!-- eslint-disable -->
<script>
export default {
  data() {
    return {
      names: ["hello", "name", "ahmed"],
      age:22
    }

  },
    methods:{
updateAge(){
this.age++
  },
},
  beforeCreate(){
console.log("before created");
  },
  created(){
console.log("created");
  },
  beforeMount() {
    console.log("before Mounted");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beffore update");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("before unmounted");
  },
  unmounted() {
    console.log("unmounted");
  }
}
</script>
