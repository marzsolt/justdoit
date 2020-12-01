import accountService from '../_services/accountService';

export function initFacebookSDK() {
    return new Promise(resolve => {
        // wait for facebook sdk to initialize before starting the react app
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: 754742985120688,  // const facebookAppId = .....; appId:facebookAppId, TODO: move to env
                cookie: true,
                xfbml: true,
                version: 'v9.0'
            });
            
            // auto authenticate with the api if already logged in with facebook
            window.FB.getLoginStatus(({ authResponse }) => {
                if (authResponse) accountService.apiAuthenticate(authResponse.accessToken).then(resolve);
                else resolve();
            });
        };

        // load facebook sdk script via jQuery
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

    });
}
export default initFacebookSDK;