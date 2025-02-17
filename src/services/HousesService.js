import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class HousesService {

    async getHouses() {
        const res = await api.get(`auth/api/houses`)
        // logger.log("[Getting Houses]", res.data)
        AppState.houses = res.data.map(h => new House(h))
        // logger.log(AppState.houses)
    }

    async getHouseById(houseId) {
        const res = await api.get(`auth/api/houses/${houseId}`)
        // logger.log('[Getting House by Id]', res.data);
        AppState.activeHouse = new House(res.data)
        console.log(AppState.activeHouse);
    }

}

export const housesService = new HousesService();