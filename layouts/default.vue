<template>
  <v-app id="inspire">
    <v-main>
      <div
        v-if="loading == true"
        class="bg-black"
        style="position: relative; height: 100vh; width: 100%; z-index: 19999"
      >
        <v-sheet class="inner-absolute-layout" style="background: transparent">
          <img
            class="image-loader"
            src="../public/images/smalllogo.png"
            alt="image loader"
          />
        </v-sheet>
      </div>
      <div class="bg-primary">
        <Navbar />

        <slot />
      </div>
    </v-main>
  </v-app>
</template>
<script setup>
const loading = ref(true);
setTimeout(() => {
  loading.value = false;
}, 1000);
</script>
<style scoped>
.inner-absolute-layout {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.image-loader {
  width: 100px;
  animation: spin 4s linear infinite;
}
@keyframes spin {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
