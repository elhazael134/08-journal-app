import React, { Fragment } from 'react';
import LoginScreen from '../components/auth/LoginScreen';
import RegisterScreen from '../components/auth/RegisterScreen';
import {
    BrowserRouter as
    Switch,
    Route
} from "react-router-dom";


const AuthRouter = () => {
    return (
        <Fragment>
            <div className='auth__main'>
                <div className='auth__box-container'>
                <Switch>
                    <Route path="/auth/login" component={LoginScreen} />
                    <Route path="/auth/register" component={RegisterScreen} />
                </Switch>
                </div>
            </div>
        </Fragment>
    )
}

export default AuthRouter