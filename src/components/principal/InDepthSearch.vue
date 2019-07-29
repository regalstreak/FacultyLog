<template>
  <v-container>
    <v-layout wrap>
      <v-flex md3 xs12>
        <v-layout column>
          <v-flex>
            <!-- @input="changeOption($event ,'college')" -->
            <v-combobox
              v-model="collegeSelect"
              :items="college"
              prepend-icon="account_balance"
              prefix="College: "
            ></v-combobox>
          </v-flex>
          <v-flex>
            <v-combobox
              v-model="selectOptions.department"
              :items="departments"
              prepend-icon="school"
              prefix="Department: "
            ></v-combobox>
          </v-flex>
          <v-flex>
            <v-combobox
              v-model="selectOptions.year"
              :items="year"
              prepend-icon="calendar_today"
              prefix="Year: "
            ></v-combobox>
          </v-flex>
          <v-flex>
            <v-combobox
              v-model="selectOptions.division"
              :items="divisions"
              prepend-icon="domain"
              prefix="Division: "
            ></v-combobox>
          </v-flex>
          <!-- <v-flex>
            <v-combobox
              v-model="selectOptions.day"
              :items="days"
              prepend-icon="today"
              prefix="Day: "
            ></v-combobox>
          </v-flex> -->
          <!-- <v-flex>
            <v-combobox
              v-model="selectOptions.subject"
              :items="ourCourse"
              prepend-icon="subject"
              prefix="Subject: "
            ></v-combobox>
          </v-flex>-->
          <v-flex>
            <!-- <v-combobox
              v-model="selectOptions.teacher"
              :items="items"
              prepend-icon="person"
              prefix="Teacher: "
            ></v-combobox>-->
            <v-combobox
              v-model="teacherSelect"
              :items="ourFaculty"
              prepend-icon="person"
              prefix="Teacher: "
            ></v-combobox>
          </v-flex>
          <v-flex>
            <v-combobox
              v-model="selectOptions.time"
              :items="times"
              prepend-icon="alarm"
              prefix="Time: "
            ></v-combobox>
          </v-flex>
          <!-- <v-flex>
            <v-layout>
              <v-flex md6>
                <v-combobox
                  v-model="selectOptions.startTime"
                  :items="items"
                  prepend-icon="access_time"
                  prefix="Start time: "
                ></v-combobox>
              </v-flex>
              <v-flex md1></v-flex>
              <v-flex md6>
                <v-combobox
                  v-model="selectOptions.endTime"
                  :items="items"
                  prepend-icon="alarm"
                  prefix="End Time: "
                ></v-combobox>
              </v-flex>
            </v-layout>
          </v-flex>-->

          <v-flex>
            <v-combobox
              v-model="selectOptions.room"
              :items="classrooms"
              prepend-icon="meeting_room"
              prefix="Classroom: "
            ></v-combobox>
          </v-flex>
          <!-- <v-flex>
            <v-combobox
              v-model="selectOptions.batches"
              :items="items"
              prepend-icon="exposure_plus_1"
              prefix="Batches: "
            ></v-combobox>
          </v-flex>-->
        </v-layout>
        <v-btn
          fab
          @click="depthSearch()"
          style="float: right; transform: translateX(1.5rem)"
          small
          color="primary"
        >
          <v-icon dark>search</v-icon>
        </v-btn>
      </v-flex>

      <v-flex md1 xs12>
        <v-divider class="card-divider" inset vertical></v-divider>
      </v-flex>
      <v-flex md8 xs12>
        <div class="headline">Timetable</div>
        <div>
          <InDepthView :timetable="ourTimetable"></InDepthView>

          <!-- OURMAINBOI <v-container style="max-height: 400px" class="overflow-y-auto">
            <v-card v-for="(x, index) in ourTimetable" class="timetable-card" :key="index">
              <v-card-title>
                <div class="headline">{{x.day}} - {{x.sdrn}} - {{x.subject}}</div>
              </v-card-title>
              <v-card-text>
                <v-layout column>
                  <v-flex>Year: {{ x.year }}</v-flex>
                  <v-flex>Department: {{ x.department }}</v-flex>
                  <v-flex>Division: {{ x.division }}</v-flex>
                  <v-flex>Day: {{ x.day }}</v-flex>
                  <v-flex>Teacher: {{ x.sdrn }}</v-flex>
                  <v-flex>{{ x.start_time }} - {{ x.end_time }}</v-flex>
                  <v-flex>Classroom: {{ x.room }}</v-flex>
                  <v-flex>Batches: {{ x.batch }}</v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-container>-->
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { getAllFacultyInfo, getCompleteFacultyTimetable } from "../../api/API";
import { mapState } from "vuex";
import InDepthView from "./InDepthView";

export default {
  components: {
    InDepthView
  },
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
      departments: ["COMPS", "EXTC", "ETRX", "EXTC", "IT", "FE", "INSTRU"],
      year: ["FE", "SE", "TE", "BE"],
      divisions: ["A", "B", "C"],
      days: days,
      college: ["RAIT"],
      teacherSelect: "",

      times: times,

      classrooms: [511, 514, 504],

      select: "Programming",
      items: ["Programming", "Design", "Vue", "Vuetify"],
      collegeSelect: "RAIT",
      selectOptions: {
        department: "",
        division: "",
        year: "",
        day: "",  
        time: "",
        // subject: "",
        sdrn: "",
        // start_time: "",
        // end_time: "All",
        room: ""
        // batch: ""
      },

      allFacultyInfo: [],

      noOfCards: 5,
      tab: 0,
      text: "Lorem ipsum dolor sit .",
      finalTimetable: []
    };
  },
  mounted() {
    getAllFacultyInfo("RAIT")
      .then(res => {
        console.log(res);
        this.allFacultyInfo = res;
      })
      .catch(err => console.log(err));
  },
  computed: {
    ...mapState(["mainOptions"]),
    ourTimetable: {
      get() {
        if (this.finalTimetable.length == 0) {
          return this.timetable;
        } else {
          return this.finalTimetable;
        }
      },
      set(newValue) {
        this.finalTimetable = newValue;
      }
    },
    ourCourse() {
      if (this.allFacultyInfo.course) {
        return this.allFacultyInfo.course;
      } else {
        return ["error", "in", "getting", "data"];
      }
    },
    ourFaculty() {
      if (this.allFacultyInfo.faculty) {
        let abc = [];
        this.allFacultyInfo.faculty.forEach(element => {
          abc.push(element.name);
        });
        return abc;
      } else {
        return ["error", "in", "getting", "data"];
      }
    }
  },
  props: ["timetable"],

  methods: {
    getSdrn() {
      this.selectOptions.sdrn = "";
      const teacher = this.teacherSelect;
      if (teacher == "") {
        this.selectOptions.sdrn = "";
      } else {
        let abc = this.allFacultyInfo.faculty.find(function(element) {
          return element.name == teacher;
        });
        console.log("ABCCCCCCCCCCCCC" + " " + JSON.stringify(abc));
        if (abc) {
          this.selectOptions.sdrn = abc.sdrn.toString();
        } else {
          this.selectOptions.sdrn = "";
        }
      }
    },
    changeOption($event, type) {
      switch (type) {
        case "year": {
          this.yearSelect = $event;
          break;
        }
        case "university": {
          this.university.selected = $event;
          break;
        }
        case "department": {
          this.departmentSelect = $event;
          break;
        }
        case "college": {
          this.college.selected = $event;
          break;
        }
        default: {
          break;
        }
      }

      this.$store.commit("changeMainOptions", {
        type: type,
        option: $event
      });
    },
    depthSearch() {
      this.getSdrn();
      this.ourTimetable = [];
      getCompleteFacultyTimetable("RAIT", { ...this.selectOptions }).then(
        res => {
          this.ourTimetable = res;
          console.log(res);
        }
      );
    }
  }
};
</script>

<style lang="stylus" scoped>
.timetable-card {
  margin-bottom: 2rem;
  margin-right: 2rem;
}

.tabs {
  margin-bottom: 2rem;
}

.card-divider {
  height: 100%;
  margin: 0 75%;
  background: grey;
}
</style>
