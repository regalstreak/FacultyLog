<template>
  <v-card class="subject-card">
    <v-card-text>
      <span class="teacher_name">{{ allInfo.sdrn }}</span>
      <br />
      {{ allInfo.subject }}
      <br />
      {{ allInfo.start_time }} - {{ allInfo.end_time }}
      <br />
      {{ allInfo.room }}
      <br />
      {{ allInfo.year }} - {{ allInfo.division }} - {{ allInfo.batch }}
      <v-icon class="delete" @click="deleteTimetable" color="red">close</v-icon>
    </v-card-text>
  </v-card>
</template>

<script>
import { deleteTimetable } from "../../api/API";
export default {
  props: ["allInfo"],
  methods: {
    deleteTimetable() {
      console.log("deleting ", this.allInfo.srno);
      deleteTimetable("RAIT", this.allInfo.srno).catch(err => console.log(err));

      // emit ourDelete to indepthview and emit parentDelete to entertimetable for clearing up after clicking delete
      this.$emit("ourDelete", this.allInfo.srno);
    }
  }
};
</script>

<style scoped lang="stylus">
.teacher_name {
  font-weight: 600;
}

.subject-card {
  margin: 1rem 0.5rem;
  height: 10rem;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0);

  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
}

.delete {
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 12px;
  padding: 4px;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  pointer-events: auto;

  &:hover {
    background: #AA000066;
    cursor: pointer;
    border-radius: 50%;
  }
}
</style>
