import LoginPage from "../../pages/loginPage";
import DashBoardPage from "../../pages/dashBoard"

const loginPage = new LoginPage()
const dashBoardPage = new DashBoardPage()

describe.only('Enviar dinheiro com saldo suficiente', () => {
  it('Deve enviar dinheiro com sucesso', () => {
    cy.visit('http://localhost:3000/signin')
    loginPage.loginDataUser()
    dashBoardPage.balancePositiveTransaction()
  });
});

describe('Enviar dinheiro com saldo insuficiente', () => {
  it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
    cy.visit('http://localhost:3000/signin')
    loginPage.loginDataUser()
    dashBoardPage.balancePositiveTransaction()

  });
});