/// <reference types="Cypress" />
import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given(`I send a request to user api Outline`, () => {
  cy.sendUserApiRequest();
});

Then(`I verify the success response for user {string}`, (userName) => {
  cy.verifySuccessResponse();
});
