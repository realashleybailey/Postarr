<template>
  <div>
    <h1>Sign In</h1>
    <p class="text-medium-emphasis">Enter your details to get started</p>

    <VForm class="mt-7" :on-submit="() => {}">
      <div class="mt-1">
        <label class="label text-grey-darken-2" for="username"> Username </label>
        <VTextField id="username" v-model="username" :rules="[ruleRequired]" prepend-inner-icon="fluent:person-24-regular" name="username" type="username" />
      </div>
      <div class="mt-1">
        <label class="label text-grey-darken-2" for="password"> Password </label>
        <VTextField id="password" v-model="password" :rules="[ruleRequired, rulePassLen]" prepend-inner-icon="fluent:password-20-regular" name="password" type="password" />
      </div>
    </VForm>

    <v-card v-if="errorMessages" color="red lighten-1 mt-2" dark>
      <v-card-text>{{ errorMessages }}</v-card-text>
    </v-card>

    <div class="mt-3">
      <VBtn block min-height="44" class="gradient primary" @click="credsSignin()">Sign In</VBtn>
      <GithubBtn block min-height="44" class="mt-2" @click="githubSignin()">Sign In with Github</GithubBtn>
    </div>

    <p class="text-center text-caption mt-10">
      <span>
        Don't have an account?
        <NuxtLink to="/signup" class="font-weight-bold text-primary"> Sign Up </NuxtLink>
      </span>
    </p>
  </div>
</template>

<script setup lang="ts">
import RedirectAuthenticated from "~~/helpers/RedirectAuthenticated";

useHead({ title: "Sign In" });
definePageMeta({ layout: "auth", auth: false });

const { signIn } = useSession();
const { rulePassLen, ruleRequired } = useFormRules();
const route = useRoute();

const errorMessages = ref("");
const username = ref("");
const password = ref("");

RedirectAuthenticated(route.query.callbackUrl as string);

const githubSignin = async () => {
  const { error, url } = await signIn("github", {
    redirect: false,
  });

  if (error) {
    errorMessages.value = error;
    console.log(error);
  } else {
    navigateTo(url, { external: true });
  }
};

const credsSignin = async () => {
  const { error, url } = await signIn("credentials", {
    username: username.value,
    password: password.value,
    redirect: false,
  });

  if (error) {
    errorMessages.value = error;
    console.log(error);
  } else {
    navigateTo(url, { external: true });
  }
};
</script>
