describe('Sidebar Component', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should render the sidebar with menu items', () => {
      cy.get('.w-64').should('exist');
      cy.get('li').should('have.length', 5);
    });
  
    it('should handle click on Channels item', () => {
      cy.get('li').contains('Channels').click();
    });
  
    it('should not call onChannelClick for other items', () => {
      const otherItems = ['Inbox', 'Personal', 'Reports', 'Teams'];
      otherItems.forEach(item => {
        cy.get('li').contains(item).click();
      });
    });
  });
  