describe("Change Of Focus Window", () => {
    beforeEach(() => cy.visit("mudancadefoco/janela"));
   
    it("Opens on a new tab", () => {
        cy.contains("Clique aqui").invoke("attr", "target")
            .should("be.eq", "_blank");
    });
});