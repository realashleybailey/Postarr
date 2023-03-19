<template>
  <select v-model="$colorMode.preference">
    <option value="system">System</option>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
    <option value="sepia">Sepia</option>
  </select>
</template>

<script setup>
import { useTheme } from "vuetify";

useHead({
  title: "Home",
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Home",
    },
  ],
});

const theme = useTheme();
theme.global.name = "dark";
</script>
