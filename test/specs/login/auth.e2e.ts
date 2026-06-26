import { userLogin } from '@/src/flows/userLoginFlow.ts'
import { validUser } from '@/src/data/user.data.ts'
import { setContext } from '@/src/utils/setContext.ts'
import Assertion from '@assertions/Assertion.ts'
import Activity from '@/src/pages/Activity.ts'
import { setBehaviors, setMetadata } from '@/src/utils/setMetadata.ts'

describe('Authentication', () => {

  it('should authenticate user with valid credentials', async () => {

    const { auth: { metadata, behaviors, filename } } = setContext('AU_001')
    const { username, password } = validUser

    setMetadata(metadata)
    setBehaviors(behaviors)

    await Activity.launchApp()
    await userLogin(username, password)
    await Assertion.assertProductPageDisplayed()
    await Activity.screenshot(filename)
  })
})