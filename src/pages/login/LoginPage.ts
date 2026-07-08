import { numberedSteps } from "@/src/utils/customSteps.ts"
import Page from "@pages/Page.ts"

class LoginPage extends Page {
  
  get headerTitle() { return $('id:com.saucelabs.mydemoapp.android:id/loginTV') }
  
  get inputUsername() { return $('id:com.saucelabs.mydemoapp.android:id/nameET') }
  get inputPassword() { return $('id:com.saucelabs.mydemoapp.android:id/passwordET') }
  get buttonLogin() { return $('~Tap to login with given credentials') }  

  get nameErrorMessage() { return $('id:com.saucelabs.mydemoapp.android:id/nameErrorTV') }
  get passwordErrorMessage() {  return $('id:com.saucelabs.mydemoapp.android:id/passwordErrorTV') }
  
  async inputField(field: string, input: string){
    const menuItem: Record<string, ChainablePromiseElement> = {
      username: this.inputUsername,
      password: this.inputPassword,
    }

    const element = menuItem[field]
    
    await element.waitForDisplayed()
    await numberedSteps.start(`Enter the ${field}. [${input}]`, async () => {
      await element.setValue(input)
    })
  }

  async inputCredentials(username: string, password: string){
    await this.headerTitle.waitForDisplayed()
    await this.inputField('username', username)
    await this.inputField('password', password)
  }

  async tapLogin(){
    await numberedSteps.start('Tap Login.', async () => {
      await this.buttonLogin.click()
    })
  }
}

export default new LoginPage()