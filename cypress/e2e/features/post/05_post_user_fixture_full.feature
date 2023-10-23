Feature: Gorest User Requests
    Scenario: Gorest User POST Request
        Given I send a POST request to user api with fixture file as body1
        Then I verify the POST response for fixture file as body1