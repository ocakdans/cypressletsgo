/// <reference types = "Cypress" />

import { Given, When, Then, DataTable } from  "cypress-cucumber-preprocessor/steps";
let response;


Given(`I send a request to todos api`, () => {
    cy.request({
        method: "GET",
        url: "https://gorest.co.in/public/v2/todos"
    }).then((res =>{
        response = res
    }))
});

Then(`I verify the success response for todos`, () => {
    expect(response.status).to.eq(200)
});