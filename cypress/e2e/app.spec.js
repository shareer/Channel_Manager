describe('Channel Manager Application', () => {
    it('should load the application', () => {
      cy.visit('http://localhost:4173');
      cy.get('.w-64').should('exist'); // Check if the sidebar exists
    });
  });
  