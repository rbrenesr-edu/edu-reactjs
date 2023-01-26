import { logoutFirebase, registerUserWithEmailPassword, signInWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./";

export const checkingAuthentication = (email, password) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
    };
};

export const startGoogleSignIn = (email, password) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();
        
        if (!result.ok) {
            return dispatch(logout(result.errorMessage));
        }

        dispatch(login(result));
    };
};


export const startCreatingUserWithMailPassword = ({ email, password, displayName }) => {
    return async(dispatch) => {

        dispatch(checkingCredentials());

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });

        if (!ok) {
            return dispatch(logout({ errorMessage }));
        }
        dispatch(login({ uid, displayName, photoURL, email }));
    };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async(dispatch) => {

        dispatch(checkingCredentials());
        const { ok, uid, photoURL, errorMessage, displayName } = await signInWithEmailPassword({ email, password });

        if (!ok) {
            return dispatch(logout({ errorMessage }));
        }
        dispatch(login({ uid, displayName, photoURL, email }));
    };
}



export const startLogoutFirebase = () => {
    return async(dispatch) => {
    
        await logoutFirebase();
        dispatch(logout());
    };
}