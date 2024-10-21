describe('GoogleSearchTest1', () => {
  // Before all tests, visit the initial page

  
  before(() => {
      // Visit the URL
      cy.visit('https://antonbuivol22.thkit.ee/phplehti//content/andmebaas/TheFinalProj/ControllPage.php');
  });

  // 1. Title Verification Test
  it('should verify page title', () => {
      cy.title().should('eq', 'SetupPage');
  });

  // 2. Login Test
  it('should perform login', () => {
      // Click the login button
      cy.get('#login').click();

      // Fill in the login form
      cy.get('input[name="login"]').type('admin');
      cy.get('input[name="pass"]').type('admin');

      // Submit the form
      cy.get('input[name="Log"]').click();

      // Verify the URL after login
      cy.url().should('eq', 'https://antonbuivol22.thkit.ee/phplehti//content/andmebaas/TheFinalProj/AdminLeht.php');
  });

  // 3. Page Navigation Test
  it('should navigate to another page from the menu', () => {
      // Click on the navigation menu item with text 'Kasutaja'
      cy.contains('a', 'Kasutaja').click();

      // Verify the URL after the click
      cy.url().should('eq', 'https://antonbuivol22.thkit.ee/phplehti//content/andmebaas/TheFinalProj/haldusleht.php');
  });

  // 4. Element Interaction Test
  it('should interact with a form element', () => {

      // Type into the input field
      cy.get('#kirjeldusKas').type('test');

      // Click the submit button
      cy.get('input[name="SalvestaTellimus"]').click();
  });
});
