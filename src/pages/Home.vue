<template>
  <div>
    <CollapsContainerVue />
  </div>
</template>

<script>
import CollapsContainerVue from "../components/CollapsContainer.vue";
export default {
  data() {
    return {
      collapse: 0,
    };
  },
  components: {
    CollapsContainerVue,
  },

  mounted() {},
};
</script>

<style scoped>
</style>