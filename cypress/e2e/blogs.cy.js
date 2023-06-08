// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })
describe('blogs',()=>{
  it('user can login',()=>{
      // login
      cy.visit('localhost:3000/login') //visit root of our app
      cy.findByRole('textbox', { name: /login/i }).type('johndoe');
      cy.findByLabelText(/password/i).type('password');
      cy.findByRole('button', { name: /login/i }).click();
      //Should be able to view all the blogs
  })
})
