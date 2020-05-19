import React from 'react';
import './App.css';
import CircleItem from "./CircleItem";
import dogguv from './dog.mp3';

class App extends React.Component {

    componentDidMount() {
        setInterval(() => {
            this.setState({
                    randomNum: this.getRandomImageIndex()
                }
            );

        }, 1000)
    }

    state = {
        counter: 0,
        randomNum: 0
    }

    audio = new Audio(dogguv);

    onChangeCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
        this.audio.play();
        this.audio.currentTime = 0;
    }

    getRandomImageIndex = () => {
        return Math.floor(Math.random() * 9);
    }


    render = () => {
        const circleAmount = [0, 1, 2, 3, 4, 5, 6, 7, 8];


        let circleItems = circleAmount.map(item => <CircleItem id={item}
                                                               randomNum={this.state.randomNum}
                                                               onClickFunc={this.onChangeCounter}/>)

        return (
            <div className="App">
                <audio src={dogguv}> </audio>
                <div className="wrapper">
                    {circleItems}
                </div>
                <div className='counter'>{this.state.counter}</div>
            </div>
        );
    }
}

export default App;
