import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import $ from 'jquery'
import './Loading.css';

class Loading extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentImageCount: 1,
            intervalId: ''
        }
        this.changeNumber = this.changeNumber.bind(this);
    }
    componentDidMount() {
        this.intervalId = setInterval(this.changeNumber, 100);
        //this.setState({ intervalId: intervalId });
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    changeNumber() {
        var currentState = this.state.currentImageCount;
        if (currentState === 4) {
            this.setState({ currentImageCount: 1});
        }else{
            this.setState({ currentImageCount: currentState + 1 });
        }
        
        if (this.props.loading) {
            clearInterval(this.intervalId);
        }
        
    }

    render() {
        const { user } = this.props;
        var src = '../../../public/logo' + this.state.currentImageCount + '.png' 
        return (
            <div className="loading">
                <img id="1" className="showLogo" src={src}></img>
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