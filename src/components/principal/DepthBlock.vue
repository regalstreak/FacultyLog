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
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["allInfo"]
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
</style>
