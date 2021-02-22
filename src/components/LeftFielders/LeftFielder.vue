<template>
  <img :src="pic" :alt="name" @click="selectLeftFielder" width="100" />
</template>

<script>
export default {
  props: ["name", "pic"],
  methods: {
    selectLeftFielder() {
      this.$store.dispatch("setLeftFielder", this.name);
    },
  },
};
</script>

<style scoped></style>
