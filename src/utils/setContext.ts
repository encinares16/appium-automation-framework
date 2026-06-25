
import { details as authDetails } from "@metadata/auth/screenshot.metadata.ts"

export function setContext(testID: string): TestContext {
  return {
    auth: {
      screenshot: authDetails[testID]
    }
  }
}