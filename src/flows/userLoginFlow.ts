import LoginPage from '@pages/login/LoginPage.ts'
import { numberedSteps } from '@utils/customSteps.ts'

export async function userLogin(username: string, password: string){
  await numberedSteps.start('Go to the login page.', async () => {
    await LoginPage.gotoMenu('Login')
    await LoginPage.inputCredentials(username, password)
    await LoginPage.tapLogin()
  })
}