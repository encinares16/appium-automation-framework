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
  authenticate: 'Authentication',
}

export const testCase = {
  title: {
    authenticate: `Sprint ${project.currentSprint}: ${project.name} - ${features.authenticate}`,
  },
  description: {
    authenticate: {
      AU_001: `The system should successfully authenticate the user with valid credentials and redirect the user to the product/home page.\n\n### Preconditions\n1. The user account is already registered in the system.\n2. The user has valid login credentials.\n3. The login page is accessible.`,
      AU_002: `The system should reject authentication for a locked user account and display an appropriate error message.\n\n### Preconditions\n1. The user account is already registered in the system.\n2. The user account is locked.\n3. The login page is accessible.`,
      AU_003: `The system should reject authentication when the username field is empty and display the required field validation message.\n\n### Preconditions\n1. The login page is accessible.\n2. The password field contains a valid value.`,
      AU_004: `The system should reject authentication when the password field is empty and display the required field validation message.\n\n### Preconditions\n1. The login page is accessible.\n2. The username field contains a valid value.`,
      AU_101: `The system should successfully log out the authenticated user and redirect the user to the login page.\n\n### Preconditions\n1. The user account is already registered in the system.\n2. The user is currently authenticated.`,
    },
  }
}