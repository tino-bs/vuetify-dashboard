<template>
  <v-card width="400">
    <v-card-title>
      <h1 class="display-1">Login</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
                label="Username"
                prepend-inner-icon="mdi-account-circle" outlined dense
                clearable />
        <v-text-field
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                prepend-inner-icon="mdi-lock" outlined dense
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                clearable />
      </v-form>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="accent">Register</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="secondary">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'TheLogin',

    data: () => ({
      showPassword: false
    }),
  }
</script>
