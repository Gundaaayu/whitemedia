<template>
  <div class="carousel">
    <ul class="carousel__list">
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="['carousel__item', { carousel__item_active: item.active }]"
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
</template>

<script setup>
const items = ref([
  { text: "1", pos: -2, active: false },
  { text: "2", pos: -1, active: false },
  { text: "3", pos: 0, active: true },
  { text: "4", pos: 1, active: false },
  { text: "5", pos: 2, active: false },
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
</script>

<style scoped>
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
    width: 150px;
    height: 75px;
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
