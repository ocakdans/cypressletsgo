@put
Feature: Gorest User Requests
    Scenario: Gorest User PUT Request
        Given I send a POST request to user api with fixture file as body2
        Then I verify the POST response for fixture file as body2
        And I send a PUT request to user api for new userid
        Then I verify the PUT response for new userid