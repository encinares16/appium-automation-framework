import { driver } from '@wdio/globals'
import { numberedSteps } from '@utils/customSteps.ts'
import { APP_PACKAGE } from '@constants/index.contants.ts'
import { takeScreenshot } from '@utils/takeScreenshot.ts'

class Activity {
  async launchApp() {
    await numberedSteps.start('Launch the application.', async () => {
      await driver.activateApp(APP_PACKAGE)
    })
  }

  async closeApp() {
    await numberedSteps.start('Exit the application.', async () => {
      await driver.terminateApp(APP_PACKAGE)
    })
  }

  async screenshot(details: Screenshot){
    await numberedSteps.start('Take a screenshot.', async () => {
      await takeScreenshot(details)
    })
  }
}

export default new Activity()