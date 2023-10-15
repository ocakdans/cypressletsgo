/// <reference types = "Cypress" />
import { Given, When, Then, DataTable } from "cypress-cucumber-preprocessor/steps";
let response;
let firstID;
let todosUrl = 'https://gorest.co.in/public/v2/todos'


Given(`I send a request to todos api`, () => {
    cy.getRequest(todosUrl).then((res => {
        firstID = res.body[0].id
        response = res
    }))
});

Given(`I send a request to todos api with id`, () => {
    cy.getRequest(todosUrl + "?id=${firstID}")
        .then((res => {
            response = res
        }))
});

Then(`I verify the success response for todos`, () => {
    expect(response.status).to.eq(200)
    //expect(response.body.length).to.eq(10)
    expect(response.body[0]).to.have.all.keys("id", "user_id", "title", "due_on", "status")
    expect(response.body[0].status).to.eq("completed")
    expect(response.body[0]).to.deep.include({ status: "completed" });
});