<template>
  <div class="flex-container">
    <div v-for="leftFielder in leftFielders" :key="leftFielder.name">
      <left-fielder
        :name="leftFielder.name"
        :pic="leftFielder.pic"
      ></left-fielder>
    </div>
  </div>
</template>

<script>
import LeftFielder from "./LeftFielder";
// inefficient probably to import all left fielders images here
import yelichProPic from "../../assets/leftFielders/yelich.jpeg";
import brantleyProPic from "../../assets/leftFielders/brantley.jpeg";
import ozunaProPic from "../../assets/leftFielders/ozuna.jpeg";
import smithProPic from "../../assets/leftFielders/smith.jpeg";
import jimenezProPic from "../../assets/leftFielders/jimenez.jpeg";
export default {
  name: "LeftFielders",
  components: {
    LeftFielder,
  },
  beforeCreate() {
    this.leftFielders = [
      { name: "yelich", pic: yelichProPic },
      { name: "brantley", pic: brantleyProPic },
      { name: "ozuna", pic: ozunaProPic },
      { name: "smith", pic: smithProPic },
      { name: "jimenez", pic: jimenezProPic },
    ];
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
}
</style>
