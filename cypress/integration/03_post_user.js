import { Given, When, Then, DataTable } from  "cypress-cucumber-preprocessor/steps";
const { faker } = require('@faker-js/faker');

let response;
let email=faker.internet.email();

Given('I make a POST request to url',() => {
    cy.request({
        method:'POST',
        url: "https://gorest.co.in/public/v2/users",
        headers : {
            'Authorization':"Bearer f8a3394584c1609af76a4607c962152f664684a2cdd3bf17c3b959e26e11ced3"
        },
        body:{
            "id": 8787872535,
            "name": "bilgeOcakdan",
            "email": email,
            "gender": "female",
            "status": "active"
          },
        
    }).then((res)=>{
        response=res
    })
});

Then('the response should have a status code {int}', (statusCode) => {
    expect(response.status).to.eq(statusCode)
});



















