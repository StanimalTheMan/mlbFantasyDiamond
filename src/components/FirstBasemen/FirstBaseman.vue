<template>
  <img :src="pic" :alt="name" @click="selectFirstBaseman" width="100" />
</template>

<script>
export default {
  props: ["name", "pic"],
  methods: {
    selectFirstBaseman() {
      this.$store.dispatch("setFirstBaseman", this.name);
    },
  },
};
</script>

<style scoped>
img:hover {
  cursor: pointer;
}
</style>
