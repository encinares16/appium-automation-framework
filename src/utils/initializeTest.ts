import { loggerCLI } from "./customLoggerCLI.ts"
import { setContext } from "./setContext.ts"
import { setBehaviors, setMetadata } from "./setMetadata.ts"

export function initializeTestContext<K extends keyof TestContext>(
  context: K,
  testId: string,
) {
  const { metadata, behaviors, filename } = setContext(testId)[context]

  setMetadata(metadata)
  setBehaviors(behaviors)
  loggerCLI(metadata)

  return filename
}