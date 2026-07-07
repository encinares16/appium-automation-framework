import Page from '@pages/Page.ts'

class ProductDetailsPage extends Page {

  get productTitle() { return $('id:com.saucelabs.mydemoapp.android:id/productTV') }
  get productImage() { return $('~Product Image') }
  get productAmount() { return $('id:com.saucelabs.mydemoapp.android:id/priceTV') }
  get productRatingsOneStar() { return $('id:com.saucelabs.mydemoapp.android:id/start1IV') }
  get productRatingsFiveStar() { return $('id:com.saucelabs.mydemoapp.android:id/start5IV') }

  get optionColorBlack() { return $('~Black color') }
  get optionColorBlue() { return $('~Blue color') }
  get optionColorGray() { return $('~Gray color') }
  get optionColorGreen() { return $('~Green color') }

  get increaseItemQuantity() { return $('~Increase item quantity') }
  get decreaseItemQuantity() { return $('~Decrease item quantity') }
  get itemQuantity() { return $('id:com.saucelabs.mydemoapp.android:id/noTV') }

  get buttonAddToCart() { return $('//android.widget.Button[@content-desc="Tap to add product to cart"]') }

  get productHighlights() { return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/productHeightLightsTV"]') }
  get productDescription() { return $('~com.saucelabs.mydemoapp.android:id/descTV') }
  
  get reviewMessage() { return $('id:com.saucelabs.mydemoapp.android:id/sortTV') }
  get reviewContinueButton() { return $('id:com.saucelabs.mydemoapp.android:id/closeBt') }

}

export default new ProductDetailsPage()