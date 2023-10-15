Feature: Gorest User Requests
    Scenario: Gorest User GET Request without filtering
        Given I send a request to user api
        Then I verify the success response

        
    Scenario Outline: Gorest User GET Request by ID
        Given I send a request to user api by "<userid>"
        Then I verify the success response
        Examples:
            | userid| 
            | 5359947 |

            Scenario Outline: Gorest User GET Request by ID and namw
        Given I send a request to user api by "<userid>" and "<name>"
        Then I verify the success response
        Examples:
            | userid| name|
            | 5359947 |Ekalavya Trivedi|