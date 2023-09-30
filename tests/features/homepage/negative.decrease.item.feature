Feature: GreenKart E-Commerce

  Scenario: As a user, I cannot decreasing quantity below 1 using the minus button item

    Given I am on the GreenKart product page
    When I fill the search input with <item>
    And set quantity item <item> to <quantity>
    And I click the minus button for the item <item>
    Then the quantity of the item <item> should not change

    Examples:
      | item      | quantity |
      | Brocolli  | 1        |
