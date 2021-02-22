<template>
  <div>
    <h1>MLB Fantasy Diamond</h1>
    <img
      alt="Fantasy Field"
      src="../assets/BaseballDiamond.png"
      @click="getMouseCoordinates"
    />
    <img
      v-if="shortstopProPic"
      :src="shortstopProPic"
      alt="selectedShortstopPicture"
      class="shortstop"
      width="50"
    />
    <img
      v-if="startingPitcherProPic"
      :src="startingPitcherProPic"
      alt="selectedStartingPitcherPicture"
      class="startingPitcher"
      width="50"
    />
    <img
      v-if="thirdBasemanProPic"
      :src="thirdBasemanProPic"
      alt="selectedThirdBasemanPicture"
      class="thirdBaseman"
      width="50"
    />
    <img
      v-if="centerFielderProPic"
      :src="centerFielderProPic"
      alt="selectedCenterFielderPicture"
      class="centerFielder"
      width="50"
    />
    <img
      v-if="rightFielderProPic"
      :src="rightFielderProPic"
      alt="selectedRightFielderPicture"
      class="rightFielder"
      width="50"
    />
    <img
      v-if="secondBasemanProPic"
      :src="secondBasemanProPic"
      alt="selectedSecondBasemanPicture"
      class="secondBaseman"
      width="50"
    />
    <img
      v-if="leftFielderProPic"
      :src="leftFielderProPic"
      alt="selectedLeftFielderPicture"
      class="leftFielder"
      width="50"
    />
    <img
      v-if="firstBasemanProPic"
      :src="firstBasemanProPic"
      alt="selectedFirstBasemanPicture"
      class="firstBaseman"
      width="50"
    />
    <img
      v-if="catcherProPic"
      :src="catcherProPic"
      alt="selectedCatcherPicture"
      class="catcher"
      width="50"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

// probably inefficient getting player images again here

// shortstop images
import tatisjrProPic from "../assets/shortstops/tatisjr.jpeg";
import lindorProPic from "../assets/shortstops/lindor.jpeg";

// pitcher images
import degromProPic from "../assets/startingPitchers/degrom.jpeg";
import coleProPic from "../assets/startingPitchers/cole.jpeg";

// third basemen images
import rendonProPic from "../assets/thirdBasemen/rendon.jpeg";
import bregmanProPic from "../assets/thirdBasemen/bregman.jpeg";

// center fielder images
import troutProPic from "../assets/centerFielders/trout.jpeg";
import bellingerProPic from "../assets/centerFielders/bellinger.jpeg";
import springerProPic from "../assets/centerFielders/springer.jpeg";

// right fielder images
import bettsProPic from "../assets/rightFielders/betts.jpeg";
import sotoProPic from "../assets/rightFielders/soto.jpeg";
import acunaJrProPic from "../assets/rightFielders/acunajr.jpeg";

// second basemen images
import lemahieuProPic from "../assets/secondBasemen/lemahieu.jpeg";
import mcneilProPic from "../assets/secondBasemen/mcneil.jpeg";
import marteProPic from "../assets/secondBasemen/marte.jpeg";

// left fielder images
import yelichProPic from "../assets/leftFielders/yelich.jpeg";
import brantleyProPic from "../assets/leftFielders/brantley.jpeg";
import ozunaProPic from "../assets/leftFielders/ozuna.jpeg";

// first basemen images
import freemanProPic from "../assets/firstBasemen/freeman.jpeg";
import goldschmidtProPic from "../assets/firstBasemen/goldschmidt.jpeg";
import abreuProPic from "../assets/firstBasemen/abreu.jpeg";
import voitProPic from "../assets/firstBasemen/voit.jpeg";
import muncyProPic from "../assets/firstBasemen/muncy.jpeg";

// catchers images
import realmutoProPic from "../assets/catchers/realmuto.jpeg";
import grandalProPic from "../assets/catchers/grandal.jpeg";
import smithProPic from "../assets/catchers/smith.jpeg";
import contrerasProPic from "../assets/catchers/contreras.jpeg";
import perezProPic from "../assets/catchers/perez.jpeg";

export default {
  name: "BaseballDiamond",
  methods: {
    getMouseCoordinates(event) {
      console.log(event.clientX);
      console.log(event.clientY);
    },
  },
  computed: {
    ...mapGetters([
      "fantasyTeam",
      "shortstop",
      "thirdBaseman",
      "startingPitcher",
      "centerFielder",
      "rightFielder",
      "secondBaseman",
      "leftFielder",
      "firstBaseman",
      "catcher",
    ]),
    shortstopProPic() {
      return this.shortstops[this.shortstop];
    },
    startingPitcherProPic() {
      return this.startingPitchers[this.startingPitcher];
    },
    thirdBasemanProPic() {
      return this.thirdBasemen[this.thirdBaseman];
    },
    centerFielderProPic() {
      return this.centerFielders[this.centerFielder];
    },
    rightFielderProPic() {
      return this.rightFielders[this.rightFielder];
    },
    secondBasemanProPic() {
      return this.secondBasemen[this.secondBaseman];
    },
    leftFielderProPic() {
      return this.leftFielders[this.leftFielder];
    },
    firstBasemanProPic() {
      return this.firstBasemen[this.firstBaseman];
    },
    catcherProPic() {
      return this.catchers[this.catcher];
    },
  },
  beforeCreate() {
    this.shortstops = {
      tatisjr: tatisjrProPic,
      lindor: lindorProPic,
    };
    this.startingPitchers = {
      degrom: degromProPic,
      cole: coleProPic,
    };
    this.thirdBasemen = {
      rendon: rendonProPic,
      bregman: bregmanProPic,
    };
    this.centerFielders = {
      trout: troutProPic,
      bellinger: bellingerProPic,
      springer: springerProPic,
    };
    this.rightFielders = {
      betts: bettsProPic,
      soto: sotoProPic,
      acunaJr: acunaJrProPic,
    };
    this.secondBasemen = {
      lemahieu: lemahieuProPic,
      mcneil: mcneilProPic,
      marte: marteProPic,
    };
    this.leftFielders = {
      yelich: yelichProPic,
      brantley: brantleyProPic,
      ozuna: ozunaProPic,
    };
    this.firstBasemen = {
      freeman: freemanProPic,
      goldschmidt: goldschmidtProPic,
      abreu: abreuProPic,
      voit: voitProPic,
      muncy: muncyProPic,
    };
    this.catchers = {
      realmuto: realmutoProPic,
      grandal: grandalProPic,
      smith: smithProPic,
      contreras: contrerasProPic,
      perez: perezProPic,
    };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: white;
}
.shortstop {
  position: absolute;
  left: 45vw;
  top: 25vh;
}
.startingPitcher {
  position: absolute;
  left: 48vw;
  top: 35vh;
}
.thirdBaseman {
  position: absolute;
  left: 40vw;
  top: 30vh;
}
.centerFielder {
  position: absolute;
  left: 48vw;
  top: 10vh;
}
.rightFielder {
  position: absolute;
  left: 60vw;
  top: 10vh;
}
.secondBaseman {
  position: absolute;
  left: 52vw;
  top: 25vh;
}
.leftFielder {
  position: absolute;
  left: 35vw;
  top: 10vh;
}
.firstBaseman {
  position: absolute;
  left: 55vw;
  top: 30vh;
}
.catcher {
  position: absolute;
  left: 48vw;
  top: 45vh;
}
</style>
