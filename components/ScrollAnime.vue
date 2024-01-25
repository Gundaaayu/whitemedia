<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <div class="scrolling-container">
            <div class="scrolling-images">
              <v-img src="/images/scrolllogo.png" />
              <v-img src="/images/scrolllogo2.png" />
            </div>

            <!-- <v-img src="/images/scrolllogo2.png"></v-img> -->
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col class="my-auto" cols="12" xxl="6" xl="6" lg="6">
          <p class="dinlight-h1">
            <span>
              In the rapid currents of today’s digital landscape, White Water
              Media is your steadfast navigator,channeling the magic of
              marketing to fuel your brand's seamless and robust growth.
            </span>
          </p>
        </v-col>
        <v-col cols="12" xxl="6" xl="6" lg="6">
          <v-img
            ref="animatedImage"
            class="mx-auto"
            src="/images/astrau.png"
            width="400"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<!-- <script setup>
import anime from "animejs";
import { onMounted, onBeforeUnmount } from "vue";

const handleScroll = () => {
  //for Text
  const animatedText = document.querySelector(".animated-text");
  const rect = animatedText.getBoundingClientRect();
  const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;

  //for Image
  const animatedImage = document.querySelector(".imageanime");
  const rectImage = animatedImage.getBoundingClientRect();
  const isInViewportImage =
    rectImage.top >= 0 && rectImage.bottom <= window.innerHeight;

  //for Text
  if (isInViewport) {
    anime({
      targets: animatedText,
      translateY: [100, 0],
      opacity: [0, 1],
      easing: "easeOutQuad",
      duration: 1000,
    });

    window.removeEventListener("scroll", handleScroll);
  }

  //for image
  if (isInViewportImage) {
    anime({
      targets: animatedImage,
      translateY: [300, 0],
      opacity: [0, 1],
      easing: "easeOutQuad",
      duration: 1500,
    });

    window.removeEventListener("scroll", handleScroll);
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script> -->

<style scoped>
.text-para {
  font-size: 32px;
  line-height: 56.5px;
}

.scrolling-container {
  overflow: hidden;
}
.scrolling-images {
  display: flex;
  width: 200%;
  max-width: 200%;
  animation: scroll 10s linear infinite;
}
@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.animated-text {
  display: block;
  opacity: 0;
}
</style>
