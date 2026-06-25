import { step } from "@wdio/allure-reporter"
import { config } from "../../wdio.conf.ts"

export const numberedSteps = (() => {
    const array: number[] = [0]
    const start = async (title: string, func: any ) => {
      array[array.length - 1] += 1
      const subSteps = array.join('.')
      return step(`${subSteps}. ${title}`, async () => {
        array.push(0)
        try {
          if(config.logLevel === 'silent'){
              // console.log(chalk.bold(`STEP ${subSteps}.`), chalk.greenBright(`${title}`))
            console.log(`STEP ${subSteps}. ${title}`)
          }
          return await func()
        } finally {
          array.pop()
        }
      })
    }
  const reset = () => {
    array.length = 0
    array.push(0)
  }
  return { start, reset }
})()