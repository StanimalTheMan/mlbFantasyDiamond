<template>
  <img :src="pic" :alt="name" @click="selectStartingPitcher" width="100" />
</template>

<script>
export default {
  props: ["name", "pic"],
  methods: {
    selectStartingPitcher() {
      this.$store.dispatch("setStartingPitcher", this.name);
    },
  },
};
</script>
