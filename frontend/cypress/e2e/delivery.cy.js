describe('login page', () => {
  it('should render the main image', () => {
    cy.visit('http://localhost:5173/inscription')
    const buttonLogin = ".button-form"
    const inputSelector = '.input-form'
    const spanError = '.span-error'
    cy.get(buttonLogin).click()
    cy.get(spanError).should('be.visible').then(($span) => {
      // Replace these with the expected error messages for email and password
      const expectedEmailErrorMessage = 'Email cannot be empty';
      const expectedPasswordErrorMessage = 'Password cannot be empty';

      // Check the content of the error messages based on the span text
      if ($span.text().includes(expectedEmailErrorMessage)) {
        cy.log('Email error message is visible');
        // The email error message is visible
        // You can add more specific assertions or actions here if needed
      } else if ($span.text().includes(expectedPasswordErrorMessage)) {
        cy.log('Password error message is visible');
        // The password error message is visible
        // You can add more specific assertions or actions here if needed
      } else {
        // Handle unexpected error message or provide additional checks
        throw new Error('Unexpected error message');
      }
    });

  })
})