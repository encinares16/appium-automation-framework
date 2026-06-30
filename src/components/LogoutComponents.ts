class LogoutComponents {
  
  get alertTitle() { return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/alertTitle"]') }
  get alertMessage() { return $('//android.widget.TextView[@resource-id="android:id/message"]') }
  get buttonCancel() { return $('//android.widget.Button[@resource-id="android:id/button2"]') }
  get buttonLogout() { return $('//android.widget.Button[@resource-id="android:id/button1"]') }
  
  async logoutUser(){
    await this.buttonLogout.click()
  }
}

export default new LogoutComponents()