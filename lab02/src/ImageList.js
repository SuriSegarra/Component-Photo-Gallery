import React, { Component } from "react";
import ImageItem from './ImageItem.js';
import images from './data.js';
 
export default class ImageList extends Component {
    state = { selected: null };
    render() {

        const mappedImages = images.filter (image => {
            if(!this.state.selected) return true;
            console.log(image.horns)
            return image.horns == this.state.selected;
            
        })
        .map(image => {
           
            return <ImageItem animal={image}/>
        });
    
        const handleChange = e => {
            this.setState({ selected: e.target.value});
        };

        return (
            <div>
                <main>
                    <section className='options'>
                        <select className='horns-filter'onChange={handleChange}>
                            <option value='defaultValue'>
                            Number Of Horns
                            </option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='100'>100</option>
                         </select>
                     </section>

                         <section className='list-section'>
                            <ul className='animals'>{mappedImages}</ul>

                        </section>
                 </main>
             </div>
        );
    }
}
