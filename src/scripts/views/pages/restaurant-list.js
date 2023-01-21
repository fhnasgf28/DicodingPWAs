import Source from '../../data/source'
import { createRestaurantItemTemplate } from '../templates/template-creator'
const RestaurantList = {
  async render () {
    return `
    <h2 tabindex="0" id="content" class="content-heading">Restaurant List</h2>
    <div id="restaurants" class="content">
 
    </div>
    `
  },

  async afterRender () {
    const restaurants = await Source.restaurantList()
    const restaurantsContainer = document.querySelector('#restaurants')
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant)
    })
  }
}

export default RestaurantList
