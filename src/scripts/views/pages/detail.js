import UrlParser from '../../routes/url-parser'
import Source from '../../data/source'
import { createRestaurantDetailTemplate } from '../templates/template-creator'
import LikeButtonPresenter from '../../utils/like-button-presenter'
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb'

const Detail = {
  async render () {
    return `
    <div id="restaurant" class="details"></div>
    <div tabindex="0" id="likeButtonContainer"></div>
      `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await Source.restaurantDetail(url.id)
    const restaurantContainer = document.querySelector('#restaurant')
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant)

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant
    })
  }
}

export default Detail
