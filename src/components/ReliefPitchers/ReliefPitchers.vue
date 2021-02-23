<template>
  <div class="flex-container">
    <div v-for="reliefPitcher in reliefPitchers" :key="reliefPitcher.name">
      <relief-pitcher
        :name="reliefPitcher.name"
        :pic="reliefPitcher.pic"
      ></relief-pitcher>
    </div>
  </div>
</template>

<script>
import ReliefPitcher from "./ReliefPitcher";
// inefficient probably to import all relief pitchers images here
import hendriksProPic from "../../assets/reliefPitchers/hendriks.jpeg";
import chapmanProPic from "../../assets/reliefPitchers/chapman.jpeg";
import diazProPic from "../../assets/reliefPitchers/diaz.jpeg";
import haderProPic from "../../assets/reliefPitchers/hader.jpeg";
import iglesiasProPic from "../../assets/reliefPitchers/iglesias.jpeg";
export default {
  name: "ReliefPitchers",
  components: {
    ReliefPitcher,
  },
  beforeCreate() {
    this.reliefPitchers = [
      { name: "hendriks", pic: hendriksProPic },
      { name: "chapman", pic: chapmanProPic },
      { name: "diaz", pic: diazProPic },
      { name: "hader", pic: haderProPic },
      { name: "iglesias", pic: iglesiasProPic },
    ];
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
}
</style>
