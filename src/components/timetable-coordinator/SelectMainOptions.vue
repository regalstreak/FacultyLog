<template>
  <v-container>
    <img class="options_image" src="@/assets/ttc/enter_timetable.svg" alt />
    <v-layout>
      <v-flex xs5>
        <v-layout column>
          <v-flex>
            <v-combobox v-model="select" :items="items" prepend-icon="location_city" prefix="University: "></v-combobox>
          </v-flex>
          <v-flex>
            <v-combobox v-model="select" :items="items" prepend-icon="account_balance" prefix="Department: "></v-combobox>
          </v-flex>
          <v-flex>
            <v-combobox v-model="select" :items="items" prepend-icon="calendar_today" prefix="Year: "></v-combobox>
          </v-flex>
          <v-flex>
            <v-combobox v-model="select" :items="items" prepend-icon="sort_by_alpha" prefix="Division: "></v-combobox>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      select: "Programming",
      items: ["Programming", "Design", "Vue", "Vuetify"]
    };
  }
};
</script>

<style lang="stylus" scoped>
.options_image {
  position: absolute;
  right: 4rem;
  width: 40%;
  top: 12%;
}
</style>
