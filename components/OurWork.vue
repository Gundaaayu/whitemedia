<template>
  <div class="bg-primary">
    <br />
    <v-container>
      <v-row class="justify-between">
        <v-col class="my-auto" cols="6">
          <div class="mainblock">
            <div class="block my-auto" />
            <h1 class="sharpsans-h2 head mt-2">Our work</h1>
          </div>
        </v-col>
        <v-col class="text-right" cols="6">
          <img
            style="cursor: pointer"
            src="/images/arrow-left.png"
            class="mr-4"
            alt="image"
            width="50"
            @click="scrollLeft"
          />

          <img
            style="cursor: pointer"
            src="/images/arrow.png"
            alt="image"
            width="50"
            @click="scrollRight"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12">
          <div
            ref="scrollContainer"
            style="overflow-x: auto; white-space: nowrap"
          >
            <div style="display: inline-block">
              <div class="d-flex">
                <div v-for="n in 5" :key="n">
                  <v-container>
                    <v-row>
                      <v-col>
                        <v-card class="ma-2 card" width="500px" height="380px">
                          <v-img src="/images/ourworkimg2.png" cover />
                          <div class="overlay-text text-primary" />
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-container>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
import { ref } from "vue";

const scrollContainer = ref(null);

const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollTo({
      left: scrollContainer.value.scrollLeft - 200,
      behavior: "smooth",
    });
  }
};

const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollTo({
      left: scrollContainer.value.scrollLeft + 200,
      behavior: "smooth",
    });
  }
};
</script>
<style>
.head {
  line-height: 32.64px; /* 81.6% */
  letter-spacing: 3px;
}
</style>
