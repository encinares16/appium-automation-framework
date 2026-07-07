import { config } from "@/wdio.conf.ts"
import { numberedSteps } from "@utils/customSteps.ts"

export function loggerCLI({ testID, description}: Metadata){
  numberedSteps.reset()
  if(config.logLevel === 'silent') {
    console.log()
    console.log(`[${testID}]`)
    console.log(`Description: ${description}`)
    console.log()
}
}