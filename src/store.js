import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mainOptions: {
      university: "D. Y. Patil University",
      college: "RAIT",
      department: "",
      year: "FE"
    }
  },
  mutations: {
    changeMainOptions(state, payload) {
      switch (payload.type) {
        case "university": {
          state.mainOptions.university = payload.option;
          break;
        } case "college": {
          state.mainOptions.college = payload.option;
          break;
        } case "department": {
          state.mainOptions.department = payload.option;
          // FE hack
          if (payload.option === 'FE') {
            state.mainOptions.year = 'FE';
          }
          break;
        } case "year": {
          state.mainOptions.year = payload.option;
          break;
        } default: {
          break;
        }
      }

    }
  },
  actions: {

  }
})
