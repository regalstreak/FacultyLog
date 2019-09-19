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
            <div
              style="width: 100vw;text-align: center;font-weight: 700; color: grey"
              class="headline"
            >{{mainOptions.college}} - {{mainOptions.department}} - {{mainOptions.year}} - {{divisions[tab]}}</div>
            <v-spacer></v-spacer>
            <!-- <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>-->
          </v-card-title>
          <v-data-table
            hide-default-footer
            :headers="headers"
            :items="ourPrincipalTimetable"
            :search="search"
          >
            <template v-slot:item="{ item }">
              <tr>
                <td v-for="(header, index) in headers" :key="index">
                  <div class="center-block">
                    <div v-if="index == 0">{{ item.day }}</div>
                    <SubjectBlock v-else :ourSubjects="ourSubjects" :subject="item[header.value]"></SubjectBlock>
                  </div>
                </td>
              </tr>
            </template>
            <!-- for reference <template v-slot:item.08:30:00-09:30:00="{ item }">
              <SubjectBlock :ourSubjects="ourSubjects" :subject="item['08:30:00-09:30:00']"></SubjectBlock>
            </template>-->
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
  mounted() {},
  computed: {
    ...mapState(["mainOptions"]),
    ourPrincipalTimetable: {
      get() {
        if (!this.finalPrincipalTimetable) {
          return this.parentPrincipalTimetable.time_table;
        } else {
          return this.finalPrincipalTimetable.time_table;
        }
      },
      set(newValue) {
        this.finalPrincipalTimetable = newValue;
      }
    },
    ourSubjects() {
      if (!this.finalPrincipalTimetable) {
        return this.parentPrincipalTimetable.subjects;
      } else {
        return this.finalPrincipalTimetable.subjects;
      }
    }
  },
  methods: {
    getOurPrincipalTimetable() {
      this.ourPrincipalTimetable = null;
      getPrincipalTimetable(
        this.mainOptions.college,
        this.mainOptions.department,
        this.mainOptions.year,
        this.divisions[this.tab]
      ).then(res => {
        this.ourPrincipalTimetable = res;
        this.headers = res.format.header;
      });
    }
  },
  watch: {
    headers: function(val) {
      console.log(val);
    }
  },
  props: ["parentPrincipalTimetable"],
  data() {
    return {
      divisions: ["A", "B", "C"],
      tab: 0,
      ourTimetable: [],
      finalPrincipalTimetable: null,
      finalHeaders: null,
      search: "",
      headers: [
        {
          text: "Day/Time",
          align: "center",
          sortable: false,
          value: "day"
        },
        {
          text: "08:30 - 09:30",
          sortable: false,
          value: "08:30:00-09:30:00",
          align: "center"
        },
        {
          text: "09:30 - 10:30",
          sortable: false,
          value: "09:30:00-10:30:00",
          align: "center"
        },
        {
          text: "10:30 - 11:30",
          sortable: false,
          value: "10:30:00-11:30:00",
          align: "center"
        },
        {
          text: "11:30 - 12:30",
          sortable: false,
          value: "11:30:00-12:30:00",
          align: "center"
        },
        {
          text: "12:30 - 13:30",
          sortable: false,
          value: "12:30:00-13:30:00",
          align: "center"
        },
        {
          text: "13:30 - 14:30",
          sortable: false,
          value: "13:30:00-14:30:00",
          align: "center"
        },
        {
          text: "14:30 - 15:30",
          sortable: false,
          value: "14:30:00-15:30:00",
          align: "center"
        },
        {
          text: "15:30 - 16:30",
          sortable: false,
          value: "15:30:00-16:30:00",
          align: "center"
        },
        {
          text: "16:30 - 17:30",
          sortable: false,
          value: "16:30:00-17:30:00",
          align: "center"
        },
        {
          text: "17:30 - 18:30",
          sortable: false,
          value: "17:30:00-18:30:00",
          align: "center"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
// td {
// padding: 0 !important;
// margin: 0 !important;
// }
.center-block {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
