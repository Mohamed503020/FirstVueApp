<!-- eslint-disable -->
<template>
  <h1>{{ name }}</h1>
  <p>nnnnnnnnnnnnn</p>
  <slot name="soltTitle"></slot>
</template>
<!-- eslint-disable -->
<script>
export default {
    data() {
        return {
            
        } },
    props:{
        name:{
            type:String
        }
    }
    ,
}
</script>