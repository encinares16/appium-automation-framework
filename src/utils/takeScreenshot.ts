import { addAttachment } from "@wdio/allure-reporter"
import { checkFolderExist } from "@utils/checkFolderExist.ts"

export type ScreenshotParams = {
  testCaseId: string,
  feature: string,
  index?: number | null
}

export async function takeScreenshot( 
  { testCaseId, feature, index }: ScreenshotParams)
  : Promise<void> {
      
  checkFolderExist(feature)

  try {
    const fileName =  index == null
      ? `Screenshot_${testCaseId}.png`
      : `Screenshot_${testCaseId}_${index}.png`

    const filePath = `./artifacts/screenshots/${feature}/${fileName}`
      const screenshot: Buffer = await browser.saveScreenshot(filePath)
      addAttachment(fileName, screenshot, 'image/png')
    } catch (error) {
        console.error('Failed to take screenshot:', error)
  }
}