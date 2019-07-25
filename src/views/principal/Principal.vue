<template>
  <v-card class="card--flex-toolbar">
    <v-toolbar dark color="secondary darken-1" >
      <v-toolbar-title>Principal</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>

    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step color="primary" :complete="e1 > 1" step="1">Select Options</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">View Timetable</v-stepper-step>

        <v-divider></v-divider>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <!-- <v-card class="mb-5" color="grey lighten-1" height="200px"></v-card> -->

          <select-options></select-options>

          <v-layout>
            <v-flex xs12 class="text-xs-right">
              <v-btn color="primary" @click="getPrinciTimetable()">Next</v-btn>
            </v-flex>
          </v-layout>
        </v-stepper-content>

        <v-stepper-content step="2">
          <!-- <v-card class="mb-5" color="grey lighten-1" height="200px"></v-card> -->


          <view-timetable :parentPrincipalTimetable="parentPrincipalTimetable" />

          <v-layout>
            <v-flex xs12 class="text-xs-right">
              <v-btn color="primary" @click="e1 = 1">Back</v-btn>
            </v-flex>
          </v-layout>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>

    <v-divider></v-divider>
  </v-card>
</template>

<script>
import SelectOptions from "../../components/principal/SelectOptionsPrincipal";
import ViewTimetable from "../../components/principal/ViewTimetable";
import { mapState } from "vuex";
import { getPrincipalTimetable } from "../../api/API";

export default {
  data() {
    return {
      e1: 0,
      divisions: ["A", "B", "C"],
      tab: 0,
      parentPrincipalTimetable: []
    };
  },
  computed: {
    ...mapState(["mainOptions"]),

  },
  methods: {
    getPrinciTimetable() {
      getPrincipalTimetable(
        this.mainOptions.college,
        this.mainOptions.department,
        this.mainOptions.year,
        this.divisions[this.tab]
      ).then(res => {
        this.parentPrincipalTimetable = res;
      });
      this.e1 = 2;
    }
  },
  components: {
    SelectOptions,
    ViewTimetable
  }
};
</script>

<style lang="stylus" scoped>
.card--flex-toolbar {
  margin-top: -64px;
}
</style>
