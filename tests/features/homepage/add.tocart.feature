Feature: GreenKart E-Commerce

  Scenario: As a user, I can adding an item to the cart

    Given I am on the GreenKart product page
    When I fill the search input with <item>
    And set quantity item <item> to <quantity>
    And click the Add to Cart button for an <item>
    Then the cart should display the updated total item with <totalItem> and total price with <totalPrice>

      Examples:
        | item        | quantity  | totalPrice  | totalItem |
        | Brocolli    | 2         | 240         | 1         |