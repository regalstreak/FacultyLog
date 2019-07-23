<template>
  <v-container style="padding-bottom: 10rem">
    <!-- <v-tabs v-model="tab" class="tabs" grow>
      <v-tabs-slider color="primary"></v-tabs-slider>
      <v-tab v-for="n in 3" :key="n">Item {{ n }}</v-tab>
    </v-tabs>-->

    <v-tabs @change="getOurTimetable" class="tabs" v-model="tab" grow>
      <v-tabs-slider color="primary"></v-tabs-slider>

      <v-tab v-for="division in divisions" :key="division">{{ division }}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="(division) in divisions" :key="division">
        <v-layout wrap>
          <v-flex md5 xs12>
            <v-layout column>
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
                ></v-combobox>
              </v-flex>
              <v-flex>
                <v-layout>
                  <v-flex md6>
                    <v-combobox
                      v-model="selectOptions.start_time"
                      :items="items"
                      prepend-icon="access_time"
                      prefix="Start time: "
                      readonly
                      @click="startTimeMenu = !startTimeMenu"
                    ></v-combobox>

                    <v-time-picker
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
                    </v-time-picker>
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
                    </v-time-picker>

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
                  v-model="selectOptions.classroom"
                  :items="classRooms"
                  prepend-icon="meeting_room"
                  prefix="Classroom: "
                ></v-combobox>
              </v-flex>
              <v-flex>
                <v-combobox
                  v-model="selectOptions.batches"
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
          <v-flex md6 xs12>
            <div class="headline">Timetable</div>
            <div>
              <v-container style="max-height: 400px" class="scroll-y">
                <v-card v-for="(x, index) in ourTimetable" class="timetable-card" :key="index">
                  <v-card-title>
                    <div class="headline">{{x.day}} - {{x.subject}}</div>
                  </v-card-title>
                  <v-card-text>
                    <v-layout column>
                      <v-flex>Teacher: {{ x.sdrn }}</v-flex>
                      <v-flex>{{ x.start_time }} - {{ x.end_time }}</v-flex>
                      <v-flex>Classroom: {{ x.room }}</v-flex>
                      <v-flex>Batches: {{ x.batch }}</v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-container>
            </div>
          </v-flex>
        </v-layout>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import { getTimetable } from "../../api/API";
import { mapState } from "vuex";
import { addTimetable } from "../../api/API";

export default {
  data() {
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    return {
      select: "Programming",
      items: ["Programming", "Design", "Vue", "Vuetify"],

      days: days,

      classRooms: [514, 242, 242],

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
        sdrn: 123,
        // classroom: "514",
        room: "514",
        batch: "All"
      },

      divisions: ["A", "B", "C"],
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
        this.divisions[this.tab] + "4",
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
        return this.faculty.faculty;
      } else {
        return ["error", "in", "getting", "data"];
      }
    }
  },
  props: ["timetable", "faculty"],

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

      this.getOurTimetable();
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

koli gay af