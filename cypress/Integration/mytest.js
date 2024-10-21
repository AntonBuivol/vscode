// cypress/integration/GoogleSearchTest1.spec.js

/// <reference types="cypress" />

describe('GoogleSearchTest1', () => {
    before(() => {
        // Runs once before all tests
        cy.visit('https://antonbuivol22.thkit.ee/phplehti//content/andmebaas/TheFinalProj/ControllPage.php');
    });

    it('Accept Cookies if prompted', () => {
        // Check if the cookies button exists and click it
        cy.get('#echo1').then(($button) => {
            if ($button.is(':visible')) {
                cy.wrap($button).click();
            }
        });
    });

    it('Verify Page Title', () => {
        // Navigate to the URL and verify the page title
        cy.visit('https://antonbuivol22.thkit.ee/phplehti//content/andmebaas/TheFinalProj/ControllPage.php');
        cy.title().should('eq', 'SetupPage');
    });

    it('Interact with an Element', () => {
        // Navigate to the URL, find an input, enter text, and submit the form
        cy.visit('https://antonbuivol22.thkit.ee/phplehti//content/andmebaas/TheFinalProj/haldusleht.php');
        cy.get('#kirjeldusKas').type('test');
        cy.get('[name="SalvestaTellimus"]').click();
    });

    it('Verify Page URL', () => {
        // Navigate to the page and verify the URL
        cy.visit('https://antonbuivol22.thkit.ee/phplehti//content/andmebaas/TheFinalProj/haldusleht.php');
        cy.url().should('eq', 'https://antonbuivol22.thkit.ee/phplehti//content/andmebaas/TheFinalProj/haldusleht.php');
    });
});
