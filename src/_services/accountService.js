import { BehaviorSubject } from 'rxjs';
import { authenticate } from '../_helpers/apiCaller'

const accountSubject = new BehaviorSubject(null);

const accountService = {
    login,
    apiAuthenticate,
} 
export default accountService;

async function apiAuthenticate(accessToken) {
    // authenticate with the api using a facebook access token,
    // on success the api returns an account object with a JWT auth token
    const response = await authenticate(accessToken);
    const account = response.data;
    accountSubject.next(account);
    startAuthenticateTimer();
    return account;
}

async function login() {
    // login with facebook then authenticate with the API to get a JWT auth token
    const { authResponse } = await new Promise(window.FB.login);
    if (!authResponse) return;

    await apiAuthenticate(authResponse.accessToken);
    /* TODO
    // get return url from location state or default to home page
    const { from } = history.location.state || { from: { pathname: "/" } };
    history.push(from); */
}

// timeout for JWT token

let authenticateTimeout;

function startAuthenticateTimer() {
    // parse json object from base64 encoded jwt token
    const jwtToken = JSON.parse(atob(accountSubject.value.token.split('.')[1]));

    // set a timeout to re-authenticate with the api one minute before the token expires
    const expires = new Date(jwtToken.exp * 1000);
    const timeout = expires.getTime() - Date.now() - (60 * 1000);
    const { accessToken } = window.FB.getAuthResponse();
    authenticateTimeout = setTimeout(() => apiAuthenticate(accessToken), timeout);
}

function stopAuthenticateTimer() {
    // cancel timer for re-authenticating with the api
    clearTimeout(authenticateTimeout);
}