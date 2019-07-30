<template>
  <div>
    <div style="float: right;" class="pb-4">
      <v-btn v-if="timetable" @click="expand">{{ expandText }}</v-btn>
    </div>
    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel v-for="(x,i) in timetable" :key="i">
        <v-expansion-panel-header>{{ x.day }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-layout wrap>
            <v-flex xs12 sm6 md4 lg3 xl2 v-for="(abc, index) in x.timetable" :key="index">
              <DepthBlock :allInfo="abc"></DepthBlock>
            </v-flex>
          </v-layout>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import DepthBlock from "./DepthBlock";
export default {
  props: ["timetable"],
  components: {
    DepthBlock
  },
  data() {
    return {
      panel: [0, 1, 2, 3, 4, 5],
      items: 6,
      expandText: "Contract All"
    };
  },
  methods: {
    expand() {
      if (this.panel.length === 0) {
        this.panel = [...Array(this.items).keys()].map((k, i) => i);
        this.expandText = "Contract All"
      } else {
        this.panel = [];
        this.expandText = "Expand All"
      }
    }
  }
};
</script>

<style>
</style>
