import dotenv from 'dotenv'

dotenv.config()

export const project = {
    name: 'My Demo App (Suace Labs)',
    owner: 'Jerome Encinares',
    product: ['my-demo-app'], 
    currentSprint: 1,
    currentBuild: process.env.APP_RELEASE_BUILD_NUMBER,
}

export const features = {
    authenticate: 'User Authentication',
}

export const testCase = {
  features: {
    authenticate: 'User Authentication',
  },
  title: {
    authenticate: `Sprint ${project.currentSprint}: ${project.name} - ${features.authenticate}`,
  },
  description: {
    authenticate: {
      UA_001: `The system should successfully authenticate the user and be redirected to the product/home page.\n\n### Preconditions\n1. The user account is already registered in the system.\n2. The user has valid login credentials.\n3. The login page is accessible.`,
    },
  }
}