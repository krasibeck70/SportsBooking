import React from 'react';
import { connect } from 'react-redux';
import './places.css'
import { userActions } from '../../_actions';

class Places extends React.Component {

    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    render() {
        const { user, places } = this.props;
        console.log("PLaces::");
        console.log(this.props);
        var style = {
            "width": "18rem"
        }
        if (places.items) {
            var allPlaces = places.items.map((value, index) => {
                return (
                    <div className="col-lg-3">
                        <div className="card" style={style}>
                            <img className="card-img-top cardImage" src={value.image} alt="Card image cap" />
                            <div className="card-body">
                                <p className="card-text">{value.searchableText}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        return (
            <div className="container">
                <div className="row">
                    {places.loading && <div> <h1>Loading.....</h1></div>}
                    {places.items && allPlaces}
                </div>
            </div>
        );
        // if (places.loading) {
        //     return(null);
        // }else{
        //     


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

const connectedPLaces = connect(mapStateToProps)(Places);
export { connectedPLaces as Places };