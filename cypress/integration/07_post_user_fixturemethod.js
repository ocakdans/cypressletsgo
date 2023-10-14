/// <reference types = "Cypress" />
import { Given, When, Then, DataTable } from  "cypress-cucumber-preprocessor/steps";
let response;
const faker = require('faker');
let randomEmail = faker.internet.email()
let randomName = faker.name.findName()
let user_payload
//const userPayload = require('../fixtures/user_payload.json')



Given(`I send a POST request to user api with fixture file as body3`, () => {
    cy.fixture('user_payload.json').then((userPayload)=>{
        const{email,name,...rest}= userPayload
    cy.request({
        method : 'POST',
        url : 'https://gorest.co.in/public/v2/users',
        headers:
        {
            "Authorization":"Bearer f8a3394584c1609af76a4607c962152f664684a2cdd3bf17c3b959e26e11ced3"
        },
        body:{
            ...rest,
            email:randomEmail,
            name:randomName
        }
        
    }).then((res)=>{
        response=res
    })
    user_payload=userPayload
});

    })
    
Then(`I verify the POST response for fixture file as body3`, () => {
    expect(response.status).to.eq(201)
    expect(response.body.name).to.eq(randomName)
    expect(response.body.email).to.eq(randomEmail)
    expect(response.body.gender).to.eq(user_payload.gender)
    expect(response.body.status).to.eq(user_payload.status)

});