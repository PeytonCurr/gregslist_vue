import { Profile } from "./Account.js"

export class House {
    constructor(data) {
        this.id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.price = data.price
        this.imgUrl = data.imgUrl
        this.description = data.description
        this.seller = new Profile(data.seller)
    }
}