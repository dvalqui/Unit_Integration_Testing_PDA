describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })


  //Do the arithmetical operations update the display with the result of the operation
  it('should have the number buttons update the display of the running total', () => {
    cy.get('#number2').click();
    cy.get('+').click();
    cy.get('#number3').click();
    cy.get('=').click();
    cy.get('.display').should('contain', '5')
  })

//Can multiple operations be chained together
it('should have multiple operations chained together', () => {
  cy.get('#number2').click();
  cy.get('+').click();
  cy.get('#number3').click();
  cy.get('=').click();
  cy.get('.display').should('contain', '5')
})

})