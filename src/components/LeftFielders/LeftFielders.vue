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
// inefficient probably to import all shortstop images here
import yelichProPic from "../../assets/leftFielders/yelich.jpeg";
import brantleyProPic from "../../assets/leftFielders/brantley.jpeg";
import ozunaProPic from "../../assets/leftFielders/ozuna.jpeg";
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
    ];
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
}
</style>
