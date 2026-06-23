import LoginPage from "../pages/login/LoginPage.ts"

export async function userLogin(username: string, password: string){
  let page = new LoginPage()
  await page.gotoLogin()
  await page.loginUser(username, password)
}