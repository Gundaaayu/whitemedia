<template>
  <div
    class="bg-white d-flex align-center justify-center"
    style="height: 100vh"
  >
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="containerBlock">
            <v-img
              style="border-radius: 10px"
              class="mx-auto"
              src="/images/forest.png"
              width="300"
            >
              <div class="text-centers pa-0">
                <h1 class="sharpsans-h2 pa-0">
                  Unlocking Your Brand's Potential
                </h1>
                <v-img class="mx-auto" src="/images/arrow.png" width="50" />
              </div>
            </v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  mounted() {
    const zoomElement = document.querySelector(".containerBlock");
    let zoom = 1;
    const ZOOM_SPEED = 0.015;

    document.addEventListener("wheel", function (e) {
      if (e.deltaY > 0) {
        zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
      } else {
        zoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`;
      }
    });
  },
};
</script>

<style scoped>
.containerBlock {
  position: relative;
  text-align: center;
  color: white;
}
.text-centers {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
