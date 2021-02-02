<template>
  <div id="app">
    <baseball-diamond></baseball-diamond>
    <shortstops></shortstops>
  </div>
</template>

<script>
import BaseballDiamond from "./components/BaseballDiamond";
import Shortstops from "./components/Shortstops";
export default {
  name: "App",
  components: {
    BaseballDiamond,
    Shortstops,
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
