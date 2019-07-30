<template>
  <v-app>
    <v-card flat v-if="abc">
      <v-toolbar style="height: 10rem" color="primary" extended flat></v-toolbar>

      <v-layout row pb-2>
        <v-flex xs8 offset-xs2>
          <v-content>
            <router-view></router-view>
          </v-content>
        </v-flex>
      </v-layout>
    </v-card>
    <div v-else>
      <v-toolbar style="height: 10rem" color="primary" extended flat></v-toolbar>
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
    return {
    };
  },
  computed: {
    abc() {
      return false;
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

.container-flex {
  margin: 0 4rem;
  margin-bottom: 10rem;
}
</style>
