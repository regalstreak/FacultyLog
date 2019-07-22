<template>
  <v-container>
    <!-- <v-tabs v-model="tab" class="tabs" grow>
      <v-tabs-slider color="primary"></v-tabs-slider>
      <v-tab v-for="n in 3" :key="n">Item {{ n }}</v-tab>
    </v-tabs>-->

    <v-tabs @change="getOurTimetable" class="tabs" v-model="tab" grow>
      <v-tabs-slider color="primary"></v-tabs-slider>

      <v-tab v-for="division in divisions" :key="division">{{ division }}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="division in divisions" :key="division">
        <v-layout wrap>
          <v-flex md5 xs12>
            <v-layout column>
              <v-flex>
                <v-combobox
                  v-model="selectOptions.day"
                  :items="items"
                  prepend-icon="today"
                  prefix="Day: "
                ></v-combobox>
              </v-flex>
              <v-flex>
                <v-combobox
                  v-model="selectOptions.subject"
                  :items="items"
                  prepend-icon="subject"
                  prefix="Subject: "
                ></v-combobox>
              </v-flex>
              <v-flex>
                <v-combobox
                  v-model="selectOptions.teacher"
                  :items="items"
                  prepend-icon="person"
                  prefix="Teacher: "
                ></v-combobox>
              </v-flex>
              <v-flex>
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
              </v-flex>

              <v-flex>
                <v-combobox
                  v-model="selectOptions.classroom"
                  :items="items"
                  prepend-icon="meeting_room"
                  prefix="Classroom: "
                ></v-combobox>
              </v-flex>
              <v-flex>
                <v-combobox
                  v-model="selectOptions.batches"
                  :items="items"
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
    return {
      select: "Programming",
      items: ["Programming", "Design", "Vue", "Vuetify"],
      selectOptions: {
        day: "Monday",
        subject: "DBMS",
        // teacher: "Mrs. Smita Patil",
        sdrn: 123,
        start_time: "10:30",
        end_time: "11:30",
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
    }
  },
  props: ["timetable"],

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