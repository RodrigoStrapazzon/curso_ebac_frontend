describe("Teste de funcionalidade para agenda de contatos", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Deve incluir informações no formulário", () => {
    cy.get('input[type="text"]').type("Rodrigo Strapazzon");
    cy.get('input[type="email"]').type("abc.ab@gmail.com");
    cy.get('input[type="tel"]').type("11912345678");
    cy.contains("Adicionar").click();
  });

  it("Deve alterar a informação da lista", () => {
    cy.get(":nth-child(2) > .sc-gueYoa > .edit").click();
    cy.get('input[type="text"]').clear().type("Marcelo Souza");
    cy.get('input[type="email"]').clear().type("mmarcelo@ebac.com.br");
    cy.get('input[type="tel"]').clear().type("11912345678");
    cy.get(".alterar").click();
  });
  // -- TESTE DE REMOÇÃO
  it("Deve remover um contato da lista", () => {
    cy.get(":nth-child(3) > .sc-gueYoa > .delete").click();
  });
});
