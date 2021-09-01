import React, { Component } from 'react';
import MenuItem from '../menu-item/menuItem';

class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'Fashion',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ9P0y6m-UeAIbbxiawy6dFzVIijmE42YUFg&usqp=CAU',
                    id: 0,
                    linkUrl: 'Fashion'
                },
                {
                    title: 'Kids',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Vbpqc3onJolOJyxGhlV9of5aHjzK6ga0gw&usqp=CAU',
                    id: 1,
                    linkUrl: ''
                },
                {
                    title: 'Electronics',
                    imageUrl: 'https://i.pinimg.com/originals/fd/56/fe/fd56fe106a889d7842bd4e519a95d5c8.jpg',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'Heath and Wellness',
                    imageUrl: 'https://media.istockphoto.com/photos/woman-shopping-for-health-and-beauty-supplies-picture-id528570142?s=612x612',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'Food and Groceries',
                    imageUrl: 'https://thumbs.dreamstime.com/b/grocery-shopping-african-american-guy-buying-food-supermarket-store-wearing-protective-face-mask-standing-cart-shop-male-201556052.jpg',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'Phone',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaU60uUnTYN-n_qATFGWr50z62Zpgkn-RgRQ&usqp=CAU',
                    id: 5,
                    linkUrl: ''
                }
            ]
        }
    }
    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({title, id, imageUrl, linkUrl}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} linkUrl={linkUrl} />
                ))}

            </div>
        )
    }
}

export default Directory;
