<script setup>
import { ref } from "vue";
import ScrollReveal from "../components/ScrollReveal.vue";

const moreSection = ref(null);

function scrollToMore() {
  moreSection.value?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
</script>

<template>
  <section class="about-intro d-flex flex-column">
    <v-row class="align-center">
      <v-col>
        <h1 class="text-secondary">Audrey D.</h1>
      </v-col>
      <v-spacer />
      <v-col>
        <v-row class="justify-space-around">
          <v-btn target="_blank" href="mailto:whodrey@gmail.com">
            <v-icon color="primary">mdi-email-fast-outline</v-icon>
          </v-btn>
          <v-btn target="_blank" href="https://github.com/Whodrey">
            <v-icon color="primary">mdi-github</v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title> About me </v-card-title>
          <v-card-text>yes</v-card-text>
        </v-card>
      </v-col>
      <v-col> </v-col>
    </v-row>

    <v-spacer />

    <v-row class="justify-center">
      <v-btn
        aria-label="Scroll to more"
        class="scroll-cue"
        color="primary"
        icon="mdi-chevron-down"
        size="x-large"
        variant="text"
        @click="scrollToMore"
      />
    </v-row>
  </section>

  <section ref="moreSection" class="about-more pt-8">
    <ScrollReveal>
      <v-row>
        <v-col>
          <v-sheet class="px-4 py-2">
            <h2>Background</h2>
            <v-row>
              <v-col> 2026 </v-col>
              <v-col>Apprenticeship</v-col>
            </v-row>
          </v-sheet>
        </v-col>
      </v-row>
    </ScrollReveal>

    <ScrollReveal :delay="100">
      <v-row>
        <v-col>
          <v-sheet> </v-sheet>
        </v-col>
      </v-row>
    </ScrollReveal>

    <ScrollReveal :delay="200">
      <v-row>
        <v-col>
          <v-sheet> </v-sheet>
        </v-col>
      </v-row>
    </ScrollReveal>
  </section>
</template>

<style scoped>
.about-intro {
  min-height: calc(100svh - 96px);
}

.about-more {
  scroll-margin-top: 88px;
  min-height: 30svh;
}

.scroll-cue {
  animation: scroll-cue 1.6s ease-in-out infinite;
}

@keyframes scroll-cue {
  50% {
    transform: translateY(8px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .scroll-cue {
    animation: none;
  }
}
</style>
