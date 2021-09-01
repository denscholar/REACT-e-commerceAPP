import React, { Component } from 'react'
import PreviewCollection from '../../components/previewCollection/previewCollection';
import SHOP_DATA from '../../shopData';



class ShopPage extends Component {
    constructor(){
        super();
            this.state = {
                collections: SHOP_DATA,
            }

        
    }
    render() {
        const {collections} = this.state;
        
        return (
            (<div className="shop-page">
                {collections.map(({id, title, items}) => (
                 <PreviewCollection key={id} title={title} items={items} />
                ))}
            </div>)
        )
    }
}
export default ShopPage;