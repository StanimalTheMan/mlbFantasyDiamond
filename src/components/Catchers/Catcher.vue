<template>
  <img :src="pic" :alt="name" @click="selectCatcher" width="100" />
</template>

<script>
export default {
  props: ["name", "pic"],
  methods: {
    selectCatcher() {
      this.$store.dispatch("setCatcher", this.name);
    },
  },
};
</script>

<style scoped>
img:hover {
  cursor: pointer;
}
</style>
