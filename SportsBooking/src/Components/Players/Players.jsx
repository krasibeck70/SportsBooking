import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';

class Players extends React.Component {

    render() {
        const { user } = this.props;
        return(
            <div className="container text-center">
                <div><h1><b>Players</b></h1></div>
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

const connectedPLaces = connect(mapStateToProps)(Players);
export { connectedPLaces as Players };