const assert = require('assert')

Feature('Liking Restaurants')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('showing empty liked restaurants', ({ I }) => {
  I.wait(3)
  I.seeElement('#restaurants')
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant__not__found')
})

Scenario('liking one restaurant', async ({ I }) => {
  I.wait(3)
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant__not__found')

  I.amOnPage('/')
  I.wait(3)
  I.seeElement('.restaurant__name a')

  const firstRestaurant = locate('.restaurant__name a').first()
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  I.wait(3)
  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.wait(3)
  I.seeElement('.content-item')
  const likedRestaurantName = await I.grabTextFrom('.restaurant__name')

  assert.strictEqual(firstRestaurantName, likedRestaurantName)
})

Scenario('unliking restaurant', async ({ I }) => {
  I.wait(3)
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant__not__found')

  I.amOnPage('/')
  I.wait(3)
  I.seeElement('.restaurant__name a')
  I.click(locate('.restaurant__name a').first())

  I.wait(3)
  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.wait(3)
  I.seeElement('.content-item')

  I.click(locate('.restaurant__name a').first())
  I.wait(3)
  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.wait(3)
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant__not__found')
})

Scenario('liking multiple restaurants', async ({ I }) => {
  I.wait(3)
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant__not__found')

  I.amOnPage('/')
  I.wait(3)
  I.seeElement('.restaurant__name a')

  const names = []

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.restaurant__name a').at(i))
    I.wait(3)
    I.seeElement('#likeButton')
    I.click('#likeButton')
    names.push(await I.grabTextFrom('.detail-title'))
    I.amOnPage('/')
    I.wait(3)
  }

  I.amOnPage('/#/favorite')
  I.wait(3)
  I.seeElement('.content-item')

  for (let i = 1; i <= 3; i++) {
    const visibleRestaurant = locate('.restaurant__name a').at(i)
    const visibleRestaurantName = await I.grabTextFrom(visibleRestaurant)
    assert.strictEqual(visibleRestaurantName, names[i - 1])
  }
})
