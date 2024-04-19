import { findHeroe } from "./services/hero.service" 

const hero = findHeroe(2)
console.log(
    hero?.nombre,
)