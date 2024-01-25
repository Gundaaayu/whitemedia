<template>
  <div class="bg-primary">
    <v-container class="d-none d-md-block">
      <v-row>
        <v-col class="my-auto" cols="12" lg="6">
          <div class="globe">
            <v-img src="/images/globeround.png" height="400" />
            <div class="logosmall">
              <v-img src="/images/smalllogo.png" width="70" />
            </div>
            <div class="logosmall">
              <v-img src="/images/roundlogo.png" width="100"  class="roundlogo"  />
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="6">
          <v-row>
            <v-col cols="10">
              <h1 class="heading">Collaborate With Us</h1>
              <p class="para">
                Join us at the confluence where creativity and strategy blend,
                charting courses through the captivating waters of the market,
                navigating towards unparalleled success.
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="6">
              <v-text-field label="Name" variant="outlined" class="mt-5" />
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field label="Email ID" variant="outlined" class="mt-5" />
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field
                label="Company Name"
                variant="outlined"
                class="pa-0"
              />
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field label="Mobile Number" variant="outlined" />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-btn
                style="
                  background-color: #138064e5;
                  color: white;
                  font-weight: 600;
                "
              >
                Submit
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <br />
    </v-container>
    <v-container class="d-block d-md-none">
      <v-row>
        <v-col class="my-auto" cols="12" lg="6">
          <div class="globe">
            <v-img src="/images/globeround.png" height="400" />
            <div class="logosmall">
              <v-img src="/images/smalllogo.png" width="70" />
            </div>
            <div class="logosmall">
              <v-img src="/images/roundlogo.png" width="100" />
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="6">
          <v-row>
            <v-col cols="10">
              <div class="d-flex">
                <div class="block my-auto" />

                <h1 class="headingsmall">Collaborate With Us</h1>
              </div>
              <p class="para text-left">
                Join us at the confluence where creativity and strategy blend,
                charting courses through the captivating waters of the market,
                navigating towards unparalleled success.
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="6">
              <v-text-field label="Name" variant="outlined" class="mt-5" />
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field label="Email ID" variant="outlined" class="mt-5" />
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field
                label="Company Name"
                variant="outlined"
                class="pa-0"
              />
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field label="Mobile Number" variant="outlined" />
            </v-col>
          </v-row>
          <v-row>
            <v-col class="text-center" cols="12">
              <v-btn
                style="
                  background-color: #138064e5;
                  color: white;
                  font-weight: 600;
                "
              >
                Submit
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <br />
    </v-container>
  </div>
</template>

<style scoped>
.heading {
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 83.28px; /* 166.56% */
  letter-spacing: 1.92px;
}
.headingsmall {
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 83.28px; /* 166.56% */
  letter-spacing: 1.92px;
}
.para {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
}

.globe {
  position: relative;
}

.logosmall {
  position: absolute;
  top: 80%;
  left: 80%;
  transform: translate(-50%, -50%);
  text-align: center;
}
@media (max-width: 390px) {
  .headingsmall {
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 83.28px; /* 166.56% */
    letter-spacing: 1.92px;
  }
}
.roundlogo {
  animation-name: rotation;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.roundlogo {
  transition: transform 0.5s ease-in-out;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
