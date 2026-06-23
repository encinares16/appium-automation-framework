import * as os from 'os'

export const config: WebdriverIO.Config = {
    runner: 'local',
    tsConfigPath: './tsconfig.json',
    port: 4723,
    specs: [
        './test/specs/**/*.ts'
    ],
    exclude: [
    ],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'AYAV6R3706009193',
        'appium:platformVersion': '15',
        'appium:automationName': 'UiAutomator2',
        'appium:appPackage': 'com.saucelabs.mydemoapp.android',
        'appium:appActivity': '.view.activities.SplashActivity',
        'appium:noReset': true,
        'appium:skipServerInstallation': true,
        'appium:skipDeviceInitialization': true
    }],
    logLevel: 'info',
    logLevels: {
        webdriver: 'info',
        '@wdio/appium-service': 'info'
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
            'Node Version': process.version,
            'OS Platform, Release, & Version': `${os.platform()}, ${os.release()}, ${os.version()}`,
        }
      }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
