class SearchPage {
    constructor() {
        this.searchBar = '#txtMainSearch';
        this.searchButton = '.button';
        this.searchResult = '.search-term';
    };

    enterSearchTerm(searchTerm) {
        cy.get(this.searchBar).type(searchTerm);
    };

    clickSearchButton() {
        cy.get(this.searchButton).eq(0).click();
    };

    getSearchResults() {
        cy.get(this.searchResult).should('be.visible');
    };

    expectSearchResult(expectedWord) {
        cy.get(this.searchResult).contains(expectedWord)
    };
};

export default SearchPage;