<template>
  <div class="flex-container">
    <div
      v-for="designatedHitter in designatedHitters"
      :key="designatedHitter.name"
    >
      <designated-hitter
        :name="designatedHitter.name"
        :pic="designatedHitter.pic"
      ></designated-hitter>
    </div>
  </div>
</template>

<script>
import DesignatedHitter from "./DesignatedHitter";
// inefficient probably to import all relief pitchers images here
import alvarezProPic from "../../assets/designatedHitters/alvarez.jpeg";
import martinezProPic from "../../assets/designatedHitters/martinez.jpeg";
import cruzProPic from "../../assets/designatedHitters/cruz.jpeg";
import stantonProPic from "../../assets/designatedHitters/stanton.jpeg";
import reyesProPic from "../../assets/designatedHitters/reyes.jpeg";
import ohtaniProPic from "../../assets/designatedHitters/ohtani.jpeg";
import meadowsProPic from "../../assets/designatedHitters/meadows.jpeg";
import solerProPic from "../../assets/designatedHitters/soler.jpeg";
export default {
  name: "DesignatedHitters",
  components: {
    DesignatedHitter,
  },
  beforeCreate() {
    this.designatedHitters = [
      { name: "alvarez", pic: alvarezProPic },
      { name: "martinez", pic: martinezProPic },
      { name: "cruz", pic: cruzProPic },
      { name: "stanton", pic: stantonProPic },
      { name: "reyes", pic: reyesProPic },
      { name: "ohtani", pic: ohtaniProPic },
      { name: "meadows", pic: meadowsProPic },
      { name: "soler", pic: solerProPic },
    ];
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
}
</style>
