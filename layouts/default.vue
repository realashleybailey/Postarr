<template>
  <div>
    <VApp>
      <v-app>
        <v-app-bar app clipped-left>
          <v-toolbar v-model="drawer" color="primary" dark>
            <v-toolbar-title>Postarr</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text @click="logout">Logout</v-btn>
          </v-toolbar>
        </v-app-bar>
        <v-navigation-drawer :expand-on-hover="!$isMobile()" mini-variant rail permanent touchless>
          <v-list>
            <v-list-item :prepend-avatar="data?.user?.image || 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'" :title="data?.user?.name || 'Unknown'" :subtitle="data?.user?.email || 'user@example.com'"></v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
            <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
            <v-list-item prepend-icon="mdi-laptop" title="System" value="system"></v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-container>
          <VMain>
            <slot />
          </VMain>
        </v-container>
      </v-app>
    </VApp>
  </div>
</template>

<script lang="ts" setup>
const { data, signOut } = useSession();

const drawer = ref(false);

const logout = async () => {
  await signOut({
    redirect: true,
    callbackUrl: "http://localhost:3000/login",
  });
};
</script>
