/// <reference types = "Cypress" />
import { Given, When, Then, DataTable } from  "cypress-cucumber-preprocessor/steps";
let response;
const faker = require('faker');
let randomEmail = faker.internet.email()
const userPayload = require('../fixtures/user_payload.json')



Given(`I send a POST request to user api with fixture file as body1`, () => {
    cy.request({
        method : 'POST',
        url : 'https://gorest.co.in/public/v2/users',
        headers:
        {
            "Authorization":"Bearer f8a3394584c1609af76a4607c962152f664684a2cdd3bf17c3b959e26e11ced3"
        },
        body:userPayload
        
    }).then((res)=>{
        response=res
        cy.log(JSON.stringify(response))
    })
});
Then(`I verify the POST response for fixture file as body1`, () => {
    expect(response.status).to.eq(201)
    expect(response.body.name).to.eq(userPayload.name)
    expect(response.body.email).to.eq(userPayload.email)
    expect(response.body.gender).to.eq(userPayload.gender)
    expect(response.body.status).to.eq(userPayload.status)

});