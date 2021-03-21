import Page from './page';

class ProfilePage extends Page {
    isOpen(){
        expect(browser).toHaveUrlContaining('/profile/')
    }
}

export default new ProfilePage();