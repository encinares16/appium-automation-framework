
import { details as authFilename } from '@metadata/auth/screenshot.metadata.ts'

import { metadata as authMetadata } from '@metadata/auth/auth.metadata.ts'
import { behaviors as authBehaviors } from '@metadata/auth/auth.metadata.ts'

export function setContext(testID: string): TestContext {
  return {
    auth: {
      filename: authFilename[testID],
      metadata: authMetadata[testID],
      behaviors: authBehaviors,
    }, 
  }
}