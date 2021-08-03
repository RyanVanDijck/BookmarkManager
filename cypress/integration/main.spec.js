describe('Tests for main page', () => {
    it('Initial Check', () => {
        cy.visit()
        cy.get('#bookmark').should('contain', 'google.co.uk')
    })
})