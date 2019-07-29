<template>
  <div>
    <v-expansion-panels>
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
  }
};
</script>

<style>
</style>
