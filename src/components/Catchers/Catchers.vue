<template>
  <div class="flex-container">
    <div v-for="catcher in catchers" :key="catcher.name">
      <catcher :name="catcher.name" :pic="catcher.pic"></catcher>
    </div>
  </div>
</template>

<script>
import Catcher from "./Catcher";
// inefficient probably to import all catchers images here
import realmutoProPic from "../../assets/catchers/realmuto.jpeg";
import grandalProPic from "../../assets/catchers/grandal.jpeg";
import smithProPic from "../../assets/catchers/smith.jpeg";
import contrerasProPic from "../../assets/catchers/contreras.jpeg";
import perezProPic from "../../assets/catchers/perez.jpeg";
export default {
  name: "Catchers",
  components: {
    Catcher,
  },
  beforeCreate() {
    this.catchers = [
      { name: "realmuto", pic: realmutoProPic },
      { name: "grandal", pic: grandalProPic },
      { name: "smith", pic: smithProPic },
      { name: "contreras", pic: contrerasProPic },
      { name: "perez", pic: perezProPic },
    ];
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
}
</style>
