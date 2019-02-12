import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import IconSVG from 'react-svg'

class Items extends React.Component {
    constructor(){
        super();
    }
    render() {
        const { user, location } = this.props;
        var src = this.props.src;
        var nameClass = this.props.nameClass;
        console.log("user");
        console.log(history)
        return (
            <li><a><IconSVG className={nameClass} src={src}></IconSVG></a></li>
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

const connectedHomePage = connect(mapStateToProps)(Items);
export { connectedHomePage as Items };

