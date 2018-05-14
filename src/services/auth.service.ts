import firebase from 'firebase';

export class AuthService {
    userRegister(mail: string, pw: string) {
        return firebase.auth().createUserWithEmailAndPassword(mail, pw);
    }

    userLogin(mail: string, pw: string) {
        return firebase.auth().signInWithEmailAndPassword(mail, pw);
    }

    userLogout() {
        return firebase.auth().signOut();
    }
} 