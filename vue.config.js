const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/_variables.scss";
                         @import "@/assets/scss/_lib.scss";
                         @import "@/assets/scss/_mixin.scss";`,
      },
    },
  },
});
