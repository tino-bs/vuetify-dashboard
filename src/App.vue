<template>
  <v-app>
    <TheLogin class="mx-auto mt-5"></TheLogin>
  </v-app>
</template>

<script>
  import TheLogin from './components/TheLogin.vue'

export default {
  name: 'App',

  components: {
    TheLogin
  },

  data: () => ({
    showPassword: false
  }),
};
</script>
