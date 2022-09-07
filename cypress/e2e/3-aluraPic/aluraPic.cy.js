const { it } = require("mocha");

//suite de casos
describe( 'Usabilidade de tela inicial', () => {

    //antes de cada teste
   beforeEach(() => {
      cy.visit('/');
   })

   it('Verifica mensagens tela inicial', () => {
      cy.contains('ap-vmessage', 'User name is required').should('be.visible')
      cy.contains('ap-vmessage', 'Password is required').should('be.visible')
      cy.get('button[type="submit"]').should('be.disabled')
   })

   it('Verifica botao habilitado na tela inicial', () => {
      cy.get('input[formcontrolname="userName"]').type('ana');
      cy.get('input[formcontrolname="password"]').type('123');
      cy.get('button[type="submit"]').should('be.enabled')
   })

   it('Verifica o nome da aplicaçao na tela inicial', () => {
      cy.contains('a',' ALURAPIC ').should('be.visible')
   })

   it('Verifica menu clicavel na tela inicial', () => {
      cy.get('.navbar-brand > .fa').click()
      cy.get('.menu-bar > .fa').should('be.visible')
   })


})