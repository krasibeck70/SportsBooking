import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect,Router } from 'react-router-dom'
import { history } from '../../_helpers';
import $ from 'jquery'
import './Navbar.css'
import { userActions } from '../../_actions';
import IconSVG from 'react-svg'
import Item from './Items';

class Navbar extends React.Component {
    constructor(){
        super();
    }
    componentDidMount(){
        console.log("navbar");
        console.log(location);
        var id = "#" + location.pathname.replace('/','');
        console.log(id)
        $(id).addClass('active');
        $(id).parent().parent().addClass('activeLi')
        
    }
    // onClick(e) {
        
    //     $('.active').removeClass('active');
    //     $(e).addClass('active');
        
    // }
    render() {
        const { user } = this.props;
        console.log("render");
        
        return (
            <div>
                {!user && <Router history={history}><Redirect to="/login"/></Router>}
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        {/* <div className="navbar-header">
                            <a className="navbar-brand" href="/"></a>
                        </div> */}
                        <div className="collapse navbar-collapse navbar-ex1-collapse">
                            <ul className="nav navbar-nav">
                                <li><a href="/home"><IconSVG id="home" onClick={() => {this.onClick("#calendar")}} className="iconStadium" src="../../../public/calendar.svg"></IconSVG></a><span>calendar</span></li>
                                <li><a href="/payments"><IconSVG id="payments" onClick={() => {this.onClick("#card")}} className="iconStadium" src="../../../public/credit-card.svg"></IconSVG></a>payments</li>
                                <li><a href="/places"><IconSVG id="places" onClick={() => {this.onClick("#stadium")}}className="iconStadium" src="../../../public/soccer-field.svg"></IconSVG></a>places</li>
                                <li><a href="/players"><IconSVG id="players" onClick={() => {this.onClick("#users")}} className="iconStadium" src="../../../public/multiple-users-silhouette.svg"></IconSVG></a>players</li>
                                <li><a href="/user"><IconSVG id="user" onClick={() => {this.onClick("#user")}} className="iconStadium" src="../../../public/user.svg"></IconSVG></a>user</li>
                            </ul>
                            {/* {!user && <div>
                                {/* <li><a href="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                                <li><a href="/login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li> */}
                            {/* </div>} */} 
                            {/* {user && <div className="pull-right">
                                <li><a href="/login"><span className="glyphicon glyphicon-log-in"></span> Logout</a></li>
                            </div>} */}
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

