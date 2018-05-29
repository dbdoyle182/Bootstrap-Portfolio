import React, { Component } from 'react';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import './Carousel.css';


class Carousel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toggled: false
        }

        this.onMouseEvent = this.onMouseEvent.bind(this)
    }

    onMouseEvent () {
        this.setState({
            toggled: !this.state.toggled
        })
        console.log(this.state.toggled)
    }


    render() {
        return (
        <section className='container'>
            <Card>   
                <CardMedia
                overlay={<CardTitle title={this.props.name} subtitle={"content"}/>}
                >
                <img src={this.props.gif} alt={this.props.name} onMouseEnter={this.onMouseEvent} onMouseLeave={this.onMouseEvent}/>
                </CardMedia>
                <a href={this.props.url} target='_blank' rel="noopener noreferrer"><button className='btn carouselBtn btn-secondary'>{this.props.name}</button></a>
                <a href={this.props.github} target='_blank' rel="noopener noreferrer"><button className='btn carouselBtn btn-secondary'>{this.props.name} Github</button></a>
            </Card>
        </section>
        )
    }
};

export default Carousel;
