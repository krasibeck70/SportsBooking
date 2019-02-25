import React from 'react';
import { connect } from 'react-redux';
import './places.css'
import { userActions } from '../../_actions';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Loading } from '../Loading';
import IconSVG from 'react-svg'
import $ from 'jquery'


class Places extends React.Component {
    constructor(){
        super();
        this.areaPrivate = this.areaPrivate.bind(this);
        this.areaPublic = this.areaPublic.bind(this);
        this.search = this.search.bind(this);
    }
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }
    areaPrivate(e){
        var button = $('.private')
        var color = button.css('background-color');
        if (color.includes('145')) {
            button.css('background-color','rgb(29, 185, 85)')    
        }else{
            button.css('background-color','rgb(145, 150, 168)')   
        }
        
    }
    areaPublic(e){
        var button = $('.public')
        var color = button.css('background-color');
        if (color.includes('145')) {
            button.css('background-color','rgb(29, 185, 85)')    
        }else{
            button.css('background-color','rgb(145, 150, 168)')   
        }
    }
    search(){
        var text = $('.search').val();
        var { places } = this.props;
        console.log("krasi");
        places.items.map((value,index) => {
            if (value.searchableText.includes(text)) {
                var id = "#"  + value.id
            }else{
                $(id).hide();
            }
        })
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
                var style = {
                    'backgroundImage': 'url("' + value.image + ")"
                }
                return (
                    <div className="col-lg-4">
                        <div id={value.id} className='jumbotron' style={style}></div>
                    </div>
                )
            })
        }
        return (
            <div className="container-fluid">
                <div>
                    <input type="text" className="form-control search" placeholder="Search" onChange={this.search}></input>
                    <IconSVG className="searchIcon" src="../../../public/musica-searcher.svg"></IconSVG>
                    <button className="btn private" onClick={this.areaPrivate}>Private</button>
                    <button className="btn public" onClick={this.areaPublic}>Public</button>
                </div>

                <div className="row">
                    {/* <div> <Loading></Loading></div> */}
                    {places.loading && <div> <Loading></Loading></div>}
                    {places.items && allPlaces}
                </div>
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

const connectedPLaces = connect(mapStateToProps)(Places);
export { connectedPLaces as Places };