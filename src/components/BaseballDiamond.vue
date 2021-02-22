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
import storyProPic from "../assets/shortstops/story.jpeg";
import bogaertsProPic from "../assets/shortstops/bogaerts.jpeg";
import turnerProPic from "../assets/shortstops/turner.jpeg";
import seagerProPic from "../assets/shortstops/seager.jpeg";
import correaProPic from "../assets/shortstops/correa.jpeg";
import bichetteProPic from "../assets/shortstops/bichette.jpeg";
import baezProPic from "../assets/shortstops/baez.jpeg";
import andersonProPic from "../assets/shortstops/anderson.jpeg";

// pitcher images
import degromProPic from "../assets/startingPitchers/degrom.jpeg";
import coleProPic from "../assets/startingPitchers/cole.jpeg";
import bieberProPic from "../assets/startingPitchers/bieber.jpeg";
import bauerProPic from "../assets/startingPitchers/bauer.jpeg";
import darvishProPic from "../assets/startingPitchers/darvish.jpeg";
import buehlerProPic from "../assets/startingPitchers/buehler.jpeg";
import giolitoProPic from "../assets/startingPitchers/giolito.jpeg";
import nolaProPic from "../assets/startingPitchers/nola.jpeg";
import scherzerProPic from "../assets/startingPitchers/scherzer.jpeg";
import kershawProPic from "../assets/startingPitchers/kershaw.jpeg";
import snellProPic from "../assets/startingPitchers/snell.jpeg";
import flahertyProPic from "../assets/startingPitchers/flaherty.jpeg";
import castilloProPic from "../assets/startingPitchers/castillo.jpeg";
import ryuProPic from "../assets/startingPitchers/ryu.jpeg";

// third basemen images
import rendonProPic from "../assets/thirdBasemen/rendon.jpeg";
import bregmanProPic from "../assets/thirdBasemen/bregman.jpeg";
import arenadoProPic from "../assets/thirdBasemen/arenado.jpeg";
import ramirezProPic from "../assets/thirdBasemen/ramirez.jpeg";
import machadoProPic from "../assets/thirdBasemen/machado.jpeg";
import jTurnerProPic from "../assets/thirdBasemen/turner.jpeg";
import chapmanProPic from "../assets/thirdBasemen/chapman.jpeg";
import bryantProPic from "../assets/thirdBasemen/bryant.jpeg";

// center fielder images
import troutProPic from "../assets/centerFielders/trout.jpeg";
import bellingerProPic from "../assets/centerFielders/bellinger.jpeg";
import springerProPic from "../assets/centerFielders/springer.jpeg";

// right fielder images
import bettsProPic from "../assets/rightFielders/betts.jpeg";
import sotoProPic from "../assets/rightFielders/soto.jpeg";
import acunaJrProPic from "../assets/rightFielders/acunajr.jpeg";
import judgeProPic from "../assets/rightFielders/judge.jpeg";
import harperProPic from "../assets/rightFielders/harper.jpeg";
import confortoProPic from "../assets/rightFielders/conforto.jpeg";
import blackmonProPic from "../assets/rightFielders/blackmon.jpeg";

// second basemen images
import lemahieuProPic from "../assets/secondBasemen/lemahieu.jpeg";
import mcneilProPic from "../assets/secondBasemen/mcneil.jpeg";
import marteProPic from "../assets/secondBasemen/marte.jpeg";

// left fielder images
import yelichProPic from "../assets/leftFielders/yelich.jpeg";
import brantleyProPic from "../assets/leftFielders/brantley.jpeg";
import ozunaProPic from "../assets/leftFielders/ozuna.jpeg";
import dSmithProPic from "../assets/leftFielders/smith.jpeg";
import jimenezProPic from "../assets/leftFielders/jimenez.jpeg";

// first basemen images
import freemanProPic from "../assets/firstBasemen/freeman.jpeg";
import goldschmidtProPic from "../assets/firstBasemen/goldschmidt.jpeg";
import abreuProPic from "../assets/firstBasemen/abreu.jpeg";
import voitProPic from "../assets/firstBasemen/voit.jpeg";
import muncyProPic from "../assets/firstBasemen/muncy.jpeg";
import alonsoProPic from "../assets/firstBasemen/alonso.jpeg";

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
      story: storyProPic,
      bogaerts: bogaertsProPic,
      turner: turnerProPic,
      seager: seagerProPic,
      correa: correaProPic,
      bichette: bichetteProPic,
      baez: baezProPic,
      anderson: andersonProPic,
    };
    this.startingPitchers = {
      degrom: degromProPic,
      cole: coleProPic,
      bieber: bieberProPic,
      bauer: bauerProPic,
      darvish: darvishProPic,
      buehler: buehlerProPic,
      giolito: giolitoProPic,
      nola: nolaProPic,
      scherzer: scherzerProPic,
      kershaw: kershawProPic,
      snell: snellProPic,
      flaherty: flahertyProPic,
      castillo: castilloProPic,
      ryu: ryuProPic,
    };
    this.thirdBasemen = {
      rendon: rendonProPic,
      bregman: bregmanProPic,
      arenado: arenadoProPic,
      ramirez: ramirezProPic,
      machado: machadoProPic,
      turner: jTurnerProPic,
      chapman: chapmanProPic,
      bryant: bryantProPic,
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
      judge: judgeProPic,
      harper: harperProPic,
      conforto: confortoProPic,
      blackmon: blackmonProPic,
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
      smith: dSmithProPic,
      jimenez: jimenezProPic,
    };
    this.firstBasemen = {
      freeman: freemanProPic,
      goldschmidt: goldschmidtProPic,
      abreu: abreuProPic,
      voit: voitProPic,
      muncy: muncyProPic,
      alonso: alonsoProPic,
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
