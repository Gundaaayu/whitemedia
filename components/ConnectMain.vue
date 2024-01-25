<template>
  <div class="bg-white">
    <br />
    <v-container fluid>
      <v-row>
        <v-col class="text-center my-auto" cols="12" lg="6">
          <img class="images" src="/images/connect1.png" alt="" />
        </v-col>
        <v-col class="mt-5" cols="12" lg="6">
          <v-row>
            <v-col cols="12">
              <h1>Connect</h1>
            </v-col>
            <v-col cols="10">
              <p class="para mb-5">
                From the pulsating heart of Bangalore, we’re crafting,
                strategizing, and subtly sprinkling marketing magic into the
                river of digital influence. Are you ready to dive in?
              </p>
            </v-col>
            <v-col cols="12" class="mt-5">
              <h1 class="heading">Are you ready to dive in ?</h1>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.images {
  /* height: 450px; */
  border-radius: 20px;
}
.para {
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 48px;
}
@media (max-width: 420px) {
  .images {
    width: 350px;
  }
  .heading {
    font-size: 29px;
  }
}
@media (max-width: 380px) {
  .images {
    width: 300px;
  }
}
</style>
