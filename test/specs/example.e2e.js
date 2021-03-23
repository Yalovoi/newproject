import LoginPage from  '../pageobjects/login.page';
import ProfilePage from  '../pageobjects/profile.page';
describe('Auth', () => {
    it('user logs in with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin('xiligap274@heroulo.com');
        LoginPage.setPassword('123456789');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });
});
