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
    ];
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
}
</style>
