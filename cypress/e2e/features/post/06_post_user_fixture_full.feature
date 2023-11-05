@post
Feature: Gorest User Post Requests6
    Scenario: Gorest User POST Request
        Given I send a POST request to user api with fixture file as body2
        Then I verify the POST response for fixture file as body2