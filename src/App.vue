<template>
  <v-app>
    <div v-if="abc">
      <v-toolbar style="height: 10rem" color="primary" extended flat>
        <v-img class="logo" :src="require('./assets/rait_logo.png')" max-width="160" alt></v-img>
      </v-toolbar>

      <v-content>
        <router-view></router-view>
      </v-content>
    </div>
    <div v-else>
      <v-toolbar style="height: 10rem" color="primary" extended flat>
        <v-img class="logo" :src="require('./assets/rait_logo.png')" max-width="160" alt></v-img>
      </v-toolbar>
      <v-content class="container-flex">
        <router-view></router-view>
      </v-content>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  computed: {
    abc() {
      if (window.innerWidth > 600) {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>



<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,900&display=swap');
@import './stylus/main.styl';

body {
  font-family: $font-family;
}

.selectDisable {
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  pointer-events: none;
}

.logo {
  margin-top: 2rem;
  margin-left: 3rem;
}

.container-flex {
  margin: 0 4rem;
  margin-bottom: 10rem;
}
</style>
