import LoginPage from '@pages/login/LoginPage.ts'
import { numberedSteps } from '@utils/customSteps.ts'

export async function userLogin(username: string, password: string){
  await numberedSteps.start('Go to login.', async () => {
    await LoginPage.gotoLogin()
    await LoginPage.loginUser(username, password)
  })
}