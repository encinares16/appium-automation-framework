declare global {
  
  interface Screenshot {
    testCaseId: string,
    feature: string,
    index?: number | null
  }

  interface TestContext {
    auth: { 
      screenshot: Screenshot
    },
  }
}

export {}