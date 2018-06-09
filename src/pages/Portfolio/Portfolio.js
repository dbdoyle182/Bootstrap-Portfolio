import React, {Component} from 'react';
import Carousel from '../../components/Carousel';
import Projects from '../../projects.json';
import Solo from '../../solo.json';
import './Portfolio.css'


class Portfolio extends Component {
    state = {
        //Project States
        project: {},
        currentNumber: 0,
        length: Projects.length
    }
    
    showProject() {
        console.log(this.state.project)
    }

    componentDidMount(){
        this.setState({
            project: Projects[this.state.currentNumber],
            solo: Solo[this.state.soloNumber]
        })

        this.showProject();
    }

    incrementClick () {
        if (this.state.currentNumber < this.state.length - 1) {
            this.setState({
                currentNumber: this.state.currentNumber + 1,
                project: Projects[this.state.currentNumber + 1]
            })
        } else {
            this.setState({
                currentNumber: 0,
                project: Projects[0]
            })
            
        }
    }

    decrementClick () {
        if (this.state.currentNumber === 0) {
            this.setState({
                currentNumber: this.state.length - 1,
                project: Projects[this.state.length - 1]
            })
        } else {
            this.setState({
                currentNumber: this.state.currentNumber - 1,
                project: Projects[this.state.currentNumber -1]
            })
        }
    }

    render() {
        return (
            <section className='container'>
            <h1 className='title text-center mt-3'>
                {!this.state.project.client ? <p>
                    <span onClick={this.decrementClick.bind(this)} className="prevarrow mr-2 carousel-control-prev-icon" aria-hidden="true">
                        <span className="tooltipprev">
                        Previous
                        </span>
                    </span>
                        Personal Projects
                    <span onClick={this.incrementClick.bind(this)} className="nextarrow ml-2 carousel-control-next-icon" aria-hidden="true">
                        <span className="tooltipnext">
                        Next
                        </span>
                    </span>
            </p> : <p>Client Work for {this.state.project.clientname}</p>}
                
            </h1>
                <div className='row mt-3'>
                
                    <div className='col-md-12 text-center'>
                        <Carousel 
                        url={this.state.project.url}
                        gif={this.state.project.gif}
                        github={this.state.project.github}
                        name={this.state.project.name}
                        description={this.state.project.description}
                        technologies={this.state.project.technologies}
                        />
                    </div>

                </div>
                <br />
                          
                
               
            </section>          
        )
    }



}




export default Portfolio;