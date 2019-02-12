import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Navbar.css'
import { userActions } from '../../_actions';
import IconSVG from 'react-svg'
import Item from './Items';

class Navbar extends React.Component {
    constructor(){
        super();
    }
    onClick(e) {
        console.log(e);
        var elements = docume
    }
    render() {
        const { user, location } = this.props;
        console.log("user");
        console.log(history)
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        {/* <div className="navbar-header">
                            <a className="navbar-brand" href="/"></a>
                        </div> */}
                        <div className="collapse navbar-collapse navbar-ex1-collapse">
                            <ul className="nav navbar-nav">
                                <li><a><IconSVG id="calendar" onClick={() => {this.onClick("calendar")}} className=" active iconStadium" src="../../../public/calendar.svg"></IconSVG></a></li>
                                <li><a><IconSVG id="card" onClick={() => {this.onClick("card")}} className="iconStadium" src="../../../public/credit-card.svg"></IconSVG></a></li>
                                <li><a><IconSVG id="stadium" onClick={() => {this.onClick("stadium")}}className="iconStadium" src="../../../public/soccer-field.svg"></IconSVG></a></li>
                                <li><a><IconSVG id="users" onClick={() => {this.onClick("users")}} className="iconStadium" src="../../../public/multiple-users-silhouette.svg"></IconSVG></a></li>
                                <li><a><IconSVG id="user" onClick={() => {this.onClick("user")}} className="iconStadium" src="../../../public/user.svg"></IconSVG></a></li>
                            </ul>
                            {!user && <div>
                                {/* <li><a href="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                                <li><a href="/login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li> */}
                            </div>}
                            {user && <div className="pull-right">
                                <li><a href="/login"><span className="glyphicon glyphicon-log-in"></span> Logout</a></li>
                            </div>}
                        </div>

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

