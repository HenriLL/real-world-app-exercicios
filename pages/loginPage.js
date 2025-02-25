class LoginPage {

    selectorsList () {
        const selectors = {
        signUpButton : "[href='/signup']",
        signUpLastName : "[name='lastName']",
        signUPFirstNameText: "#firstName-helper-text",    
        signUpUserName : "[name='username']",
        signUpLastNameText: "#lastName-helper-text",
        signUpPassword: "[name='password']",
        signUpUserNameText: "#username-helper-text",
        signUpConfirmPassword: "#confirmPassword",  
        signUpFirstName: "[name='firstName']",  
        signUpConfirmPasswordText: "#confirmPassword-helper-text",

        signInUserName: "[type='text']",
        signInPassword: "[type='password']",
        signInButton: "[type='submit']",

        bankName: "[name='bankName']",
        routingNumber: "[name='routingNumber']",
        accountNumber: "[name='accountNumber']",
        bankAccountButton: "[data-test='bankaccount-submit']",
        onboardNextButton: "[data-test='user-onboarding-next']",
        }
        return selectors
    }

    registerWithEmpityUser () {
        cy.get(this.selectorsList().signUpButton).click()
        cy.location('pathname').should('eq', '/signup')
        cy.get(this.selectorsList().signUpLastName).click()
        cy.get(this.selectorsList().signUPFirstNameText).contains('First Name is required')
        cy.get(this.selectorsList().signUpUserName).click()
        cy.get(this.selectorsList().signUpLastNameText).contains('Last Name is required')
        cy.get(this.selectorsList().signUpPassword).click()
        cy.get(this.selectorsList().signUpUserNameText).contains('Username is required')
        cy.get(this.selectorsList().signUpConfirmPassword).click()
        cy.get(this.selectorsList().signUpFirstName).click()
        cy.get(this.selectorsList().signUpConfirmPasswordText).contains('Confirm your password')
    }

    registerWithValidyUser () {
        cy.get("[href='/signup']").click()
        cy.location('pathname').should('eq', '/signup')
        cy.get(this.selectorsList().signUpFirstName).type('First')
        cy.get(this.selectorsList().signUpLastName).type('Last')
        cy.get(this.selectorsList().signUpUserName).type('Username')
        cy.get(this.selectorsList().signUpPassword).type('12345')
        cy.get(this.selectorsList().signUpConfirmPassword).type('12345')
        cy.get("[type='submit']").click({force: true})
        cy.location('pathname').should('eq', '/signin')
    }

    loginWithInvalidUser () {
        cy.get(this.selectorsList().signUpUserName).type('UserName')
        cy.get(this.selectorsList().signUpPassword).type('123456')
        cy.get(this.selectorsList().signInButton).click()
        cy.get('body').should('contain', 'Username or password is invalid')
        cy.visit('http://localhost:3000/signin')
    }

    loginWithValidUser () {
        cy.get(this.selectorsList().signInUserName).type('Username')
        cy.get(this.selectorsList().signInPassword).type('12345')
        cy.get(this.selectorsList().signInButton).click()
        cy.get('body').should('contain', "Get Started with Real World App")
        cy.get('body').should('contain', 'Username')
        cy.get("[data-test='user-onboarding-next']").click()
        cy.get('body').should('contain', "Create Bank Account")
    }

    loginDataUser () {
        cy.get(this.selectorsList().signInUserName).type('Heath93')
        cy.get(this.selectorsList().signInPassword).type('s3cret')
        cy.get(this.selectorsList().signInButton).click()
    }

    loginWithValidUserFillData () {
        cy.get(this.selectorsList().bankName).type('Bankc')
        cy.get(this.selectorsList().routingNumber).type(123456789)
        cy.get(this.selectorsList().accountNumber).type(987654321)
        cy.get(this.selectorsList().bankAccountButton).click()
        cy.get(this.selectorsList().onboardNextButton).click()
    }
   
}

export default LoginPage