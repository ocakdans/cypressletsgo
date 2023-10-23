@get
Feature: Gorest Todos Requests
    Scenario: Gorest Todos GET Request without filtering
        Given I send a request to todos api
        Then I verify the success response for todos
    
     Scenario: Gorest Todos GET Request with ID
        Given I send a request to todos api with id
        Then I verify the success response for todos