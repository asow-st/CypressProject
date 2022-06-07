///<reference types="cypress"/>

beforeEach(() => {


    cy.visit('https://maax.com/where-to-buy')

    // accept cookies 
    cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }).should('be.visible').get('#onetrust-accept-btn-handler').click()
    cy.get('.mapboxgl-ctrl-geocoder--input').should('be.enabled')

    // Uncaught errors

    cy.on('uncaught:exception', (e, runnable) => {
        return false



    })


})



it('Find store by a  valid street address  ', () => {


    cy.get('.mapboxgl-ctrl-geocoder--input', { timeout: 10000 }).type('123 main street{enter}')


    cy.get('.suggestions', { timeout: 10000 }).should('not.include.text', 'No results found')



})


it('Find store by a valid postal code  ', () => {
    cy.get('.mapboxgl-ctrl-geocoder--input', { timeout: 10000 }).type('e1c3v5{enter}')


    cy.get('.suggestions', { timeout: 10000 }).should('not.include.text', 'No results found')


})



it('Find  store by an invalid street address  ', () => {

    cy.get('.mapboxgl-ctrl-geocoder--input', { timeout: 10000 }).type('.......{enter}')


    cy.get('.suggestions', { timeout: 10000 }).should('include.text', 'No results found')


})



it('Find store by using Get My Location  ', () => {

    cy.get('.row > :nth-child(3) > .btn').click()


})
