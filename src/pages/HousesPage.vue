<template>
  <div class="container-fluid">

    <section class="row g-3 mt-2">
      <div class="col-6 col-md-3" v-for="houseFromVFor in houses" :key="houseFromVFor.id">
        <HouseCard :houseProp="houseFromVFor" />
        <!-- <div class="elevation-3 border border-dark bg-primary text-center p-3">
          <img :src="house.imgUrl" alt="" class="img-fluid">
          <h2 class="text-end"> {{ `$` + house.price }} </h2>
          <h4 class="">{{ `Bed's: ${house.bedrooms} | Bath's: ${house.bathrooms} | Floors: ${house.levels}` }}
          </h4>
          <h5 class="text-start">{{ house.description }}</h5>
        </div> -->

      </div>
    </section>

  </div>
</template>


<script lang="ts">
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js'
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import HouseCard from '../components/HouseCard.vue';

export default {
  setup() {
    async function getHouses() {
      try {
        await housesService.getHouses();
      } catch (error) {
        logger.error(error);
        Pop.error(error.message);
      }
    }
    onMounted(() => {
      getHouses()
    })
    return {
      houses: computed(() => AppState.houses),
    }
  }
}
</script>


<style lang="scss" scoped>
img {
  height: 30vh;
  width: 30vh;
  object-fit: cover;
  object-position: center;
}
</style>