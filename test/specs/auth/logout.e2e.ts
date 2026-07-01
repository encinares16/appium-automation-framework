
import LoginPage from '@pages/login/LoginPage.ts'
import Assertion from '@assertions/Assertion.ts'
import Activity from '@pages/Activity.ts'
import LogoutComponents from '@/src/components/LogoutComponents.ts'
import { validUser } from '@data/user.data.ts'
import { userLogin } from '@/src/flows/userLoginFlow.ts'
import { initializeTestContext } from '@utils/initializeTest.ts'
import { getTestId } from '@utils/getTestId.ts'

describe('Authentication: Logout', () => {

  let filename: Screenshot

  beforeEach(async function () {
    filename = initializeTestContext('auth', getTestId(this.currentTest))
    await Activity.launchApp()
  })

  afterEach(async () => {
    await Activity.closeApp()
  })

  it('[AU_101] should allow the user to log out', async () => {
    
    const { username, password } = validUser
    
    await userLogin(username, password)
    await LoginPage.gotoLogout()
    await LogoutComponents.logoutUser()
    await Assertion.assertPageHeaderDisplayed(LoginPage.headerTitle, 'Login')
    await Activity.screenshot(filename)
  })
})