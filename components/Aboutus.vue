<template>
  <div class="bg-white">
    <div class="d-none d-md-block align-center justify-center">
      <v-container class="pt-lg-8">
        <br />
        <v-row>
          <v-col cols="4" class="mt-5">
            <div class="mainblock">
              <div class="thinLine" />
              <div
                :class="{
                  block: !data.showVisionContent,
                  'block-with-margin': data.showVisionContent,
                }"
              />
              <div class="">
                <h2 class="sideHead" @click="toggleContent('about')">
                  ABOUT US
                </h2>
                <h2 class="sideHead mt-8" @click="toggleContent('vision')">
                  VISION
                </h2>
              </div>
            </div>
          </v-col>
          <v-col cols="8" class="mt-3">
            <p
              style="line-height: 50px"
              v-if="!data.showVisionContent"
              class="sharpsans-h1"
            >
              At
              <span style="color: #138064; font-weight: 600"
                >White Water Media</span
              >, marketing magic and business growth flow together like a
              harmonious river. With a unique blend of marketing insight and
              creative flair, we're here to turn the tides in your favor, making
              your brand's presence felt strongly and sustainably in the
              marketplace.
            </p>
            <p v-if="data.showVisionContent" class="sharpsans-h1">
              Visualize a dynamic confluence where marketing innovation meets
              compelling brand stories, creating a powerful current that leads
              and transforms, making waves in the market.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="d-block d-md-none">
      <h2 class="sideHead text-center pa-5">ABOUT US</h2>
      <p class="sharpsans-h1 text-center mt-2 pa-2">
        At
        <span style="color: #138064; font-weight: 600">White Water Media</span>,
        marketing magic and business growth flow together like a harmonious
        river. With a unique blend of marketing insight and creative flair,
        we're here to turn the tides in your favor, making your brand's presence
        felt strongly and sustainably in the marketplace.
      </p>
      <h2 class="sideHead text-center mt-8 mb-5">VISION</h2>
      <p class="sharpsans-h1 mt-2 text-center pa-2">
        Visualize a dynamic confluence where marketing innovation meets
        compelling brand stories, creating a powerful current that leads and
        transforms, making waves in the market.
      </p>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />

    <v-container fluid>
      <v-row>
        <v-col>
          <v-img
            class="image-move"
            src="/images/craftingimpact.png"
            width="900"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;

    if (scrollPosition >= document.querySelector(".image-move").offsetHeight) {
      document.querySelector(".image-move").classList.add("image-move");
    }
  });
});
const data = reactive({
  showVisionContent: false,
});

const toggleContent = (section) => {
  console.log("Clicked");
  if (section === "vision") {
    console.log("Inside vision");
    data.showVisionContent = true;
    console.log(data.showVisionContent);
  } else {
    data.showVisionContent = false;
  }
};
</script>

<style scoped>
.paraAbout {
  font-size: 30px;
  font-style: normal;
  font-weight: 300;
  line-height: 61px;
}
.sideHead {
  font-size: 30px;
  font-weight: 700;
  line-height: 32.64px; /* 81.6% */
  letter-spacing: 8px;
}
.thinLine {
  height: 100px;
  width: 2px;
  background-color: #616161;
}

.block-with-margin {
  width: 5px;
  height: 30px;
  background-color: #138064;
  margin-right: 16px;
}
.image-move {
  animation: slide-in 2s forwards;
}

@keyframes slide-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
