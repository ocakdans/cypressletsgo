/// <reference types = "Cypress" />
import { Given, When, Then, DataTable } from "cypress-cucumber-preprocessor/steps";
let response;
let userUrl = 'https://gorest.co.in/public/v2/users'

// Given(`I send a request to user api`, () => {
//     cy.request({
//         method: 'GET',
//         url: 'https://gorest.co.in/public/v2/users'
//     }).then((res) => {
//         response = res

//     })
// });

Given(`I send a request to user api`, () => {
    cy.getRequest(userUrl)
        .then((res) => {
            response = res
        })
});

Given(`I send a request to user api by {string}`, (userid) => {
    cy.getRequest(userUrl + "?id=" + userid)
        .then((res) => {
            response = res
        })
});

Given(`I send a request to user api by {string} and {string}`, (userid, name) => {
    cy.getRequest(userUrl + "?id=" + userid + "&name=" + name)
        .then((res) => {
            response = res
        })
});


Then(`I verify the success response`, () => {
    expect(response.status).to.eq(200)
});