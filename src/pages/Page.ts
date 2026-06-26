import { numberedSteps } from "@utils/customSteps.ts"

export default class Page {
  
  get hamburgerMenu() { return $('//android.widget.ImageView[@content-desc="View menu"]') }
  get menuItemLogin() { return $('//android.widget.TextView[@content-desc="Login Menu Item"]') }
  get menuItemLogout() { return $('//android.widget.TextView[@content-desc="Logout Menu Item"]') }
  get menuItemAbout() { return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/itemTV" and @text="About"]') }

  get iconCart() { return $('//android.widget.ImageView[@content-desc="Displays number of items in your cart"]') }
  get cartItemCount() { return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/cartTV"]') }
  get optionSortProduct() { return $('//android.widget.ImageView[@content-desc="Shows current sorting order and displays available sorting options"]') }
  
  async gotoLogin(){
    await numberedSteps.start('Tap the hamburger menu.', async () => {
      await this.hamburgerMenu.click()
    })
    await numberedSteps.start('In the menu, tap the Log In.', async () => {
      await this.menuItemLogin.click()
    })
  }
}