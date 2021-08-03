describe('Tests for main page', () => {
    it('Initial Check', () => {
        cy.visit('/')
        cy.get('#submit').click()
        cy.get('#bookmark').should('contain', 'google.co.uk')
    })
})