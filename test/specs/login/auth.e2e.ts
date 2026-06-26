import { userLogin } from '@/src/flows/userLoginFlow.ts'
import { validUser } from '@/src/data/user.data.ts'
import { setContext } from '@/src/utils/setContext.ts'
import Assertion from '@assertions/Assertion.ts'
import Activity from '@/src/pages/Activity.ts'

describe('Authentication', () => {

  it('should authenticate user with valid credentials', async () => {

    const { auth } = setContext('AU_001')
    const { username, password } = validUser

    await Activity.launchApp()
    
    await userLogin(username, password)

    await Assertion.assertProductPageDisplayed()
    await Activity.screenshot(auth.screenshot)
  })
})