// Stub é como um mock porém mais simplificado


<reference types="cypress" />
const { it } = require("mocha");

//suite de casos
describe( 'Login de usuarios do alura pic', () => {

    //antes de cada teste
    beforeEach(() => {
        cy.visit('/');
        cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', {
            statusCode: 400
        }).as('stubPost') //o que quer interceptar - método post, e qual o URL que quer interceptar - url, e o que quer de resposta - status code. Depois coloca as. ( como vc quer chamar)       
    })

    it('fazer login com usuário válido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.wait('@stubPost') //para esperar o stubPost
        //cy.contains('a', '(Logout)').should('be.visible')
    })

    it('fazer login com usuário inválido', () => {
        cy.login('ana', '123')
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    })

})