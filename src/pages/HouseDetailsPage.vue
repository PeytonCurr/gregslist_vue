<template>
    <div class="container-fluid">
        <div class="row mt-3">
            <div v-if="house" class="col-10 m-auto">
                <HouseCard :houseProp="house" />
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { AppState } from '../AppState.js'
import { computed, onMounted } from 'vue';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import { housesService } from '../services/HousesService';
import { useRoute } from 'vue-router';


export default {
    setup() {
        const route = useRoute();
        async function getHouseById() {
            try {
                await housesService.getHouseById(route.params.houseId);
            } catch (error) {
                logger.error(error);
                Pop.error(error.message)
            }
        }
        onMounted(() => {
            getHouseById();
        })
        return {
            house: computed(() => AppState.activeHouse)
        }
    }
}
</script>


<style lang="scss" scoped></style>