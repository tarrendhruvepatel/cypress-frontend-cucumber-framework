class HomePage {
    constructor() {
        this.homeUrl = 'https://www.news.co.uk/';
        this.homeAcceptCookies = 'button[title="I Agree"]';
    };

    vist() {
        cy.visit(this.homeUrl);
    };

    acceptCookiePolicy() {
        cy.get('iframe').then((iframes) => {
            const desiredIframe = iframes.eq(0);
            cy.wrap(desiredIframe).then(($iframe) => {
                const iframeDocument = $iframe.contents().find('body');
                cy.wrap(iframeDocument).find(this.homeAcceptCookies).should('be.visible').click();
            });
        });
    };
};

export default HomePage;