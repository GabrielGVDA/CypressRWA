
import userLogin from '../fixtures/userLogin.json'
import loginPage from '../paginas/loginPage.js'
import MenuPage from '../paginas/menuPage.js'
const menuPage = new MenuPage
const LoginPage = new loginPage
describe('Exercises1',  () => {
  
  it('Deve fazer login com um usuário válido', () => {
    LoginPage.urlPage()
    LoginPage.loginUserSuccess(userLogin.userSuccess.username, userLogin.userSuccess.password)
  })
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    LoginPage.urlPage()
    LoginPage.loginUserFail(userLogin.userFail.username, userLogin.userFail.password)
  })
  it('Login - Register Success', () => {
    LoginPage.urlPage()
    LoginPage.registerUserSuccess(userLogin.registerSuccess.firstName, userLogin.registerSuccess.lastName, userLogin.registerSuccess.username, userLogin.registerSuccess.password, userLogin.registerSuccess.confirmPassword)
  })
  it('Login - Register Fail', () => {
    LoginPage.urlPage()
    LoginPage.registerUserFail(userLogin.registerFail.firstName, userLogin.registerFail.lastName, userLogin.registerFail.username, userLogin.registerFail.password, userLogin.registerFail.confirmPassword)
  })
})
describe('Exercise2', () => {
  it('Deve enviar dinheiro com sucesso', () => {
     menuPage.urlPage() 
     menuPage.moneyPass(userLogin.moneyTransf.firstName, userLogin.moneyTransf.lastName,userLogin.moneyTransf.username, userLogin.moneyTransf.password, userLogin.moneyTransf.confirmPassword ,userLogin.moneyTransf.valor, userLogin.moneyTransf.note)
    })
     it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {  
    menuPage.urlPage()
    menuPage.moneyRequest(userLogin.moneyReq.firstName, userLogin.moneyReq.lastName, userLogin.moneyReq.username, userLogin.moneyReq.password, userLogin.moneyReq.confirmPassword, userLogin.moneyReq.valor, userLogin.moneyReq.note)
  })
 })
 describe('Exercise3', () => {
  it('Deve exibir o histórico de transações de um usuário corretamente', () => {
    menuPage.urlPage()
    menuPage.moneyMineFull(userLogin.MineSuccess.firstName, userLogin.MineSuccess.lastName, userLogin.MineSuccess.username, userLogin.MineSuccess.password, userLogin.MineSuccess.confirmPassword)
  });
  it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
    menuPage.urlPage()
    menuPage.moneyMineSemi(userLogin.MineFail.firstName, userLogin.MineFail.lastName, userLogin.MineFail.username, userLogin.MineFail.password, userLogin.MineFail.confirmPassword)
  });
})