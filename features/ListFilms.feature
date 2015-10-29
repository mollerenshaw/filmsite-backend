Feature: List All Films
  Scenario: Get All The Films
    Given an API running at localhost:8080/api
    When I submit a GET request to the /films endpoint with hello as the body
    Then I should receive JSON