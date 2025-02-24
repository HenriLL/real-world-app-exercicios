import LoginPage from "../../pages/loginPage";
import DashBoardPage from "../../pages/dashBoard";

const loginPage = new LoginPage()
const dashBoardPage = new DashBoardPage()


describe.only('Visualizar histórico de transações com sucesso', () => {
  it('Deve exibir o histórico de transações de um usuário corretamente', () => {
    cy.visit('http://localhost:3000/')
    loginPage.loginDataUser()
    cy.get("[href='/personal']").click()
    //.TransactionTitle-titleAction
  });
});

describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
  it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
    cy.visit('http://localhost:3000/')

    cy.get("[href='/personal']").click()
    cy.get('body').should('contain', 'No Transactions')
  });
});