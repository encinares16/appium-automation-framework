import * as os from 'os'
import allure from "@wdio/allure-reporter"

const isCI = !!process.env.CI

export const config: WebdriverIO.Config = {
    runner: 'local',
    tsConfigPath: './tsconfig.json',
    port: 4723,
    specs: [
        './test/specs/**/*.ts'
    ],
    specFileRetries: process.env.CI ? 2 : 0,
    exclude: [
    ],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': isCI ? 'emulator-5554': process.env.DEVICE_NAME,
        'appium:platformVersion': isCI ? '14' : process.env.DEVICE_VERSION,
        'appium:automationName': 'UiAutomator2',
        'appium:appPackage': 'com.saucelabs.mydemoapp.android',
        'appium:appActivity': '.view.activities.SplashActivity',
        'appium:noReset': true,
        'appium:skipServerInstallation': false,
        'appium:skipDeviceInitialization': false
    }],
    logLevel: 'silent',
    logLevels: {
        webdriver: 'silent',
        '@wdio/appium-service': 'silent'
    },
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec',
      ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
        reportedEnvironmentVars: {
          'Node.js': process.version,
          'OS Platform': os.platform(),
          'OS Release (Kernel)': os.release(),
          'OS Version (Build)': os.version(),
        }
      }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function (test, { passed }) {
      if (!passed) {
        const screenshot = await browser.takeScreenshot()

        await browser.saveScreenshot(
          `./artifacts/error/${Date.now()}-${test.title.replace(/[^a-zA-Z0-9-_]/g, "_")}.png`
        )

        allure.addAttachment(
          "Failure Screenshot",
          Buffer.from(screenshot, "base64"),
          "image/png"
        )
      }
   },
}
