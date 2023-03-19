<template>
  <v-card>
    <v-card-title>Release Notes</v-card-title>
    <v-list>
      <v-list-item-group v-model="selectedItem">
        <v-list-item v-for="item in releaseNotes" :key="item.version">
          <v-list-item-title>{{ item.version }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.date }}</v-list-item-subtitle>
          <v-list-item-content>{{ item.description }}</v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: null,
      releaseNotes: [
        {
          version: "v1.0.0",
          date: "March 1, 2022",
          description: "Initial release",
        },
        {
          version: "v1.1.0",
          date: "March 15, 2022",
          description: "Added feature X and Y",
        },
        {
          version: "v1.2.0",
          date: "April 1, 2022",
          description: "Fixed bugs A, B, and C",
        },
      ],
    };
  },
};
</script>
