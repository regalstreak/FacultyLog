<!--
<template>
  <v-app>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>
-->

<template>
  <v-app>
    <v-card flat>
      <v-toolbar style="height: 16rem" color="primary" extended flat>
      </v-toolbar>

      <v-layout row pb-2>
        <v-flex xs8 offset-xs2>
          <v-content>
            <router-view></router-view>
          </v-content>
        </v-flex>
      </v-layout>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>



<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,900&display=swap');
@import './stylus/main.styl';

body {
  font-family: $font-family;
}
</style>
