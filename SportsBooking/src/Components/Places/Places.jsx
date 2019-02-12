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

                    <div className="card">
                        <img className="card-img-top" src="//placehold.it/720x350" alt="Card image cap" />
                        <div className="card-block">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>

                )
            })
        }
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="card-deck">
                        {places.loading && <div> <h1>Loading.....</h1></div>}
                        {places.items && allPlaces}
                    </div>
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