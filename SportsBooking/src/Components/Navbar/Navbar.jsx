import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../_actions';

class Navbar extends React.Component {
    render() {
        const { user, location } = this.props;
        console.log("user");
        console.log(localStorage)
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">WebSiteName</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><Link to="/" activeClassName="active">Home</Link> </li>
                            <li><Link to="/places" activeClassName="active">Places</Link> </li>
                            <li><Link to="/places" activeClassName="active">Maps</Link> </li>
                        </ul>
                        {!user && <ul className="nav navbar-nav navbar-right">
                            <li><a href="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                            <li><a href="/login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                        </ul>}
                        {user && <ul className="nav navbar-nav navbar-right">
                            <li><a href="/login"><span className="glyphicon glyphicon-log-in"></span> Logout</a></li>
                        </ul>}
                    </div>
                </nav>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(Navbar);
export { connectedHomePage as Navbar };

