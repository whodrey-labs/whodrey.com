<script setup>
import TopBar from "./components/TopBar.vue";
</script>

<template>
  <v-app>
    <TopBar />
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
