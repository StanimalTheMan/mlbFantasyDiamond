<template>
  <img :src="pic" :alt="name" @click="selectThirdBaseman" width="100" />
</template>

<script>
export default {
  props: ["name", "pic"],
  methods: {
    selectThirdBaseman() {
      this.$store.dispatch("setThirdBaseman", this.name);
    },
  },
};
</script>

<style scoped>
img:hover {
  cursor: pointer;
}
</style>
