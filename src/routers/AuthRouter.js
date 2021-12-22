import React, { Fragment } from 'react';
import LoginScreen from '../components/auth/LoginScreen';
import RegisterScreen from '../components/auth/RegisterScreen';
import {
    BrowserRouter as
    Switch,
    Route,
    Redirect,
} from "react-router-dom";


const AuthRouter = () => {
    return (
        <Fragment>
            <div>
                <Switch>
                    <Route exact path="/auth/login" component={LoginScreen} />
                    <Route exact path="/auth/register" component={RegisterScreen} />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Fragment>
    )
}

export default AuthRouter