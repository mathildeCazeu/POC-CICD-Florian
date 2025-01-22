/// <reference types="cypress" />

describe("TEST LOGIN FORM", () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173')
    })

    it("Should login and redirect to admin page", () => {

        cy.get('[data-cy="admin-link"]').click()
        cy.get('[data-cy="admin-login"]').should("be.visible")

        cy.get('[data-cy="admin-login"').click()

        cy.get('[data-cy="admin-header"]').should('be.visible')

        cy.get('[data-cy="admin-logout"]').click()
        cy.get('[data-cy="home-page"]').should('be.visible')

    })


})