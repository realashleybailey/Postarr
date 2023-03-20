<template>
  <div>
    <v-switch @change="toggleTheme"></v-switch>
    {{ status }}
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTheme } from "vuetify";

const { status } = useSession();

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
const darkMode = ref(false);

const toggleTheme = () => {
  theme.global.name.value = darkMode.value ? "mainDarkTheme" : "mainTheme";
  darkMode.value = !darkMode.value;
};
</script>
