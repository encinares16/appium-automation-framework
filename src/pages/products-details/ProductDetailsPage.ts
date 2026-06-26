import Page from '@pages/Page.ts'

class ProductDetailsPage extends Page {

  get productTitle() { return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/productTV"]') }
  get productImage() { return $('//androidx.recyclerview.widget.RecyclerView[@content-desc="Displays all products of catalog"]/android.view.ViewGroup[1]/android.widget.ImageView[@content-desc="Product Image"]') }
  get productAmount() { return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/priceTV"]') }
  get productRatingsOneStar() { return $('//android.widget.ImageView[@resource-id="com.saucelabs.mydemoapp.android:id/start1IV"]') }
  get productRatingsFiveStar() { return $('//android.widget.ImageView[@resource-id="com.saucelabs.mydemoapp.android:id/start5IV"])[1]') }
  
  get optionColorBlack() { return $('//android.widget.ImageView[@content-desc="Black color"]') }
  get optionColorBlue() { return $('//android.widget.ImageView[@content-desc="Blue color"]') }
  get optionColorGray() { return $('//android.widget.ImageView[@content-desc="Gray color"]') }
  get optionColorGreen() { return $('//android.widget.ImageView[@content-desc="Green color"]') }

  get increaseItemQuantity() { return $('//android.widget.ImageView[@content-desc="Increase item quantity"]') }
  get decreaseItemQuantity() { return $('//android.widget.ImageView[@content-desc="Decrease item quantity"]') }
  get itemQuantity() { return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/noTV"]') }
  get buttonAddToCart() { return $('//android.widget.Button[@content-desc="Tap to add product to cart"]') }

  get productHighlights() { return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/productHeightLightsTV"]') }
  get productDescription() { return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/descTV"]') }
  
  get reviewMessage() { return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/sortTV"]') }
  get reviewContinueButton() { return $('com.saucelabs.mydemoapp.android:id/closeBt') }

}

export default new ProductDetailsPage()