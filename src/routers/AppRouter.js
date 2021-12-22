import React, { Fragment } from 'react';
import JournalScreen from '../components/journal/JournalScreen';
import AuthRouter from './AuthRouter';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

const AppRouter = () => {
    return (
        <Fragment>
            <Router>
                <div>
                    <Switch>
                        <Route path="/auth" component={AuthRouter}/>
                        <Route exact path="/" component={JournalScreen} />
                        <Redirect to="/auth/login" />
                    </Switch>
                </div>
            </Router>
        </Fragment>
    )
}

export default AppRouter