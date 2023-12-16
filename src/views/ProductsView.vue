<!-- eslint-disable  -->
<template>
  <h1>Hello from Products components</h1>
  <button @click="$even=>$router.push('/')">Go to Home</button>
  <nav>
  <!-- <li  v-for="route in routes" :key="route.name">
    <router-link v-if="route.name=='profile'" :to="{name:route.name,params:{id:150}}">{{route.meta.title}} | </router-link>
    <router-link  v-else :to="{name:route.name}">{{route.meta.title}} | </router-link>

  </li> -->

    </nav>

    <form @submit.prevent >
      <div>
      <label for="">Produc Name </label>
      <input type="text" v-model="product.name">
      </div>
      <div>
      <label for="">Produc Price </label>
      <input type="text" v-model="product.price">
      </div>
      <button @click="addProduct()"> Add Product</button>
    </form>

    <div v-for="(pro , i ) in products" :key="i">
      <h3>Prouct Name : {{ pro.name }} Prouct Price : {{pro.price  }}</h3>
    </div>
</template>
<!-- eslint-disable  -->
<style scoped>
nav{
    display: flex;
    justify-content: space-between;
    list-style: none;
}
</style>
<!-- eslint-disable  -->
<script>
export default {
  data() {
    return {
      name: "hellos",
      routes:[],
      product:{
        name:"",
        price:0
      },
      products:[]
    };
  },
  methods: {
    addProduct(){
      this.products.push(this.product);
      this.product={
        name:"",
        price:0
      }
    }
  },
  mounted() {
    console.log(this.$router);
    this.routes=this.$router.options.routes
  },
};
</script>
