<template>
  <img :src="pic" :alt="name" @click="selectShortstop" width="100" />
</template>

<script>
export default {
  props: ["name", "pic"],
  methods: {
    selectShortstop() {
      this.$store.dispatch("setShortstop", this.name);
    },
  },
};
</script>

<style scoped>
img:hover {
  cursor: pointer;
}
</style>
