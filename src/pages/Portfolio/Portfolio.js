import React, {Component} from 'react';
import Carousel from '../../components/Carousel';
import Projects from '../../projects.json';
import Solo from '../../solo.json';


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
            this.setState({
                soloNumber: this.state.soloNumber + 1,
                solo: Solo[this.state.soloNumber + 1]
            })
        } else {
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
            <div>
                <h1>Collaborative Projects</h1>
                <Carousel 
                url={this.state.project.url}
                gif={this.state.project.gif}
                github={this.state.project.github}
                name={this.state.project.name}
                description={this.state.project.description}
                />
                <button onClick={this.decrementClick.bind(this)}>Previous</button>
                <button onClick={this.incrementClick.bind(this)}>Next</button>
                <br /> <br />
                <h1>Solo Projects</h1>
                <Carousel 
                url={this.state.solo.url}
                gif={this.state.solo.gif}
                github={this.state.solo.github}
                name={this.state.solo.name}
                description={this.state.solo.description}
                />
                <button onClick={this.decrementSolo.bind(this)}>Previous</button>
                <button onClick={this.incrementSolo.bind(this)}>Next</button>
            </div>          
        )
    }



}


export default Portfolio;