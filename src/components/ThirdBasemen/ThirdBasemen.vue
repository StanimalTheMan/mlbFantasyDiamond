<template>
  <div class="flex-container">
    <div v-for="thirdBaseman in thirdBasemen" :key="thirdBaseman.name">
      <third-baseman
        :name="thirdBaseman.name"
        :pic="thirdBaseman.pic"
      ></third-baseman>
    </div>
  </div>
</template>

<script>
import ThirdBaseman from "./ThirdBaseman";
// inefficient probably to import all third basemen images here
import rendonProPic from "../../assets/thirdBasemen/rendon.jpeg";
import bregmanProPic from "../../assets/thirdBasemen/bregman.jpeg";
import arenadoProPic from "../../assets/thirdBasemen/arenado.jpeg";
import ramirezProPic from "../../assets/thirdBasemen/ramirez.jpeg";
import machadoProPic from "../../assets/thirdBasemen/machado.jpeg";
import jTurnerProPic from "../../assets/thirdBasemen/turner.jpeg";
import chapmanProPic from "../../assets/thirdBasemen/chapman.jpeg";
import bryantProPic from "../../assets/thirdBasemen/bryant.jpeg";
export default {
  name: "Shortstops",
  components: {
    ThirdBaseman,
  },
  beforeCreate() {
    this.thirdBasemen = [
      { name: "rendon", pic: rendonProPic },
      { name: "bregman", pic: bregmanProPic },
      { name: "arenado", pic: arenadoProPic },
      { name: "ramirez", pic: ramirezProPic },
      { name: "machado", pic: machadoProPic },
      { name: "turner", pic: jTurnerProPic },
      { name: "chapman", pic: chapmanProPic },
      { name: "bryant", pic: bryantProPic },
    ];
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
}
</style>
