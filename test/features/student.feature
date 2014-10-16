Feature: Filter Test
	Scenario: Scenario
		When I browse to the "/"
		When I enter "Warner" into "input.search" field
		Then the css element ".table tbody tr td" should contain the text "Warner"
		Then I should see "Warner" in "firstName" column in row "1" of "student.table" table