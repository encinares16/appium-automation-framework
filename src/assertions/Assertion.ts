import ProductPage from '@pages/products/ProductPage.ts'

class Assertion {
  async assertProductPageDisplayed(){
    await ProductPage.headerTitle.waitForDisplayed()
    await expect(ProductPage.headerTitle).toHaveText(/Product/)
  }

  async assertPageHeaderDisplayed(element: ChainablePromiseElement, expected: string | RegExp){
    await element.waitForDisplayed()
    await expect(element).toHaveText(expected)
  }

  async assertErrorMessage(element: ChainablePromiseElement, expected: string | RegExp){
    await element.waitForDisplayed()
    await expect(element).toHaveText(expected)
  }
}

export default new Assertion()