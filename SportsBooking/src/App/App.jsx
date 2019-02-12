import React from 'react';
import { Router, Route, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../Components/HomePage';
import { LoginPage } from '../Components/LoginPage';
import { RegisterPage } from '../Components/RegisterPage';
import { Navbar } from "../Components/Navbar";
import { Places } from '../Components/Places';
import { Payments } from '../Components/Payments';
import { Players } from '../Components/Players';
import { User } from '../Components/User';


class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div>
                <Navbar></Navbar>
                <Router history={history}>
                    <div>
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                        <PrivateRoute exact path="/" component={HomePage} />
                        <PrivateRoute exact path="/home" component={HomePage} />
                        <Route path="/places" component={Places} />
                        <Route path="/payments" component={Payments} />
                        <Route path="/players" component={Players} />
                        <Route path="/user" component={User} />
                    </div>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 