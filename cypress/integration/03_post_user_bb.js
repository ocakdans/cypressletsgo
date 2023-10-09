import { Given, When, Then, DataTable } from  "cypress-cucumber-preprocessor/steps";

let response;

Given('I make a POST request to url',() => {
    cy.request({
        method:'POST',
        url: "https://gorest.co.in/public/v2/users",
        headers : {
            'Authorization':"Bearer af0c9edf819f4e4c357dacd5c4261051e52be344f58fe66b11b65a831ac9da85" },
        body:{
            "id": 8787872433,
            "name": "bb",
            "email": "bb@gmail.com",
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