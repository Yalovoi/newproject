import LoginPage from  '../pageobjects/login.page';
import ProfilePage from  '../pageobjects/profile.page';
describe('Auth', () => {
    beforeEach( () => {
        LoginPage.open();
    });

    afterEach( () => {
        browser.execute('window.LocalStorage.clear()')
    });

    it('user logs in with valid data', () => {
        LoginPage.setLogin('xiligap274@heroulo.com');
        LoginPage.setPassword('123456789');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });

    it('submit button is disable if login and password are absent', () => {
        LoginPage.submitButtonIsDisabled();
    });

    it('fails if invalid data provided', () => {
        LoginPage.setLogin('exemple@exemple.com');
        LoginPage.setPassword('123456789');
        LoginPage.clickSubmitButton();
        LoginPage.errorToastAppeared();
    });

    it('login input is required', () => {
        LoginPage.setLogin('example');
        LoginPage.emptyLoginInput();
        LoginPage.loginReqiredError();
    });
});


