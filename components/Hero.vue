<template>
  <div>
    <!-- <v-container fluid>
      <v-row class="justify-center">
        <v-col cols="1">
          <v-img src="/images/mainpage/img1.png" />
        </v-col>
        <v-col cols="1">
          <v-img src="/images/mainpage/img2.png" />
        </v-col>
        <v-col cols="1">
          <v-img src="/images/mainpage/img3.png" />
        </v-col>
        <v-col cols="1">
          <v-img src="/images/mainpage/img4.png" />
        </v-col>
        <v-col cols="1">
          <v-img src="/images/mainpage/img5.png" />
        </v-col>
        <v-col cols="1">
          <v-img src="/images/mainpage/img6.png" />
        </v-col>
        <v-col cols="1">
          <v-img src="/images/mainpage/img7.png" />
        </v-col>
        <v-col cols="1">
          <v-img src="/images/mainpage/img8.png" />
        </v-col>
        <v-col cols="1">
          <v-img src="/images/mainpage/img9.png" />
        </v-col>
        <v-col cols="1">
          <v-img src="/images/mainpage/img10.png" />
        </v-col>
      </v-row>
    </v-container> -->
    <v-container class="pa-0 d-none d-md-block" fluid>
      <v-row>
        <v-col cols="12">
          <v-img src="/images/banner.jpg" />
        </v-col>
      </v-row>
    </v-container>
    <v-container class="pa-0 d-block d-md-none" fluid>
      <v-row>
        <v-col cols="12">
          <v-img src="/images/banner-small.png" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
// const { $anime } = useNuxtApp();

// onMounted(() => {
//   $anime({
//     targets: ".title",
//     translateX: 270,
//     direction: "alternate",
//     loop: false,
//     duration: 2000,
//     easing: function (el, i, total) {
//       return function (t) {
//         return Math.pow(Math.sin(t * (i + 1)), total);
//       };
//     },
//   });
// });
</script>
