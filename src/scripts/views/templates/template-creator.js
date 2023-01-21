import CONFIG from '../../globals/config'

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 tabindex="0" class="detail-title">${restaurant.name}</h2>
  <div class="detail-head">
    <img tabindex="0" class="detail-image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="detail-info">
        <h3 tabindex="0">Information</h3>
        <h4 tabindex="0">City</h4>
        <p tabindex="0">${restaurant.city}</p>
        <h4 tabindex="0">Address</h4>
        <p tabindex="0">${restaurant.address}</p>
        <h4 tabindex="0">Rating</h4>
        <p tabindex="0">${restaurant.rating}</p>
        <h4 tabindex="0">Categories</h4>
        <p tabindex="0">${restaurant.categories.map(category => category.name).join(' - ')}</p>
    </div>
  </div>
  <div class="detail-menus">
    <h3 tabindex="0" class="fa fa-cutlery fa-2x" > </h3>
    <p tabindex="0">${restaurant.menus.foods.map(food => food.name).join(' - ')}</p>
  </div>
  <div class="detail-menus">
    <h3 tabindex="0" class="fa fa-coffee fa-2x" > </h3>
    <p tabindex="0">${restaurant.menus.drinks.map(drink => drink.name).join(' - ')}</p>
  </div>
  <div class="detail-description">
    <h3 tabindex="0">Description</h3>
    <p tabindex="0">${restaurant.description}</p>
  </div>
  <div class="detail-reviews">
    <h3 tabindex="0">Reviews</h3>
    ${restaurant.customerReviews.map((review) => `
    <div class="detail-review">
        <h4 tabindex="0">${review.name}</h4>
        <p tabindex="0" class="date-review">${review.date}</p>
        <p tabindex="0">${review.review}</p>
    </div>
    `).join('')}
  </div>
  `

const createRestaurantItemTemplate = (restaurant) => `
    <article class="content-item">
        <img tabindex="0" class="lazyload item-image"
            data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
            alt="${restaurant.name}" 
        />
        <div class="item-title">
            <h3 class="restaurant__name"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        </div>
        <p tabindex="0" class="item-description">${restaurant.description}</p>
    </article>
  `
const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate
}
