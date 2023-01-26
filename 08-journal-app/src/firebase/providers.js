import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);

        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            //Informacion del usaurio
            displayName,
            email,
            photoURL,
            uid,
        };
    } catch (error) {
        const errorMessage = error.message;

        return {
            ok: false,
            //Informacion del usaurio
            errorMessage,
        };
    }
};

export const registerUserWithEmailPassword = async({ email, password, displayName, }) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);

        const { uid, photoURL } = resp.user;
        //Actualizar el displayName
        await updateProfile(FirebaseAuth.currentUser, { displayName });


        return {
            ok: true,
            uid,
            photoURL,
            email,
            password
        };

    } catch (error) {

        return {
            ok: false,
            errorMessage: error.message,
        };
    }
};




export const signInWithEmailPassword = async({ email, password }) => {
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);

        const { uid, photoURL, displayName } = resp.user;

        return {
            ok: true,
            uid,
            photoURL,
            email,
            password,
            displayName
        };

    } catch (error) {

        return {
            ok: false,
            errorMessage: error.message,
        };
    }
};

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}