Feature: GreenKart E-Commerce

  Scenario: As a user, I get a warning for an invalid promo code

    Given I am on the GreenKart cart page with an add item <item>
    When I fill a promo code with <promoCode>
    And click button apply promo
    Then I should see a warning for an invalid promo with <message> message

    
    Examples:
        | item          | promoCode   | message             |
        | Water Melon   | XF89J       | Invalid code ..!    |