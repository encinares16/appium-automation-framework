import Page from "@pages/Page.ts"

class ProductPage extends Page {
  get headerTitle() { return $('~title') }
  get productImage() { return $('~Product Image') }
  get productTitle() { return $('~Product Title') }
  get productAmount() { return $('~Product Price') }
  get productRatingsOneStar() { return $('id:com.saucelabs.mydemoapp.android:id/start1IV') }
  get productRatingsFiveStar() { return $('id:com.saucelabs.mydemoapp.android:id/start5IV') }
}

export default new ProductPage()