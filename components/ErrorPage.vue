<template>
  <v-container v-if="scaffolding">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card color="red lighten-1" dark>
          <v-card-title v-if="errorTitle">{{ errorTitle }}</v-card-title>
          <v-card-text v-if="errorMessage">{{ errorMessage }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <div v-else>
    <v-card color="red lighten-1" dark>
      <v-card-title v-if="errorTitle">{{ errorTitle }}</v-card-title>
      <v-card-text v-if="errorMessage">{{ errorMessage }}</v-card-text>
    </v-card>
  </div>
</template>

<script setup>
defineProps({
  errorTitle: {
    type: String,
    default: null,
  },
  errorMessage: {
    type: String,
    default: "An error has occurred.",
  },
  scaffolding: {
    type: Boolean,
    default: false,
  },
});
</script>
