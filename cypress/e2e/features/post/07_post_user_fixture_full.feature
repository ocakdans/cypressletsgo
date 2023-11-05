@post
Feature: Gorest User Post Requests7
    Scenario: Gorest User POST Request
        Given I send a POST request to user api with fixture file as body3
        Then I verify the POST response for fixture file as body3