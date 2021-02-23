<template>
  <div id="app" class="container">
    <baseball-diamond></baseball-diamond>
    <div class="container2">
      <shortstops></shortstops>
      <starting-pitchers></starting-pitchers>
      <third-basemen></third-basemen>
      <center-fielders></center-fielders>
      <right-fielders></right-fielders>
      <second-basemen></second-basemen>
      <left-fielders></left-fielders>
      <first-basemen></first-basemen>
      <catchers></catchers>
      <relief-pitchers></relief-pitchers>
      <designated-hitters></designated-hitters>
    </div>
  </div>
</template>

<script>
import BaseballDiamond from "./components/BaseballDiamond";
import Shortstops from "./components/Shortstops/Shortstops";
import StartingPitchers from "./components/StartingPitchers/StartingPitchers";
import ThirdBasemen from "./components/ThirdBasemen/ThirdBasemen";
import CenterFielders from "./components/CenterFielders/CenterFielders";
import RightFielders from "./components/RightFielders/RightFielders";
import SecondBasemen from "./components/SecondBasemen/SecondBasemen";
import LeftFielders from "./components/LeftFielders/LeftFielders";
import FirstBasemen from "./components/FirstBasemen/FirstBasemen";
import Catchers from "./components/Catchers/Catchers";
import ReliefPitchers from "./components/ReliefPitchers/ReliefPitchers";
import DesignatedHitters from "./components/DesignatedHitters/DesignatedHitters";

export default {
  name: "App",
  components: {
    BaseballDiamond,
    Shortstops,
    StartingPitchers,
    ThirdBasemen,
    CenterFielders,
    RightFielders,
    SecondBasemen,
    LeftFielders,
    FirstBasemen,
    Catchers,
    ReliefPitchers,
    DesignatedHitters,
  },
};
</script>

<style>
body {
  background: linear-gradient(
    90deg,
    rgba(36, 35, 0, 1) 0%,
    rgba(121, 9, 12, 1) 0%,
    rgba(0, 53, 255, 1) 100%
  );
  height: 100vh;
  margin: 0;
  background-attachment: fixed;
}

.container,
.container2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
