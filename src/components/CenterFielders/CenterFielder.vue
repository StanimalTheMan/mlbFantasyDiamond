<template>
  <img :src="pic" :alt="name" @click="selectCenterFielder" width="100" />
</template>

<script>
export default {
  props: ["name", "pic"],
  methods: {
    selectCenterFielder() {
      this.$store.dispatch("setCenterFielder", this.name);
    },
  },
};
</script>

<style scoped>
img:hover {
  cursor: pointer;
}
</style>
