import {AuthenticationService} from "../services/authenticationService.js";

const authService = new AuthenticationService();

const buildContext = async (req) => {
    let authToken = null;
    let currentUser = null;

    try {
        authToken = req.header("Authorization");

        if (authToken) {
            currentUser = await authService.tradeTokenForUser(authToken);
        }
    } catch (e) {
        console.warn(`Unable to authenticate using auth token: ${authToken}`);
    }

    return {
        authToken,
        currentUser,
    };
}

export {buildContext};