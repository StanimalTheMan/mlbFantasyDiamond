<template>
  <img :src="pic" :alt="name" @click="selectRightFielder" width="100" />
</template>

<script>
export default {
  props: ["name", "pic"],
  methods: {
    selectRightFielder() {
      this.$store.dispatch("setRightFielder", this.name);
    },
  },
};
</script>

<style scoped>
img:hover {
  cursor: pointer;
}
</style>
