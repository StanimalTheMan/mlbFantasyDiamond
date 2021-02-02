<template>
  <img :src="pic" alt="tatisJr" @click="selectShortstop" />
</template>

<script>
export default {
  props: ["name", "pic"],
  methods: {
    selectShortstop() {
      console.log(this.pic);
      this.$store.dispatch("setShortstop", this.name);
    },
  },
};
</script>

<style scoped></style>
