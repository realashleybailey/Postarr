<template>
  <div>
    <h1>Sign Up</h1>
    <p class="text-medium-emphasis">Enter your details to get started</p>

    <VForm v-if="!disabledSignups" class="mt-7" @submit.prevent="submit">
      <div>
        <label class="label text-grey-darken-2" for="name">Name</label>
        <VTextField id="name" v-model="name" :rules="[ruleRequired]" prepend-inner-icon="fluent:person-24-regular" name="name" autocomplete="name" />
      </div>
      <div class="mt-1">
        <label class="label text-grey-darken-2" for="email">Username</label>
        <VTextField id="username" v-model="username" :rules="[ruleRequired]" type="username" prepend-inner-icon="fluent:person-24-regular" name="username" />
      </div>
      <div class="mt-1">
        <label class="label text-grey-darken-2" for="email">Email</label>
        <VTextField id="email" v-model="email" :rules="[ruleRequired, ruleEmail]" type="email" prepend-inner-icon="fluent:mail-24-regular" name="email" autocomplete="email" />
      </div>
      <div class="mt-1">
        <label class="label text-grey-darken-2" for="password"> Password </label>
        <VTextField id="password" v-model="password" :rules="[ruleRequired, rulePassLen]" type="password" prepend-inner-icon="fluent:password-20-regular" name="password" autocomplete="new-password" />
      </div>
      <div class="mt-5">
        <VBtn type="submit" block min-height="45" class="gradient primary">Create Account</VBtn>
      </div>
    </VForm>

    <ErrorPage v-if="disabledSignups" error-message="Admin has disabled signups." :scaffolding="false" class="mt-5" />

    <p class="text-center text-caption mt-10">
      <span>Already have an account? <NuxtLink to="/login" class="font-weight-bold text-primary">Sign In</NuxtLink></span>
    </p>
  </div>
</template>

<script setup>
useHead({ title: "Sign Up" });
definePageMeta({ layout: "auth", auth: false });

const { ruleEmail, rulePassLen, ruleRequired } = useFormRules();
const disabledSignups = false;

const name = ref("");
const email = ref("");
const password = ref("");

const submit = async () => {
  useFetch(
    "/api/auth/signup",
    {
      method: "POST",
      body: JSON.stringify({
        name: name.value,
        username: username.value,
        email: email.value,
        password: password.value,
      }),
    },
    {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};
</script>
