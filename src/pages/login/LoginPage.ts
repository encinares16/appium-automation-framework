import Page from "../Page.ts"

export default class LoginPage extends Page {
  
  get inputUsername() { return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/nameET"]') }
  get inputPassword() { return $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/passwordET"]') }
  get buttonLogin() { return $('//android.widget.Button[@content-desc="Tap to login with given credentials"]') }
  
  async loginUser(username: string, password: string){
    await this.inputUsername.setValue(username)
    await this.inputPassword.setValue(password)
    await this.buttonLogin.click()
  }
}