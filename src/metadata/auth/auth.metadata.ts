import { testCase, project, features } from '@metadata/metadata.ts'
import { Severity } from 'allure-js-commons'

export const metadata: Record<string, Metadata> = {
  AU_001: {
    testID: 'AU_001',
    description: testCase.description.authenticate.AU_001,
    owner: project.owner,
    tags: [project.name, features.authenticate, `Sprint ${project.currentSprint}`],
    severity: Severity.CRITICAL,
    project: project.product[0],
    ticketID: '00000',
  },
  AU_002: {
    testID: 'AU_002',
    description: testCase.description.authenticate.AU_002,
    owner: project.owner,
    tags: [project.name, features.authenticate, `Sprint ${project.currentSprint}`],
    severity: Severity.CRITICAL,
    project: project.product[0],
    ticketID: '00000',
  },
  AU_003: {
    testID: 'AU_003',
    description: testCase.description.authenticate.AU_003,
    owner: project.owner,
    tags: [project.name, features.authenticate, `Sprint ${project.currentSprint}`],
    severity: Severity.CRITICAL,
    project: project.product[0],
    ticketID: '00000',
  },
  AU_004: {
    testID: 'AU_004',
    description: testCase.description.authenticate.AU_004,
    owner: project.owner,
    tags: [project.name, features.authenticate, `Sprint ${project.currentSprint}`],
    severity: Severity.CRITICAL,
    project: project.product[0],
    ticketID: '00000',
  },
  AU_101: {
    testID: 'AU_101',
    description: testCase.description.authenticate.AU_101,
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