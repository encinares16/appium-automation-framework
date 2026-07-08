import { numberedSteps } from "@utils/customSteps.ts"

export default class Page {
  
  get hamburgerMenu() { return $('~View menu') }
  get menuItemLogin() { return $('~Login Menu Item') }
  get menuItemLogout() { return $('~Logout Menu Item') }
  get menuItemAbout() { return $('~About') }

  get iconCart() { return $('~Displays number of items in your cart') }
  get cartItemCount() { return $('id:com.saucelabs.mydemoapp.android:id/cartTV') }
  get optionSortProduct() { return $('~Shows current sorting order and displays available sorting options') }
  
  async clickHamburgerMenu() {
    await this.hamburgerMenu.waitForDisplayed()
    await this.hamburgerMenu.click()
  }

  async menuItemSelect(item: string) {
    const menuItem: Record<string, ChainablePromiseElement> = {
      Login: this.menuItemLogin,
      Logout: this.menuItemLogout,
    }
    
    const element = menuItem[item]
    
    await element.waitForDisplayed()
    await element.click()
  }

  async gotoMenu(item: string){
    await numberedSteps.start('Tap the hamburger menu.', async () => {
      await this.clickHamburgerMenu()
    })
    
    await numberedSteps.start(`In the menu, tap ${item}.`, async () => {
      await this.menuItemSelect(item)
    })
  }
}