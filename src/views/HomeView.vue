<template>
  <div class="home">
    <h1 v-changeCholor="'blue'">hhhhhhhhhhhhhhhhhhhhhhh</h1>
    <div v-for="user in users" :key="user.id">
      <h1>{{ user.name }}</h1>
      <h2>{{ user.email }}</h2>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import stMixin from "@/mixins/stMixin";
export default {
  name: "HomeView",
  data() {
    return {};
  },
  mixins: [stMixin],
};
</script>
