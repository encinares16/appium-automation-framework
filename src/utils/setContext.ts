
import { metadata as authMetadata, metadata } from '@metadata/auth/auth.metadata.ts'

import { project, features } from '@metadata/metadata.ts'

export function setContext(id: string): TestContext {

  return {
    auth: {
      metadata: authMetadata[id],
      filename: {
        testCaseId: metadata[id].testID,
        feature: features.authenticate
      },
      behaviors: {
        epic: project.name,
        feature: `Sprint ${project.currentSprint}`,
        story: features.authenticate
      },
    },
  }
}