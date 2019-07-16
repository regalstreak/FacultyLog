<template>
  <v-container>
    <img class="selectDisable options_image" src="@/assets/ttc/enter_timetable.svg" alt />
    <v-layout>
      <v-flex xs5>
        <v-layout column>
          <v-flex>
            <v-combobox
              v-model="university.selected"
              :items="university.items"
              prepend-icon="location_city"
              prefix="University: "
            ></v-combobox>
          </v-flex>
          <v-flex>
            <v-combobox
              v-model="college.selected"
              :items="college.items"
              prepend-icon="account_balance"
              prefix="College: "
            ></v-combobox>
          </v-flex>
          <v-flex>
            <v-combobox
              v-model="departmentSelect"
              :items="department"
              prepend-icon="school"
              prefix="Department: "
            ></v-combobox>
          </v-flex>
          <v-flex>
            <v-combobox
              v-model="yearSelect"
              :items="year"
              prepend-icon="calendar_today"
              prefix="Year: "
            ></v-combobox>
          </v-flex>
          <!-- <v-flex>
            <v-combobox v-model="select" :items="items" prepend-icon="sort_by_alpha" prefix="Division: "></v-combobox>
          </v-flex>-->
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { getDepartments } from "../../api/API";

export default {
  mounted() {},
  data() {
    return {
      university: {
        selected: "D. Y. Patil University",
        items: ["D. Y. Patil University"]
      },
      departmentSelect: "",
      college: {
        selected: "RAIT",
        items: ["RAIT"]
      },
      yearSelect: "FE"
    };
  },
  computed: {
    year() {
      const vm = this;
      if (vm.departmentSelect == "Engineering Science") {
        vm.yearSelect = "FE";
        return ["FE"];
      } else {
        vm.yearSelect = "SE";
        return ["SE", "TE", "BE"];
      }
    }
  },
  asyncComputed: {
    async department() {
      const vm = this;
      return await getDepartments(vm.college.select)
        .then(res => {
          let nameDepartments = [];
          res.data.forEach(element => {
            nameDepartments.push(element.name);
          });
          vm.departmentSelect = nameDepartments[0];
          return nameDepartments;
        })
        .catch(err => {
          console.log(err);
          return [1, 2, 3, "error"];
        });
    }
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
