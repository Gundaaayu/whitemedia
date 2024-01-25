<template>
  <div style="position: relative" class="bg-white">
    <v-container fluid>
      <v-row>
        <v-col>
          <div class="image-container d-none d-md-block" style="height: 100vh">
            <v-img src="/images/forest.png" cover />
            <div class="overlay" />
            <div class="text-container">
              <v-container>
                <v-row>
                  <v-col cols="12" lg="6">
                    <p class="overlay-text sharpsans-h2 text-left">
                      / Services
                    </p>
                  </v-col>
                  <v-col cols="6">
                    <v-row>
                      <v-col cols="2" class="pa-0">
                        <v-img
                          src="/images/arrow-left.png"
                          style="cursor: pointer"
                          width="50"
                          @click="previousContent"
                        />
                      </v-col>
                      <v-col cols="2" class="pa-0">
                        <v-img
                          src="/images/arrow.png"
                          style="cursor: pointer"
                          width="50"
                          @click="nextContent"
                        />
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
                <v-row class="justify-end">
                  <v-col cols="12" lg="6">
                    <h1 class="text-left sharpsans-h2">
                      {{ currentContent.title }}
                    </h1>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" lg="6">
                    <v-row>
                      <v-col cols="12" lg="6">
                        <h1 class="text-left sharpsans-h1">Unblocking</h1>
                        <h1 class="text-left sharpsans-h1">
                          Your Brand's Potential
                        </h1>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="12" lg="6">
                    <p class="text-left sharpsans-h3">
                      {{ currentContent.description }}
                    </p>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </div>
          <div class="image-container d-block d-md-none">
            <v-img src="/images/forest.png" cover />
            <div class="overlay" />
            <div class="text-container">
              <v-container>
                <v-row>
                  <v-col cols="12" lg="6">
                    <p class="overlay-text sharpsans-h2 text-left">
                      / Services
                    </p>
                  </v-col>
                  <v-col cols="6">
                    <v-row>
                      <v-col cols="2" class="pa-0 ml-2">
                        <v-img
                          src="/images/arrow-left.png"
                          width="50"
                          @click="previousContent"
                        />
                      </v-col>
                      <v-col cols="2" class="pa-0 ml-3">
                        <v-img
                          src="/images/arrow.png"
                          width="50"
                          @click="nextContent"
                        />
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
                <v-row class="justify-end">
                  <v-col cols="12" lg="6">
                    <h1 class="text-left sharpsans-h2">
                      {{ currentContent.title }}
                    </h1>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" lg="6">
                    <v-row>
                      <v-col cols="12" lg="6">
                        <h1 class="text-left sharpsans-h1">Unblocking</h1>
                        <h1 class="text-left sharpsans-h1">
                          Your Brand's Potential
                        </h1>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="12" lg="6">
                    <p class="text-left sharpsans-h3">
                      {{ currentContent.description }}
                    </p>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </div>
        </v-col>
      </v-row>
      <br />
    </v-container>
  </div>
</template>

<script setup>
const contents = [
  {
    title: "Social Media and Performance Marketing",
    description:
      "Each of our services, from crafting engaging social content to designing compelling digital ad campaigns, creates ripples of influence, impact and ROI.",
  },
  {
    title: "Media Production and Graphic Design",
    description:
      "With a lens that captures and crafts, we merge the traditional with the digital, weaving visual tales that flow smoothly, speaking and resonating with your audience.",
  },
  {
    title: "Digital Transformation",
    description:
      "Beyond mere websites, we craft portals of engaging digital experiences, where each interaction is a step deeper into the captivating waters of your brand.",
  },
  // Add more content here
];

let currentContentIndex = 0;

const currentContent = ref(contents[currentContentIndex]);

const nextContent = () => {
  if (currentContentIndex < contents.length - 1) {
    currentContentIndex++;
    currentContent.value = contents[currentContentIndex];
  }
};

const previousContent = () => {
  if (currentContentIndex > 0) {
    currentContentIndex--;
    currentContent.value = contents[currentContentIndex];
  }
};
</script>

<style scoped>
.image-container {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  mix-blend-mode: multiply;
  background: rgba(19, 128, 100, 0.9); /* Green color with 50% transparency */
}

.text-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  color: white; /* Set text color to white or a contrasting color */
}

.overlay-text {
  font-size: 24px; /* Adjust the font size as needed */
  font-weight: bold; /* Adjust the font weight as needed */
}
</style>
