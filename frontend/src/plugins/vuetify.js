import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "main",
    themes: {
      main: {
        dark: false,
        colors: {
          primary: "#012A36",
          secondary: "#29274C",
          tertiary: "#7E52A0",
          background: "#F1F2EB",
          error: "#E71D36",
          info: "#A7C4C2",
          success: "#7DAA92",
          warning: "#E9B872",
        },
      },
    },
  },
});
