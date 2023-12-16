<template>
  <div class="about">
    <h1>This is an about page</h1>
    <FirsAp :name="name" />
    <firs-Ap :name="name"></firs-Ap>
    <sec-com :name="name">
      <template #soltTitle>
        <h3>Solit Title</h3>
      </template>
    </sec-com>
  </div>
</template>

<script>
import FirsAp from "@/components/FirstCom.vue";
import SecCom from "@/components/SecComp.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  data() {
    return {
      name: "about",
    };
  },
  components: {
    FirsAp,
    SecCom,
  },
};
</script>
