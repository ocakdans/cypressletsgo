/// <reference types = "Cypress" />
import { Given, When, Then, DataTable } from "cypress-cucumber-preprocessor/steps";
let response;
const faker = require('faker');
let randomEmail = faker.internet.email()


Given(`I send a POST request to user api`, () => {
    cy.request({
        method: "POST",
        url: "https://gorest.co.in/public/v2/users",
        headers: {
            "Authorization": "Bearer 1bcea0c3261ff52c5709814a543cd436c8b7136cd8f6c40dc77c7e74fd860137"
        },
        body: {
            "name": "Draupadi Somayaji",
            "email": randomEmail,
            "gender": "female",
            "status": "inactive"
        }

    }).then((res) =>{
        response = res
        //cy.log(JSON.stringify(response))
    })
});

Then(`I verify the POST response`, () => {
    expect(response.status).to.eq(201)
    expect(response.body.name).to.eq("Draupadi Somayaji")
    expect(response.body.email).to.eq(randomEmail)
    expect(response.body.gender).to.eq("female")
    expect(response.body.status).to.eq("inactive")

});