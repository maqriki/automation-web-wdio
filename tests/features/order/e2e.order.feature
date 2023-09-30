Feature: GreenKart E-Commerce

Scenario: As a user, I can completes a purchase on GreenKart

    Given I am on the GreenKart product page
    When I search, change the quantity, and add an item to the cart
        | item          | quantity     | eachPrice  | totalPrice    |
        | Mushroom      | 5            | 75         | 375           |
        | Potato        | 4            | 22         | 88            |
        | Corn          | 2            | 75         | 150           |
        | Banana        | 2            | 45         | 90            |
        | Water Melon   | 1            | 28         | 28            |
    And click the cart button and process the cart page
    And validate the cart with total amount <totalAmount>, total after discount <totalAfterDiscount>
        | item          | quantity     | eachPrice  | totalPrice    |
        | Mushroom      | 5            | 75         | 375           |
        | Potato        | 4            | 22         | 88            |
        | Corn          | 2            | 75         | 150           |
        | Banana        | 2            | 45         | 90            |
        | Water Melon   | 1            | 28         | 28            |
    And click to checkout
    And select a country and confirm the terms and conditions
    And click the Proceed button
    Then I should receive the display text <successMessage>

        Examples: 
            | totalItem     | totalAmount   | totalAfterDiscount    | successMessage                                        |
            | 5             | 731           | 731                   | Thank you, your order has been placed successfully    |
    