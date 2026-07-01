<script setup></script>

<template>
  <v-app-bar color="primary">
    <v-btn :active="false" to="/">
      <v-app-bar-title text="Whodrey"> </v-app-bar-title>
    </v-btn>

    <template v-slot:append>
      <v-btn to="/aboutme">About me</v-btn>
    </template>
  </v-app-bar>
</template>
