/// <reference types = "Cypress" />
import { Given, When, Then, DataTable } from  "cypress-cucumber-preprocessor/steps";
let response;

Given(`I send a request to user api with commandjs`, () => {
    cy.sendUserApiRequest();
  });
  
  Then(`I verify the success response with commandjs`, () => {
    cy.verifySuccessResponse();
  });