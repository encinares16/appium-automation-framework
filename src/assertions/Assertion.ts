import ProductPage from '@pages/products/ProductPage.ts'

class Assertion {
  async assertProductPageDisplayed(){
    await expect(ProductPage.headerTitle).toHaveText(/Product/)
  }
}

export default new Assertion()