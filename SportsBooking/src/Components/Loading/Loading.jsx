import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import $ from 'jquery'
import './Loading.css';

class Loading extends React.Component {

    // componentDidMount() {
    //     console.log("navbar");
    //     console.log(location);
    //     var id = "#" + location.pathname.replace('/', '');
    //     console.log(id)
    //     if (id == '#login' || id == '#register') {
    //         $('#nav').hide();
    //     } else {
    //         $('#nav').show();
    //     }
    //     $(id).addClass('active');
    //     $(id).parent().parent().addClass('activeLi')

    // }
    render() {
        const { user } = this.props;
        return (
            <div className="loading">
                <h1>
                    Loading...
                </h1>
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

const connectedPLaces = connect(mapStateToProps)(Loading);
export { connectedPLaces as Loading };