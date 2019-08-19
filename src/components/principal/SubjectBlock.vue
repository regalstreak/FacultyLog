<template>
  <div class="subject-container">
    <!-- {{ subject }} -->
    <div v-if="subject">
      <div v-if="subject.type=='All'">
        <v-card :color="getColor(subject.info.subject)" flat class="subject-card">
          <v-card-text>
            {{ subject.info.subject }}
            <br />
            <br />
            {{ subject.info.name }}
            <br />
            <br />
            {{ subject.info.room }}
          </v-card-text>
        </v-card>
      </div>
      <div v-else>
        <!-- practical batches -->
        <div @click="hover = true">
          <v-card :color="getColor(subject.info.subject)" flat class="subject-card">
            <v-card-text>
              Practicals/Elective
              <br />
              <br />
              <br />
              <br />Click to view
            </v-card-text>
          </v-card>
        </div>
        <v-dialog v-model="hover" max-width="400">
          <v-card :color="getColor(subject.info.subject)" class="dialog">
            <v-card-title class="pracs-title">
              {{ subject.info[0].start_time }} -
              {{ subject.info[0].end_time }}
            </v-card-title>
            <v-card-text>
              <v-layout justify-center align-items-center wrap>
                <v-flex xs4 class="subject-flex" v-for="(x, index) in subject.info" :key="index">
                  <v-card class="subject-card-loop">
                    <v-card-text>
                      <span class="teacher_name">{{ x.subject }}</span>
                      <br />
                      {{ x.name }}
                      <br />
                      {{ x.batch }}
                      <br />
                      {{ x.room }}
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
    </div>
    <div v-else>
      <v-card flat class="subject-card">
        <v-card-text>none</v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: false
    };
  },
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
.pracs-title {
  background: #2C2C2C;
  color: white;
  font-size: 1.2rem;
  font-weight: 400;
}

.dialog {
  background: #f0f0f0;
  border-radius: 16px;
}

.subject-container {
  width: 12rem;
  overflow: hidden;
}

.subject-card {
  margin: 1rem 0;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0);
  text-align: center;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
}

.subject-card-loop {
  border-radius: 8px;
}

.subject-flex {
  margin: 1rem;
}

.teacher_name {
  font-weight: 600;
}
</style>
