import React from 'react';
import { connect } from 'react-redux';
import './places.css'
import { userActions } from '../../_actions';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


class Places extends React.Component {

    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    render() {
        const { user, places } = this.props;
        console.log("PLaces::");
        console.log(places);
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
                            <CardText className="cardBody">{value.searchableText.slice(0,100)} ...</CardText>
                            
                        </CardBody>
                        <Button className="buttonCard">Show More</Button>
                    </Card>
                )
            })
        }
        return (
            <div className="container">
                {places.loading && <div> <h1>Loading.....</h1></div>}
                {places.items && allPlaces}
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