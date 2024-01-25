<template>
  <div>
    <div class="d-none d-md-block">
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
        <v-container fluid class="pa-10 mb-10">
          <v-row class="mx-auto ml-lg-10">
            <v-col class="text-left" cols="12" xxl="6" xl="6" lg="6">
              <h1>Promise</h1>
              <p class="para">
                With White Water Media, transformation is as natural and
                powerful as the course of a river. Experience the magic as your
                brand not only grows but flourishes abundantl.
              </p>
            </v-col>
            <v-col class="mx-auto" cols="12" xxl="6" xl="6" lg="6">
              <v-img class="mx-auto" src="/images/footerlogo.png" width="400" />
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div style="background-color: #0b0f26">
        <v-container fluid>
          <v-row>
            <v-col class="text-center ml-lg-10" cols="12" lg="5">
              <v-row>
                <v-col cols="6">
                  <p>2023 White Water Media.</p>
                </v-col>
                <v-col class="text-left" cols="6">
                  <p>All rights reserved.</p>
                </v-col>
              </v-row>
            </v-col>
            <v-col class="text-center" cols="12" lg="6">
              <v-row>
                <v-col class="text-right" cols="6">
                  <p>Privacy Policy</p>
                </v-col>
                <v-col cols="6">
                  <p>Terms of Service</p>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <div class="d-block d-md-none">
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
        <v-container fluid class="pa-5 mb-10">
          <v-row class="mx-auto ml-lg-10">
            <v-col class="text-left" cols="12" xxl="6" xl="6" lg="6">
              <h1 class="text-center">Promise</h1>
              <p class="para text-center mt-2 mb-5">
                With White Water Media, transformation is as natural and
                powerful as the course of a river. Experience the magic as your
                brand not only grows but flourishes abundantl.
              </p>
            </v-col>
            <v-col class="mx-auto mt-10" cols="12" xxl="6" xl="6" lg="6">
              <v-img class="mx-auto" src="/images/footerlogo.png" width="400" />
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div style="background-color: #0b0f26">
        <v-container fluid>
          <v-row>
            <v-col class="text-center" cols="12" lg="6">
              <v-row>
                <v-col cols="6">
                  <p>2023 White Water Media.</p>
                </v-col>
                <v-col class="text-center" cols="6">
                  <p>All rights reserved.</p>
                </v-col>
              </v-row>
            </v-col>
            <v-col class="text-center" cols="12" lg="6">
              <v-row>
                <v-col class="text-center" cols="6">
                  <p>Privacy Policy</p>
                </v-col>
                <v-col cols="6">
                  <p>Terms of Service</p>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>

<style scoped>
.para {
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  /* line-height: 41.78px; */
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
  animation: slide-up 1s ease-out forwards;
  animation-delay: var(--delay);
  opacity: 0;
}

@keyframes slide-up {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
