<template>
  <div>
    <VApp>
      <v-app>
        <v-toolbar color="primary" dark>
          <v-toolbar-title>Postarr</v-toolbar-title>
          <v-spacer></v-spacer>
          {{ $colorMode.preference }}
        </v-toolbar>
        <v-container>
          <VMain>
            <slot />
          </VMain>
        </v-container>
      </v-app>
    </VApp>
  </div>
</template>
