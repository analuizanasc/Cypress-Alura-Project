const { it } = require("mocha");

//suite de casos
describe( 'Cadastro de usuarios do alura pic', () => {

    //antes de cada teste
    beforeEach(() => {
        cy.visit('/'); // referencia a baseUrl que está definido no arquivo cypress.config.js - dessa forma fica mais rápido a realização dos testes por não ter que carregar sempre a utrl no início dos testes.
    })

    //caso de teste
    it('verifica mensagens de validacao', () => {
        cy.contains('a', 'Register now').click(); // localizar um elemento na pagina e fazer uma acao. Esse . contains é para identificar elemento.
        cy.contains('button', 'Register').click(); // procura na pag. um botão com Register
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Usuário is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
     })

    //caso de teste
    it('verifica mensagem de email invalido', () => {
        cy.contains('a', 'Register now').click(); 
        cy.contains('button', 'Register').click(); 
        cy.get('input[formcontrolname="email"]').type('ana') // procurar no input o formcontrolname com email
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');      
     }) 

    //caso de teste
    it('verifica mensagem de senha com menos de 8 caracteres', () => {
        cy.contains('a', 'Register now').click(); 
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');      
    })    
    
    it('verifica mensagem de nome de usuario com letras maiusculas', () => {
        cy.contains('a', 'Register now').click(); 
        cy.get('input[formcontrolname="userName"]').type('ANA');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');      
    })

    it('verifica mensagem de nome de usuario já cadastrado', () => {
        cy.contains('a', 'Register now').click(); 
        cy.get('input[formcontrolname="userName"]').type('flavio');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Username already taken').should('be.visible');      
    })

    it('verifica mensagem de validação com campo full name vazio', () => {
        cy.contains('a', 'Register now').click(); 
        cy.get('input[formcontrolname="email"]').type('ana@qa.com');
        cy.get('input[formcontrolname="userName"]').type('ana');
        cy.get('input[formcontrolname="password"]').type('12345678');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');      
    })

    it('verifica mensagem de quantidade mínima de caracteres no full name', () => {
        cy.register('A')
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');      
    })

    //para iterar:
    const users = require('../../fixtures/usuarios.json') //referenciar o arquivo com dados
    //O require é uma forma que foi desenvolvida para Node.JS importar e exportar módulos em uma aplicação. 

    // O comando abaixo indica que o código que estiver dentro da instrução forEach será executado para cada elemento usuario da coleção de dados users.
    users.forEach(usuario => {
        it.only(`registra novo usuário ${usuario.userName}`, () => {
            cy.contains('a', 'Register now').click();
            cy.get('input[formcontrolname="email"]').type(usuario.email);
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
            cy.get('input[formcontrolname="userName"]').type(usuario.userName);
            cy.get('input[formcontrolname="password"]').type(usuario.password);
            cy.contains('button', 'Register').click();
        })
    })
    
})