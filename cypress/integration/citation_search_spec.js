describe('My First Test', function() {
  it('Visits the Kitchen Sink', function() {
    cy.visit('http://pubsweetdemo.europepmc.org:3000/login')
    cy.get('input[name="username"]').type(Cypress.env('username'))
    cy.get('input[name="password"]').type(Cypress.env('password'))
    cy.get('button[type="submit"]').click()
    cy.contains('Submit a new manuscript').click()

    for (let i = 0; i < 2; i += 1) {
	  cy.get('input[name="Search"]').clear()
	  cy.get('input[name="Search"]').type('blood')
	  cy.get('button[type="submit"]').click()
	  cy.get('form ~ div > div').parent().find('div').its('length').should('be.gt', 10)    	
	}
  })
})