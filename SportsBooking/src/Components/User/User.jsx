import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';

class User extends React.Component {

    render() {
        const { user } = this.props;
        return(
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