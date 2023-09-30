Feature: GreenKart E-Commerce

  Scenario: As a user, I can search item

    Given I am on the GreenKart product page
    When I fill the search input with <item>
    Then I should see a item <item>
    
      Examples:
          | item            |
          | Brocolli        |