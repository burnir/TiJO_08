Feature: Filter Test
  Scenario: Scenario
    When I browse to the "/"
    When I enter "Warner" into "input.search" field
    Then the css element ".table tbody tr td" should contain the text "Warner"
    Then I should see "Warner" in "firstName" column in row "1" of "student.table" table
  Scenario: firstName search
    When I browse to the "/"
    When I enter "hang" into "input.first" field
    Then the css element "td:nth-of-type(1)" should contain the text "Chang"
    Then I should see "Chang" in "firstName" column in row "1" of "student.table" table
  Scenario: lastName search
    When I browse to the "/"
    When I enter "dges" into "input.last" field
    Then the css element "td:nth-of-type(2)" should contain the text "Bridges"
    Then I should see "Bridges" in "lastName" column in row "1" of "student.table" table
  Scenario: age search
    When I browse to the "/"
    When I enter "21" into "input.age" field
    Then the css element "td:nth-of-type(3)" should contain the text "21"
    Then I should see "21" in "age" column in row "1" of "student.table" table
  Scenario: email search
    When I browse to the "/"
    When I enter ".io" into "input.email" field
    Then the css element "td:nth-of-type(4)" should contain the text "gray.rose@undefined.io"
    Then I should see "gray.rose@undefined.io" in "email" column in row "1" of "student.table" table
  Scenario: phone number search
    When I browse to the "/"
    When I enter "582" into "input.phone" field
    Then the css element "td:nth-of-type(5)" should contain the text "+1 (807) 582-3992"
    Then I should see "+1 (807) 582-3992" in "phone" column in row "1" of "student.table" table