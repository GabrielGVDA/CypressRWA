class LoginPage {

    selectorList()  {
        const selectors = {
            usernamePlace:"#username",
            passwordPlace: "#password",
            signinButton: "[data-test='signin-submit']",
            check: "[type='checkbox']",
            submitButton: "[type='submit']",
            alertMensg: "[role='alert']",
            sigupAccount: "[data-test='signup']",
            firstName: "#firstName",
            lastName: "#lastName",
            confirmPass: "#confirmPassword",
            signupSubmit: "[data-test='signup-submit']",
            errorText: "#confirmPassword-helper-text"

        }
        return selectors
    }
    urlPage() {
        cy.visit('/signin');
    }
    loginUserSuccess(username, password) {
     cy.get(this.selectorList().usernamePlace).type(username)
     cy.get(this.selectorList().passwordPlace).type(password)
     cy.get(this.selectorList().check).click()
     cy.get(this.selectorList().signinButton).click()
    }

    loginUserFail(username, password) {
     cy.get(this.selectorList().usernamePlace).type(username)   
     cy.get(this.selectorList().passwordPlace).type(password)
     cy.get(this.selectorList().check).click()
     cy.get(this.selectorList().submitButton).click()
     cy.get(this.selectorList().alertMensg)
    }
    
    registerUserSuccess(firstName, lastname, username, password, confirmpassword) {
     cy.get(this.selectorList().sigupAccount).click()
     cy.get(this.selectorList().firstName).type(firstName)
     cy.get(this.selectorList().lastName).type(lastname)
     cy.get(this.selectorList().usernamePlace).type(username)
     cy.get(this.selectorList().passwordPlace).type(password)
     cy.get(this.selectorList().confirmPass).type(confirmpassword)
     cy.get(this.selectorList().signupSubmit).click()
    }

    registerUserFail(firstname, lastname, username, password, confirmpassword) {
     cy.get(this.selectorList().sigupAccount).click()
     cy.get(this.selectorList().firstName).type(firstname)
     cy.get(this.selectorList().lastName).type(lastname)
     cy.get(this.selectorList().usernamePlace).type(username)
     cy.get(this.selectorList().passwordPlace).type(password)
     cy.get(this.selectorList().confirmPass).type(confirmpassword)
     cy.get(this.selectorList().errorText)
    }
}

export default LoginPage