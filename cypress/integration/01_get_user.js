import { Given, When, Then, DataTable } from  "cypress-cucumber-preprocessor/steps";
let response;

Given(`I send a request to user api`, () => {
    cy.request({
        method: 'GET',
        url: 'https://gorest.co.in/public/v2/users'
    }).then((res) =>{
        response = res

    })
});

Then(`I verify the success response`, () => {
    expect(response.status).to.eq(200)
});