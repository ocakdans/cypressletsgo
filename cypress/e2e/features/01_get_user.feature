Feature: Gorest User Requests
    Scenario: Gorest User GET Request without filtering
        Given I send a request to user api
        Then I verify the success response

    Scenario Outline: Gorest User GET Request by ID
        Given I send a request to user api by "<userid>"
        Then I verify the success response
        Examples:
            | userid  |
            | 5359947 |
            | 5359946 |
            | 5359943 |

    Scenario Outline: Gorest User GET Request by ID and name
        Given I send a request to user api by "<userid>" and "<name>"
        Then I verify the success response
        Examples:
            | name             | userid  |
            | Ekalavya Trivedi | 5359947 |