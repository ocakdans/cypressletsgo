Feature: Gorest Todos Requests
    Scenario: Gorest Todos GET Request without filtering
        Given I send a request to todos api
        Then I verify the success response for todos