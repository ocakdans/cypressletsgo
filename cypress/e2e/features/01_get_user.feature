Feature: Gorest User Requests
    Scenario: Gorest User GET Request without filtering
        Given I send a request to user api
        Then I verify the success response