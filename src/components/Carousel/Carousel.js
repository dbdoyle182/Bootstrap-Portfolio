import React from 'react';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import './Carousel.css';

const Carousel = props => (


    <section className='container'>
        <Card>   
            <CardMedia
            overlay={<CardTitle title={props.name} subtitle={props.description} />}
            >
            <img src={props.gif} alt={props.name}/>
            </CardMedia>
            <a href={props.url} target='_blank' rel="noopener noreferrer"><button className='btn carouselBtn'>{props.name} Application</button></a>
            <a href={props.github} target='_blank' rel="noopener noreferrer"><button className='btn carouselBtn'>{props.name} Github</button></a>
        </Card>
    </section>
);

export default Carousel;