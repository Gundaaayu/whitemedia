// plugins/vuetify.js
import { createVuetify } from "vuetify";

// colors

const dark = {
  variables: {},
  colors: {
    background: "#fff",
    primary: "#00041D",
    secondary: "#D9D9D9",
    surface: "#FFFFFF",
    fontsec: "737B8F",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
    footer: "#333333",
  },
};

// export

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,

    theme: {
      defaultTheme: "dark",
      themes: {
        dark,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
