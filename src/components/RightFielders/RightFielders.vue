<template>
  <div class="flex-container">
    <div v-for="rightFielder in rightFielders" :key="rightFielder.name">
      <right-fielder
        :name="rightFielder.name"
        :pic="rightFielder.pic"
      ></right-fielder>
    </div>
  </div>
</template>

<script>
import RightFielder from "./RightFielder";
// inefficient probably to import all right fielders images here
import bettsProPic from "../../assets/rightFielders/betts.jpeg";
import sotoProPic from "../../assets/rightFielders/soto.jpeg";
import acunaJrProPic from "../../assets/rightFielders/acunajr.jpeg";
import judgeProPic from "../../assets/rightFielders/judge.jpeg";
import harperProPic from "../../assets/rightFielders/harper.jpeg";
import confortoProPic from "../../assets/rightFielders/conforto.jpeg";
import blackmonProPic from "../../assets/rightFielders/blackmon.jpeg";

export default {
  name: "RightFielders",
  components: {
    RightFielder,
  },
  beforeCreate() {
    this.rightFielders = [
      { name: "betts", pic: bettsProPic },
      { name: "soto", pic: sotoProPic },
      { name: "acunaJr", pic: acunaJrProPic },
      { name: "judge", pic: judgeProPic },
      { name: "harper", pic: harperProPic },
      { name: "conforto", pic: confortoProPic },
      { name: "blackmon", pic: blackmonProPic },
    ];
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
}
</style>
