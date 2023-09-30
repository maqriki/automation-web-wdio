Feature: GreenKart E-Commerce

  Scenario: As a user, I cannot checkout if terms and conditions are unchecked

    Given I am on the GreenKart checkout page with process checkout <item>
    When I click checkout without checking the terms and conditions
    Then I should see a warning for required terms and conditions

      Examples:
        | item          |
        | Water Melon   |