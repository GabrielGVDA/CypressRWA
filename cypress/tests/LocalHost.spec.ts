
describe('Registro de novo usuário com sucesso', () => {
        it('Deve registrar um novo usuário com informações válidas', () => {
            cy.visit('http://localhost:3000/signin')
            cy.get('[data-test="signup"]').click()
            cy.get('#firstName').type('Hugo')
            cy.get('#lastName').type('Santos')
            cy.get('#username').type('Hirafune')
            cy.get('#password').type('coxinha123')
            cy.get('#confirmPassword').type('coxinha123')
            cy.get('[data-test="signup-submit"]').click() 
}) 
        it('Deve registrar um novo usuário com informações inválidas', () => {
            cy.visit('http://localhost:3000/signin')
            cy.get('[data-test="signup"]').click()
            cy.get('#firstName').type('Hugo')
            cy.get('#lastName').type('Santos')
            cy.get('#username').type('Hirafune')
            cy.get('#password').type('coxinha123')
            cy.get('#confirmPassword').type('coxinha321')
            cy.get('#confirmPassword-helper-text') 
})
describe('Usuario com sucesso', () => {
        it('login - success', () => {
            cy.visit('http://localhost:3000/signin')
            cy.get('#username').type('Hirafune')
            cy.get('#password').type('coxinha123')
            cy.get('.PrivateSwitchBase-input').click()
            cy.get('[data-test="signin-submit"]').click()
})
        it('login - Fail', () => {
           cy.visit('http://localhost:3000/signin')
           cy.get('#username').type('Tater')
           cy.get('#password').type('coxinha321')
           cy.get('[data-test="signin-submit"]').click()
           cy.get('[data-test="signin-error"]')
})
describe('Enviar dinheiro com saldo suficiente', () => {
        it('Deve enviar dinheiro com sucesso', () => {
            cy.visit('http://localhost:3000')
            cy.get('#username').type('Hirafune')
            cy.get('#password').type('coxinha123')
            cy.get('.PrivateSwitchBase-input').click()
            cy.get('[data-test="signin-submit"]').click()
            cy.visit('http://localhost:3000') 
            cy.get('[data-test="nav-top-new-transaction"]').click()
            cy.get('[data-test="user-list-item-uBmeaz5pX"] > .MuiListItemText-root > .MuiTypography-body1').click()
            cy.get('#amount').type('390000')
            cy.get('#transaction-create-description-input').type('eu sou lindo')
            cy.get('[data-test="transaction-create-form"] > .MuiGrid-container > :nth-child(2)').click()
          
        });
        it('Deve receber dinheiro com sucesso', () => {
            cy.visit('http://localhost:3000')
            cy.get('#username').type('Hirafune')
            cy.get('#password').type('coxinha123')
            cy.get('.PrivateSwitchBase-input').click()
            cy.get('[data-test="signin-submit"]').click()
            cy.visit('http://localhost:3000') 
            cy.get('[data-test="nav-top-new-transaction"]').click()
            cy.get('[data-test="user-list-item-uBmeaz5pX"] > .MuiListItemText-root > .MuiTypography-body1').click()
            cy.get('#amount').type('390000')
            cy.get('#transaction-create-description-input').type('Hirafune')
            cy.get('[data-test="transaction-create-form"] > .MuiGrid-container > :nth-child(1)').click()
        })
describe('Visualizar histórico de transações com sucesso', () => {
        it('Deve exibir o histórico de transações de um usuário corretamente', () => {
     // Implemente os passos do caso de teste aqui
          cy.visit('http://localhost:3000')
          cy.get('#username').type('Hirafune')
          cy.get('#password').type('coxinha123')
          cy.get('.PrivateSwitchBase-input').click()
          cy.get('[data-test="signin-submit"]').click()
          cy.visit('http://localhost:3000') 
          cy.get('[data-test="nav-top-new-transaction"]').click()
          cy.get('[data-test="user-list-item-uBmeaz5pX"] > .MuiListItemText-root > .MuiTypography-body1').click()
          cy.get('#amount').type('39.00000')
          cy.get('#transaction-create-description-input').type('asdasdasd')
          cy.get('[data-test="transaction-create-submit-request"]').click()
          cy.get('[data-test="sidenav-home"]').click()
          cy.get('[data-test="nav-personal-tab"]').click() 
          cy.get('[data-test="nav-personal-tab"]').click()
         
      });
      it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
    // Implemente os passos do caso de teste aqui
        cy.visit('http://localhost:3000/signin')
        cy.get('[data-test="signup"]').click()
        cy.get('#firstName').type('Cristiano')
        cy.get('#lastName').type('Ronaldo')
        cy.get('#username').type('Zahando')
        cy.get('#password').type('686411042006abc')
        cy.get('#confirmPassword').type('686411042006abc')
        cy.get('[data-test="signup-submit"]') 
        cy.visit('http://localhost:3000')
        cy.get('#username').type('Zahando')
        cy.get('#password').type('686411042006abc')
        cy.get('.PrivateSwitchBase-input').click()
        cy.get('[data-test="signin-submit"]').click()
        cy.visit('http://localhost:3000') 
        cy.get('[data-test="nav-personal-tab"]').click()
          
      });
  });

});
        





































    });
  });