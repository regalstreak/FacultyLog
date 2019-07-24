<template>
  <v-card>
    <v-tabs @change="getOurPrincipalTimetable" class="tabs" v-model="tab" grow>
      <v-tabs-slider color="primary"></v-tabs-slider>

      <v-tab v-for="division in divisions" :key="division">{{ division }}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="(division) in divisions" :key="division">
        <v-card>
          <v-card-title>
            Nutrition
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table :headers="headers" :items="desserts" :search="search"></v-data-table>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
// import axios from "axios";
import SubjectBlock from "./SubjectBlock";
import { mapState } from "vuex";
import { getPrincipalTimetable } from "../../api/API";
export default {
  components: {
    SubjectBlock
  },
  computed: {
    ...mapState(["mainOptions"]),
    ourPrincipalTimetable: {
      get() {
        if (this.finalPrincipalTimetable.length == 0) {
          return this.parentPrincipalTimetable;
        } else {
          return this.finalPrincipalTimetable;
        }
      },
      set(newValue) {
        this.finalPrincipalTimetable = newValue;
      }
    }
  },
  methods: {
    getOurPrincipalTimetable() {
      this.ourPrincipalTimetable = [];
      getPrincipalTimetable(
        this.mainOptions.college,
        this.mainOptions.department,
        this.mainOptions.year,
        this.divisions[this.tab]
      ).then(res => {
        this.ourPrincipalTimetable = res;
        console.log(res);
      });
    }
  },
  props: ["parentPrincipalTimetable"],
  data() {
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    const times = [
      "08:30:00",
      "09:30:00",
      "10:30:00",
      "11:30:00",
      "12:30:00",
      "13:30:00",
      "14:30:00",
      "15:30:00",
      "16:30:00",
      "17:30:00",
      "18:30:00"
    ];
    return {
      divisions: ["A", "B", "C"],
      tab: 0,
      ourTimetable: [],
      days: days,
      finalPrincipalTimetable: [],

      search: "",
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" }
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%"
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%"
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%"
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%"
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%"
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
// td {
//   padding: 0 !important;
//   margin: 0 !important;
// }
</style>
