<template>
  <div>
    <VApp>
      <v-app>
        <v-toolbar color="primary" dark>
          <v-toolbar-title>Postarr</v-toolbar-title>
        </v-toolbar>
        <VMain class="mainContent">
          <VContainer fluid class="fill-height">
            <VRow no-gutters align="center" justify="center" class="fill-height">
              <VCol cols="12" md="6" lg="5" sm="6">
                <VRow no-gutters align="center" justify="center">
                  <VCol cols="12" md="6">
                    <slot />
                  </VCol>
                </VRow>
              </VCol>
              <VCol class="hidden-md-and-down fill-height" md="6" lg="7"> </VCol>
            </VRow>
          </VContainer>
        </VMain>
      </v-app>
    </VApp>
  </div>
</template>

<style>
.mainContent {
  position: absolute;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;
}

.welcomeContent {
  text-align: right;
}
</style>
