import ProductPage from '@pages/products/ProductPage.ts'

class Assertion {
  async assertProductPageDisplayed(){
    await expect(ProductPage.headerTitle).toHaveText(/Product/)
  }

  async assertPageHeaderDisplayed(element: ChainablePromiseElement, expected: string | RegExp){
    await expect(element).toBeDisplayed()
    await expect(element).toHaveText(expected)
  }

  async assertErrorMessage(element: ChainablePromiseElement, expected: string | RegExp){
    await expect(element).toBeDisplayed()
    await expect(element).toHaveText(expected)
  }
}

export default new Assertion()