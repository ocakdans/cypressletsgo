import { Given, When, Then, DataTable } from  "cypress-cucumber-preprocessor/steps";
let response;

Given(`I send a GET request to retrieve a specific TODO with ID {int}`, (id) => {
    cy.request({
        method: "GET",
        url: `https://gorest.co.in/public/v2/todos/${id}`,
    
      }).then((res) =>{
        response = res

    })
});

Then(`I verify the response status code should be {int}`, (statusCode) => {
    expect(response.status).to.eq(200)
});


Then(`the response should contain the TODO with ID {int}`, (id) => {
    expect(response.body.id).to.equal(id);
      
});

