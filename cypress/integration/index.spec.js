describe('Homepage', () => {
    it('Heading Loads', () => {
        cy.visit('/')
        cy.get('#heading').should('contain', 'Bookmark Manager')
    })
})