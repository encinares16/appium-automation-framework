import Page from "@pages/Page.ts"

class ProductPage extends Page {

  get noItemTitle() { return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/noItemTitleTV"]') }
  get noItemLogo() { return $('//android.widget.LinearLayout[@resource-id="com.saucelabs.mydemoapp.android:id/cartInfoLL"]/android.widget.ImageView') }
  get noItemMessage() { return $('//android.widget.TextView[@text="Oh no! Your cart is empty. Fill it up with swag to complete your purchase."]') }
  get shoppingButton() { return $('//android.widget.Button[@resource-id="com.saucelabs.mydemoapp.android:id/shoppingBt"]') }
  
  get headerTitle() { return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/productTV"]') }
  get cardIconQuantity() { return $('//android.widget.RelativeLayout[@content-desc="Displays number of items in your cart"]/android.widget.ImageView') }

  get totalItem() { return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/itemsTV"]') }
  get totalPrice() { return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/totalPriceTV"]') }
  get checkoutButton() { return $('//android.widget.Button[@content-desc="Confirms products for checkout"]') }

  removeItem(index: number) { return $(`(//android.widget.TextView[@content-desc="Removes product from cart"])[${index}]`) }

  async removeItemFromCart(index: number){
    await this.removeItem(index).click()
  }
}

export default new ProductPage()