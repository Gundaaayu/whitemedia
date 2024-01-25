<template>
  <div class="bg-primary ml-lg-3">
    <v-container class="pa-0 ml-lg-16 d-none d-md-block">
      <v-row>
        <v-col
          cols="12"
          lg="5"
          class="d-flex flex-column justify-space-between pa-5 pt-15 pb-16 ml-lg-15"
        >
          <div class="mainblock">
            <div class="block" />
            <h1 class="text-left sharpsans-h2 head my-auto mb-10">
              OUR MAESTROS
            </h1>
          </div>
          <br />
          <br />

          <h1 class="text-left sharpsans-h1 ml-lg-5 mb-10">
            {{ getActiveItem().name }}
            <p style="font-size: 12px" class="ml-1">Partner</p>
          </h1>
          <br />
          <br />
          <br />
          <br />
          <br />

          <p class="text-left ml-lg-5 sharpsans-h4">
            {{ getActiveItem().description }}
          </p>
        </v-col>

        <v-col class="mx-auto" cols="12" lg="6">
          <br />
          <br />
          <br />
          <br />

          <div class="mt-14 mb-14 ml-lg-14" style="height: 50vh">
            <div class="carousel">
              <ul class="carousel__list">
                <li
                  v-for="(item, index) in items"
                  :key="index"
                  :class="[
                    'carousel__item',
                    { carousel__item_active: item.active },
                  ]"
                  :data-pos="item.pos"
                  @click="update(item)"
                >
                  <img
                    style="height: 480px"
                    :src="getImageUrl(item.text)"
                    alt="carousel-item"
                  />
                </li>
              </ul>
            </div>
          </div>
          <br />
          <br />
          <br />

          <!-- <v-img src="images/logo.png" /> -->
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="pa-0 ml-lg-6 d-block d-md-none">
      <v-row>
        <v-col
          cols="12"
          lg="4"
          class="d-flex flex-column justify-space-between pa-5 pt-15 pb-16 ml-lg-15"
        >
          <div class="mainblock">
            <div class="block ml-2" />
            <h1 class="text-left sharpsans-h2 head my-auto mb-10">
              OUR MAESTROS
            </h1>
          </div>

          <h1 class="text-left sharpsans-h1 mb-10 pa-2">
            {{ getActiveItem().name }}
          </h1>
          <p>Partner</p>

          <p class="text-left sharpsans-h4 pa-2">
            {{ getActiveItem().description }}
          </p>
        </v-col>

        <v-col cols="12" lg="6">
          <div class="mt-14 mb-14" style="height: 50vh">
            <div class="carousel">
              <ul class="carousel__list">
                <li
                  v-for="(item, index) in items"
                  :key="index"
                  :class="[
                    'carousel__item',
                    { carousel__item_active: item.active },
                  ]"
                  :data-pos="item.pos"
                  @click="update(item)"
                >
                  <img
                    style="height: 480px"
                    :src="getImageUrl(item.text)"
                    alt="carousel-item"
                  />
                </li>
              </ul>
            </div>
          </div>
          <br />

          <!-- <v-img src="images/logo.png" /> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const items = ref([
  {
    text: "1",
    pos: -2,
    active: false,
    name: "Sapna Padmanabhan",
    description:
      "An acclaimed leadership coach and communication expert, her experience nurtures each new relationship we build. Her years in TV, Radio and Corporate put her in a unique position to liaise between your business and ours. Hit her up if you want to know what we can do for you.",
  },
  {
    text: "2",
    pos: -1,
    active: false,
    name: "Rony Joe",
    description:
      "The yogi with an obsession for business strategy. He approaches each brand with the same care he has for our finances. A salesman and smooth talker who tells the tale of each brand like it was a thing of legend. He’ll be sending you an invoice for that.",
  },
  {
    text: "3",
    pos: 0,
    active: true,
    name: "Sapna Padmanabhan",
    description:
      "An acclaimed leadership coach and communication expert, her experience nurtures each new relationship we build. Her years in TV, Radio and Corporate put her in a unique position to liaise between your business and ours. Hit her up if you want to know what we can do for you.",
  },
  {
    text: "4",
    pos: 1,
    active: false,
    name: "Sapna Padmanabhan",
    description:
      "An acclaimed leadership coach and communication expert, her experience nurtures each new relationship we build. Her years in TV, Radio and Corporate put her in a unique position to liaise between your business and ours. Hit her up if you want to know what we can do for you.",
  },
  {
    text: "5",
    pos: 2,
    active: false,
    name: "Sapna Padmanabhan",
    description:
      "An acclaimed leadership coach and communication expert, her experience nurtures each new relationship we build. Her years in TV, Radio and Corporate put her in a unique position to liaise between your business and ours. Hit her up if you want to know what we can do for you.",
  },
]);

const update = (newActive) => {
  const newActivePos = newActive.pos;

  items.value.forEach((item) => {
    item.active = item.pos === newActivePos;
    item.pos = getPos(item.pos, newActivePos);
  });
};

const getPos = (current, active) => {
  const diff = current - active;

  if (Math.abs(current - active) > 2) {
    return -current;
  }

  return diff;
};

const getImageUrl = (index) => {
  // Define your image URLs based on the index or any other logic
  return `/images/carousel/${index}.png`;
};

const getActiveItem = () => {
  return items.value.find((item) => item.active);
};
</script>

<style scoped>
.text-left {
  text-align: left;
}

.sharpsans-h2 {
  font-size: 24px; /* Adjust the font size as needed */
  font-weight: 900; /* Adjust the font weight as needed */
}

.sharpsans-h4 {
  font-size: 18px; /* Adjust the font size as needed */
  font-weight: 400; /* Adjust the font weight as needed */
}

.head {
  line-height: 32.64px; /* 81.6% */
  letter-spacing: 8px;
}
.carousel {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  font-family: Arial;
}

.carousel__list {
  display: flex;
  list-style: none;
  position: relative;
  width: 100%;
  height: 100px;
  justify-content: center;
  perspective: 300px;
}

.carousel__item {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0px;
  width: 300px;
  height: 150px;
  border-radius: 12px;
  box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.5);
  position: absolute;
  transition: all 0.3s ease-in;
}

@media (max-width: 768px) {
  .carousel__item {
    width: 200px;
    height: 100px;
  }
}

@media (max-width: 576px) {
  .carousel__item {
    width: 120px;
    height: 75px;
  }
}
@media (max-width: 380px) {
  .carousel__item {
    width: 80px;
    height: 55px;
  }
}

.carousel__item:nth-child(1) {
  background: linear-gradient(45deg, #2d35eb 0%, #904ed4 100%);
}

.carousel__item:nth-child(2) {
  background: linear-gradient(45deg, #2d35eb 0%, #fdbb2d 100%);
}

.carousel__item:nth-child(3) {
  background: linear-gradient(45deg, #2d35eb 0%, #22c1c3 100%);
}

.carousel__item:nth-child(4) {
  background: linear-gradient(45deg, #fdbb2d 0%, #904ed4 100%);
}

.carousel__item:nth-child(5) {
  background: linear-gradient(45deg, #22c1c3 0%, #904ed4 100%);
}

.carousel__item_active {
  z-index: 5;
}

.carousel__item[data-pos="-1"],
.carousel__item[data-pos="1"] {
  opacity: 0.7;
  filter: blur(1px) grayscale(10%);
}

.carousel__item[data-pos="-1"] {
  transform: translateX(-40%) scale(0.9);
  z-index: 4;
}

.carousel__item[data-pos="1"] {
  transform: translateX(40%) scale(0.9);
  z-index: 4;
}

.carousel__item[data-pos="-2"],
.carousel__item[data-pos="2"] {
  opacity: 0.4;
  filter: blur(3px) grayscale(20%);
}

.carousel__item[data-pos="-2"] {
  transform: translateX(-70%) scale(0.8);
  z-index: 3;
}

.carousel__item[data-pos="2"] {
  transform: translateX(70%) scale(0.8);
  z-index: 3;
}
</style>
