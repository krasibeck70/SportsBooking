import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import $ from 'jquery'

class User extends React.Component {
    constructor(){
        super();
        this.logout = this.logout.bind(this);
    }
    componentDidMount() {
        console.log("navbar");
        console.log(location);
        var id = "#" + location.pathname.replace('/', '');
        console.log(id)
        if (id == '#login' || id == '#register') {
            $('#nav').hide();
        } else {
            $('#nav').show();
        }
        $(id).addClass('active');
        $(id).parent().parent().addClass('activeLi')
    }
    logout() {
        userActions.logout();
        $('#nav').hide();
    }
    render() {
        const { user } = this.props;
        return (
            <div className="container text-center">
                <button onClick={this.logout} className="btn btn-danger">Logout</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    return {
        user
    };
}

const connectedPLaces = connect(mapStateToProps)(User);
export { connectedPLaces as User };