<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
              v-for="link in links"
              :key="`${link.label}-header-link`"
              text
              :to="link.url">
        {{ link.label }}
      </v-btn>
    </v-app-bar>
    <v-content>
    <router-view/>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data: () => ({
      appTitle: 'Vuetify Dashboard',
      links: [
        {
          label: 'Home',
          url: '/'
        },
        {
          label: 'Login',
          url: '/login'
        }
      ],
    }),
    components: {
    },
  };
</script>
