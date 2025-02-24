class DashBoardPage {

    selectorsList () {
        const selectors = {
        newTransactionButton: "[href='/transaction/new']",
        contactsList: ".MuiListItemText-multiline",
        amountField: "[name='amount']",
        desciptionField: "[placeholder='Add a note']",
        payButton: "[data-test='transaction-create-submit-payment']",
        returnTransationsButton: "[data-test='alert-bar-success']"
        }
        return selectors
    }

    balancePositiveTransaction () {
        cy.get(this.selectorsList().newTransactionButton).click()
        cy.location('pathname').should('eq', '/transaction/new')
        cy.get(this.selectorsList().contactsList).eq(0).click()
        cy.get(this.selectorsList().amountField).type(1500)
        cy.get(this.selectorsList().desciptionField).type('trans')
        cy.get(this.selectorsList().payButton).click()
        cy.get(this.selectorsList().returnTransationsButton).contains('Transaction Submitted!')
        cy.get(this.selectorsList().returnTransationsButton).click()
    }

    balanceNegativeTransaction () {

    }

    
   
}

export default DashBoardPage