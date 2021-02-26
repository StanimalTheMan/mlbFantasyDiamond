<template>
  <img :src="pic" :alt="name" @click="selectDesignatedHitter" width="100" />
</template>

<script>
export default {
  props: ["name", "pic"],
  methods: {
    selectDesignatedHitter() {
      this.$store.dispatch("setDesignatedHitter", this.name);
    },
  },
};
</script>

<style scoped>
img:hover {
  cursor: pointer;
}
</style>
