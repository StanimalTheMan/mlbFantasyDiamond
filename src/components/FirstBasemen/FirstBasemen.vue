<template>
  <div class="flex-container">
    <div v-for="firstBaseman in firstBasemen" :key="firstBaseman.name">
      <first-baseman
        :name="firstBaseman.name"
        :pic="firstBaseman.pic"
      ></first-baseman>
    </div>
  </div>
</template>

<script>
import FirstBaseman from "./FirstBaseman";
// inefficient probably to import all first basemen images here
import freemanProPic from "../../assets/firstBasemen/freeman.jpeg";
import goldschmidtProPic from "../../assets/firstBasemen/goldschmidt.jpeg";
import abreuProPic from "../../assets/firstBasemen/abreu.jpeg";
import voitProPic from "../../assets/firstBasemen/voit.jpeg";
import muncyProPic from "../../assets/firstBasemen/muncy.jpeg";
import alonsoProPic from "../../assets/firstBasemen/alonso.jpeg";
export default {
  name: "FirstBasemen",
  components: {
    FirstBaseman,
  },
  beforeCreate() {
    this.firstBasemen = [
      { name: "freeman", pic: freemanProPic },
      { name: "goldschmidt", pic: goldschmidtProPic },
      { name: "abreu", pic: abreuProPic },
      { name: "voit", pic: voitProPic },
      { name: "muncy", pic: muncyProPic },
      { name: "alonso", pic: alonsoProPic },
    ];
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
}
</style>
