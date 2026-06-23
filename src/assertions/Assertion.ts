import ProductPage from '@pages/products/ProductPage.ts'

export default class Assertion {
  async assertProductPageDisplayed(){
    await expect(ProductPage.headerTitle).toHaveText(/Product/)
  }
}