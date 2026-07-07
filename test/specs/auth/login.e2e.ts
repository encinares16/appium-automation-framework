
import Activity from '@pages/Activity.ts'
import Assertion from '@assertions/Assertion.ts'
import LoginPage from '@pages/login/LoginPage.ts'
import ProductPage from '@/src/pages/products/ProductPage.ts'
import { initializeTestContext } from '@utils/initializeTest.ts'
import { lockedUser, validUser } from '@data/user.data.ts'
import { userLogin } from '@/src/flows/userLoginFlow.ts'
import { getTestId } from '@utils/getTestId.ts'

describe('Authentication: Login', () => {

  beforeEach(async function () {
    initializeTestContext('auth', getTestId(this.currentTest))
    await Activity.launchApp()
  })

  afterEach(async () => {
    await Activity.closeApp()
  })

  it('[AU_001] should authenticate user with valid credentials', async () => {
    const { username, password } = validUser

    await userLogin(username, password)
    await Assertion.assertPageHeaderDisplayed(ProductPage.headerTitle, /Product/)
  })

  it('[AU_002] should reject authentication for a locked account', async () => {
    const { username, password } = lockedUser

    await userLogin(username, password)
    await Assertion.assertErrorMessage(LoginPage.passwordErrorMessage, 'Sorry this user has been locked out.'
    )
  })

  it('[AU_003] should reject authentication when username is empty', async () => {
    await userLogin('', '')
    await Assertion.assertErrorMessage(LoginPage.nameErrorMessage, 'Username is required')
  })

  it('[AU_004] should reject authentication when password is empty', async () => {
    const { username } = validUser
    await userLogin(username, '')
    await Assertion.assertErrorMessage(LoginPage.passwordErrorMessage, 'Enter Password')
  })
})