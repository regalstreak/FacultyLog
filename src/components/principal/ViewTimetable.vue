<template>
  <v-card>
    {{ info }}
    <v-card-title>
      Nutrition
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="desserts" :search="search" hide-actions>
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <!-- <td class="text-xs-center">{{ props.item.calories }}</td>
        <td class="text-xs-center">{{ props.item.fat }}</td>
        <td class="text-xs-center">{{ props.item.carbs }}</td>
        <td class="text-xs-center">{{ props.item.protein }}</td>
        <td class="text-xs-center">{{ props.item.iron }}</td>
        <td class="text-xs-center">{{ props.item.iron }}</td>
        <td class="text-xs-center">{{ props.item.iron }}</td>
        <td class="text-xs-center">{{ props.item.iron }}</td>-->
        <td>
          <subject-block></subject-block>
        </td>
        <td>
          <subject-block></subject-block>
        </td>
        <td>
          <subject-block></subject-block>
        </td>
        <td>
          <subject-block></subject-block>
        </td>
        <td>
          <subject-block></subject-block>
        </td>
        <td>
          <subject-block></subject-block>
        </td>
        <td>
          <subject-block></subject-block>
        </td>
        <td>
          <subject-block></subject-block>
        </td>
      </template>
      <template v-slot:no-results>
        <v-alert
          :value="true"
          color="error"
          icon="warning"
        >Your search for "{{ search }}" found no results.</v-alert>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
// import axios from "axios";
import SubjectBlock from "./SubjectBlock";
import { test } from "../../api/API";

export default {
  components: {
    SubjectBlock
  },
  mounted() {
    // axios
    //   // .get("http://192.168.43.208:8000/")
    //   .then(response => console.log(response))
    //   .catch(err => console.log(err));

    test().then(res => console.log(res));
  },
  data() {
    return {
      info: "asdjasdbhasjdasbhd",
      search: "",
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Calories", sortable: false, value: "calories" },
        { text: "Fat (g)", sortable: false, value: "fat" },
        { text: "Carbs (g)", sortable: false, value: "carbs" },
        { text: "Protein (g)", sortable: false, value: "protein" },
        { text: "Iron (%)", sortable: false, value: "iron" },
        { text: "Iron (%)", sortable: false, value: "iron" },
        { text: "Iron (%)", sortable: false, value: "iron" },
        { text: "Iron (%)", sortable: false, value: "iron" }
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%"
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%"
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
td {
  padding: 0 !important;
  margin: 0 !important;
}
</style>
