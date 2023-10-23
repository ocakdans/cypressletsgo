/// <reference types = "Cypress" />
import { Given, When, Then, DataTable } from "cypress-cucumber-preprocessor/steps";
import { createdUserId } from "./06_post_user_fixture_full2";
import { randomEmail } from "./06_post_user_fixture_full2";

Then(`I send a PUT request to user api for new userid`, () => {
    cy.request({
        method: 'PUT',
        url: "https://gorest.co.in/public/v2/users/" + createdUserId,
        headers: {
            "Authorization": "Bearer 1bcea0c3261ff52c5709814a543cd436c8b7136cd8f6c40dc77c7e74fd860137"
        },
        body: {
            "name": "Draupadi Somayaji updated",
            "gender": "male",
            "status": "active",
            "email": randomEmail
        }
    }).then((res)=>{
        expect(res.status).to.eq(200)
        expect(res.body).has.property("name", "Draupadi Somayaji updated")
        expect(res.body).has.property("gender", "male")
        expect(res.body).has.property("status", "active")
        expect(res.body).has.property("email", randomEmail)
        expect(res.body.id).to.eq(createdUserId)
    })
});

Then(`I verify the PUT response for new userid`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});