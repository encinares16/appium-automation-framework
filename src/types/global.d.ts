declare global {
  
  interface Screenshot {
    testCaseId: string,
    feature: string,
    index?: number | null
  }

  interface Metadata {
    testCaseId: string
    description: string
    owner: string
    tags: string[]
    severity: Severity 
    project: string
    ticketID: string
  }

  interface Behaviors {
    epic: string
    feature: string
    story: string
  }

  interface TestContext {
    auth: { 
      filename: Screenshot
      metadata: Metadata
      behaviors: Behaviors
    },
  }
}

export {}