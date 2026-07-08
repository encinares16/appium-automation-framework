import { config } from "@/wdio.conf.ts"

class Assertion {
  async assertPageHeaderDisplayed(element: ChainablePromiseElement, expected: string | RegExp){
    await element.waitForDisplayed()
    await expect(element).toHaveText(expected)
    await this.logAssertionResult(element, expected)
  }

  async assertErrorMessage(element: ChainablePromiseElement, expected: string | RegExp){
    await element.waitForDisplayed()
    await expect(element).toHaveText(expected)
    await this.logAssertionResult(element, expected)
  }
    
  async logAssertionResult(element: ChainablePromiseElement, expected: string | RegExp) {
    if (config.logLevel === 'silent') {
      const received = await element.getText()

      console.log(`[Expected] ${expected}`)
      console.log(`[Received] ${received}`)
    }
  }
}

export default new Assertion()