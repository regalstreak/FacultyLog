<template>
  <v-container>
    <!-- <v-tabs v-model="tab" class="tabs" grow>
      <v-tabs-slider color="primary"></v-tabs-slider>
      <v-tab v-for="n in 3" :key="n">Item {{ n }}</v-tab>
    </v-tabs>-->

    <v-tabs @change="getFullTimetable()" class="tabs" v-model="tab" grow>
      <v-tabs-slider color="primary"></v-tabs-slider>

      <v-tab v-for="division in divisions" :key="division">{{ division }}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="(division) in divisions" :key="division">
        <v-layout wrap>
          <v-flex md3 xs12>
            <v-layout column>
              <v-flex
                style="font-weight: 700; color: grey"
                class="headline"
              >{{mainOptions.college}} - {{mainOptions.department}} - {{mainOptions.year}} - {{divisions[tab]}}</v-flex>
              <v-flex>
                <v-combobox
                  v-model="selectOptions.day"
                  :items="days"
                  prepend-icon="today"
                  prefix="Day: "
                ></v-combobox>
              </v-flex>
              <v-flex>
                <v-combobox
                  v-model="selectOptions.subject"
                  :items="ourCourse"
                  prepend-icon="subject"
                  prefix="Subject: "
                ></v-combobox>
              </v-flex>
              <v-flex>
                <v-combobox
                  v-model="selectOptions.teacher"
                  :items="ourFaculty"
                  prepend-icon="person"
                  prefix="Teacher: "
                  @change="getSdrn(selectOptions.teacher)"
                ></v-combobox>
              </v-flex>
              <v-flex>
                <v-layout>
                  <v-flex md6>
                    <v-combobox
                      v-model="selectOptions.start_time"
                      :items="times"
                      prepend-icon="access_time"
                      prefix="Start:"
                    ></v-combobox>
                    <!-- <v-combobox
                      v-model="selectOptions.start_time"
                      :items="items"
                      prepend-icon="access_time"
                      prefix="Start time: "
                      readonly
                      @click="startTimeMenu = !startTimeMenu"
                    ></v-combobox>-->

                    <!-- <v-time-picker
                      style="position: absolute; opacity: 1; z-index: 100; width: 290px"
                      v-if="startTimeMenu"
                      v-model="selectOptions.start_time"
                      width="200"
                    >
                      <div
                        style="display: flex; justify-content: flex-end; width: 100%; margin: 0 1rem; "
                      >
                        <v-btn @click="startTimeMenu = !startTimeMenu" color="primary" round>OK</v-btn>
                      </div>
                    </v-time-picker>-->
                    <!-- 
                    <v-menu
                      ref="startTimeRef"
                      v-model="startTime[index]"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      :return-value.sync="startTimeTime"
                      lazy
                      transition="scale-transition"
                      offset-y
                      full-width
                      max-width="200px"
                      min-width="200px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="startTimeTime"
                          label="Start Time"
                          prepend-icon="access_time"
                          readonly
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="startTime[index]"
                        v-model="startTimeTime"
                        full-width
                      ></v-time-picker>
                    </v-menu>-->
                  </v-flex>
                  <v-flex md1></v-flex>
                  <v-flex md6>
                    <v-combobox
                      v-model="selectOptions.end_time"
                      :items="times"
                      prepend-icon="alarm"
                      prefix="End:"
                    ></v-combobox>
                    <!-- <v-combobox
                      v-model="selectOptions.end_time"
                      prepend-icon="alarm"
                      prefix="End time: "
                      readonly
                      @click="endTimeMenu = !endTimeMenu"
                    ></v-combobox>

                    <v-time-picker
                      style="position: absolute; opacity: 1; z-index: 100; width: 290px"
                      v-if="endTimeMenu"
                      v-model="selectOptions.end_time"
                      width="200"
                    >
                      <div
                        style="display: flex; justify-content: flex-end; width: 100%; margin: 0 1rem; "
                      >
                        <v-btn @click="endTimeMenu = !endTimeMenu" color="primary" round>OK</v-btn>
                      </div>
                    </v-time-picker>-->

                    <!-- <v-menu
                      ref="endTimeRef"
                      v-model="endTime[index]"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      :return-value.sync="endTimeTime"
                      lazy
                      transition="scale-transition"
                      offset-y
                      full-width
                      max-width="200px"
                      min-width="200px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="endTimeTime"
                          label="End Time: "
                          prepend-icon="alarm"
                          readonly
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="endTime[index]"
                        min="08:30am"
                        max="7:30pm"
                        v-model="endTimeTime"
                        full-width
                        @click:minute="$refs.endTimeRef.save(endTimeTime)"
                      ></v-time-picker>
                    </v-menu>-->
                  </v-flex>
                </v-layout>
              </v-flex>

              <v-flex>
                <v-combobox
                  v-model="selectOptions.room"
                  :items="classRooms"
                  prepend-icon="meeting_room"
                  prefix="Classroom: "
                ></v-combobox>
              </v-flex>
              <v-flex>
                <v-combobox
                  v-model="selectOptions.batch"
                  :items="batches"
                  prepend-icon="exposure_plus_1"
                  prefix="Batches: "
                ></v-combobox>
              </v-flex>
            </v-layout>
            <v-btn
              fab
              @click="addCard()"
              style="float: right; transform: translateX(1.5rem)"
              small
              color="primary"
            >
              <v-icon dark>add</v-icon>
            </v-btn>
          </v-flex>

          <v-flex md1 xs12>
            <v-divider class="card-divider" inset vertical></v-divider>
          </v-flex>
          <v-flex md8 xs12>
            <div style="font-weight: 700; color: gray" class="headline">Timetable</div>
            <div>
              <!-- <v-container style="max-height: 400px" class="overflow-y-auto"> -->
              <!-- <v-card v-for="(x, index) in ourTimetable" class="timetable-card" :key="index">
                  <v-card-title>
                    <div class="subject_container">
                      <div class="headline">{{x.day}} - {{x.subject}}</div>
                      <div class="delete_button">
                        <v-btn color="primary" fab small @click="deleteRecord(x.srno)">
                          <v-icon dark>remove</v-icon>
                        </v-btn>
                      </div>
                    </div>
                  </v-card-title>
                  <v-card-text>
                    <v-layout column>
                      <v-flex>Teacher: {{ x.sdrn }}</v-flex>
                      <v-flex>{{ x.start_time }} - {{ x.end_time }}</v-flex>
                      <v-flex>Classroom: {{ x.room }}</v-flex>
                      <v-flex>Batches: {{ x.batch }}</v-flex>
                    </v-layout>
                  </v-card-text>
              </v-card>-->

              <InDepthView @parentDelete="deleteRecord" :key="keyCounter" :timetable="ourTimetable"></InDepthView>

              <!-- </v-container> -->
            </div>
          </v-flex>
        </v-layout>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import InDepthView from "../../components/principal/InDepthView";
import {
  getTimetable,
  addTimetable,
  getCompleteFacultyTimetable
} from "../../api/API";
import { mapState } from "vuex";

export default {
  data() {
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "SaturdayEven",
      "SaturdayOdd",
    ];

    const times = [
      "08:00:00",
      "08:30:00",
      "09:00:00",
      "09:30:00",
      "10:00:00",
      "10:30:00",
      "11:00:00",
      "11:30:00",
      "12:00:00",
      "12:30:00",
      "13:00:00",
      "13:30:00",
      "14:00:00",
      "14:30:00",
      "15:00:00",
      "15:30:00",
      "16:00:00",
      "16:30:00",
      "17:00:00",
      "17:30:00",
      "18:00:00",
      "18:30:00",
      "19:00:00",
      "19:30:00",
    ];

    return {
      select: "Programming",
      items: ["Programming", "Design", "Vue", "Vuetify"],
      times: times,
      days: days,

      classRooms: [514, 504, 511],

      startTimeMenu: false,

      endTimeMenu: false,

      startTimeTime: null,
      // startTime: [false, false, false],

      endTimeTime: null,
      // endTime: [false, false, false],

      selectOptions: {
        day: days[0],
        end_time: null,
        start_time: null,
        subject: "Select",
        teacher: "Select",
        sdrn: 0,
        // classroom: "514",
        room: "511",
        batch: "All"
      },

      viewOptions: {
        // department: "",
        // division: "",
        // year: "",
        day: "",
        time: "",
        sdrn: "",
        room: ""
      },

      keyCounter: 0,

      noOfCards: 5,
      tab: 0,
      text: "Lorem ipsum dolor sit .",
      finalTimetable: []
    };
  },
  computed: {
    ...mapState(["mainOptions"]),
    batches() {
      let ourArray = [
        "All",
        this.divisions[this.tab] + "1",
        this.divisions[this.tab] + "2",
        this.divisions[this.tab] + "3",
        this.divisions[this.tab] + "4"
      ];
      return ourArray;
    },
    ourTimetable: {
      get() {
        if (this.finalTimetable.length == 0) {
          return this.timetable;
        } else {
          return this.finalTimetable;
        }
      },
      set(newValue) {
        this.keyCounter++;
        this.finalTimetable = newValue;
      }
    },
    ourCourse() {
      if (this.faculty.course) {
        return this.faculty.course;
      } else {
        return ["error", "in", "getting", "data"];
      }
    },
    ourFaculty() {
      if (this.faculty.faculty) {
        let abc = [];
        this.faculty.faculty.forEach(element => {
          abc.push(element.name);
        });
        return abc;
      } else {
        return ["error", "in", "getting", "data"];
      }
    },
    divisions() {
      if(this.mainOptions.department === 'FE') {
        return ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"]
      } else {
        return ["A", "B", "C"]
      }
    }
  },
  props: ["timetable", "faculty"],
  components: {
    InDepthView
  },
  methods: {
    addCard() {
      // this.noOfCards++;
      addTimetable(
        {
          department: this.mainOptions.department,
          year: this.mainOptions.year,
          ...this.selectOptions
        },
        this.divisions[this.tab],
        this.mainOptions.college
      ).then(res => console.log(res));

      this.getFullTimetable();
    },
    getOurTimetable() {
      this.ourTimetable = [];
      getTimetable(
        this.mainOptions.college,
        this.mainOptions.department,
        this.mainOptions.year,
        this.divisions[this.tab]
      ).then(res => {
        this.ourTimetable = res;
        console.log(res);
      });
    },
    getFullTimetable() {
      const vm = this;
      this.ourTimetable = [];
      getCompleteFacultyTimetable("RAIT", {
        ...this.viewOptions,
        department: vm.mainOptions.department,
        year: vm.mainOptions.year,
        division: this.divisions[this.tab]
      }).then(res => {
        this.ourTimetable = res;
        console.log(res);
      });
    },
    getSdrn(teacherName) {
      let abc = this.faculty.faculty.find(function(element) {
        return element.name == teacherName;
      });
      this.selectOptions.sdrn = abc.sdrn.toString();
    },
    deleteRecord(srno) {
      console.log("deleted something " + srno);

      this.ourTimetable = [];

      // this.getOurTimetable();
      this.getFullTimetable();
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

.subject_container {
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
}

.delete_button {
  position: absolute;
  right: 0;
}
</style>