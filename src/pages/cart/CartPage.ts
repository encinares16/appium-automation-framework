import Page from "@pages/Page.ts"

class ProductPage extends Page {

  get noItemTitle() { return $('id:com.saucelabs.mydemoapp.android:id/noItemTitleTV') }
  get noItemLogo() { return $('id:com.saucelabs.mydemoapp.android:id/cartInfoLL') }
  get noItemMessage() { return $('~Oh no! Your cart is empty. Fill it up with swag to complete your purchase.') }
  get shoppingButton() { return $('id:com.saucelabs.mydemoapp.android:id/shoppingBt') }

  get headerTitle() { return $('id:com.saucelabs.mydemoapp.android:id/productTV') }
  get cardIconQuantity() { return $('~Displays number of items in your cart') }

  get totalItem() { return $('id:com.saucelabs.mydemoapp.android:id/itemsTV') }
  get totalPrice() { return $('id:com.saucelabs.mydemoapp.android:id/totalPriceTV') }
  get checkoutButton() { return $('~Confirms products for checkout') }

  removeItem(index: number) { return $(`(//android.widget.TextView[@content-desc="Removes product from cart"])[${index}]`) }

  async removeItemFromCart(index: number){
    await this.removeItem(index).click()
  }
}

export default new ProductPage()