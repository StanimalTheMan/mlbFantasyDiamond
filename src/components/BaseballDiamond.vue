<template>
  <div>
    <img
      alt="Fantasy Field"
      src="../assets/BaseballDiamond.png"
      @click="getMouseCoordinates"
    />
    <!-- <img v-if="shortstop" :src="shortstopPic" /> -->
    <p class="shortstop">{{ shortstop }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BaseballDiamond",
  methods: {
    getMouseCoordinates(event) {
      console.log(event.clientX);
      console.log(event.clientY);
    },
  },
  computed: {
    ...mapGetters(["fantasyTeam", "shortstop"]),
    // shortstopPic() {
    //   return `../assets/shortstops/${this.shortstop}.jpeg`;
    // },
  },
};
</script>

<style scoped>
.shortstop {
  position: absolute;
  left: 260px;
  top: 260px;
}
</style>
