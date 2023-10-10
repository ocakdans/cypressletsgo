import { Given, When, Then, DataTable } from  "cypress-cucumber-preprocessor/steps";
const { faker } = require('@faker-js/faker');

let response;
let email=faker.internet.email();
let payload;

Given('I make a POST request to url',() => {


    cy.fixture('createuser.json').then((fixturePayload)=>{
        payload =fixturePayload


    cy.request({
        method:'POST',
        url: "https://gorest.co.in/public/v2/users",
        headers : {
            'Authorization':"Bearer f8a3394584c1609af76a4607c962152f664684a2cdd3bf17c3b959e26e11ced3"
        },
        body:{
            "id": payload.id,
            "name":payload.name,
            "email": email,
            "gender":payload.gender,
            "status": payload.status
          },
        
    }).then((res)=>{
        response=res
    })


})
});

Then('the response should have a status code {int}', (statusCode) => {
    expect(response.status).to.eq(statusCode)
});

And('user verifies the response body data post',()=>{
    expect(response.body.email).to.eq(email)
    expect(response.body).has.property('gender',payload.gender)
    expect(response.body).has.property('status',payload.status)
    
})






















