import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import $ from 'jquery'

class User extends React.Component {

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
    render() {
        const { user } = this.props;
        return (
            <div className="container text-center">
                <a href="/login" className="btn btn-danger">Logout</a>
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