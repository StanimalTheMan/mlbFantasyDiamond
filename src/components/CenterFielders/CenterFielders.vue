<template>
  <div class="flex-container">
    <div v-for="centerFielder in centerFielders" :key="centerFielder.name">
      <center-fielder
        :name="centerFielder.name"
        :pic="centerFielder.pic"
      ></center-fielder>
    </div>
  </div>
</template>

<script>
import CenterFielder from "./CenterFielder";
// inefficient probably to import all shortstop images here
import troutProPic from "../../assets/centerFielders/trout.jpeg";
import bellingerProPic from "../../assets/centerFielders/bellinger.jpeg";
import springerProPic from "../../assets/centerFielders/springer.jpeg";
export default {
  name: "CenterFielders",
  components: {
    CenterFielder,
  },
  beforeCreate() {
    this.centerFielders = [
      { name: "trout", pic: troutProPic },
      { name: "bellinger", pic: bellingerProPic },
      { name: "springer", pic: springerProPic },
    ];
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
}
</style>
