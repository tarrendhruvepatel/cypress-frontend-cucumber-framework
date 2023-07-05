Feature: Search functionality
    As a user
    I want to search for products
    So that I can find the desired item

    Scenario: Searching for a product
        Given I am on the homepage
        When I enter "talkSport" in the search field
        And I click the search button
        Then I should see a list of search results
        And the results should contain the word "talkSport"

    Scenario Outline: Searching for various products
        Given I am on the homepage
        When I search for <product>
        And I click the search button
        Then I should see a list of search results
        And the results should contain <product>

        Examples:
            | product     |
            | 'talkSport' |
            | 'times'     |
            | 'sun'       |