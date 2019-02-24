import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import { Loading } from '../Loading';

class Payments extends React.Component {
    constructor(){
        super();
        this.state = {
            loading: true
        }
    }
    componentWillMount(){
        setTimeout(() =>{this.setState({loading:false});},500)
    }
    render() {
        const { user } = this.props;
        var loading = this.state.loading;
        console.log(loading);
        return (
            <div>
                {loading && <div> <Loading></Loading> </div>}
                <div className="container text-center">
                    <div><h1><b>Payments</b></h1></div>
                </div>
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

const connectedPLaces = connect(mapStateToProps)(Payments);
export { connectedPLaces as Payments };