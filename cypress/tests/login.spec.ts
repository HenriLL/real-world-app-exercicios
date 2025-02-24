import LoginPage from "../../pages/loginPage"

const loginPage = new LoginPage()

describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    cy.visit('http://localhost:3000/signin')
    loginPage.registerWithEmpityUser()
  });
});

describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    cy.visit('http://localhost:3000/signin')
    loginPage.registerWithValidyUser()
  });
});

describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    cy.visit('http://localhost:3000/signin')
    cy.location('pathname').should('eq', '/signin')
    loginPage.loginWithInvalidUser()
  });
});

describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    cy.visit('http://localhost:3000/signin')
    loginPage.loginWithValidUser()
  });
});

