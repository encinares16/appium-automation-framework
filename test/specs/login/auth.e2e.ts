import { userLogin } from '@/src/flows/userLoginFlow.ts'
import { validUser } from '@/src/data/user.data.ts'
import Assertion from '@assertions/Assertion.ts'

describe('Authentication', () => {

  let assertion = new Assertion()

  it('should authenticate user with valid credentials', async () => {
    const { username, password } = validUser
    await userLogin(username, password)
    await assertion.assertProductPageDisplayed()
  })
})