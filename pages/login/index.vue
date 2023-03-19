<template>
  <div>
    <h1>Sign In</h1>
    <p class="text-medium-emphasis">Enter your details to get started</p>

    <VForm class="mt-7" @submit.prevent="submit">
      <div class="mt-1">
        <label class="label text-grey-darken-2" for="email"> Email </label>
        <VTextField id="email" v-model="email" :rules="[ruleRequired, ruleEmail]" prepend-inner-icon="fluent:mail-24-regular" name="email" type="email" />
      </div>
      <div class="mt-1">
        <label class="label text-grey-darken-2" for="password"> Password </label>
        <VTextField id="password" v-model="password" :rules="[ruleRequired, rulePassLen]" prepend-inner-icon="fluent:password-20-regular" name="password" type="password" />
      </div>
      <div class="mt-5">
        <VBtn type="submit" block min-height="44" class="gradient primary">Sign In</VBtn>
      </div>
    </VForm>
    <p class="text-center text-caption mt-10">
      <span>
        Don't have an account?
        <NuxtLink to="/signup" class="font-weight-bold text-primary"> Sign Up </NuxtLink>
      </span>
    </p>
  </div>
</template>

<script setup>
useHead({
  title: "Sign In",
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Sign In",
    },
  ],
});

definePageMeta({
  layout: "auth",
});

const email = ref("");
const password = ref("");

const { ruleEmail, rulePassLen, ruleRequired } = useFormRules();

const submit = async () => {
  useFetch("/api/auth/login", {
    method: "POST",
    body: {
      email: email.value,
      password: password.value,
    },
  });
};
</script>
