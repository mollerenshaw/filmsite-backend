Feature: List All Seasons
  Scenario: Get All The Seasons
    Given the system knows about the following seasons:
      |title             |description           |
      |The First Season  |The first season ever |
      |Season The Second |Our second season     |
    When the client requests a list of seasons
    Then the response is a list containing 2 seasons
    And one season has the following attributes:
      |attribute   |type    |value                 |
      |title       |String  |The First Season      |
      |description |String  |The first season ever |
    And one season has the following attributes:
      |attribute   |type    |value                 |
      |title       |String  |Season The Second     |
      |description |String  |Our second season     |