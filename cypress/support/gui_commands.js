Cypress.Commands.add('login', (nome, senha) => {
    cy.get('input[formcontrolname="userName"]').type(nome);
    cy.get('input[formcontrolname="password"]').type(senha, {log: false}); // log:false para não mostrar dado na execução do teste
    cy.get('button[type="submit"]').click();
})

Cypress.Commands.add('register', (nome) => {
    cy.contains('a', 'Register now').click(); 
    cy.get('input[formcontrolname="fullName"]').type(nome);
    cy.contains('button', 'Register').click();
})