<template>
  <div class="container">
    <img
      alt="Fantasy Field"
      src="../assets/BaseballDiamond.png"
      @click="getMouseCoordinates"
    />
    <img
      v-if="shortstopProPic"
      :src="shortstopProPic"
      alt="selectedShortstopPicture"
      class="shortstop"
      width="50"
    />
    <img
      v-if="startingPitcherProPic"
      :src="startingPitcherProPic"
      alt="selectedStartingPitcherPicture"
      class="startingPitcher"
      width="50"
    />
    <img
      v-if="thirdBasemanProPic"
      :src="thirdBasemanProPic"
      alt="selectedThirdBasemanPicture"
      class="thirdBaseman"
      width="50"
    />
    <img
      v-if="centerFielderProPic"
      :src="centerFielderProPic"
      alt="selectedCenterFielderPicture"
      class="centerFielder"
      width="50"
    />
    <img
      v-if="rightFielderProPic"
      :src="rightFielderProPic"
      alt="selectedRightFielderPicture"
      class="rightFielder"
      width="50"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

// probably inefficient getting player images again here

// shortstop images
import tatisjrProPic from "../assets/shortstops/tatisjr.jpeg";
import lindorProPic from "../assets/shortstops/lindor.jpeg";

// pitcher images
import degromProPic from "../assets/startingPitchers/degrom.jpeg";
import coleProPic from "../assets/startingPitchers/cole.jpeg";

// third basemen images
import rendonProPic from "../assets/thirdBasemen/rendon.jpeg";
import bregmanProPic from "../assets/thirdBasemen/bregman.jpeg";

// center fielder images
import troutProPic from "../assets/centerFielders/trout.jpeg";
import bellingerProPic from "../assets/centerFielders/bellinger.jpeg";
import springerProPic from "../assets/centerFielders/springer.jpeg";

// right fielder images
import bettsProPic from "../assets/rightFielders/betts.jpeg";
import sotoProPic from "../assets/rightFielders/soto.jpeg";
import acunaJrProPic from "../assets/rightFielders/acunajr.jpeg";

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
      "centerFielder",
      "rightFielder",
    ]),
    shortstopProPic() {
      return this.shortstops[this.shortstop];
    },
    startingPitcherProPic() {
      return this.startingPitchers[this.startingPitcher];
    },
    thirdBasemanProPic() {
      return this.thirdBasemen[this.thirdBaseman];
    },
    centerFielderProPic() {
      return this.centerFielders[this.centerFielder];
    },
    rightFielderProPic() {
      return this.rightFielders[this.rightFielder];
    },
  },
  beforeCreate() {
    this.shortstops = {
      tatisjr: tatisjrProPic,
      lindor: lindorProPic,
    };
    this.startingPitchers = {
      degrom: degromProPic,
      cole: coleProPic,
    };
    this.thirdBasemen = {
      rendon: rendonProPic,
      bregman: bregmanProPic,
    };
    this.centerFielders = {
      trout: troutProPic,
      bellinger: bellingerProPic,
      springer: springerProPic,
    };
    this.rightFielders = {
      betts: bettsProPic,
      soto: sotoProPic,
      acunaJr: acunaJrProPic,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
.shortstop {
  position: absolute;
  left: 45vw;
  top: 25vh;
  justify-content: center;
}
.startingPitcher {
  position: absolute;
  left: 48vw;
  top: 38vh;
  justify-content: center;
}
.thirdBaseman {
  position: absolute;
  left: 40vw;
  top: 30vh;
  justify-content: center;
}
.centerFielder {
  position: absolute;
  left: 48vw;
  top: 10vh;
  justify-content: center;
}
.rightFielder {
  position: absolute;
  left: 60vw;
  top: 10vh;
  justify-content: center;
}
</style>
