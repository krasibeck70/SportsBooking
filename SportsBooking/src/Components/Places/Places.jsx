import React from 'react';
import { connect } from 'react-redux';
import './places.css'
import { userActions } from '../../_actions';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Loading } from '../Loading';


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
                    <Card className="col-lg-3 customCard">
                        <CardImg src={value.image} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>{value.name}</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <div>
                                <CardText className="cardBody">{value.searchableText.slice(0, 100)} ...</CardText>
                            </div>
                        </CardBody>
                        <button className="buttonCard btn btn">Show More</button>
                    </Card>

                )
            })
        }
        return (
            <div className="container-fluid">
                <div className="row">
                {/* <div> <Loading></Loading></div> */}
                    {places.loading && <div> <Loading></Loading></div>}
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