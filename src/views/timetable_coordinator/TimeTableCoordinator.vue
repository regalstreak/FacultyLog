<template>
  <v-card class="card--flex-toolbar">
    <v-toolbar dark color="secondary darken-1">
      <v-btn icon @click="e1 = 1">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-btn icon @click="e1 = 2">
        <v-icon>arrow_forward</v-icon>
      </v-btn>
      <v-toolbar-title style="margin-left: 1rem;">Timetable Coordinator</v-toolbar-title>
    </v-toolbar>

    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step color="primary" :complete="e1 > 1" step="1">Select Options</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">Enter Timetable</v-stepper-step>

        <v-divider></v-divider>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <!-- <v-card class="mb-5" color="grey lighten-1" height="200px"></v-card> -->

          <select-options></select-options>

          <v-layout>
            <v-flex xs12 class="text-xs-right">
              <v-btn color="primary" @click="getFullTimetable()">Next</v-btn>
            </v-flex>
          </v-layout>
        </v-stepper-content>

        <v-stepper-content step="2">
          <!-- <v-card class="mb-5" color="grey lighten-1" height="200px"></v-card> -->

          <enter-timetable :timetable="timetableParent" :faculty="facultyInfo"></enter-timetable>

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
import SelectOptions from "../../components/timetable-coordinator/SelectMainOptions";
import EnterTimetable from "../../components/timetable-coordinator/EnterTimetable";
import { mapState } from "vuex";
import {
  getTimetable,
  getFacultyInfo,
  getCompleteFacultyTimetable
} from "../../api/API";

export default {
  data() {
    return {
      selectOptions: {
        // department: "",
        // division: "",
        // year: "",
        day: "",
        time: "",
        sdrn: "",
        room: ""
      },
      e1: 0,
      facultyInfo: [],
      timetableParent: []
    };
  },
  components: {
    SelectOptions,
    EnterTimetable
  },
  computed: {
    ...mapState(["mainOptions"])
  },
  methods: {
    getFullTimetable() {
      const vm = this;
      getCompleteFacultyTimetable("RAIT", {
        ...this.selectOptions,
        department: vm.mainOptions.department,
        year: vm.mainOptions.year,
        division: "A"
      }).then(res => {
        this.timetableParent = res;
        console.log(res);
      });

      getFacultyInfo(
        this.mainOptions.college,
        this.mainOptions.department,
        this.mainOptions.year
      )
        .then(res => {
          console.log(res);
          this.facultyInfo = res;
        })
        .catch(err => console.log(err));

      this.e1 = 2;
    },
    getOurTimetable() {
      console.log(this.mainOptions.department);
      getTimetable(
        this.mainOptions.college,
        this.mainOptions.department,
        this.mainOptions.year
      ).then(res => {
        this.timetableParent = res;
        console.log(res);
      });
      this.e1 = 2;

      getFacultyInfo(
        this.mainOptions.college,
        this.mainOptions.department,
        this.mainOptions.year
      )
        .then(res => {
          console.log(res);
          this.facultyInfo = res;
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="stylus" scoped>
.card--flex-toolbar {
  margin-top: -64px;
}
</style>
