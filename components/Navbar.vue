<template>
  <div>
    <v-container class="d-none d-md-block">
      <v-row>
        <v-col cols="6">
          <NuxtLink to="/" style="text-decoration: none">
            <v-img src="/images/logo.png" width="220" contain />
          </NuxtLink>
        </v-col>
        <v-col cols="6" class="my-auto d-flex ga-10">
          <!-- <ul class="d-flex ga-14" style="list-style-type: none">
            <li><v-icon>mdi-star-four-points</v-icon> Home</li>
            <li><v-icon>mdi-star-four-points</v-icon> Service</li>
            <li><v-icon>mdi-star-four-points</v-icon> Our Maestros</li>
            <li><v-icon>mdi-star-four-points</v-icon> Contact Us</li>
          </ul> -->
          <NuxtLink to="/" style="text-decoration: none; color: white">
            <div class="d-flex ga-3">
              <p>Home</p>
              <v-icon class="my-auto" style="font-size: 18px">
                mdi-star-four-points
              </v-icon>
            </div>
          </NuxtLink>
          <NuxtLink to="#services" style="text-decoration: none; color: white">
            <div class="d-flex ga-3">
              <p>Service</p>
              <v-icon class="my-auto" style="font-size: 18px">
                mdi-star-four-points
              </v-icon>
            </div>
          </NuxtLink>
          <NuxtLink to="#maestros" style="text-decoration: none; color: white">
            <div class="d-flex ga-3">
              <p>OurMaestros</p>
              <v-icon class="my-auto" style="font-size: 18px">
                mdi-star-four-points
              </v-icon>
            </div>
          </NuxtLink>
          <NuxtLink
            to="#collaborate"
            style="text-decoration: none; color: white"
          >
            <div class="d-flex ga-3">
              <p>ContactUs</p>
              <v-icon class="my-auto" style="font-size: 18px">
                mdi-star-four-points
              </v-icon>
            </div>
          </NuxtLink>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="d-block d-md-none">
      <v-row class="justify-center">
        <NuxtLink to="/" style="text-decoration: none">
          <v-img src="/images/logo.png" width="180" contain />
        </NuxtLink>
        <v-col cols="6" class="my-auto">
          <ul class="d-flex ga-14 justify-end" style="list-style-type: none">
            <li>
              <v-menu v-if="showMenu" activator="parent">
                <template #activator="{ on, attrs }">
                  <v-icon v-bind="attrs" v-on="on"> mdi-menu </v-icon>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(item, index) in menuItems"
                    :key="index"
                    :value="index"
                  >
                    <NuxtLink
                      class="text-primary"
                      style="text-decoration: none"
                      :to="item.to"
                    >
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </NuxtLink>
                  </v-list-item>
                </v-list>
              </v-menu>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const menuItems = ref([
  { title: "Home", to: "/" },
  { title: "Service", to: "#services" },
  { title: "Our Maestros", to: "#maestros" },
  { title: "Contact Us", to: "#collaborate" },

  // add more items as needed
]);
const showMenu = ref(true);

const handleScroll = () => {
  showMenu.value = window.pageYOffset === 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
