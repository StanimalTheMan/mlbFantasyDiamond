<template>
  <div style="position: relative;">
    <img
      alt="Fantasy Field"
      src="../assets/BaseballDiamond.png"
      @click="getMouseCoordinates"
    />
    <!-- <img v-if="shortstop" :src="shortstopPic" /> -->
    <p class="shortstop">{{ shortstop }}</p>
    <p class="startingPitcher">{{ startingPitcher }}</p>
    <p class="thirdBaseman">{{ thirdBaseman }}</p>
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
    ...mapGetters([
      "fantasyTeam",
      "shortstop",
      "thirdBaseman",
      "startingPitcher",
    ]),
    // shortstopPic() {
    //   return `../assets/shortstops/${this.shortstop}.jpeg`;
    // },
  },
};
</script>

<style scoped>
.shortstop {
  position: absolute;
  left: 40%;
  top: 40%;
}
.thirdBaseman {
  position: absolute;
  left: 3%;
  top: 40%;
}
.startingPitcher {
  position: absolute;
  left: 50%;
  top: 50%;
}
</style>
