describe('Enviar dinheiro com saldo suficiente', () => {
  it('Deve enviar dinheiro com sucesso', () => {
    cy.visit('https://example.cypress.io')
  });
});

describe('Enviar dinheiro com saldo insuficiente', () => {
  it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
    cy.visit('https://example.cypress.io')
  });
});