import LoginPage from '@pages/login/LoginPage.ts'
import Assertion from '@assertions/Assertion.ts'
import Activity from '@pages/Activity.ts'
import { lockedUser, validUser } from '@data/user.data.ts'
import { userLogin } from '@/src/flows/userLoginFlow.ts'
import { initializeTestContext } from '@utils/initializeTest.ts'

describe('Authentication: Login', () => {

  beforeEach(async () => {
    await Activity.launchApp()
  })

  afterEach(async () => {
    await Activity.closeApp()
  })

  it('[AU_001] should authenticate user with valid credentials', async () => {
    const { username, password } = validUser

    const filename = initializeTestContext('auth', 'AU_001')    

    await userLogin(username, password)
    await Assertion.assertProductPageDisplayed()
    await Activity.screenshot(filename)
  })

  
  it('[AU_002] should reject authentication for a locked account', async () => {
    const { username, password } = lockedUser

    const filename = initializeTestContext('auth', 'AU_002')    

    await userLogin(username, password)
    await Assertion.assertErrorMessage(LoginPage.passwordErrorMessage, "Sorry this user has been locked out.")
    await Activity.screenshot(filename)
  })

  it('[AU_003] should reject authentication when username is empty', async () => {
    const filename = initializeTestContext('auth', 'AU_003')    

    await userLogin('', '')
    await Assertion.assertErrorMessage(LoginPage.nameErrorMessage, "Username is required")
    await Activity.screenshot(filename)
  })

  it('[AU_004] should reject authentication when password is empty', async () => {
    const { username } = validUser

    const filename = initializeTestContext('auth', 'AU_004')    

    await userLogin(username, '')
    await Assertion.assertErrorMessage(LoginPage.passwordErrorMessage, "Enter Password")
    await Activity.screenshot(filename)
  })
})