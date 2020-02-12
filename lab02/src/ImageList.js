import React, { Component } from "react";
import ImageItem from './ImageItem.js';
import images from './data.js';
 
export default class ImageList extends Component {
    state = { selected: null };
    render() {
        const mappedImages = images.filter (image => {
            if(!this.state.selected) return true;

            return image.keyword === this.state.selected;
        })
        .map(image => <ImageItem animal={image}/>);
    
        const handleChange = e => {
            this.setState({ selected: e.target.value});
        };

        return (
            <div>
                
                <ul>{mappedImages}</ul>
            </div>
        );
    }
}
