import Page from "@pages/Page.ts"

class ProductPage extends Page {

  get headerTitle() { return $('//android.widget.TextView[@content-desc="title"]') }
  
  get productImage() { return $('//androidx.recyclerview.widget.RecyclerView[@content-desc="Displays all products of catalog"]/android.view.ViewGroup[1]/android.widget.ImageView[@content-desc="Product Image"]') }
  get productTitle() { return $('//android.widget.TextView[@content-desc="Product Title" and @text="Sauce Labs Backpack"]') }
  get productAmount() { return $('//androidx.recyclerview.widget.RecyclerView[@content-desc="Displays all products of catalog"]/android.view.ViewGroup[1]/android.widget.TextView[@content-desc="Product Price"]') }
  get productRatingsOneStar() { return $('(//android.widget.ImageView[@resource-id="com.saucelabs.mydemoapp.android:id/start1IV"])[1]') }
  get productRatingsFiveStar() { return $('(//android.widget.ImageView[@resource-id="com.saucelabs.mydemoapp.android:id/start5IV"])[1]') }
  // get productImage() { return $('//androidx.recyclerview.widget.RecyclerView[@content-desc="Displays all products of catalog"]/android.view.ViewGroup[2]/android.widget.ImageView[@content-desc="Product Image"]') }
}



export default new ProductPage();