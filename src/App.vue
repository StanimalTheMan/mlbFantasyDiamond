<template>
  <div id="app">
    <baseball-diamond></baseball-diamond>
    <shortstops></shortstops>
    <starting-pitchers></starting-pitchers>
    <third-basemen></third-basemen>
    <center-fielders></center-fielders>
    <right-fielders></right-fielders>
  </div>
</template>

<script>
import BaseballDiamond from "./components/BaseballDiamond";
import Shortstops from "./components/Shortstops/Shortstops";
import StartingPitchers from "./components/StartingPitchers/StartingPitchers";
import ThirdBasemen from "./components/ThirdBasemen/ThirdBasemen";
import CenterFielders from "./components/CenterFielders/CenterFielders";
import RightFielders from "./components/RightFielders/RightFielders";
export default {
  name: "App",
  components: {
    BaseballDiamond,
    Shortstops,
    StartingPitchers,
    ThirdBasemen,
    CenterFielders,
    RightFielders,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
