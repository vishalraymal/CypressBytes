Feature: End to end ecommerce validation

    Application Regression

    @Regression
    Scenario: Ecommerce products delivery
    Given I open eCommerce page
    When I add items to cart
    And Validate the total prices
    Then Select country and submit and verify SUCCESS message

    @Smoke
    Scenario: Filling the form to shop
    Given I open eCommerce page
    When I fill the form details
        |name | gender|
        |tom | male  |
    Then validate the form behaviour
    And Select shop page 