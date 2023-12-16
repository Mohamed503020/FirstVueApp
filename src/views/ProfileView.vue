<!-- eslint-disable  -->

<template>
    <div>
        <h1>Hello from Profile</h1>
        <h2>{{ $route.params.id }}</h2>
    </div>
</template>
<!-- eslint-disable  -->
<script>
export default {
    mounted() {
        console.log(this.$route);
    },
}
</script>