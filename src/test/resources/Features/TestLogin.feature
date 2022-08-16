@TAL-2
Feature: Connexion

	@TEST_TAL-1
	Scenario: Connexion Talan Academy
				    Given i am on TA login Page
				    When I add my mail and password
				    And click on OK
				    Then The dashboard will be opened 
				    And the browser must be closed