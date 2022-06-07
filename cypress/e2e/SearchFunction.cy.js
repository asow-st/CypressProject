///<reference types="cypress"/>

beforeEach(() => {

    cy.visit('http://www.maax.com/')

    // accept cookies 
    cy.get('#onetrust-accept-btn-handler').click()

    // Uncaught errors

    cy.on('uncaught:exception', (e, runnable) => {
        return false

        cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }).should('be.visible').get('#onetrust-accept-btn-handler').click()


        cy.get('.search-input').should('be.visible')


    })


})



it('Search for a valid product   ', () => {



    cy.get('.search-input').type('door{enter}', { waitForAnimations: false })

    cy.get('.react-tabs__tab--selected', { timeout: 10000 }).should('include.text', 'Product(s)')




})

it('Search for an invalid product  ', () => {


    cy.get('.search-input').type('milk{enter}', { waitForAnimations: false })

    cy.get('.message', { timeout: 10000 }).should('include.text', 'No search results for')


})
