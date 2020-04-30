import React, { Component } from "react";

export default class ImageItem extends Component {
    render() {
        return (
            <li>
                <div className='title-container'>
                    <h2>{this.props.animal.title}</h2>
                    <p className='image-type'>{this.props.animal.description}</p>
                </div>

                <div className='image-container'>
                    <img
                    alt={this.props.animal.url}
                    src={this.props.animal.url}/>
                </div>
                <p className='keyword'>{this.props.animal.keyword}</p>
                <p className='num-horns'>{this.props.horns}</p>
            </li>

         );
    }
}

