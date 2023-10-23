@post
Feature: Gorest User Requests
    Scenario: Gorest User POST Request
        Given I send a POST request to user api
        Then I verify the POST response