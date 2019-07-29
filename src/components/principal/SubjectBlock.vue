<template>
  <div class="subject-container">
    <v-card :color="getColor(subject.subject)" v-if="subject" flat class="subject-card">
      <v-card-text>
        <!-- <div :style="'background: ' + getColor(subject.subject)">{{ subject.subject }}</div> -->
        {{ subject.subject }}
        <br />
        <br />
        {{ subject.faculty }}
        <br />
        <br />
        {{ subject.class }}
      </v-card-text>
    </v-card>
    <v-card v-else flat class="subject-card">
      <v-card-text>none</v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["subject", "ourSubjects"],
  methods: {
    getColor(subject) {
      // if(subject == this.ourSubjects[0]){
      //     return 'blue'
      // }

      switch (subject) {
        case this.ourSubjects[0]: {
          return "#d4f2dbFF";
        }
        case this.ourSubjects[1]: {
          return "#cef7a0FF";
        }
        case this.ourSubjects[2]: {
          return "#fc9f5bFF";
        }
        case this.ourSubjects[3]: {
          return "#fbd1a2FF";
        }
        case this.ourSubjects[4]: {
          return "#ffa5abFF";
        }
        case this.ourSubjects[5]: {
          return "#3311CC66";
        }
        case this.ourSubjects[6]: {
          return "red";
        }
        default: {
          return "white";
        }
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.subject-container {
    width: 12rem;
    overflow: hidden;
}

.subject-card {
  margin: 1rem 0;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0);
  

  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
}
</style>
