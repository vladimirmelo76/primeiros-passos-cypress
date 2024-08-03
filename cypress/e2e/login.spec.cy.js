describe('Orange HRM Tests', () => {
  it('Login success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("['name='username']").type('Admin')
    cy.get("['[name='password']").type('admin123')
    cy.get('.oxd-button').click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("['name='username']").type('Teste')
    cy.get("['[name='password']").type('Teste')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content')
  })
})