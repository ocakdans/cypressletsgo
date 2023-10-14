Feature: Gorest User Requests
    Scenario: Gorest User GET Request without filtering
        Given I send a request to user api with commandjs
        Then I verify the success response with commandjs