import React from 'react';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import './Carousel.css';

const Carousel = props => (


    <section className='container'>
        <Card className='carouselItem'>   
            <CardMedia
            overlay={<CardTitle title={props.name} subtitle={props.description} />}
            >
            <img src={props.gif} alt="Contech" className='carouselGif' />
            </CardMedia>
            <a href={props.url} target='_blank' rel="noopener noreferrer"><button className='carouselBtn'>Click here to see {props.name} in action!</button></a>
        <a href={props.github} target='_blank' rel="noopener noreferrer"><button className='carouselBtn'>Click here to see the code that made {props.name}!</button></a>
        </Card>
    </section>
);

export default Carousel;
