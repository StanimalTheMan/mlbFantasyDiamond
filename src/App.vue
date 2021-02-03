<template>
  <div id="app">
    <baseball-diamond></baseball-diamond>
    <shortstops></shortstops>
    <starting-pitchers></starting-pitchers>
  </div>
</template>

<script>
import BaseballDiamond from "./components/BaseballDiamond";
import Shortstops from "./components/Shortstops";
import StartingPitchers from "./components/StartingPitchers";
export default {
  name: "App",
  components: {
    BaseballDiamond,
    Shortstops,
    StartingPitchers,
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
