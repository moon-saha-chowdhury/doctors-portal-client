import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import loginBg from '../../images/loginBg.png';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();


const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const handleGoogleSignIn = () => {
        //sign in with pop up google sign in
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                console.log(result.user);
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser);
                storeAuthToken();
            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
               
                // ...
            });
    }

    //Storing ID token
    const storeAuthToken =()=>{
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            console.log(idToken);
            sessionStorage.setItem("token", idToken);
            history.replace(from);
          }).catch(function(error) {
            // Handle error
          });
    }
    return (
        <div className="login-page container">
        <div className="row align-items-center" style={{ height: "100vh" }}>
          <div className="col-md-6 shadow p-5">
            <div className="form-group">
              <label htmlFor="">User Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="" className="text-danger">Forgot your password?</label>
            </div>
            <div className="from-group mt-5">
              <button className="btn btn-info text-white" onClick={handleGoogleSignIn}>Google Sign in</button>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block align-self-end">
            <img className="img-fluid" src={loginBg} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Login;