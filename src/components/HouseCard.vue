<template>
    <router-link :to="{ name: 'HouseDetails', params: { houseId: houseProp.id } }">
        <div class="elevation-3 border border-dark bg-primary text-center p-3">
            <img :src="houseProp.imgUrl" alt="" class="img-fluid">
            <h2 class="text-end"> {{ `$` + houseProp.price }} </h2>
            <h4 class="">{{ `Bed's: ${houseProp.bedrooms} | Bath's: ${houseProp.bathrooms} | Floors: ${houseProp.levels}` }}
            </h4>
            <h5 class="text-start">{{ houseProp.description }}</h5>
        </div>
    </router-link>
</template>


<script lang="ts">
import { House } from '../models/House';

export default {
    props: {
        houseProp: {
            type: House,
            required: true,
        }
    },
    setup() {
        return {

        }
    }
}
</script>


<style lang="scss" scoped></style>