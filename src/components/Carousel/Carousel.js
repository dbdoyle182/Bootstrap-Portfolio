import React, { Component } from 'react';
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
            <div className='row'>
                <div className='col-md-7'>
                    <img className="carouselGif" src={this.props.gif} alt={this.props.name} />
            
                </div>
                <div className='col-md-5'>
                    <p className="descriptionTags">{this.props.description}</p>
                    <h6 className="descriptionTags">{this.props.name} was build with:</h6>
                    <ul>
                        {this.props.technologies ? this.props.technologies.map(tech => <li key={tech} className="techitem">{tech}</li>) : null}
                    </ul>
                    
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-md-6'>
                    <a href={this.props.url} target='_blank' rel="noopener noreferrer"><button className='btn carouselBtn btn-secondary'>Visit Site!</button></a>
                </div>
                <div className='col-md-6'>
                    <a href={this.props.github} target='_blank' rel="noopener noreferrer"><button className='btn carouselBtn btn-secondary'>See the code!</button></a>
                </div>
            </div>
            
            
            
        </section>
        )
    }
};

export default Carousel;
