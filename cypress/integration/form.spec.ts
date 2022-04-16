/// <reference types="cypress" />

describe('form', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.intercept({
      method: 'GET',
      url: 'https://restcountries.com/v3.1/all',
    }).as('dataGetFirst')
    cy.wait('@dataGetFirst')
  })
  it('should type in the country name field', () => {
    const value = 'Sweden'
    cy.findByText(/search for a country/i).click()
    cy.findByRole('textbox', {
      name: /search for a country/i,
    }).type(value)
    cy.findByRole('textbox', {
      name: /search for a country/i,
    }).should('have.value', value)
  })
  it('should type in the amount field', () => {
    const value = '1000'
    cy.findByText(/amount in sek/i).click()
    cy.findByRole('textbox', {
      name: /amount in sek/i,
    }).type(value)
    cy.findByRole('textbox', {
      name: /amount in sek/i,
    }).should('have.value', value)
  })
  it('should found the country', () => {
    const country = 'Sweden'
    cy.findByText(/search for a country/i).click()
    cy.findByRole('textbox', {
      name: /search for a country/i,
    }).type(country)
    cy.findByRole('cell', { name: /Kingdom of Sweden/i }).should('be.visible')
  })
  it('should convert the amount to the local currency', () => {
    const country = 'Sweden'
    const value = '1000'
    cy.findByText(/search for a country/i).click()
    cy.findByRole('textbox', {
      name: /search for a country/i,
    }).type(country)
    cy.findByText(/amount in sek/i).click()
    cy.findByRole('textbox', {
      name: /amount in sek/i,
    }).type(value)
    cy.findByRole('cell', {
      name: /1000/i,
    }).should('be.visible')
  })
})
