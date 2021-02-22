<template>
  <div class="flex-container">
    <div v-for="shortstop in shortstops" :key="shortstop.name">
      <shortstop :name="shortstop.name" :pic="shortstop.pic"></shortstop>
    </div>
  </div>
</template>

<script>
import Shortstop from "./Shortstop";
// inefficient probably to import all shortstop images here
import tatisJrProPic from "../../assets/shortstops/tatisjr.jpeg";
import lindorProPic from "../../assets/shortstops/lindor.jpeg";
import storyProPic from "../../assets/shortstops/story.jpeg";
import bogaertsProPic from "../../assets/shortstops/bogaerts.jpeg";
import turnerProPic from "../../assets/shortstops/turner.jpeg";
import seagerProPic from "../../assets/shortstops/seager.jpeg";
import correaProPic from "../../assets/shortstops/correa.jpeg";
import bichetteProPic from "../../assets/shortstops/bichette.jpeg";
import baezProPic from "../../assets/shortstops/baez.jpeg";
import andersonProPic from "../../assets/shortstops/anderson.jpeg";
export default {
  name: "Shortstops",
  components: {
    Shortstop,
  },
  beforeCreate() {
    this.shortstops = [
      { name: "tatisjr", pic: tatisJrProPic },
      { name: "lindor", pic: lindorProPic },
      { name: "story", pic: storyProPic },
      { name: "bogaerts", pic: bogaertsProPic },
      { name: "turner", pic: turnerProPic },
      { name: "seager", pic: seagerProPic },
      { name: "correa", pic: correaProPic },
      { name: "bichette", pic: bichetteProPic },
      { name: "baez", pic: baezProPic },
      { name: "anderson", pic: andersonProPic },
    ];
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
}
</style>
