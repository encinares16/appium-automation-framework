import { numberedSteps } from "@/src/utils/customSteps.ts"
import Page from "@pages/Page.ts"

class LoginPage extends Page {
  
  get headerTitle() { return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/loginTV"]') }

  get inputUsername() { return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/nameET"]') }
  get inputPassword() { return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/passwordET"]') }
  get buttonLogin() { return $('//android.widget.Button[@content-desc="Tap to login with given credentials"]') }
  
  get nameErrorMessage() {
    return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/nameErrorTV"]');
  }

  get passwordErrorMessage() {
    return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/passwordErrorTV"]');
  }

  async loginUser(username: string, password: string){
    
    await numberedSteps.start(`Input the username. ${username}`, async () => {
      await this.inputUsername.waitForDisplayed()
      await this.inputUsername.setValue(username)
    })

    await numberedSteps.start(`Input the password. ${password}`, async () => {
    await this.hamburgerMenu.waitForDisplayed()
    await this.inputPassword.setValue(password)
    })

    await this.buttonLogin.click()
  }
}

export default new LoginPage()