Feature: Gorest User Requests
  Scenario Outline: Gorest User GET Request for <User Name>
    Given I send a request to user api Outline
    Then I verify the success response for user "<User Name>"

  Examples:
    | User Name                 |
    | Aashritha Jha             |
    | Anasuya Sinha DVM         |
    | Gita Talwar               |
    | Kalyani Iyer              |
    | Rep. Shobhana Kocchar     |
    | Arnesh Talwar             |
    | Vishwamitra Patel PhD     |
    | Miss Ashok Verma          |
    | Devani Mehrotra V         |
    | Surya Kaur                |
