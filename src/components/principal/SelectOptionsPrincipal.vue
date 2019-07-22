<template>
  <div>
    <v-tabs class="tabs" v-model="tab" grow>
      <v-tabs-slider color="primary"></v-tabs-slider>

      <v-tab>Full class timetable</v-tab>
      <v-tab>In-depth search</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <select-main-options></select-main-options>
      </v-tab-item>
      <v-tab-item>
        <in-depth-search></in-depth-search>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import SelectMainOptions from "../timetable-coordinator/SelectMainOptions";
import InDepthSearch from "../principal/InDepthSearch";
export default {
  components: {
    SelectMainOptions,
    InDepthSearch
  },
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
  }
};
</script>

<style>
</style>
