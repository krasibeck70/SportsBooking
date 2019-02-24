import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../_actions';
import { Loading } from '../Loading';

class HomePage extends React.Component {
    constructor(){
        super();
        this.state = {
            loading: true
        }
    }
    componentWillMount(){
        setTimeout(() =>{this.setState({loading:false});},500)
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, places } = this.props;
        var loading = this.state.loading;
        return (
            
            <div className="col-md-6 col-md-offset-3">
            {loading && <div> <Loading></Loading> </div>}
                <h1>Hi {user.firstName}!</h1>
                <p>You're member of SportsBooking</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { places, authentication } = state;
    const { user } = authentication;
    return {
        user,
        places
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };