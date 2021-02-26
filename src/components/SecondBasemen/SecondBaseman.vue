<template>
  <img :src="pic" :alt="name" @click="selectSecondBaseman" width="100" />
</template>

<script>
export default {
  props: ["name", "pic"],
  methods: {
    selectSecondBaseman() {
      this.$store.dispatch("setSecondBaseman", this.name);
    },
  },
};
</script>

<style scoped>
img:hover {
  cursor: pointer;
}
</style>
