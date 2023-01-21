import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const Favorite = {
  async render () {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants()
    if (restaurants.length) {
      return `
          <h2 tabindex="0" class="content-heading">Restaurant Favorite</h2>
          <div id="restaurants" class="content">
   
          </div>
      `
    } else {
      return `
          <h2 tabindex="0" class="content-heading">Restaurant Favorite</h2>
          <div id="restaurants" class="content">

          </div>
          <div class="restaurant__not__found">Tidak ada restaurant untuk ditampilkan</div>
      `
    }
  },

  async afterRender () {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants()
    const restaurantsContainer = document.querySelector('#restaurants')

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant)
    })
  }
}

export default Favorite
