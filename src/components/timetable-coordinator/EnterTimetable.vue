<template>
  <v-container>
    <v-layout wrap>
      <v-flex md5 xs12>
        <v-layout column>
          <v-flex>
            <v-combobox v-model="select" :items="items" prepend-icon="today" prefix="Day: "></v-combobox>
          </v-flex>
          <v-flex>
            <v-combobox v-model="select" :items="items" prepend-icon="school" prefix="Subject: "></v-combobox>
          </v-flex>
          <v-flex>
            <v-combobox
              v-model="select"
              :items="items"
              prepend-icon="person"
              prefix="Teacher: "
            ></v-combobox>
          </v-flex>
          <v-flex>
            <v-layout>
              <v-flex md6>
                <v-combobox
                  v-model="select"
                  :items="items"
                  prepend-icon="access_time"
                  prefix="Start time: "
                ></v-combobox>
              </v-flex>
              <v-flex md1></v-flex>
              <v-flex md6>
                <v-combobox
                  v-model="select"
                  :items="items"
                  prepend-icon="alarm"
                  prefix="End Time: "
                ></v-combobox>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex>
            <v-combobox
              v-model="select"
              :items="items"
              prepend-icon="meeting_room"
              prefix="Classroom: "
            ></v-combobox>
          </v-flex>
          <v-flex>
            <v-combobox
              v-model="select"
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
            <v-card v-for="x in noOfCards" class="timetable-card" :key="x">
              <v-card-title>
                <div class="headline">Monday - Subject</div>
              </v-card-title>
              <v-card-text>
                <v-layout column>
                  <v-flex>Teacher: ABC ma'am</v-flex>
                  <v-flex>Starttime - EndTime</v-flex>
                  <v-flex>Classroom: 514</v-flex>
                  <v-flex>Batches: A1, A2, A3, A4</v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-container>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      select: "Programming",
      items: ["Programming", "Design", "Vue", "Vuetify"],
      noOfCards: 5
    };
  },
  methods: {
    addCard() {
      this.noOfCards++;
    }
  }
};
</script>

<style lang="stylus" scoped>
.timetable-card {
  margin-bottom: 2rem;
  margin-right: 2rem;
}

.card-divider {
  height: 100%;
  margin: 0 75%;
  background: grey;
}
</style>
