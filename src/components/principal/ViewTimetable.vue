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
          <v-data-table
            :headers="headers"
            :items="ourPrincipalTimetable"
            :search="search"
          >
            <template v-slot:item.08:30:00-09:30:00="{ item }">
              <SubjectBlock :subject="item['08:30:00-09:30:00']"></SubjectBlock>
            </template>
            <template v-slot:item.09:30:00-10:30:00="{ item }">
              <SubjectBlock :subject="item['09:30:00-10:30:00']"></SubjectBlock>
            </template>
            <template v-slot:item.10:30:00-11:30:00="{ item }">
              <SubjectBlock :subject="item['10:30:00-11:30:00']"></SubjectBlock>
            </template>
            <template v-slot:item.11:30:00-12:30:00="{ item }">
              <SubjectBlock :subject="item['11:30:00-12:30:00']"></SubjectBlock>
            </template>
            <template v-slot:item.12:30:00-13:30:00="{ item }">
              <SubjectBlock :subject="item['12:30:00-13:30:00']"></SubjectBlock>
            </template>
            <template v-slot:item.13:30:00-14:30:00="{ item }">
              <SubjectBlock :subject="item['13:30:00-14:30:00']"></SubjectBlock>
            </template>
            <template v-slot:item.14:30:00-15:30:00="{ item }">
              <SubjectBlock :subject="item['14:30:00-15:30:00']"></SubjectBlock>
            </template>
            <template v-slot:item.15:30:00-16:30:00="{ item }">
              <SubjectBlock :subject="item['15:30:00-16:30:00']"></SubjectBlock>
            </template>
            <template v-slot:item.16:30:00-17:30:00="{ item }">
              <SubjectBlock :subject="item['16:30:00-17:30:00']"></SubjectBlock>
            </template>
            <template v-slot:item.17:30:00-18:30:00="{ item }">
              <SubjectBlock :subject="item['17:30:00-18:30:00']"></SubjectBlock>
            </template>
          </v-data-table>
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
    return {
      divisions: ["A", "B", "C"],
      tab: 0,
      ourTimetable: [],
      // days: days,
      finalPrincipalTimetable: [],

      search: "",
      headers: [
        {
          text: "Day/Time",
          align: "left",
          sortable: false,
          value: "day"
        },
        {
          text: "08:30:00-09:30:00",
          sortable: false,
          value: "08:30:00-09:30:00"
        },
        {
          text: "09:30:00-10:30:00",
          sortable: false,
          value: "09:30:00-10:30:00"
        },
        {
          text: "10:30:00-11:30:00",
          sortable: false,
          value: "10:30:00-11:30:00"
        },
        {
          text: "11:30:00-12:30:00",
          sortable: false,
          value: "11:30:00-12:30:00"
        },
        {
          text: "12:30:00-13:30:00",
          sortable: false,
          value: "12:30:00-13:30:00"
        },
        {
          text: "13:30:00-14:30:00",
          sortable: false,
          value: "13:30:00-14:30:00"
        },
        {
          text: "14:30:00-15:30:00",
          sortable: false,
          value: "14:30:00-15:30:00"
        },
        {
          text: "15:30:00-16:30:00",
          sortable: false,
          value: "15:30:00-16:30:00"
        },
        {
          text: "16:30:00-17:30:00",
          sortable: false,
          value: "16:30:00-17:30:00"
        },
        {
          text: "17:30:00-18:30:00",
          sortable: false,
          value: "17:30:00-18:30:00"
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
