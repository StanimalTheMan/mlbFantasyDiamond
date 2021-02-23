<template>
  <div class="flex-container">
    <div v-for="secondBaseman in secondBasemen" :key="secondBaseman.name">
      <second-baseman
        :name="secondBaseman.name"
        :pic="secondBaseman.pic"
      ></second-baseman>
    </div>
  </div>
</template>

<script>
import SecondBaseman from "./SecondBaseman";
// inefficient probably to import all second basemen images here
import lemahieuProPic from "../../assets/secondBasemen/lemahieu.jpeg";
import mcneilProPic from "../../assets/secondBasemen/mcneil.jpeg";
import marteProPic from "../../assets/secondBasemen/marte.jpeg";
import loweProPic from "../../assets/secondBasemen/lowe.jpeg";
import biggioProPic from "../../assets/secondBasemen/biggio.jpeg";
import altuveProPic from "../../assets/secondBasemen/altuve.jpeg";
import albiesProPic from "../../assets/secondBasemen/albies.jpeg";
export default {
  name: "SecondBasemen",
  components: {
    SecondBaseman,
  },
  beforeCreate() {
    this.secondBasemen = [
      { name: "lemahieu", pic: lemahieuProPic },
      { name: "mcneil", pic: mcneilProPic },
      { name: "marte", pic: marteProPic },
      { name: "lowe", pic: loweProPic },
      { name: "biggio", pic: biggioProPic },
      { name: "altuve", pic: altuveProPic },
      { name: "albies", pic: albiesProPic },
    ];
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
}
</style>
