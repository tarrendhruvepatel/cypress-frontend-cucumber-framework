import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../../support/pages/homePage';
import SearchPage from '../../../support/pages/searchPage';

const homePage = new HomePage();
const searchPage = new SearchPage();

Given('I am on the homepage', () => {
    homePage.vist();
    cy.wait(1000);
    homePage.acceptCookiePolicy();
});

When('I enter {string} in the search field', (searchTerm) => {
    searchPage.enterSearchTerm(searchTerm);
});

When('I click the search button', () => {
    searchPage.clickSearchButton();
});

Then('I should see a list of search results', () => {
    searchPage.getSearchResults();
});

Then('the results should contain the word {string}', (expectedWord) => {
    searchPage.getSearchResults(expectedWord)
});

When('I search for {string}', (product) => {
    searchPage.enterSearchTerm(product);
});

Then('the results should contain {string}', (product) => {
    searchPage.getSearchResults(product)
});