class MenuPage {

 selectorList() {
  const selectors = {
    sigupAccount: "[data-test='signup']",
    firstName: "#firstName",
    lastName: "#lastName",
    confirmPass: "#confirmPassword",
    signupSubmit: "[data-test='signup-submit']",
    usernamePlace:"#username",
    passwordPlace: "#password",
    signinButton: "[data-test='signin-submit']",
    check: "[type='checkbox']",
    Transacao: "[href='/transaction/new']",
    UserTranfer: '[data-test="user-list-item-GjWovtg2hr"]',
    valor: "#amount",
    Enviado: "[placeholder='Add a note']",
    Pay: "[data-test='transaction-create-submit-payment']",
    Request: '[data-test="transaction-create-submit-request"]',
    HomeMenu: "[data-test='sidenav-home']",
    MineButton: "[data-test='nav-personal-tab']"
}
return selectors
}
urlPage() {
    cy.visit('/signin');
 }
moneyPass(firstname, lastname, username, password, confirmpassword, valor, note,) {
    cy.get(this.selectorList().sigupAccount).click()
    cy.get(this.selectorList().firstName).type(firstname)
    cy.get(this.selectorList().lastName).type(lastname)
    cy.get(this.selectorList().usernamePlace).type(username)
    cy.get(this.selectorList().passwordPlace).type(password)
    cy.get(this.selectorList().confirmPass).type(confirmpassword)
    cy.get(this.selectorList().signupSubmit).click()
    cy.get(this.selectorList().usernamePlace).type(username)
    cy.get(this.selectorList().passwordPlace).type(password)
    cy.get(this.selectorList().check).click()
    cy.get(this.selectorList().signinButton).click()
    cy.get(this.selectorList().Transacao).click()
    cy.get(this.selectorList().UserTranfer).click({force: true})
    cy.get(this.selectorList().valor).type(valor)
    cy.get(this.selectorList().Enviado).type(note)
    cy.get(this.selectorList().Pay).click()
}
moneyRequest(firstname, lastname, username, password, confirmpassword, valor, note,){
    cy.get(this.selectorList().sigupAccount).click()
    cy.get(this.selectorList().firstName).type(firstname)
    cy.get(this.selectorList().lastName).type(lastname)
    cy.get(this.selectorList().usernamePlace).type(username)
    cy.get(this.selectorList().passwordPlace).type(password)
    cy.get(this.selectorList().confirmPass).type(confirmpassword)
    cy.get(this.selectorList().signupSubmit).click()
    cy.get(this.selectorList().usernamePlace).type(username)
    cy.get(this.selectorList().passwordPlace).type(password)
    cy.get(this.selectorList().check).click()
    cy.get(this.selectorList().signinButton).click()
    cy.get(this.selectorList().Transacao).click()
    cy.get(this.selectorList().UserTranfer).click({force: true})
    cy.get(this.selectorList().valor).type(valor)
    cy.get(this.selectorList().Enviado).type(note)
    cy.get(this.selectorList().Request).click()
}
moneyMineFull(firstname, lastname, username, password, confirmpassword){
    cy.get(this.selectorList().sigupAccount).click()
    cy.get(this.selectorList().firstName).type(firstname)
    cy.get(this.selectorList().lastName).type(lastname)
    cy.get(this.selectorList().usernamePlace).type(username)
    cy.get(this.selectorList().passwordPlace).type(password)
    cy.get(this.selectorList().confirmPass).type(confirmpassword)
    cy.get(this.selectorList().signupSubmit).click()
    cy.get(this.selectorList().usernamePlace).type(username)
    cy.get(this.selectorList().passwordPlace).type(password)
    cy.get(this.selectorList().check).click()
    cy.get(this.selectorList().signinButton).click()
    cy.get(this.selectorList().HomeMenu).click()
    cy.get(this.selectorList().MineButton).click()
}
moneyMineSemi(firstname, lastname, username, password, confirmpassword) {
    cy.get(this.selectorList().sigupAccount).click()
    cy.get(this.selectorList().firstName).type(firstname)
    cy.get(this.selectorList().lastName).type(lastname)
    cy.get(this.selectorList().usernamePlace).type(username)
    cy.get(this.selectorList().passwordPlace).type(password)
    cy.get(this.selectorList().confirmPass).type(confirmpassword)
    cy.get(this.selectorList().signupSubmit).click()
    cy.get(this.selectorList().usernamePlace).type(username)
    cy.get(this.selectorList().passwordPlace).type(password)
    cy.get(this.selectorList().check).click()
    cy.get(this.selectorList().signinButton).click()
    cy.get(this.selectorList().HomeMenu).click()
    cy.get(this.selectorList().MineButton).click()
}
}

export default MenuPage