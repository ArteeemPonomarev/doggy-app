import React from 'react';
import logo from './dog.jpg'


class CircleItem extends React.Component{



    onDogCircleClick = () => {
        if (this.props.randomNum === this.props.id) {
            this.props.onClickFunc();
        }
    }

    render = () => {

        const classForDog = this.props.randomNum === this.props.id ? 'photo show' : 'photo';

        return (
            <div className='item'
                 onClick={this.onDogCircleClick}>
                <img className={classForDog} src={logo}  alt='dog'/>
            </div>
        )
    }
}

export default CircleItem;