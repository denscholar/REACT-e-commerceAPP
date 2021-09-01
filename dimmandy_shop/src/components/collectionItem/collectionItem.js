import './collectionItem.css'

const CollectionItem = ({ id, name, imageUrl, price }) => {
    return (
        <div className="collection-item">
            <div style={{
                backgroundImage: `url(${imageUrl})`,
            }} className="image" />
            <div className="collection-footer">
                <p className="name">{name}</p>
                <p className="price">N{price}</p>
            </div>
            <button>Add to Cart</button>
        </div>
        
    );
}

export default CollectionItem;