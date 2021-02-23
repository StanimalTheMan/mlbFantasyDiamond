<template>
  <img :src="pic" :alt="name" @click="selectReliefPitcher" width="100" />
</template>

<script>
export default {
  props: ["name", "pic"],
  methods: {
    selectReliefPitcher() {
      this.$store.dispatch("setReliefPitcher", this.name);
    },
  },
};
</script>

<style scoped></style>
