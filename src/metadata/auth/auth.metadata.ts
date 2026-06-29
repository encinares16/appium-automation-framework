import { testCase, project, features } from '@metadata/metadata.ts'
import { Severity } from 'allure-js-commons'

export const metadata: Record<string, Metadata> = {
  AU_001: {
    testCaseId: 'AU_001',
    description: testCase.description.authenticate.AU_001,
    owner: project.owner,
    tags: [project.name, features.authenticate, `Sprint ${project.currentSprint}`],
    severity: Severity.CRITICAL,
    project: project.product[0],
    ticketID: '00000',
  },
  AU_002: {
    testCaseId: 'AU_002',
    description: testCase.description.authenticate.AU_002,
    owner: project.owner,
    tags: [project.name, features.authenticate, `Sprint ${project.currentSprint}`],
    severity: Severity.CRITICAL,
    project: project.product[0],
    ticketID: '00000',
  },
}

// export const behaviors: Behaviors = {
//   epic: project.name,
//   feature: `Sprint ${project.currentSprint}`,
//   story: features.authenticate
// }