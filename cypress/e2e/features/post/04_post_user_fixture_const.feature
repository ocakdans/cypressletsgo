@post
Feature: Gorest User Post Requests4
    Scenario: Gorest User POST Request
        Given I send a POST request to user api with fixture file
        Then I verify the POST response for fixture file