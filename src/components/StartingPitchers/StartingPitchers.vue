<template>
  <div class="flex-container">
    <div
      v-for="startingPitcher in startingPitchers"
      :key="startingPitcher.name"
    >
      <starting-pitcher
        :name="startingPitcher.name"
        :pic="startingPitcher.pic"
      ></starting-pitcher>
    </div>
  </div>
</template>

<script>
import StartingPitcher from "./StartingPitcher";
// inefficient probably to import all starting pitcher images here
import degromProPic from "../../assets/startingPitchers/degrom.jpeg";
import coleProPic from "../../assets/startingPitchers/cole.jpeg";
import bieberProPic from "../../assets/startingPitchers/bieber.jpeg";
import bauerProPic from "../../assets/startingPitchers/bauer.jpeg";
import darvishProPic from "../../assets/startingPitchers/darvish.jpeg";
import buehlerProPic from "../../assets/startingPitchers/buehler.jpeg";
import giolitoProPic from "../../assets/startingPitchers/giolito.jpeg";
import nolaProPic from "../../assets/startingPitchers/nola.jpeg";
import scherzerProPic from "../../assets/startingPitchers/scherzer.jpeg";
import kershawProPic from "../../assets/startingPitchers/kershaw.jpeg";
import snellProPic from "../../assets/startingPitchers/snell.jpeg";
import flahertyProPic from "../../assets/startingPitchers/flaherty.jpeg";
import castilloProPic from "../../assets/startingPitchers/castillo.jpeg";
import ryuProPic from "../../assets/startingPitchers/ryu.jpeg";
export default {
  name: "StartingPitchers",
  components: {
    StartingPitcher,
  },
  beforeCreate() {
    this.startingPitchers = [
      { name: "degrom", pic: degromProPic },
      { name: "cole", pic: coleProPic },
      { name: "bieber", pic: bieberProPic },
      { name: "bauer", pic: bauerProPic },
      { name: "darvish", pic: darvishProPic },
      { name: "buehler", pic: buehlerProPic },
      { name: "giolito", pic: giolitoProPic },
      { name: "nola", pic: nolaProPic },
      { name: "scherzer", pic: scherzerProPic },
      { name: "kershaw", pic: kershawProPic },
      { name: "snell", pic: snellProPic },
      { name: "flaherty", pic: flahertyProPic },
      { name: "castillo", pic: castilloProPic },
      { name: "ryu", pic: ryuProPic },
    ];
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
}
</style>
