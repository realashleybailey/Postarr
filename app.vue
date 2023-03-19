<template>
  <div class=".${color}-mode">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>
// import { useTheme } from "vuetify";

const colorMode = useColorMode();

// const theme = useTheme();

console.log(color.value);
console.log(colorMode.value);

// if (color.value === "dark") {
//   theme.global.name.value = "dark";
// }

// if (color === "light") {
//   theme.global.name.value = "light";
// }

// if (color === "system") {
//   const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
//   theme.global.name.value = systemTheme;
// }
</script>
