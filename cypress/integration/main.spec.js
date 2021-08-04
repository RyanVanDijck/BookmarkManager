describe('Tests for main page', () => {
    it('Initial Check', () => {
        cy.visit('/')
        cy.get('#submit').click()
    })

    it('will have a text box and submit button', () => {
        cy.get('#enterBookmark').should('exist')
        cy.get('#submitBookmark').should('exist')
    })

    it('will store this bookmark on the page', () => {
        cy.task("taskTruncateTables")
        cy.task("taskCreateTable")
        cy.task("taskCreateTable")
        cy.task("taskCreateTable")
        cy.task("taskUpdateTable")
        cy.get('#bookmark').should('exist')
    })
})