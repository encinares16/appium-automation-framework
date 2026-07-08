
import Activity from '@pages/Activity.ts'
import Assertion from '@assertions/Assertion.ts'
import LoginPage from '@pages/login/LoginPage.ts'
import LogoutComponents from '@/src/components/LogoutComponents.ts'
import { validUser } from '@data/user.data.ts'
import { userLogin } from '@/src/flows/userLoginFlow.ts'
import { initializeTestContext } from '@utils/initializeTest.ts'
import { getTestId } from '@utils/getTestId.ts'
import Page from '@/src/pages/Page.ts'

describe('Authentication: Logout', () => {

  beforeEach(async function () {
    initializeTestContext('auth', getTestId(this.currentTest))
    await Activity.launchApp()
  })

  afterEach(async () => {
    await Activity.closeApp()
  })

  it('[AU_101] should allow the user to log out', async () => {
    
    const { username, password } = validUser
    const page = new Page()
    
    await userLogin(username, password)
    await page.gotoMenu('Logout')
    await LogoutComponents.confirmLogout()
    await Assertion.assertPageHeaderDisplayed(LoginPage.headerTitle, 'Login')
  })
})