<template>
  <div>
    <h2>Welcome to FacultyLog</h2>
    <v-layout column>
      <v-flex class="button-flex">
        <v-btn color="primary" to="/principal">Principal</v-btn>
      </v-flex>
      <v-flex class="button-flex">
        <v-btn color="primary" to="/ttc">Timetable Coordinator</v-btn>
      </v-flex>
    </v-layout>

  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.button-flex {
  margin: 20px 0;
}
</style>