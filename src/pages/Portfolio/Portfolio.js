import React, {Component} from 'react';
import Carousel from '../../components/Carousel';
import Projects from '../../projects.json';
import Solo from '../../solo.json';
import './Portfolio.css'


class Portfolio extends Component {
    state = {
        // Collaborative Project States
        project: {},
        currentNumber: 0,
        length: Projects.length,

        // Solo Project States
        solo: {},
        soloNumber: 0,
        soloLength: Solo.length
    }

    componentDidMount(){
        this.setState({
            project: Projects[this.state.currentNumber],
            solo: Solo[this.state.soloNumber]
        })
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

    incrementSolo () {
        if (this.state.soloNumber < this.state.soloLength - 1) {
            console.log(this.state.soloNumber)
            this.setState({
                soloNumber: this.state.soloNumber + 1,
                solo: Solo[this.state.soloNumber + 1]
            })
        } else {
            console.log('reset')
            this.setState({
                soloNumber: 0,
                project: Solo[0]
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

    decrementSolo () {
        if (this.state.soloNumber === 0) {
            this.setState({
                soloNumber: this.state.soloLength - 1,
                solo: Projects[this.state.soloLength - 1]
            })
        } else {
            this.setState({
                soloNumber: this.state.soloNumber - 1,
                solo: Solo[this.state.soloNumber -1]
            })
        }
    }
    render() {
        return (
            <section className='container'>
                <div className='row'>
                    <div className='col-xs-1 col-sm-1'>
                        <button onClick={this.decrementClick.bind(this)} className='btn btnPosition'>
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </button>
                    </div>
                    
                    <div className='col-xs-10 col-sm-10 text-center'>
                        <h1>Collaborative Projects</h1>
                        <Carousel 
                        url={this.state.project.url}
                        gif={this.state.project.gif}
                        github={this.state.project.github}
                        name={this.state.project.name}
                        description={this.state.project.description}
                        />
                    </div>

                    <div className='col-xs-1 col-sm-1'>
                        <button onClick={this.incrementClick.bind(this)} className='btn btnPosition'>
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </button>
                    </div>
                </div>
                
                
                <br /> <br />

                <div className='row'>
                    <div className='col-xs col-sm-1'>
                        <button onClick={this.decrementSolo.bind(this)} className='btn btnPosition'>
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </button>
                    </div>
                    
                    <div className='col-xs col-sm-10 text-center'>
                        <h1>Solo Projects</h1>
                        <Carousel 
                        url={this.state.solo.url}
                        gif={this.state.solo.gif}
                        github={this.state.solo.github}
                        name={this.state.solo.name}
                        description={this.state.solo.description}
                        />
                    </div>

                    <div className='col-xs col-sm-1'>
                        <button onClick={this.incrementSolo.bind(this)} className='btn btnPosition'>
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </button>
                    </div>
                </div>
                <br /><br />
                
                
                
            </section>          
        )
    }



}




export default Portfolio;