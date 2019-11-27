// import { LoginManager } from "react-native-fbsdk";
// import SplashScreen from 'react-native-splash-screen';

class Bootstrap {
    init() {
        return new Promise((resolve, reject) => {
            global.db.init().then((res) => {
                global.phplogin.init();
                resolve("initialized");
                this.splashHide();
            }).catch((err) => {
                reject(err);
                this.splashHide();
            });
        });
    }

    splashHide() {
        setTimeout(() => {
            // SplashScreen.hide();
        }, 1000);
    }

    async logout() {
        // LoginManager.logOut();
        return await global.phplogin.logout();
    }
}

var bootstrap = new Bootstrap();
global.bootstrap = bootstrap;
export var bootstrap;
