Feature: Create a Todo Item

  Scenario: Create a new todo item
    Given I make a POST request to url
    Then the response should have a status code 201
    #And the response should contain the created todo item
