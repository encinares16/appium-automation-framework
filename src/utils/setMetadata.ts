import * as allure from 'allure-js-commons'

export const setMetadata = async ({ testID, description, owner, tags, severity, project, ticketID}: Metadata): Promise<void> => {
  // allure.testCaseId(testID)
  allure.description(description)
  allure.owner(owner)
  allure.tags(...tags)
  allure.severity(severity)
  allure.issue(`https://www.saucedemo.com/${project}/${ticketID}/`, `Issue Ticket ID: #${ticketID}`)
}

export const setBehaviors = async ({ epic, feature, story }: Behaviors): Promise<void> => {
  allure.epic(epic)
  allure.feature(feature)
  allure.story(story)
  allure.suite(epic)
}